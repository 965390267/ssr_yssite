<template>
  <div class="classbox">
    <div class="classbox_title">
      <p>云师教育</p>
    </div>
    <div class="classbox_p">
      <p>电脑端上课入口</p>
    </div>
    <div class="classbox_img">
      <div class="classbox_img_box" id="qr_container"></div>
    </div>
    <div class="classbox_txt">
      <p>
        打开
        <span>云师app</span>进入
        <span>我的课程列表</span>页 点
      </p>
      <p>
        击“
        <span>电脑上课</span>”按钮，扫码进入直播
      </p>
    </div>
  </div>
</template>
<style scoped>
.classbox {
  width: 1160px;
  height: 800px;
  margin:50px auto;
  background: url('../assets/image/pc/qrcode-bg.png');
  background-size: 100% 100%;
      background-color: #fff;
  position: relative;
}
.classbox_title {
  width: 228px;
  height: 50px;
  position: absolute;
  top: 83px;
  left: 464px;
}
.classbox_title p {
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  color: #7bc7ff;
  font-family: LED;
  font-weight: 700;
}
.classbox_p {
  width: 228px;
  height: 50px;
  position: absolute;
  top: 140px;
  left: 464px;
}
.classbox_p p {
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #7bc7ff;
}
.classbox_img {
  width: 231px;
  height: 228px;
  position: absolute;
  top: 200px;
  left: 464px;
  background: url(../assets/image/pc/lzr5.png);
  background-size: 100% 100%;
}
.classbox_img_box img {
  width: 100%;
  height: 100%;
}
.classbox_img_box {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 13px;
  left: 17px;
  overflow: hidden;
}
.classbox_txt {
  position: absolute;
  top: 463px;
  left: 451px;
}
.classbox_txt span {
  color: #7bc7ff;
}
</style>