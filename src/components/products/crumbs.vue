<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="">
  <el-breadcrumb-item>{{$store.state.position.name}}美团</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.params.name}}</el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
export default {
components:{
    
}
}
</script>

<style>

</style>