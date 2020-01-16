<template>
  <div>
    <div style="outline: none;"></div>
    <!--<div class="addres addres1">
			<div class="box">
				<span><img src="img/home.png"/></span><span><a href="index.html">首页</a>>> </span><span>下载</span>
			</div>
    </div>-->
    <div class="pc_top">
      <div class="pc_top_1160">
        <div class="pc_top_1160_logo">
          <img src="../assets/image/download/logo.png" alt="云师教育APP" />
        </div>
        <div class="pc_top_1160_txt">
          <p>云师教育APP</p>
        </div>
        <div class="pc_top_1160_txt1">
          <p>
            考教师，用
            <span style="color: skyblue;">云师</span>就够了
          </p>
        </div>
        <div class="pc_top_1160_code">
          <img alt="云师教育" src="../assets/image/download/yun1.png" style="width: 178px;height: 178px;" />
        </div>
        <div class="pc_top_1160_code1">
          <img src="../assets/image/download/code2.png" />
        </div>
        <div class="pc_top_bg2">
          <img src="../assets/image/download/bg2.png" alt="云师教育" style="width: 687px;height: 689px;" />
        </div>
      </div>
      <!---->
      <div class="top_bootom">
        <div class="top_bootom_left">
          <p>人性化刷题</p>
          <p>HUMANIZATION</p>
          <p>制定每日计划，针对每题记笔</p>
          <p>记，重难点讲解</p>
        </div>
        <div class="top_bootom_right">
          <p>制定每日计划</p>
          <p>训练薄弱章节</p>
          <img src="../assets/image/download/boot1.png" alt="云师教育app" />
        </div>
      </div>
    </div>
    <!---->
    <div class="next_box">
      <div class="next_mian">
        <div class="next_mian_l">
          <img alt="云师教育app" src="../assets/image/download/code4.png" />
          <p class="p1">题目小记</p>
          <p class="p2">收藏重点题</p>
        </div>
        <div class="next_mian_r">
          <img alt="云师教育app" src="../assets/image/download/code5.png" style="width: 266px;height: 462px;" />
          <p class="p1">收藏的题再练一遍</p>
          <p class="p2">错题多多练习</p>
          <p class="p3">搜索薄弱知识点针对训练</p>
        </div>
      </div>
    </div>
    <!---->
    <div class="remlist">
      <ul>
        <li>
          <div class="res_img">
            <img v src="../assets/image/download/dianpin.png" alt />
          </div>
          <div class="res_tit">
            <p>独创试讲在线点评</p>
          </div>
          <div class="res-con">
            <p>上传试讲视频，专业老师在线点评指导，面试提升快人一步</p>
          </div>
        </li>
        <li>
          <div class="res_img">
            <img alt src="../assets/image/download/pingke.png" />
          </div>
          <div class="res_tit">
            <p>拼课更优惠</p>
          </div>
          <div class="res-con">
            <p>精品课多人团报，和小伙伴一起学习，动力足优惠大</p>
          </div>
        </li>
        <li>
          <div class="res_img">
            <img alt src="../assets/image/download/shangan.png" />
          </div>
          <div class="res_tit">
            <p>汇集全网招聘讯息+上岸好文</p>
          </div>
          <div class="res-con">
            <p>及时更新招聘资讯，告别公众号信息淹没，永远不错过报名</p>
          </div>
        </li>
      </ul>
    </div>
    <!---->
    <div class="teacherlist">
      <div class="teacherlist_box">
        <div class="teacherlist_box_top"></div>
        <div class="teacherlist_box_top_next">
          <p>大咖讲师</p>
          <p>FAMOUS LECTURER</p>
          <p>每一位都是多年教学经验傍身的口碑名师，学员上岸率高达97.8%</p>
        </div>
        <div class></div>
      </div>
    </div>
    <!---->
    <div id="content">
      <div class="teacher">
        <div class="teacher-photos">
          <div class="photos_list">
            <ul>
              <li class="li1">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                          :style="'backgroundImage: url('+require('../assets/image/download/youyou.png')+');background-size: cover;'"
                        >
                          <div class="overlay">
                            <p>悠悠老师，</p>云师顶级名师，对于特岗，招教，教资考试考情分析透彻， 授课风格大方亲切，知识点明确，重点清新，理论功底深厚讲授透彻清晰，逻辑严密。
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="li2">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                           :style="'backgroundImage: url('+require('../assets/image/download/youzi.png')+');background-size: cover;'"
                        >
                          <div class="overlay">
                            <p>柚子老师</p>云师顶级名师，理论功底深厚，讲课透彻清晰，逻辑严密，能够在基本知识， 教学设计，教学基本功能等方面给予针对性指导， 有效帮助学员掌握笔试学习以及面试策略
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="li3">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                           :style="'backgroundImage: url('+require('../assets/image/download/mingming.png')+');background-size: cover;'"
                        
                        >
                          <div class="overlay">
                            <p>铭铭老师</p>云师教育顶级名师，十余年招教,资格证,特岗教育学研究和教学经验，累计培训上千场,成功培训学员上万人!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="li4">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                           :style="'backgroundImage: url('+require('../assets/image/download/douzi.png')+');background-size: cover;'"

                        >
                          <div class="overlay">
                            <p>豆子老师</p>云师教育网红名师，上课风趣幽默，逻辑清晰，"案例，写作。教学设计"，豆子老师带你专门攻克难题，大题。带你轻轻松松得高分。
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="li5">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                           :style="'backgroundImage: url('+require('../assets/image/download/jingzi.png')+');background-size: cover;'"
      
                        >
                          <div class="overlay">
                            <p>镜子老师</p>云师教育教学总监，讲课时而幽默，时而深沉， 不变的是极度，清晰的思路和言简意赅的讲解，深入浅出。带你愉快地走进心理学的殿堂。
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="li6">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                           :style="'backgroundImage: url('+require('../assets/image/download/lijian.png')+');background-size: cover;'"

                        >
                          <div class="overlay">
                            <p>李建老师</p>幽默风趣，走路带风，擅长用表情调动课堂情绪，授课风格深受学生喜爱，学员满意度高达99.9%，被学生评为"面试一哥"
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="li7">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                           :style="'backgroundImage: url('+require('../assets/image/download/qiqi.png')+');background-size: cover;'"

                        >
                          <div class="overlay">
                            <p>琪琪老师</p>云师顶级名师，授课风格：风趣幽默，深入浅出，浅显易懂
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="li8">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                           :style="'backgroundImage: url('+require('../assets/image/download/ranran.png')+');background-size: cover;'"
                        >
                          <div class="overlay">
                            <p>冉冉老师</p>云师顶级名师，授课结构调理清晰，结合考点考题，针对性强。
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="li9">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                       :style="'backgroundImage: url('+require('../assets/image/download/shasha.png')+');background-size: cover;'"
   >
                          <div class="overlay">
                            <p>莎莎老师</p>云师顶级名师，逻辑严谨，讲解细致；座右铭：今天能做的事情，不要留到明天去做。
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="li10">
                <div class="box">
                  <div class="lineF">
                    <div class="boxF">
                      <div class="boxS">
                        <div
                          class="boxT"
                          :style="'backgroundImage: url('+require('../assets/image/download/shuaishuai.png')+');background-size: cover;'"

                        >
                          <div class="overlay">
                            <p>帅帅老师</p>云师顶级名师，授课逻辑严谨以及幽默风趣中传授方法技巧， 教学形式灵活多样，对学员观察细致入微，善于发现学员特质并因材施教，深受广大考生欢迎。
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="bg1img">
              <img src="../assets/image/download/bgimg1.png" alt="云师教育" />
            </div>
            <div class="bg2img">
              <img src="../assets/image/download/bgimg2.png" alt="云师教育" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--教材-->
    <div class="booshow">
      <div class="book_top">
        <p>教材展示</p>
        <p>TEXTBOOK DISPLAY</p>
        <p>专研定制教材配套APP学习，学法升级轻松先人一步</p>
      </div>
      <div class="swiper_list">
        <div class="swiper_list_box">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../assets/image/download/book1.png" alt="云师教育教材" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/image/download/book2.png" alt="云师教育教材" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/image/download/book3.png" alt="云师教育教材" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="swiper_list_right">
            <div class="txt1 tx">
              <p>提分效果升级</p>
              <span>一学就懂不留疑惑</span>
            </div>
            <div class="txt2 tx">
              <p>app配套学习</p>
              <span>线上线下同步巩固</span>
            </div>
            <div class="txt3 tx">
              <p>学习效率更高</p>
              <span>学霸独家学习方法</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="quick_move">
      <div class style="height: 30px;"></div>
      <div class="quick_move_top">
        <p>即将上线</p>
        <p>SOON TO GO ONLINE</p>
      </div>
      <div class="quock_list">
        <ul>
          <li>
            <p>
              <img alt="云师教育" src="../assets/image/download/za1.png" style="width: 34px;height: 40px;" />
            </p>
            <p class="p1">千人千面智能学习方案，量身定制，拒绝无营养</p>
            <p class="p2">1、专人专师一对一诊断学习弱点，快一步上岸</p>
            <p class="p2">2、AI智能生成专属模拟卷，针对性查缺补漏考点</p>
          </li>
          <li>
            <p>
              <img alt="云师教育" src="../assets/image/download/za2.png" />
            </p>
            <p class="p1">努力就有回报，学费轻轻松松赚回来</p>
            <p class="p2">1、模考大赛前十红包奖励</p>
            <p class="p2">2、学习累计时长可兑换课程,学霸报班优惠多多</p>
          </li>
          <li>
            <p>
              <img alt="云师教育" src="../assets/image/download/za3.png" style="width: 35px;height:35px;" />
            </p>
            <p class="p1">创新学习方式，get考点so esay</p>
            <p class="p2">2、视频/音频随意切换，骑车走路方便听</p>
            <p class="p2">2、AI智能生成专属模拟卷，针对性查缺补漏考点</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.addres1 {
  width: 100%;
  margin: 85px auto 20px auto;
}
.addres1 .box {
  width: 1160px;
  margin: 0 auto;
}
.pc_top {
  width: 100%;
  height: 1369px;
  background: url('../assets/image/download/bg.png');
  background-size: 100% 100%;
}
.pc_top_1160 {
  width: 1160px;
  height: 500px;
  margin: 114px auto;
  position: relative;
}
.pc_top_1160_logo {
  position: absolute;
  top: 100px;
  left: -5px;
  width: 128px;
  height: 71px;
}
.pc_top_1160_logo img {
  width: 100%;
  height: 100%;
}
.pc_top_1160_txt {
  position: absolute;
  top: 86px;
  left: 123px;
}
.pc_top_1160_txt p {
  font-size: 70px;
  color: #333;
}
.pc_top_1160_txt1 {
  position: absolute;
  top: 200px;
  left: -5px;
  height: 71px;
}
.pc_top_1160_txt1 p {
  font-size: 35px;
  color: #999;
  font-weight: 600;
}
.pc_top_1160_code {
  position: absolute;
  top: 255px;
  left: 0;
  width: 100px;
  height: 100px;
}
.pc_top_1160_code img {
  width: 100%;
  height: 100%;
}
.pc_top_1160_code1 {
  position: absolute;
  top: 468px;
  left: 0;
  width: 392px;
  height: 55px;
}
.pc_top_1160_code1 img {
  width: 100%;
  height: 100%;
}
.pc_top_bg2 {
  width: 687px;
  height: 689px;
  position: absolute;
  top: 0;
  left: 448px;
}
.pc_top_bg2 img {
  width: 100%;
  height: 100%;
}
.top_bootom {
  width: 1160px;
  height: 380px;
  margin: 0 auto;
}
.top_bootom_left {
  width: 300px;
  height: 300px;
  position: relative;
  left: 25px;
  top: 328px;
}
.top_bootom_left p:nth-child(1) {
  position: absolute;
  top: 60px;
  left: 70px;
  color: #333;
  font-weight: bold;
  font-size: 30px;
}
.top_bootom_left p:nth-child(2) {
  position: absolute;
  top: 100px;
  left: 70px;
  color: #ccc;
  font-size: 14px;
}
.top_bootom_left p:nth-child(3) {
  position: absolute;
  top: 131px;
  left: 70px;
  color: #666;
}
.top_bootom_left p:nth-child(4) {
  position: absolute;
  top: 160px;
  left: 70px;
  color: #666;
}
.top_bootom_right {
  width: 295px;
  height: 462px;
  margin-left: 720px;
  margin-top: -27px;
  position: relative;
}
.top_bootom_right img {
  width: 100%;
  height: 100%;
}
.top_bootom_right p:nth-child(1) {
  position: absolute;
  left: -92px;
  color: #7378fa;
  top: 104px;
}
.top_bootom_right p:nth-child(2) {
  position: absolute;
  right: -93px;
  color: #7378fa;
  top: 276px;
}
.next_box {
  width: 100%;
  height: 647px;
  background: #b8f4fd;
  background-size: 100% 100%;
  margin: -31px auto 0 auto;
  overflow: hidden;
}
.next_mian {
  width: 1160px;
  height: 500px;
  margin: 0 auto;
  position: relative;
}
.next_mian_l {
  width: 218px;
  height: 462px;
  position: absolute;
  left: 100px;
  top: 70px;
}
.next_mian_l img {
  width: 100%;
  height: 100%;
}
.next_mian_l .p1 {
  color: #7378fa;
  position: absolute;
  right: -78px;
  top: 270px;
}
.next_mian_l .p2 {
  color: #7378fa;
  position: absolute;
  right: -92px;
  top: 317px;
}
.next_mian_r {
  width: 266px;
  height: 462px;
  position: absolute;
  right: 157px;
  top: 67px;
}
.next_mian_r img {
  width: 100%;
  height: 100%;
}
.next_mian_r .p1 {
  position: absolute;
  left: -129px;
  color: #7378fa;
  top: 206px;
}
.next_mian_r .p2 {
  position: absolute;
  right: -106px;
  color: #7378fa;
  top: 288px;
}
.next_mian_r .p3 {
  position: absolute;
  right: -179px;
  color: #7378fa;
  top: 132px;
}
.remlist {
  width: 1160px;
  height: 300px;
  margin: 0 auto;
}
.remlist ul li {
  width: 293px;
  height: 300px;
  margin: 11px 45px;
  display: inline-block;
  position: relative;
}
.remlist ul li .res_img {
  width: 96px;
  height: 82px;
  position: absolute;
  top: 29px;
  left: 97px;
}
.remlist ul li .res_img img {
  width: 100%;
  height: 100%;
}
.remlist ul li .res_tit {
  width: 100%;
  height: 20px;
  position: absolute;
  top: 136px;
  left: 0;
}
.remlist ul li .res_tit p {
  text-align: center;
  color: #7bc7ff;
}
.remlist ul li .res-con {
  width: 61%;
  height: 50px;
  position: absolute;
  top: 185px;
  left: 59px;
}
.remlist ul li .res-con p {
  text-align: center;
  color: #666;
  font-size: 15px;
}
.teacherlist {
  width: 100%;
  height: 171px;
  background: #76c6fe;
  margin: 120px auto 10px auto;
}
.teacherlist .teacherlist_box {
  width: 1160px;
  height: 100%;
  background: #fff;
  position: relative;
  margin: 0 auto 0 auto;
}
.teacherlist .teacherlist_box .teacherlist_box_top {
  width: 100%;
  height: 51px;
  opacity: 1;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: absolute;
  top: -50px;
  border-bottom: 0;
  border: 1px solid rgba(121, 178, 255, 0.24);
  border-bottom: 0;
}
.teacherlist_box_top_next {
  width: 100%;
  height: 150px;
}
.teacherlist_box_top_next p {
  text-align: center;
}
.teacherlist_box_top_next p:nth-child(1) {
  color: #666;
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
}
.teacherlist_box_top_next p:nth-child(2) {
  color: #ccc;
  line-height: 30px;
}
.teacherlist_box_top_next p:nth-child(3) {
  color: #999;
  line-height: 30px;
}
.tec_list {
  width: 100%;
  height: 600px;
}
.photos_list {
  width: 100%;
  height: 600px;
  background: white;
  position: absolute;
}
#content {
  width: 100%;
  margin: -10px auto;
  background: #76c6fe;
}
#content .teacher .teacher-photos {
  width: 1160px;
  height: 676px;
  margin: 0 auto;
}
#content .teacher .teacher-photos .title {
  width: 320px;
  height: 96px;
  /* background: url(../assets/image/download/yuan2.png) no-repeat; */
  margin: 0 auto;
  background-position: 21px 10px;
  -webkit-animation: magnify 2s linear infinite alternate;
  -moz-animation: magnify 2s linear infinite alternate;
  animation: magnify 2s linear infinite alternate;
  margin: 14px auto;
  padding-top: 14px;
}
#content .teacher .teacher-photos .photos_list {
  width: 1160px;
  height: 647px;
  position: relative;
  margin: 0 auto;
}
#content .teacher .teacher-photos .photos_list ul li {
  list-style: none;
  cursor: pointer;
}
#content .teacher .teacher-photos .photos_list ul .li1 {
  position: absolute;
  top: 180px;
  left: 150px;
}
#content .teacher .teacher-photos .photos_list ul .li2 {
  position: absolute;
  top: 0;
  left: 258px;
}
#content .teacher .teacher-photos .photos_list ul .li3 {
  position: absolute;
  top: 182px;
  left: 359px;
}
#content .teacher .teacher-photos .photos_list ul .li4 {
  position: absolute;
  top: 4px;
  left: 468px;
}
#content .teacher .teacher-photos .photos_list ul .li5 {
  position: absolute;
  top: 4px;
  left: 680px;
}
#content .teacher .teacher-photos .photos_list ul .li6 {
  position: absolute;
  top: 182px;
  left: 575px;
}
#content .teacher .teacher-photos .photos_list ul .li7 {
  position: absolute;
  top: 182px;
  left: 785px;
}
#content .teacher .teacher-photos .photos_list ul .li8 {
  position: absolute;
  top: 361px;
  left: 250px;
}
#content .teacher .teacher-photos .photos_list ul .li9 {
  position: absolute;
  top: 361px;
  left: 462px;
}
#content .teacher .teacher-photos .photos_list ul .li10 {
  position: absolute;
  top: 361px;
  left: 676px;
  left: 704px;
}
#content .teacher .teacher-photos .photos_list ul .li1 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li1 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li1 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li1 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li1 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li1 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li1 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li1 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li1 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 77px;
  height: 0;
  color: white;
  bottom: -120px;
}
#content .teacher .teacher-photos .photos_list ul .li1 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li1 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li1 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 14px;
  font-weight: bolder;
}
#content .teacher .teacher-photos .photos_list ul .li2 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li2 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li2 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li2 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li2 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li2 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li2 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li2 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li2 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 64px;
  height: 0;
  color: white;
  bottom: -120px;
}
#content .teacher .teacher-photos .photos_list ul .li2 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li2 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li2 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 14px;
  font-weight: bolder;
}
#content .teacher .teacher-photos .photos_list ul .li3 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li3 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li3 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li3 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li3 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li3 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li3 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li3 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li3 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 83px;
  height: 0;
  color: white;
  bottom: -140px;
  font-size: 14px;
  width: 199px;
}
#content .teacher .teacher-photos .photos_list ul .li3 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li3 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li3 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 18px;
  font-weight: bolder;
}
#content .teacher .teacher-photos .photos_list ul .li4 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li4 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li4 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li4 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li4 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li4 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li4 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li4 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li4 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 85px;
  height: 0;
  color: white;
  bottom: -120px;
}
#content .teacher .teacher-photos .photos_list ul .li4 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li4 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li4 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 14px;
  font-weight: bolder;
}
#content .teacher .teacher-photos .photos_list ul .li5 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li5 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li5 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li5 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li5 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li5 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li5 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li5 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li5 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 88px;
  height: 0;
  color: white;
  bottom: -120px;
}
#content .teacher .teacher-photos .photos_list ul .li5 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li5 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li5 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 18px;
  font-weight: bolder;
}
#content .teacher .teacher-photos .photos_list ul .li6 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li6 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li6 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li6 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li6 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li6 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li6 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li6 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li6 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 72px;
  height: 0;
  color: white;
  bottom: -120px;
}
#content .teacher .teacher-photos .photos_list ul .li6 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li6 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li6 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 18px;
  font-weight: bolder;
}
#content .teacher .teacher-photos .photos_list ul .li7 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li7 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li7 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li7 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li7 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li7 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li7 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li7 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li7 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 100px;
  height: 0;
  color: white;
  bottom: -120px;
}
#content .teacher .teacher-photos .photos_list ul .li7 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li7 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li7 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 18px;
  font-weight: bolder;
}
#content .teacher .teacher-photos .photos_list ul .li8 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li8 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li8 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li8 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li8 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li8 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li8 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li8 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li8 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 100px;
  height: 0;
  color: white;
  bottom: -120px;
}
#content .teacher .teacher-photos .photos_list ul .li8 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li8 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li8 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 18px;
  font-weight: bolder;
}
#content .teacher .teacher-photos .photos_list ul .li9 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li9 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li9 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li9 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li9 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li9 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li9 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li9 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li9 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 100px;
  height: 0;
  color: white;
  bottom: -120px;
}
#content .teacher .teacher-photos .photos_list ul .li9 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li9 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li9 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 18px;
  font-weight: bolder;
}
#content .teacher .teacher-photos .photos_list ul .li10 .box {
  position: absolute;
}
#content .teacher .teacher-photos .photos_list ul .li10 .lineF,
.lineS {
  position: absolute;
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li10 .lineS {
  top: 182px;
  left: 105px;
}
#content .teacher .teacher-photos .photos_list ul .li10 .boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li10 .boxF,
.boxS {
  visibility: hidden;
}
#content .teacher .teacher-photos .photos_list ul .li10 .boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
#content .teacher .teacher-photos .photos_list ul .li10 .boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
#content .teacher .teacher-photos .photos_list ul .li10 .boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
#content .teacher .teacher-photos .photos_list ul .li10 .overlay {
  transition: all 250ms ease-in-out 0s;
  position: relative;
  text-align: center;
  padding-top: 66px;
  height: 0;
  color: white;
  bottom: -120px;
}
#content .teacher .teacher-photos .photos_list ul .li10 .overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
#content .teacher .teacher-photos .photos_list ul .li10 .boxT:hover .overlay {
  height: 300px;
  bottom: 0;
  font-size: 14px;
}
#content .teacher .teacher-photos .photos_list ul .li10 .overlay a {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  background-color: #d3b850;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: White;
  font-size: 18px;
  font-weight: bolder;
}
.bg1img {
  width: 96px;
  height: 248px;
  position: absolute;
  top: 400px;
  left: -97px;
}
.bg1img img {
  width: 100%;
  height: 100%;
}
.bg2img {
  width: 96px;
  height: 248px;
  position: absolute;
  top: 400px;
  right: -90px;
}
.bg2img img {
  width: 100%;
  height: 100%;
}
.booshow {
  width: 1080px;
  height: 600px;
  margin: 0 auto;
}
.book_top {
  width: 100%;
  height: 100px;
  margin-top: 50px;
}
.book_top p {
  text-align: center;
}
.book_top p:nth-child(1) {
  color: #666;
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
}
.book_top p:nth-child(2) {
  color: #ccc;
  line-height: 30px;
  margin-top: 10px;
}
.book_top p:nth-child(3) {
  color: #999;
  line-height: 30px;
}
.swiper_list {
  width: 1160px;
  height: 600px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  border-radius: 14px;
  margin: 20px auto;
  position: relative;
}
.swiper_list .swiper_list_box {
  width: 350px;
  height: 500px;
  position: absolute;
  top: 20px;
  left: 125px;
}
.swiper_list_right {
  position: absolute;
  top: 10px;
  left: 513px;
  width: 400px;
  height: 500px;
}
.swiper_list_right .tx p,
span {
  font-family: 微软雅黑;
  font-size: 28px;
  color: #225b8b;
}
.swiper_list_right .txt1 {
  position: absolute;
  top: 35px;
  width: 200px;
  width: 200px;
  height: 85px;
}
.swiper_list_right .txt2 {
  position: absolute;
  top: 175px;
  width: 200px;
  width: 200px;
  height: 85px;
}
.swiper_list_right .txt3 {
  position: absolute;
  top: 315px;
  width: 200px;
  width: 200px;
  height: 85px;
}
.swiper_list_box .swiper-container {
  width: 350px;
  height: 500px;
}
.dow_list {
  width: 1160px;
  height: 110px;
  margin: 10px auto 0 auto;
}
.dow_list ul li {
  width: 290px;
  height: 110px;
  display: inline-block;
  margin: 0 46px;
  position: relative;
}
.dow_list ul li p:nth-child(1) {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 25px;
  left: 0;
}
.dow_list ul li p:nth-child(1) img {
  width: 100%;
  height: 100%;
}
.dow_list ul li p:nth-child(2) {
  position: absolute;
  top: 36px;
  left: 67px;
  color: #7bc7ff;
}
.dow_list ul li p:nth-child(3) {
  position: absolute;
  top: 63px;
  left: 64px;
  color: #666;
}
.quick_move {
  width: 100%;
  height: 400px;
  margin: 146px auto 0 auto;
  background: #f8fdffff;
}
.quock_list {
  width: 1160px;
  height: 110px;
  margin: 10px auto 0 auto;
}
.quick_move_top {
  width: 1160px;
  height: 100px;
  margin: 0 auto;
}
.quick_move_top p:nth-child(1) {
  color: #666;
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
}
.quick_move_top p:nth-child(2) {
  text-align: center;
  color: #ccc;
  font-size: 13px;
  margin-top: 10px;
}
.quock_list ul li {
  width: 212px;
  height: 220px;
  float: left;
  margin: 0 87px;
  position: relative;
}
.quock_list ul li p:nth-child(1) {
  width: 36px;
  height: 39px;
}
.quock_list ul li p:nth-child(1) img {
  width: 100%;
  height: 100%;
}
.quock_list ul li .p1 {
  margin-top: 10px;
  color: #7bc7ff;
  font-size: 14px;
  font-weight: bold;
}
.quock_list ul li .p2 {
  margin: 14px 0;
  color: #666;
  fill: auto;
  font-size: 13px;
}
</style>