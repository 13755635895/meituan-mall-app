<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <MyMenu />
      </el-col>
      <el-col :span="19">
        <Life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Container :navList="iStyle" />
        <Container :navList="cheep" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/index/menu.vue";
import Life from "@/components/index/life.vue";
import Container from "@/components/index/container.vue";
export default {
  components: {
    MyMenu,
    Life,
    Container,
  },
  data() {
    return {
      iStyle: {
        class:'iStyle',
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all",
          },
          {
            text: "约会聚餐",
            tab: "food",
          },
          {
            text: "丽人SPA",
            tab: "spa",
          },
          {
            text: "电影演出",
            tab: "movie",
          },
          {
            text: "品质出游",
            tab: "travel",
          },
        ],
      },
      cheep: {
        class:'youhui',
        title: "狠优惠",
        list: [
          {
            text: "全部",
            tab: "all",
          },
          {
            text: "美食",
            tab: "food",
          },
          {
            text: "休闲",
            tab: "xiuxian",
          }
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
@import "@/assets/css/index/life.scss";
</style>