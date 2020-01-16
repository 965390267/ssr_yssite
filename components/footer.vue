<template>
    <div class="footer">
	<div class="footer_box">
		<div class="footer_box_list">
			<ul>
				<li>
					<a href="index.html">首页</a>
				</li>
				<li>
					<a href="curriculum.html">课程</a>
				</li>
				<li>
					<a href="computerClass.html">电脑上课</a>
				</li>
				<li>
					<a href="download.html">下载</a>
				</li>
				<li>
					<a href="aboutme.html">关于我们</a>
				</li>
			</ul>
		</div>
		<div class="footer_box_img">
			<div class="footer_box_imgs">
				<img src="../assets/image/home/footimg.png">
			</div>
			<div class="footer_box_line"></div>
		</div>
		<div class="footer_box_span">
			<p>400-996-2596</p>
			<p>北京海淀区丰慧中路7号新材料创业大厦8层817-022室 </p>
			<p>昆明市五华区龙泉路万彩城1-203</p>
			<p>郑州市管城区商都路建正东方中心D座2414室</p>
			<p></p>

		</div>
		<div class="linbox"></div>
		<div class="footer_addres">
			<ul>
				<li>昆明</li>
				<li>玉溪</li>
				<li>曲靖</li>
				<li>普洱</li>
				<li>文山</li>
				<li>保山</li>
				<li>大理</li>
				<li>昭通</li>
				<li>楚雄</li>
				<li>临沧</li>
				<li>红河</li>
				<li>郑州</li>
			</ul>
		</div>
		<div class="codeimg1">
			<img src="../assets/image/home/cc3.jpg">
		</div>
		<div class="codeimg2">
			<img src="../assets/image/home/cc4.jpg">			
		</div>
		<p class="code_p1">扫一扫，关注我们</p>
		<p class="code_p2">扫一扫，下载APP</p>
		<p class="banquan">版权所有:2018-2023北京云师教育科技有限公司 Copyright 2018-2023 yunshi. All rights Reserved 京ICP备18021495号&nbsp;&nbsp;
         <a style="color: #fafafa" href="http://www.91yunshi.com/sitemap.xml">sitemap</a>
		</p>
	</div>
</div>
</template>
<style scoped>
.footer {
	width: 100%;
	min-width: 1160px;
	height: 300px;
	background: url('../assets/image/home/footbg.png');
	background-size: cover;
	position: relative;
}

.footer_box {
	width: 1160px;
	height: 150px;
	position: absolute;
	top: -50px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	margin: auto;
}

.footer_box_list {
	position: absolute;
	top: 5px;
}

.footer_box_list ul {
	margin-left: -50px;
}

.footer_box_list ul li {
	list-style: none;
	float: left;
	margin: 0px 50px;
}

.footer_box_list ul li a {
	text-decoration: none;
	color: white;
}

.footer_box_img {
	width: 285px;
	height: 115px;
	position: absolute;
	top: 50px;
	left: 0px;
}

.footer_box_imgs {
	width: 260px;
	height: 100px;
	position: absolute;
	top: 0px;
	left: 0px;
}

.footer_box_imgs img {
	width: 100%;
	height: 100%;
}

.footer_box_line {
	width: 2px;
	height: 100px;
	background: white;
	position: absolute;
	top: 0px;
	left: 300px;
	opacity: 0.4;
}

.footer_box_span {
	position: absolute;
	top: 50px;
	left: 320px;
}

.footer_box_span p:nth-child(1) {
	font-size: 20px;
}

.footer_box_span p {
	color: #fff;
	font-size: 14px;
	line-height: 26px;
}

.linbox {
	width: 1160px;
	height: 2px;
	background: #fff;
	opacity: 0.3;
	position: absolute;
	top: 180px;
}

.footer_addres {
	position: absolute;
	top: 185px;
	left: 0px;
}

.footer_addres ul {
	margin-left: -10px;
}

.footer_addres ul li {
	float: left;
	margin: 10px 10px;
	color: #fff;
	opacity: 0.4;
	font-size: 13px;
}

.banquan {
	position: absolute;
	top: 220px;
	left: 0px;
	color: #fff;
	opacity: 0.4;
	font-size: 13px;
}

.codeimg1 {
	width: 120px;
	height: 120px;
	position: absolute;
	top: 0px;
	right: 0px;
}

.codeimg1 img {
	width: 100%;
	height: 100%;
}

.codeimg2 {
	width: 120px;
	height: 120px;
	position: absolute;
	top: 0px;
	right: 130px;
}

.codeimg2 img {
	width: 100%;
	height: 100%;
}

.code_p1 {
	position: absolute;
	top: 125px;
	right: 10px;
	color: #fff;
	font-size: 13px;
}

.code_p2 {
	position: absolute;
	top: 125px;
	right: 140px;
	color: #fff;
	font-size: 13px;
}

</style>