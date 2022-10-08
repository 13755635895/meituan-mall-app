<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="navList.class">
      <dt>{{navList.title}}</dt>
      <dd v-for="(item,i) in navList.list" :key="i" :data-type="item.tab" :class="{active:kind==item.tab}">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,i) in resultData[kind]" :key="i">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img
            :src="item.image"
            class="image"
          />
          <div class="cbody">
              <div class="title" :title="item.title">{{item.title}}</div>
              <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
              <div class="price-info">
                <span class="current-pric wrapper"> 
                  <span class="price-symbol numfont">￥</span>
                  <span class="current-price numfont">{{item.price}}</span>
                </span>
                <span class="sold bottom-right-info">{{item.address}}</span>
                <!-- <span class="old-price">门市价￥{{item.price_info.old_price}}</span>
                <span class="sold bottom-right-info">{{item.address}}</span> -->
              </div>
              <!-- <div class="price-info" v-else-if="!item.resntNum">
                <span class="current-pric wrapper"> 
                  <span class="current-price numfont">抢光了</span>
                </span>
              </div>
              <div class="price-info" v-else>
                <span class="current-pric wrapper"> 
                  <span class="price-symbol numfont">￥</span>
                  <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                  <span class="units">/{{item.price_info.units}}</span>
                </span>
              </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:['navList'],
    data(){
        return {
            kind:'all',
            resultData:{},
            list:[]
        }
    },
    created(){
        this.$api.resultsByKeywords().then(res=>{
            console.log(res,'111')
            this.resultData = res.data
        })

    },
    methods:{
        over(e){
            let dom = e.target;
            let tarName = dom.tagName.toLowerCase();
            if(tarName != 'dd'){
                return false;
            }
            this.kind = dom.getAttribute('data-type');
            //拿到类型之后发送ajax请求获取数据
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>