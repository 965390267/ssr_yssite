<template>
  <header>
    <div class="inner-wrap">
      <div class="top">
        <div class="lf logo"></div>
        <div class="rt" @click="openSite()">
          <div class="address"></div>
          <div class="sitename">主站</div>
          <div class="arrow"></div>
        </div>
      </div>
      <div class="bottom">
        <!-- <div > -->
        <ul class="nav-wrap">
          <nuxt-link to="/"> <li>首页</li></nuxt-link>
          <nuxt-link to="/course"><li>课程</li></nuxt-link>
          <nuxt-link to="/pclistenclass"><li>电脑上课</li></nuxt-link>
          <nuxt-link to="/download"> <li>下载</li></nuxt-link>
          <nuxt-link to="/curriculum_ystem"><li>课程体系</li></nuxt-link>
          <nuxt-link to="/asfor"> <li>关于我们</li></nuxt-link>
          <li class="rt-info">
            <div class="search-box">
              <div class="search-icon"></div>
              <input type="text" placeholder="教师资格证   特岗教师" />
              <div class="search-btn">搜索</div>
            </div>
            <div class="userinfo">
              <div class="user-icon"></div>
              <div class="username">欢迎您,蛋蛋</div>
              <div class="loginstate">退出登录</div>
            </div>
          </li>
        </ul>

        <!-- </div> -->
      </div>
    </div>
    <div class="site-map" v-show="isshowMap">
      <div class="site-map-provice">
        <ul>
          <li>主站</li>
          <li
            v-for="(item, index) in siteList.children"
            :key="index"
            @click="renderSubMap(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="site-map-area">
        <ul>
        
          <li v-for="item in submapList" :key="item.id" >  <nuxt-link :to="{path:'./areasite',query:{id:item.id,code:`'${item.code}'`}}">{{ item.name }}</nuxt-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isshowMap: false,
      siteList: {},
      submapList: [],
      
    };
  },
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    console.log('888');
    
    //  let result= await store.dispatch("sitemapTree", { setId: 0 })
    //  console.log(result);
     
    // return {blogs:result}
  },
  created() {
    
  },
  methods: {
    async initData() {

      let result = await this.$store.state.sitemapTree;
       this.siteList = result;
      
    },
    renderSubMap(list) {
      this.submapList = list.children;
    },
    openSite() {
      this.isshowMap = !this.isshowMap;
    }
  },
  mounted() {
    this.initData();
    
  }
};
//sitemapTree
</script>
<style scoped lang="scss">
header {
  height: 140px;
  background: #fff;
  box-shadow: 0px 2px 5px rgba(0, 124, 216, 0.1);
}
.inner-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  border-bottom: 1px solid rgba(204, 204, 204, 1);
}
.logo {
  width: 176px;
  height: 45px;
  background: url("../assets/image/icon/logo@2x.png") no-repeat;
  background-size: 100% 100%;
}
.rt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.address {
  width: 24px;
  height: 26px;
  margin: 0 20px;
  background: url("../assets/image/icon/address@2x.png") no-repeat;
  background-size: 100% 100%;
}
.sitename {
  font-size: 20px;
  color: #666666;
}
.arrow {
  width: 12px;
  height: 6px;
  margin: 0 20px;
  background: url("../assets/image/icon/arrow@2x.png") no-repeat;
  background-size: 100% 100%;
}
.bottom {
  display: flex;
  align-items: center;
  flex: 1;
}
.nav-wrap {
  width: 100%;
  padding: 0;
  margin-top: 4px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.nav-wrap li {
  list-style: none;
  font-size: 20px;
  color: #666666;
}
/* 鼠标下划线跟随效果 */

a {
  position: relative;
  padding: 20px;
  font-size: 24px;
  color: #000;
  line-height: 1;
  transition: 0.2s all linear;
  list-style: none;
  cursor: pointer;
}
a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 100%;
  width: 0;
  height: 100%;
  border-bottom: 2px solid transparent;
  transition: 0.2s all linear;
}
a:hover::before {
  width: 100%;
  top: 0;
  left: 0;
  transition-delay: 0.1s;
  /*过渡延迟*/
  border-bottom-color: #007cd8;
}
a:hover ~ a::before {
  left: 0;
}
a:active {
  background: #007cd8;
  color: #fff;
}

.nuxt-link-exact-active::before {
  width: 100%;
  left: 0;
  border-bottom: 2px solid #007cd8;
}
.rt-info {
  margin-right: 0 !important;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.search-box {
  position: relative;
  margin-left: 60px;
  width: 300px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 20px;
  overflow: hidden;
}
.search-box input {
  width: 150px;
  margin-left: 30px;
  margin-top: 12px;
  border: none;
  outline: none;
}
.search-box .search-icon {
  position: absolute;
  left: 13px;
  top: 13px;
  width: 15px;
  height: 15px;
  background: url("../assets/image/icon/search@2x.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.search-box .search-btn {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 86px;
  height: 100%;
  font-size: 16px;
  background: rgba(123, 199, 255, 1);
  border-radius: 0px 10px 10px 0px;
  text-align: center;
  line-height: 36px;
  color: #fff;
  cursor: pointer;
}
.userinfo {
  display: flex;
  justify-content: space-between;
}
.userinfo .user-icon {
  width: 26px;
  height: 26px;
  margin: 0 20px;
  background: url("../assets/image/icon/avator@2x.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;
}
.userinfo .username {
  font-size: 16px;
  color: #666666;
}
.userinfo .loginstate {
  margin-left: 20px;
  font-size: 16px;
  color: #007ccf;
}
.site-map {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: calc(100% - 1208px);
  width: 660px;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 124, 216, 0.16);
  z-index: 999;
  .site-map-provice {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(204, 204, 204, 1);
  }
  .site-map-area {
    margin-top: 20px;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    flex: 0 0 17.3%;
    width: 90px;
    height: 34px;
    margin: 0 8px;
    margin-top: 12px;
    line-height: 34px;
    text-align: center;
    border-radius: 18px;
    color: #666666;
    background: #f2f2f2;
    &:hover {
      color: #fff;
      background: #007ccf;
      cursor: pointer;
    }
  }
}
</style>
