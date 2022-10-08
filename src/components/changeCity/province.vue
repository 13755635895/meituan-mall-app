<template>
  <div class="">
    <span>按省份选择</span>
    <MSelect className="province" :list="provinceList" title="省份" @change="changeProvince" :showWrapperActive="provinceActive" :value="province" @changeActive="changeProvinceActive"/>
    <MSelect className="city" :list="cityList" title="城市" @change="changeCity" :disabled="cityDisabled" :showWrapperActive="cityActive" :value="city" @changeActive="changeCityActive" />
    <span>直接搜索：</span>
    <el-select
    v-model="searchWord"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in searchList"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import MSelect from './select.vue'
export default {
components:{
    MSelect
},
data(){
    return {
        loading:false,
        searchList:["北京","上海","无锡","广州","长沙","南昌"],
        searchWord:'',
        cityActive:false,
        provinceActive:false,
        province:'省份',
        city:'城市',
        provinceList:[],
        cityList:[],
        cityDisabled:true
    }
},
created(){
this.$api.getProvince().then(res=>{
    console.log(res,'pro')
    this.provinceList = res.data.map(item=>{
        item.name = item.provinceName
        return item
        })
})
},
methods:{
    changeProvinceActive(flag){
        this.provinceActive = flag
        if(flag){
            this.cityActive = false
        }
    },
    changeCityActive(flag){
        this.cityActive = flag
        if(flag){
            this.provinceActive = false
        }
    },
    changeProvince(item){
        this.province = item.name
        this.cityDisabled = false
         this.cityList = item.cityInfoList
    },
    changeCity(item){
        this.city = item.name
        this.$store.dispatch('setPosition',item)
        this.$router.push({name:'/index'})
    },
    //请求后端接口
    remoteMethod(val){

    }
}
}
</script>

<style lang="scss">
@import '@/assets/css/changecity/iselect.scss'
</style>