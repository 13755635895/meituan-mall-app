<template>
  <div class="page-changeCity">
    <el-row>
        <Province />
    </el-row>
    <el-row>
        <HotCity title="热门城市:" :list="hotCityLsit"/>
    </el-row>
    <el-row>
         <HotCity title="最近访问:" :list="resentCityLsit"/>
    </el-row>
    <el-row>
        <Categroy />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/province.vue"; 
import HotCity from "@/components/changeCity/hotCity.vue"; 
import Categroy from "@/components/changeCity/categroy.vue"; 
export default {
components:{
    Province,
    HotCity,
    Categroy
},

data(){
    return {
        hotCityLsit:[],
        resentCityLsit:[],
    }
},
created(){
this.$api.getHotCity().then(res=>{
    console.log('res',res)
    this.hotCityLsit = res.data.map((item) =>
        item.name
)
})
this.$api.getRecentCity().then(res=>{
    console.log('res',res)
    this.resentCityLsit = res.data.map((item)=>item.name)
})
},
}
</script>
<style>

</style>