<template>

  <el-tabs  type="card" v-model="activeName" @tab-click="handleClick">
      <template  v-for="(item,index) in tabs" >
          <el-tab-pane :key="index"  :label="item.moduleName" :name="item.moduleName"> <slot :name="item.moduleName"></slot></el-tab-pane>
      </template>
     

  </el-tabs>
</template>
<script>
  export default {
      props:{
       tabs:{
           type:Array
       },
      //  activeName:{
      //      type:String,
      //      default:"四季度假村酒店"
      //  }
      },
    data() {
      return {
       activeName:''
      };
    },
    methods: {
      handleClick(tab, event) {
        let {index}=tab;
        console.log(index);
        
        this.activeName=this.tabs[Number(index)].moduleName
        console.log(this.activeName);
      }
    },
    mounted(){
    this.activeName=this.tabs[0].moduleName
    }
  };
</script>
<style >
.el-tabs__item.is-active{
    color: #fff;
    font-size: 14px;
    background: #007CCF;
    border-radius:18px;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
    border: none;
}
.el-tabs--card>.el-tabs__header .el-tabs__item{
    border: none;
}
.el-tabs--card>.el-tabs__header{
    border: none;
}
</style>