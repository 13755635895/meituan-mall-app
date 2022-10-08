<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, i) in dataList" :key="i">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      :id="'city-' + index"
      class="m-categroy-section"
      v-for="(item, index) in cityGroup"
      :key="index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{
          city.name
        }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: [],
    };
  },
  created() {
    this.$api.getCityList().then((res) => {
      var obj = {};
      res.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
        this.cityGroup = obj;
      });
    });
  },
  methods: {
    changeCity(item) {
        this.$store.dispatch('setPosition',item)
        this.$router.push('/index')
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>