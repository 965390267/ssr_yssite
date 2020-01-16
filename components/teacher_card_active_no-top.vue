<template>
  <div class="hotclass-card">
    <div class="hotclass-bg" :style="{backgroundImage:'url('+require('../assets/image/teacher@2x.png')+')'}"></div>
    <div class="hotclass-tit">
      <div class="hotclass-name">小云云</div>
      <div class="hotclass-othername">云师小云云</div>
      <div class="hotclass-desc">
        这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是...
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hotclass-card {
    position: relative;
  width: 270px;
  height: 400px;
  transition: top .3s;
  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 124, 216, 0.16);
    border-bottom: 8px solid #007CCF;
  }
  .hotclass-bg {
    // width: 270px;
    height: 266px;
    margin: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .hotclass-tit {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 120px;
    padding: 0 15px;
    .hotclass-name {
      margin-top: 15px;
      font-size: 16px;
      color: rgba(0, 124, 207, 1);
    }
    .hotclass-othername {
       margin-top: 6px;
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
