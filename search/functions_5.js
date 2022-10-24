var searchData=
[
  ['lfu_5fcache_5fpopulate_5fbyte_5fcuda_0',['lfu_cache_populate_byte_cuda',['../group__table-batched-embed-cuda.html#ga2b76a0cf452f00e77696d896d7a402f3',1,'lfu_cache_populate_byte_cuda(at::Tensor weights, at::Tensor cache_hash_size_cumsum, int64_t total_cache_hash_size, at::Tensor cache_index_table_map, at::Tensor weights_offsets, at::Tensor weights_tys, at::Tensor D_offsets, at::Tensor linear_cache_indices, at::Tensor lxu_cache_state, at::Tensor lxu_cache_weights, at::Tensor lfu_state, int64_t row_alignment):&#160;split_embeddings_cache_cuda.cu'],['../group__table-batched-embed-cuda.html#ga2b76a0cf452f00e77696d896d7a402f3',1,'lfu_cache_populate_byte_cuda(Tensor weights, Tensor cache_hash_size_cumsum, int64_t total_cache_hash_size, Tensor cache_index_table_map, Tensor weights_offsets, Tensor weights_tys, Tensor D_offsets, Tensor linear_cache_indices, Tensor lxu_cache_state, Tensor lxu_cache_weights, Tensor lfu_state, int64_t row_alignment):&#160;split_embeddings_cache_cuda.cu']]],
  ['lfu_5fcache_5fpopulate_5fcuda_1',['lfu_cache_populate_cuda',['../group__table-batched-embed-cuda.html#ga854b8951ef7e78da812be97041d7d2dc',1,'lfu_cache_populate_cuda(at::Tensor weights, at::Tensor cache_hash_size_cumsum, int64_t total_cache_hash_size, at::Tensor cache_index_table_map, at::Tensor weights_offsets, at::Tensor D_offsets, at::Tensor linear_cache_indices, at::Tensor lxu_cache_state, at::Tensor lxu_cache_weights, at::Tensor lfu_state, bool stochastic_rounding):&#160;split_embeddings_cache_cuda.cu'],['../group__table-batched-embed-cuda.html#ga854b8951ef7e78da812be97041d7d2dc',1,'lfu_cache_populate_cuda(Tensor weights, Tensor cache_hash_size_cumsum, int64_t total_cache_hash_size, Tensor cache_index_table_map, Tensor weights_offsets, Tensor D_offsets, Tensor linear_cache_indices, Tensor lxu_cache_state, Tensor lxu_cache_weights, Tensor lfu_state, bool stochastic_rounding):&#160;split_embeddings_cache_cuda.cu']]],
  ['linearize_5fcache_5findices_5fcuda_2',['linearize_cache_indices_cuda',['../group__table-batched-embed-cuda.html#ga23e7545e51b296d9b72c86f37c360dc6',1,'linearize_cache_indices_cuda(at::Tensor cache_hash_size_cumsum, at::Tensor indices, at::Tensor offsets):&#160;split_embeddings_cache_cuda.cu'],['../group__table-batched-embed-cuda.html#ga23e7545e51b296d9b72c86f37c360dc6',1,'linearize_cache_indices_cuda(Tensor cache_hash_size_cumsum, Tensor indices, Tensor offsets):&#160;split_embeddings_cache_cuda.cu']]],
  ['lru_5fcache_5ffind_5funcached_5fcuda_3',['lru_cache_find_uncached_cuda',['../group__table-batched-embed-cuda.html#gaea45b1296a83e3a34ddd9934b4f52ff3',1,'lru_cache_find_uncached_cuda(at::Tensor unique_indices, at::Tensor unique_indices_length, int64_t max_indices, at::Tensor lxu_cache_state, int64_t time_stamp, at::Tensor lru_state, bool gather_cache_stats, at::Tensor uvm_cache_stats):&#160;split_embeddings_cache_cuda.cu'],['../group__table-batched-embed-cuda.html#gaea45b1296a83e3a34ddd9934b4f52ff3',1,'lru_cache_find_uncached_cuda(Tensor unique_indices, Tensor unique_indices_length, int64_t max_indices, Tensor lxu_cache_state, int64_t time_stamp, Tensor lru_state, bool gather_cache_stats, Tensor uvm_cache_stats):&#160;split_embeddings_cache_cuda.cu']]],
  ['lru_5fcache_5fpopulate_5fbyte_5fcuda_4',['lru_cache_populate_byte_cuda',['../group__table-batched-embed-cuda.html#ga5958e4cecc978d415714a3dd691fbc11',1,'split_embeddings_cache_cuda.cuh']]],
  ['lru_5fcache_5fpopulate_5fcuda_5',['lru_cache_populate_cuda',['../group__table-batched-embed-cuda.html#gad4d6509a6d55a02ccbe868a8c5407ea5',1,'lru_cache_populate_cuda(at::Tensor weights, at::Tensor hash_size_cumsum, int64_t total_cache_hash_size, at::Tensor cache_index_table_map, at::Tensor weights_offsets, at::Tensor D_offsets, at::Tensor linear_cache_indices, at::Tensor lxu_cache_state, at::Tensor lxu_cache_weights, int64_t time_stamp, at::Tensor lru_state, bool stochastic_rounding):&#160;split_embeddings_cache_cuda.cu'],['../group__table-batched-embed-cuda.html#gad4d6509a6d55a02ccbe868a8c5407ea5',1,'lru_cache_populate_cuda(Tensor weights, Tensor cache_hash_size_cumsum, const int64_t total_cache_hash_size, Tensor cache_index_table_map, Tensor weights_offsets, Tensor D_offsets, Tensor linear_cache_indices, Tensor lxu_cache_state, Tensor lxu_cache_weights, const int64_t time_stamp, Tensor lru_state, const bool stochastic_rounding):&#160;split_embeddings_cache_cuda.cu']]],
  ['lxu_5fcache_5fflush_5fcuda_6',['lxu_cache_flush_cuda',['../group__table-batched-embed-cuda.html#ga2b055aeb5bf2d99bfb4351271764cab1',1,'lxu_cache_flush_cuda(at::Tensor uvm_weights, at::Tensor cache_hash_size_cumsum, at::Tensor cache_index_table_map, at::Tensor weights_offsets, at::Tensor D_offsets, int64_t total_D, at::Tensor lxu_cache_state, at::Tensor lxu_cache_weights, bool stochastic_rounding):&#160;split_embeddings_cache_cuda.cu'],['../group__table-batched-embed-cuda.html#ga2b055aeb5bf2d99bfb4351271764cab1',1,'lxu_cache_flush_cuda(Tensor uvm_weights, Tensor cache_hash_size_cumsum, Tensor cache_index_table_map, Tensor weights_offsets, Tensor D_offsets, int64_t total_D, Tensor lxu_cache_state, Tensor lxu_cache_weights, bool stochastic_rounding):&#160;split_embeddings_cache_cuda.cu']]],
  ['lxu_5fcache_5flookup_5fcuda_7',['lxu_cache_lookup_cuda',['../group__table-batched-embed-cuda.html#ga9ddab183e3247020b3108bfdc7d22cf9',1,'split_embeddings_cache_cuda.cuh']]]
];
