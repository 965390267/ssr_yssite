<template>
  <div class="hotclass-card">
    <div
      class="hotclass-bg"
      :style="{backgroundImage:'url('+require('../../assets/image/class@2x.png')+')'}"
    ></div>
    <div class="hotclass-tit">
      <div class="hotclass-name">2019云南特岗真题解析-数学（小学）</div>
      <div class="hotclass-look">
        查看详情
        <div class="btn">
          <img src="../../assets/image/home/jiantou.png" alt srcset />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hotclass-card {
  width: 373px;
  height: 310px;
  &:hover {
    box-shadow: 0 0 40px rgba(121, 178, 255, 0.48);
  }

  .hotclass-bg {
    width: 373px;
    height: 210px;
    background: url("../../assets/image/class@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .hotclass-tit {
    display: flex;
    //justify-content: space-around;
    margin-top: 15px;
    flex-direction: column;
    height: 100px;
    .hotclass-name {
      height: 30px;
      font-size: 20px;
      margin-left: 4px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
    }
    .hotclass-look {
      display: none;
      justify-content: flex-start;
      margin-left: 4px;
      margin-top: 25px;
      height: 30px;
      color: #007ccf;
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 71px;
      margin-left: 15px;
      height: 20px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.36);
      border-radius: 10px;
      img {
      }
    }
  }
}
.hotclass-card:hover .hotclass-look {
  display: flex;
}
</style>
