<template>
    		<div class="phone">
              
	<ul>
		<li>
			<div class="phone_img">
				<img src="../assets/image/commom/phone.png" />
			</div>
			<div class="phone_p">
				<p>咨询 </p>
				<p>热线</p>
			</div>
			<div class="telbox">
				<p>400-996-2596</p>
			</div>
		</li>
		<li>
			<div class="phone_img">
				<img src="../assets/image/commom/xiajiantou.png" />
			</div>
			<div class="phone_p">
				<p>APP</p>
				<p>下载 </p>
			</div>
			<div class="phone_code">
				<img src="../assets/image/commom/yun1.png"/>
			</div>
		</li>
		<li onclick="pageScroll()">
			<div class="phone_img">
				<img src="../assets/image/commom/shangjiantou.png" />
			</div>
			<div class="phone_p">
				<p>返回 </p>
				<p>顶部</p>
			</div>
		</li>
	</ul>
</div>
</template>
<script>
export default {

    mounted(){
       window.onscroll=()=>{

       }
    }
}
</script>
<style scoped>

/*侧面*/

.phone {
	width: 40px;
	height: 210px;
	position: fixed;
	top: 300px;
	right: 0px;
	/* display: none; */
	z-index: 999;
}

.phone ul li {
	width: 40px;
	height: 70px;
	background: red;
	margin-top: 1px;
	cursor: pointer;
	position: relative;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 0px 10px rgba(121, 178, 255, 0.45);
	opacity: 1;
	border-radius: 15px 0px 0px 15px;
}

.phone ul li:hover .phone_code {
	display: block;
}

.phone ul li:hover .telbox {
	display: block;
}

.phone ul li .telbox {
	width: 129px;
    height: 34px;
    position: absolute;
    top: 22px;
    left: -130px;
    border-radius: 11px;
    background: #6ea0f9;
    box-shadow: 0px 0px 10px rgba(121, 178, 255, 0.45);
    display: none;
  
    color: #fff;
}

.phone ul li .telbox p {
	text-align: center;
	line-height: 34px;
}

.phone ul li .phone_code {
	width: 129px;
	height: 134px;
	background: #fff;
	position: absolute;
	top: -15px;
	left: -130px;
	display: none;
	box-shadow: 0px 0px 10px rgba(121, 178, 255, 0.45);
}

.phone ul li .phone_code img {
	width: 100%;
	height: 100%;
}

.phone ul li .phone_img {
	width: 20px;
	height: 20px;
	position: absolute;
	top: 6px;
	left: 10px;
}

.phone ul li .phone_img img {
	width: 100%;
	height: 100%;
}

.phone_p {
	position: absolute;
	top: 28px;
	left: 8px;
}

.phone_p p {
	font-size: 11px;
	color: #999999;
	text-align: center;
	display: block;
}

</style>