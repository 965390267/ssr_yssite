<template>
    <nav>
<div class="nav-bread">
    <img class="nav-home" src="../assets/image/home.png" alt="home" >
 <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item> -->
  <el-breadcrumb-item>云南名师</el-breadcrumb-item>

</el-breadcrumb>
</div>

    </nav>
</template>
<style scoped>

.nav-bread{
     width: 1200px;
     margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #CCCCCC;
    padding: 18px 0;
}
 .nav-home{
     width: 32px;
     height: 28px;
     margin-right: 30px;
     margin-left: 20px;
 }

</style>