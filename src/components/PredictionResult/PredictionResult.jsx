import React from 'react'
import './PredictionResult.css'

function PredictionResult({predictions, description}) {
    const renderResult = predictions => {
        if (predictions[0].probability > 0.6) {
            return (
                <div className="predictions">
                    <h2 className="predictions-heading">
                        {predictions[0].className.replace(/(_)/gi, ' ').replace('(chien)', '').replace('(Animal)', '')} ({(predictions[0].probability * 100).toFixed(2).replace('.', ',')}{' '}%)
                    </h2>
                    <p className="predictions-description">
                        {!description.error && !description.desc && (
                            <span>Chargement ...</span>
                        )}

                        {!description.error && description.desc && (
                            <>
                                {description.desc}
                                <div>
                                    <br />
                                    En savoir plus sur{' '}
                                    <a href={description.wikiUrl}>{description.wikiUrl}</a>
                                </div>
                            </>
                        )}
                        {description.error && <span>Wikipédia introuvable.</span>}
                    </p>
                </div>
            )
        } else {
            return (
                <p className="alert is-warning">
                    Le chien n'a pas pu être identifié sur cette image
                </p>
            )
        }
    }

    return renderResult(predictions)
}

export default PredictionResult
