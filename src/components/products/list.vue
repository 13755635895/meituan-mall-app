<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{ 's-nav-active': item.active }"
      >
        {{ item.name }}
      </li>
    </ul>
    <el-row>
        <ListItem v-for="(item,i) in productList" :key="i" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import ListItem from './listItem.vue'
export default {
    components:{
        ListItem
    },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true,
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false,
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false,
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false,
        },
      ],
      productList: [],
    };
  },
  created(){
    this.$api.getProductsList().then(res=>{
        // console.log('list',res)
        this.productList = res.data
    })
  }
};
</script>

<style>
</style>