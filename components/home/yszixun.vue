<template>
  <div class="zixun">
    <div
      class="lf-bg"
      :style="{
        backgroundImage:
          'url(' + cardData.cover + ')'
      }"
    ></div>
    <div class="rttxt">
      <div class="top">{{cardData.title}}</div>
      <div class="line"></div>
      <div class="desc">{{cardData.content}}</div>
      <div class="time">{{cardData.ctime|formattime}}</div>
      <div class="question-btn">
        查看详情<img src="../../assets/image/home/jiantou.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
    cardData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
    filters: {
    formattime(time) {
      if (!time) return "";

      var Time = new Date(time)
      let month=Time.getMonth()+1
      month=month<10?'0'+month:month
      let day=Time.getDate()
       day=day<10?'0'+day:day
      return  Time.getFullYear()+'-'+month+'-'+day

    }
  },
  mounted(){
    console.log(this.cardData);
    
  }
}
</script>
<style scoped lang="scss">
.zixun {
  display: flex;
  flex-direction: row;
  .lf-bg {
    width: 273px;
    height: 240px;
    background-size: 100% 100%;
  }
  .rttxt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 45px;
    .top {
      font-size: 20px;
      font-weight: bold;
      color: #333;
    }
    .line {
      height: 2px;
      background: #ccc;
    }
    .desc {
      font-size: 14px;
      color: #666;
    }
    .time {
        margin-top: 40px;
      font-size: 16px;
      color: #666;
    }
  }
}
.question-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 48px;

  margin-top: 40px;
  background: rgba(0, 124, 207, 1);
  color: #fff;
  border-radius: 24px;
}
.question-btn img {
  width: 16px;
  height: 16px;
}
</style>
