<template>
  <div class="m-hcity">
    <dl>
        <dt>{{title}}</dt>
        <dd v-for="(item,i) in list" :key="i">{{item}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
data() {
    return {
        property: 'value',
    };
},
props:['title','list']
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/hot.scss"
</style>