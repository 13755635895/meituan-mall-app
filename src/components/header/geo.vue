<template>
  <div class="m-geo">
    <div class="position">
        <i class="el-icon-location" />
        {{$store.state.position.name}}
        <router-link class="changeCity" :to="{name:'changeCity'}">
            切换城市
        </router-link>
        [
        <a href="" v-for="(item,index) in nearCity" :key="index"> {{item.name}} </a> 
        ]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
        <router-link class="login" :to="{name:'login'}">
            立即登录
        </router-link>
         <router-link class="register" :to="{name:'register'}">
            注册
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            nearCity:[]
        }
    },
    watch:{
        "$store.state.position":function(){
            this.nearCity = this.$store.state.position.nearCity;
        }
    },
created(){
    //获取当前地理位置信息接口
    this.$api.getCurrentPosition().then((res)=>{
        console.log(res)
        this.nearCity = res.data.nearCity
        this.$store.dispatch('setPosition',res.data);
    })
}
}
</script>

<style>

</style>