<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
        <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
        </el-col>
        <el-col :span="15" class="center">
            <div class="wrapper">
                <el-input v-model="searchWord" placeholder="请输入关键词" @focus="focus" @blur="blur" @input="input"></el-input>
                <el-button type="primary" icon="el-icon-search"></el-button>
                <dl class="hotPlace" v-if="isHotPlace">
                    <dt>热门搜索</dt>
                    <dd v-for="(item,i) in hotPlaceList" :key="i"><router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link></dd>
                </dl>
                <dl class="searchList" v-if="isSearchList">
                     <dd v-for="(item,i) in searchList" :key="i"><router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link></dd>
                </dl>
            </div>
            <p class="suggest">
                <a href="#" v-for="(item,i) in suggestList" :key="i">{{item}}</a>
            </p>
        </el-col>
        <el-col :span="6" class="right"></el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            searchWord:null,
            isFocus:false,
            hotPlaceList:[],
            searchList:[],
            suggestList:[]
        }
    },
    created(){
        this.$api.getSearchHotWords().then(res=>{
            // console.log(res,'---')
           this.hotPlaceList = res.data
           this.suggestList = res.data
        })
    },
    computed:{
        isHotPlace:function(){
            return this.isFocus && !this.searchWord;
        },
        isSearchList:function(){
            return this.isFocus && this.searchWord;
        }
    },
    methods:{
        focus(){
            this.isFocus = true
        },
        blur(){
            let self = this;
            setTimeout(function(){
                self.isFocus = false;
            },200)
        },
        input(){
            let val = this.searchWord
            this.$api.getSearchList().then(res=>{
                console.log(res,'res')
                this.searchList = res.data.list.filter((item,index)=>{
                    return item.indexOf(val) >-1
                })
            })
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss";
@import "@/assets/css/public/header/index.scss"
</style>