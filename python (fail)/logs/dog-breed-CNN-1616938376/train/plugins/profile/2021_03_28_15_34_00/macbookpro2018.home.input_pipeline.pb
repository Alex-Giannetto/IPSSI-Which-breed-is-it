	33333?s@33333?s@!33333?s@	????@??????@??!????@??"e
=type.googleapis.com/tensorflow.profiler.PerGenericStepDetails$33333?s@?I+???A}?5^??s@YP??n???*	     ?g@2U
Iterator::Model::ParallelMapV2??ʡE??!??F}g#G@)??ʡE??1??F}g#G@:Preprocessing2f
/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap?v??/??!~g???Q>@)?v??/??1~g???Q>@:Preprocessing2l
5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat{?G?z??!?????F%@)?? ?rh??1?+??"@:Preprocessing2F
Iterator::Model??|?5^??!+???dK@)????Mb??1??
br!@:Preprocessing2?
OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate[0]::TensorSlice????Mb??!??
br@)????Mb??1??
br@:Preprocessing2x
AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor?~j?t?h?!&W?+???)?~j?t?h?1&W?+???:Preprocessing:?
]Enqueuing data: you may want to combine small input data chunks into fewer but larger chunks.
?Data preprocessing: you may increase num_parallel_calls in <a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#map" target="_blank">Dataset map()</a> or preprocess the data OFFLINE.
?Reading data from files in advance: you may tune parameters in the following tf.data API (<a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#prefetch" target="_blank">prefetch size</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#interleave" target="_blank">interleave cycle_length</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/TFRecordDataset#class_tfrecorddataset" target="_blank">reader buffer_size</a>)
?Reading data from files on demand: you should read data IN ADVANCE using the following tf.data API (<a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#prefetch" target="_blank">prefetch</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#interleave" target="_blank">interleave</a>, <a href="https://www.tensorflow.org/api_docs/python/tf/data/TFRecordDataset#class_tfrecorddataset" target="_blank">reader buffer</a>)
?Other data reading or processing: you may consider using the <a href="https://www.tensorflow.org/programmers_guide/datasets" target="_blank">tf.data API</a> (if you are not using it now)?
:type.googleapis.com/tensorflow.profiler.BottleneckAnalysis?
device?Your program is NOT input-bound because only 0.0% of the total step time sampled is waiting for input. Therefore, you should focus on reducing other time.no*no9????@??I?E??]?X@Zno#You may skip the rest of this page.B?
@type.googleapis.com/tensorflow.profiler.GenericStepTimeBreakdown?
	?I+????I+???!?I+???      ??!       "      ??!       *      ??!       2	}?5^??s@}?5^??s@!}?5^??s@:      ??!       B      ??!       J	P??n???P??n???!P??n???R      ??!       Z	P??n???P??n???!P??n???b      ??!       JCPU_ONLYY????@??b q?E??]?X@