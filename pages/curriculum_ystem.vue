<template>
  <div class="setwidth">
    <!-- <div class="nav-bread">
    <img class="nav-home" src="../assets/image/home.png" alt="home" >
 <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
</div> -->
    <div class="teacher-wrap">
      <teacher-list
        class="teacher-item"
        v-for="(item, index) in 10"
        :key="index"
      ></teacher-list>
    </div>
 <Pagination></Pagination>
  </div>
</template>
<script>
import TeacherList from "~/components/teacher_card_active_no-top";
import Pagination from "~/components/pagination";
export default {
  layout: "nav-bread",
  components: {
    TeacherList,Pagination
  },
  data() {
    return {
        setcurrentPage:0,
      currentPage:0 ,
    };
  },
  watch:{

  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      
  },
  methods: {
      jump(){
         this.currentPage=this.setcurrentPage;
      },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  } 

  // page component definitions
};
</script>
<style scoped>
.setwidth{
  width: 1200px;
  margin: 0 auto;
}
.teacher-wrap {

  display: flex;
  flex-wrap: wrap;
}
.teacher-item {
  flex: 0 0 21.5%;
  margin: 0 20px;
  margin-top: 30px;
  cursor: pointer;
}

</style>
