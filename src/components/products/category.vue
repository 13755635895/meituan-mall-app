<template>
  <div class="m-product-categroy">
    <dl class="classic">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd v-for="(item,i) in menuList" :key="item.type"><MSelect :name="item.title" :list="item.subList" /></dd>
    </dl>
     <dl class="classic">
        <dt>区域</dt>
        <dt>全部</dt>
        <dd v-for="(item,i) in areaList" :key="item.type"><MSelect :name="item.title" :list="item.subList" /></dd>
    </dl>
  </div>
</template>

<script>
import MSelect from './select.vue'
export default {
    components:{
        MSelect
    },
  data() {
    return {
      menuList: [
       
      ],
      areaList:[]
    };
  },
  created(){
    this.$api.getProductsCategroy().then(res=>{
        console.log('cate',res)
        this.menuList = res.data
    });
    this.$api.getProductsArea().then(res=>{
        console.log(res)
        console.log('res',JSON.parse(res))
        console.log(typeof(res))
        // this.areaList = JSON.stringify(res).data
        // console.log(this.areaList,'111')
    })
  }
};
</script>

<style>
</style>