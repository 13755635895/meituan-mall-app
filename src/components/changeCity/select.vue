<template>
 <div :class="['choose-wrap', disabled?'disabled':'']" @click="showWrapper" v-document-click="documentClick">
    <div :class="['choose', disabled?'disabled':'']">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{ 'mt-content': true, active: showWrapperActive }">
        <p>{{ title }}</p>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(listData,index) in renderList" :key="index">
            <span @click="changeValue(item)" :class="{'mt-item':true,'active':item.name == value}" v-for="(item, i) in listData" :key="i">{{
              item.name
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  mounted(){
    console.log(this.list,'list');
  },
  computed:{
    renderList:function(){
        let col = Math.ceil(this.list.length  / 12)
        let resultList = []
        for(var i = 0;i<col;i++){
            let data = this.list.slice(i *12 ,i*12 +12);
            resultList.push(data)
        }
        return resultList
    }
  },
  props: ["list", "value", "title",'showWrapperActive','disabled','className'],
  methods: {
    showWrapper(e) {
      e.stopPropagation();
    //   this.showWrapperActive = true;
    if(!this.disabled){
    this.$emit('changeActive',true)
    }
    },
    documentClick() {
    //   this.showWrapperActive = false;
    this.$emit('changeActive',false)
      console.log("documentClick");
    },
    changeValue(item){
        console.log(item,'item')
        this.$emit('change',item);
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>