<template>
  <div class="hotclass-card">
    <div class="hotclass-bg" :style="{backgroundImage:'url('+teacherItem.cover+')'}"></div>
    <div class="hotclass-tit">
      <div class="hotclass-name">{{teacherItem.name}}</div>
      <div class="hotclass-othername">{{teacherItem.title}}</div>
      <div class="hotclass-desc">
       {{teacherItem.description}}
      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: {

  },
  data(){
    return{

    }
  },
  props:{
    teacherItem:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  mounted(){
   
  }
}
</script>
<style lang="scss" scoped>
.hotclass-card {
    position: relative;
  width: 270px;
  height: 400px;
  transition: top .3s;
  &:hover {
      top: -40px;
    box-shadow: 0px 3px 10px rgba(0, 124, 216, 0.16);
    border-bottom: 8px solid #007CCF;
  }
  .hotclass-bg {
    width: 270px;
    height: 286px;
    background-repeat: no-repeat;
    background-size: 100% 100%
  }
  .hotclass-tit {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 100px;
    .hotclass-name {
      font-size: 16px;
      color: rgba(0, 124, 207, 1);
    }
    .hotclass-othername {
      font-size: 14px;
      color: rgba(153, 153, 153, 1);
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(204, 204, 204, 1);
    }
    .hotclass-desc {
      margin-top: 6px;
      font-size: 12px;
      color: rgba(102, 102, 102, 1);
    }
    .hotclass-look {
      color: #007ccf;
    }
  }
}
</style>
