<template>
  <div class="rank">
    <div class="title">热门排行</div>
    <ul>
      <li>
        <div class="lf-index">1</div>
        <div class="rt-txt">
          <div class="t">热烈庆祝云师教育楚雄分校成</div>
          <div class="b">12月12日，在云师教育的支撑区建...</div>
        </div>
      </li>
      <li>
        <div class="lf-index">1</div>
        <div class="rt-txt">
          <div class="t">热烈庆祝云师教育楚雄分校成</div>
          <div class="b">12月12日，在云师教育的支撑区建...</div>
        </div>
      </li>
      <li>
        <div class="lf-index">1</div>
        <div class="rt-txt">
          <div class="t">热烈庆祝云师教育楚雄分校成</div>
          <div class="b">12月12日，在云师教育的支撑区建...</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.rank {
  width: 290px;
 border: 1px solid #7BC7FF;
  .title {
    height: 50px;
    line-height: 50px;
    padding-left: 25px;
    color: #fff;
    background: rgba(0, 124, 207, 1);
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    &:nth-child(1)  .lf-index{
border:1px solid rgba(0,124,207,1);
color:rgba(0,124,207,1);
    }
      &:nth-child(2)  .lf-index{
border:1px solid rgba(255,187,0,1);
color:rgba(255,187,0,1);
    }
      &:nth-child(3)  .lf-index{
border:1px solid #7D00CF;
color:#7D00CF;
    }
    .lf-index {
      width: 35px;
      height: 35px;
      margin-left: 15px;
      text-align: center;
      line-height: 35px;
      background: rgba(255, 255, 255, 1);
      color: #999;
      font-size: 14px;
      border: 1px solid #999;
      border-radius: 6px;
    }
    .rt-txt {
      margin-right: 15px;

      .t {
        font-size: 14px;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
      }
      .b {
        font-size: 12px;
        color: rgba(204, 204, 204, 1);
      }
    }
  }
}
</style>
