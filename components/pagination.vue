<template>
       <div class="pagination-wrap">
     
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
       <div class="demonstration"><div class="demonstration-txt" @click="jump()">跳转</div>
       <el-input class="demonstration-input" v-model="setcurrentPage" placeholder="页码"></el-input>页</div>
     
    </div>
</template>
<script>
// import TeacherList from "~/components/teacher_card_active_no-top";
// import Pagination from "~/components/pagination";
export default {
  data() {
    return {
        setcurrentPage:0,
      currentPage:0 ,
    };
  },
  watch:{

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
.pagination-wrap{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 40px;
    margin-top: 80px;
    margin-bottom: 80px;
}
.demonstration{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  
}
.demonstration-input{
  width: 60px;
}
.demonstration-txt{
    width: 40px;
    cursor: pointer;
}
.el-pagination{
    display: flex;
    align-items: center;
}
</style>