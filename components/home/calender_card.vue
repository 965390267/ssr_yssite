<template>
  <div class="test-card">
    <div class="card-paizi">
      <div class="card-tip">倒计时</div>
      <div class="card-time">
        <i>{{ banner.signUpTimeStart|time }}</i> 天
      </div>
    </div>
    <div class="card-title">{{ banner.title }}</div>
    <div class="card-title2">
      报名入口：<a :href="banner.examChannel" target="_black"
        ><i> 点击进入 </i></a
      >
    </div>
    <!-- <div class="card-title3">准考证： <i> 前往打印 </i></div> -->
    <div class="card-gg">详见公告</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  filters: {
    time(time) {
      if (!time) return "";

      var nowTime = new Date().getTime();
      //获取时间差
      var timediff = Math.round((time - nowTime) / 1000);
      var day = parseInt(timediff / 3600 / 24);
      return (day = day < 0 ? 0 : day);
    }
  },
  props: {
    banner: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  mounted() {
    console.log(this.banner);
  }
};
</script>
<style lang="scss" scoped>
.test-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 289px;
  height: 400px;
  background: rgba(255, 255, 255, 1);
  //  filter:blur(11px);
  border-radius: 13px;
  .card-paizi {
    margin-top: 24px;
    width: 146px;
    height: 136px;
    background: url("../../assets/image/home/card@2x.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    .card-tip {
      text-align: right;
      margin-top: 60px;
      margin-right: 20px;
      font-weight: bold;
      font-size: 18px;
      color: #007ccf;
    }
    .card-time {
      text-align: right;
      margin-top: 0px;
      margin-right: 20px;
      font-weight: bold;
      font-size: 36px;
      color: #007ccf;
      line-height: 36px;
      i {
        font-style: normal;
        font-size: 36px;
        color: #007ccf;
      }
    }
  }
  .card-title {
    color: #333;
    font-size: 20px;
    font-weight: bold;
    margin-top: 25px;
  }
  .card-title2 {
    margin-top: 50px;
    color: #666;
    font-size: 19px;
    i {
      font-style: normal;
      font-size: 19px;
      color: #007ccf;
    }
  }
  .card-title3 {
    font-size: 19px;
    margin-top: 15px;
    i {
      font-style: normal;
      font-size: 19px;
      color: #007ccf;
    }
  }

  .card-gg {
    margin-top: 38px;
    width: 220px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background: rgba(0, 124, 207, 1);
    border-radius: 24px;
  }
}
</style>
