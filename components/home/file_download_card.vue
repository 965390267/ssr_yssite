<template>
  <div class="download-card">
    <div class="download-bg"></div>
    <div class="download-tit">
      <div class="download-name">2019云南特岗真题解析-数学（小学）</div>
      <div class="download-look">查看详情</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.download-card {
  width: 373px;
  height: 310px;
  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 124, 216, 0.16);
  }
  .download-bg {
    width: 73px;
    height: 60px;
  }
  .download-tit {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 100px;
    .download-name {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
    }
    .download-look {
      color: #007ccf;
    }
  }
}
</style>
