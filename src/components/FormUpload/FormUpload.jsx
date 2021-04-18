import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import * as tmImage from '@teachablemachine/image'

import './FormUpload.css'

import uploadImage from '../../assets/uploadImage.svg'

import PredictionResult from '../PredictionResult/PredictionResult.jsx'
import Preview from '../Preview/Preview.jsx'

function FormUpload() {
    const [predictions, setPredictions] = useState([])
    const [file, setFiles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [description, setDescription] = useState({})

    const onDrop = useCallback(async acceptedFiles => {
        try {
            setError(null)
            setLoading(true)
            setPredictions([])
            setDescription({})

            const singleFile = acceptedFiles[0]
            setFiles(Object.assign(singleFile, {preview: URL.createObjectURL(singleFile)}))

            const image = document.getElementById('image')
            const model = await tmImage.load('./model/model.json', './model/metadata.json')
            const prediction = await model.predictTopK(image, 3)

            handleResults(prediction)

            async function handleResults(predictionData) {
                setPredictions(predictionData)
                let breed = predictionData[0].className.replace(/(_)/gi, ' ')
                if (breed === 'Cão Selvagem') {
                    breed = 'Canídeos'
                }
                const wikipediaApiUrl = encodeURI(
                    `https://fr.wikipedia.org/w/api.php?origin=*&action=query&format=json&uselang=pt&prop=extracts&generator=prefixsearch&redirects=1&converttitles=1&formatversion=2&exintro=1&explaintext=1&gpssearch=${breed}`
                )
                try {
                    const response = await fetch(wikipediaApiUrl)
                    const wikipediaPages = await response.json()

                    if (wikipediaPages.query) {
                        let filteredDesc;

                        for (const page of wikipediaPages.query.pages) {
                            if (page.title.toLowerCase().includes(breed) && page.extract.search(/(cão|canina|raça)/g) !== -1) {
                                filteredDesc = page.extract
                                break;
                            } else {
                                filteredDesc = wikipediaPages.query.pages[0].extract
                            }
                        }

                        const wiki = {
                            desc: filteredDesc.substring(0, 400 - 10) + '...',
                            wikiUrl: `https://fr.wikipedia.org/wiki/${breed}`
                        }

                        setDescription(wiki)
                    } else {
                        const wiki = {
                            desc: 'No wikipedia found.',
                            wikiUrl: '',
                            error: true
                        }
                        setDescription(wiki)
                    }

                } catch (error) {
                    console.error(error)
                }
            }
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(err)
            console.error(err)
        }
    }, [])

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject
    } = useDropzone({onDrop, accept: 'image/jpeg, image/png, image/jpg'})

    const renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return (
                <div className="dropContainer">
                    <img src={uploadImage} alt="Illustration upload"/>
                    <h3>Glissez-déposez ou cliquez ici</h3>
                    <small>pour télécharger votre image</small>
                    <p>Aucun fichier sélectionné</p>
                </div>
            )
        }
        if (isDragReject) {
            return (
                <div className="dropContainer dragReject">
                    <h3>Fichier non supporté!</h3>
                </div>
            )
        }

        return (
            <div className="dropContainer dragActive">
                <img src={uploadImage} alt="Illustration upload"/>
                <h3>
                    Relâchez ici</h3>
                <small>
                    pour télécharger votre image</small>
            </div>
        )
    }

    return (
        <div className="content">
            {file.name ? (
                <div className="card">

                    <input {...getInputProps()} />
                    <Preview f={file}/>

                    {!loading && <button {...getRootProps()} className="btn">
                        Essayer une autre image
                    </button>}

                    {error && (
                        <p className="alert is-danger">
                            Erreur lors de l'analyse, voir les logs
                        </p>
                    )}

                    {predictions.length !== 0 && (
                        <PredictionResult
                            predictions={predictions}
                            description={description}
                        />
                    )}
                </div>
            ) : (
                <div className="full-height" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {renderDragMessage(isDragActive, isDragReject)}
                </div>
            )}
        </div>
    )
}

export default FormUpload
