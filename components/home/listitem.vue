<template>
  <div class="setmargintop">
    <!-- <MesItem></MesItem> -->
    <div class="list-item-wrap">
 <MesItem class="list-item" :listItemData="item" v-for="(item) in listData.articles" :key="item.id">
    <div class="lf zise icon" v-if="item.synCalendar==0">查看详情</div>
    <!-- <div class="lf zise icon" v-else-if="item.synCalendar==55">查看详情</div> -->
    <div class="lf  yellow icon" v-else>即将截止</div>
    
     </MesItem>
    </div>
  

  </div>
</template>
<script>
import MesItem from '~/components/testMes_item.vue'
export default {
  components: {
    MesItem
  },
  data(){
    return{
      endtime:15,//倒计时显示
      stoptiem:5,
      baoming:15
    }
  },
  props:{
    listData:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  mounted(){
    console.log(this.listData);
    
  }
}
</script>
<style scoped>
.setmargintop{
    margin-top: 15px;
    height: 340px;
}
.list-item-wrap{
 display: flex;
 flex-direction: row;
 justify-content: space-between;
flex-wrap: wrap;
}
.list-item{
  flex: 0 0 45%;
}
 .lf{
    width: 48px;
    height: 48px;
    border:1px solid rgba(0,124,207,1);
    border-radius: 8px;
    color: #007CCF;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
 }
 .yellow{
     color: #FFBB00;
border:1px solid rgba(255,187,0,1);
 }
 .zise{
     color: #7D00CF;
border:1px solid rgba(125,0,207,1);
 }
.setheight{
    height: 5px;
}
</style>
