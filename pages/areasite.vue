<template>
  <div class="container">
    <Swiper></Swiper>
    <section class="body">
      <SpaceBetween >
        <template slot="cn">{{testMes.moduleName}}</template>
        <template slot="en">Recruitment Information</template>
      </SpaceBetween>
      <Tabs :tabs="testMes.children" class="settesttop">
        <template v-for="(item) in testMes.children" >
           <ListItem :slot="item.moduleName" :key="item.moduleId" :listData="item"></ListItem>
        </template>
      </Tabs>
    </section>
    <div class="examcalendar">
      <div class="setcenter">
        <SpaceBetween class="settesttop">
          <template slot="cn">考试日历</template>
          <template slot="en">Examination calendar</template>
        </SpaceBetween>
        <SwiperCard class="setswipercardtop">
          <div class="swiper-slide" v-for="banner in homeExamCalendar" :key="banner.id">
            <!-- <img :src="banner"> -->
            <CalenderCard :banner="banner"></CalenderCard>
          </div>
        </SwiperCard>
        <div class="time-line">

        </div>
      </div>
    </div>
    <div class="body">
        <SpaceBetween class="settesttop">
          <template slot="cn">备考指导</template>
          <template slot="en">Preparation for examination guidance</template>
        </SpaceBetween>
         <Tabs :tabs="homeguide.children" class="settesttop">
        <template v-for="(item) in homeguide.children" >
           <ListItem :slot="item.moduleName" :key="item.moduleId" :listData="item"></ListItem>
        </template>
      </Tabs>
    </div>
       <div class="wangke">
      <div class="setcenter">
        <SpaceBetween class="settesttop">
          <template slot="cn">资料下载</template>
          <template slot="en">Date download</template>
        </SpaceBetween>
        <SwiperCard class="setswipercardtop">
          <div class="swiper-slide" v-for="banner in banners" :key="banner">
            <!-- <img :src="banner"> -->
            <CalenderCard></CalenderCard>
          </div>
        </SwiperCard>
        <div class="time-line">

        </div>
      </div>
    </div>

      <div class="body">
        <SpaceBetween class="settesttop">
          <template slot="cn">热门网课</template>
          <template slot="en">Popular</template>
        </SpaceBetween>
         <Tabs :tabs="tabs" class="settesttop">
        <HotClass :slot="tabs[0].name"></HotClass>
        <HotClass :slot="tabs[0].name"></HotClass>
        <HotClass :slot="tabs[2].name"></HotClass>
        <HotClass :slot="tabs[3].name"></HotClass>
      </Tabs>
    </div>
        <div class="wangke">
      <div class="setcenter">
        <SpaceBetween class="settesttop">
          <template slot="cn">云师名师</template>
          <template slot="en">Master of YUNSHI</template>
        </SpaceBetween>
        <SwiperCard class="setswipercardtop">
          <div class="swiper-slide" v-for="teacherItem in webTeacher" :key="teacherItem.id">
            <!-- <img :src="banner"> -->
            <TeacherCard :teacherItem="teacherItem"></TeacherCard>
          </div>
        </SwiperCard>
        <div class="time-line">

        </div>
      </div>
    </div>
    <div class="question">
      <div class="body">
 <SpaceBetween class="settesttop ">
          <template slot="cn">云师问答</template>
          <template slot="en">YUNSHI Q & A</template>
          <template slot="more"><div></div></template>
        </SpaceBetween>
      </div>
      
<YsAnswer></YsAnswer>

    </div>
    <div class="body">
       <SpaceBetween class="settesttop ">
          <template slot="cn">云师资讯</template>
          <template slot="en">YUNSHI information</template>
        </SpaceBetween>
        <SwiperOneContainer :homeZixun="homeZixun"></SwiperOneContainer>
    </div>
    <RankList></RankList>
    <!-- <div v-for="(post,index) in blogs" class="dsgfdg" :key="index">{{post}}</div> -->
  </div>
</template>

<script>

import Header from "~/components/header.vue";
import Swiper from "~/components/swiper.vue";
import SwiperCard from "~/components/swipercard.vue";
import Tabs from "~/components/tabs.vue";
import ListItem from "~/components/home/listitem.vue";
import CalenderCard from "~/components/home/calender_card.vue";
import HotClass from "~/components/home/hotclass.vue";
import YsAnswer from "~/components/home/ysanswer.vue";
import SpaceBetween from "~/components/spacebetween.vue";
import TeacherCard from "~/components/home/ysteacher_card.vue";
import SwiperOneContainer from "~/components/swiper_one_container.vue";
import RankList from "~/components/rank_list.vue";

export default {
  components: {
   
    Header,
    Swiper,
    Tabs,
    ListItem,
    SpaceBetween,
    SwiperCard,
    CalenderCard,
    HotClass,
    YsAnswer,
    TeacherCard,
    SwiperOneContainer,
    RankList
  },
  data() {
    return {
      banners: [
        "http://img.zangzhihong.com/background1.jpg",
        "http://img.zangzhihong.com/background1.jpg",
        "http://img.zangzhihong.com/background1.jpg",
        "http://img.zangzhihong.com/background1.jpg",
        "http://img.zangzhihong.com/background1.jpg"
      ],

      tabs: [
        {
          name: "四季度假村酒店",
      
        },
        {
          name: "布宜诺斯艾利斯四季酒店",
        
        },
        {
          name: "孟买四季酒店",
       
        },
        {
          name: "新加坡四季酒店",
        
        }
      ]
    };
  },
  computed: {
    computeId(){
      return this.$store.state.setId
    }
  },
  watch:{
  computeId(newvalue,oldvalue){

  }
  },
   watchQuery: true,
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
      
    //  const areaId = route.query.id // When calling /abc the slug will be "abc"
      
    //   console.log(areaId);
      
   await store.dispatch("sitemapTree",{setId:0});
  
    let { id, code } = route.query;
     let article = await store.dispatch("homeArticleOne", {
      siteId: id,
      siteCode: code
    });
      let homeExamCalendar = await store.dispatch("homeExamCalendar",{setId:id,siteCode:code});  
      let homeguide = await store.dispatch("homeguide",{setId:id,siteCode:code});  
      let webTeacher= await store.dispatch("webTeacher"); 
      let homeZixun=await store.dispatch("homeZixun",{setId:id,siteCode:code}); 
     return {testMes:article[0],homeExamCalendar:homeExamCalendar,homeguide:homeguide[0],webTeacher:webTeacher,homeZixun:homeZixun[0]}
  },
    head () {
      let name='dsfdsgfd';
    return {
      meta: 
      [
        {
          name: 'keywords',
          content: `${name},无限宝石,无限元宝`
        },
      ],
      title:'dsgdsfg'
    }
  },
  mounted(){
    console.log(this.$store.state);
    
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}
.body {
  width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
}

.examcalendar {
  margin-top: 60px;
  height: 900px;
  background: url("../assets/image/home/midbg@2x.png") no-repeat;
  background-size: 100% 100%;
}
.setcenter {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.settesttop {
  margin-top: 70px;
}
.setswipercardtop {
  margin-top: 70px;
}
.wangke{
  margin-top: 60px;
  height: 620px;
  background: url("../assets/image/home/midbg@2x.png") no-repeat;
  background-size: 100% 100%;
}
/*
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}


.links {
  padding-top: 15px;
} */
</style>
