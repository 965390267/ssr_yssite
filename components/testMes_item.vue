<template>
    <div class="list-item">
      <div class="hover">
        <div class="look">MORE</div>
      </div>
      <slot></slot>
        <!-- <div class="lf icon">即将
报名</div> -->
        <div class="mid">
            <div class="t overflopoint"><i>【{{listItemData.moduleName}}】</i>{{listItemData.title}}</div>
            <div class="b "><div class="desc overflopoint">{{listItemData.content}}</div>
            <div class="area overflopoint">{{listItemData.siteName}}</div></div>
        </div>
        <div class="rt">
          <div class="year">{{listItemData.ctime|formatyear }}</div>
          <div class="date">{{listItemData.ctime|formatmonth}}</div>
        </div>
    </div>
</template>
<script>

export default {
  props:{

    listItemData:Object
  },
  filters:{
     formatyear(value){
         let times=new Date(value)
      let year=times.getFullYear()
      return year
     },
     formatmonth(value){
             if (!value) return ''
      let times=new Date(value)
      let month=times.getMonth()+1
      month=month<10?'0'+month:month;
     
      let day=times.getDate()
       day=day<10?'0'+day:day
      return month+'-'+day
     }
  },
  mounted(){
   
  }
}
</script>
<style lang="scss" scoped>
  
.list-item{
  position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 4px;
    padding: 12px 5px;
    transition: all .3s;
    overflow: hidden;
    cursor: pointer;
     .hover{
      position: absolute;
      left: 0;
      bottom: -60px;
      width: 100%;
      height: 100%;
      border-bottom: 4px solid #007CCF;
       transition: all .3s;
      .look{
         position: absolute;
      right: 0;
      bottom: 0px;
      width: 70px;
      height: 30px;
     background:#007CCF;
     text-align: center;
     line-height: 30px;
     color: #fff;
     
      }
    }
    &:hover .hover{
      bottom: 0px;
    }
    &:hover{
      background:rgba(250,250,250,1);
          box-shadow: 2px 2px 30px rgba(0, 124, 216, 0.66);
    }
   
}

 .mid{
       width: 65%;
   display: flex;
   flex-direction: column;
   .t{
     font-size: 16px;
     i{
       color: #007CCF;
       font-style: normal;
     }
   }
   .b{
     flex: 1;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     padding-left: 4px;
       margin-top: 10px;
     font-size:12px;
     color: #666;
     .desc{

     }
     .area{
       text-align: right;
       padding-left: 6px;
       width: 40px;
      color:  #007CCF;
       border-left: 1px solid rgba(204,204,204,1);
     }
   }
 }
 .rt{
   width: 80px;
   height: 48px;
   border-left: 1px solid #ccc;
     color: #ccc;
      text-align: right;
   .year{
    
     font-size: 14px;
   
   }
   .date{
font-size: 22px;
   }
 }
</style>