<template>
     <div class="setflexbetween">
     <div class="lf">
       <div class="t"><slot name="cn"></slot></div>
       <div class="b"><slot name="en"></slot></div>
     </div>
     <slot name="more"><div class="rt">更多<div class="more"></div></div></slot>
    
   </div>
</template>
<style scoped>

.setflexbetween .lf .t{
  font-size: 22px;
  color: #333333;
  font-weight: bold;
}
.setflexbetween .lf .b{
  font-size: 16px;
  color: #999999;
}
.setflexbetween .rt{
  display: flex;
  flex-direction: row;
  align-items: center;
    font-size: 16px;
  color: #999999;
  cursor: pointer;
}
.setflexbetween .rt .more{
  width: 14px;
  height: 14px;
  background: url('../assets/image/home/arrow@2x.png') no-repeat;
  background-size: 95% 95%;
  cursor: pointer;
}
</style>