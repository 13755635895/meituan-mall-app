<template>
  <div class="m-menu">
    <dl class="nav"  @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd @mouseenter="menuEnter(item)" v-for="(item,i) in menuList" :key="i"><i :class="item.type" ></i>{{item.name}}<span class="arrow"></span></dd>
    </dl>
    <div class="detail" v-if="currentDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,i) in currentDetail.items">
        <h4 :key="i">{{item.title}}</h4>
        <span v-for="(v,i) in item.items" :key="v + ' ' + i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    currentDetail:null,
      menuList: [],
    };
  },
  created(){
    this.$api.getMenuList().then(res=>{
        // console.log(res,'111')
        this.menuList = res.data
    })
  },
  methods:{
    menuEnter(item){
        // console.log(item,'===')
        this.currentDetail = item
    },
    menuLeave(){
       var self = this;
        this.timer = setTimeout(function(){
            self.currentDetail =null
        },300)
    },
    detailEnter(){
        clearTimeout(this.timer)
    },
    detailLeave(){
        this.currentDetail = null
    }
  }
};
</script>

<style>
</style>