<template>
  <div class="m-header">
    <el-row>
      <TopBar />
    </el-row>
    <el-row>
      <SearchBar />
    </el-row>
  </div>
</template>

<script>
import SearchBar from './searchBar.vue'
import TopBar from './topBar.vue'

export default {
  components: {
    SearchBar,
    TopBar,
  },
};
</script>

<style>
</style>