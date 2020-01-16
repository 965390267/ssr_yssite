<template>
    <div class="login" id='login'>
				<div class="login_main" id='login_main'>
					<div class="login_box" onclick="stopBubble(event)">
						<div class="login_box_left">
							<div class="login_box_left_bg">
								<!-- <img id='login_img' src="img/logoingbg.png" /> -->
								<h3 style='color:#7BC7FF'>快捷登录方式</h3>
								<p style='line-height: 41px;'>已经下载云师APP的用户</p>
								<p style='line-height: 41px;'>1.在云师APP打开<span style='color:red;'>我的课程</span>随便找一个课程打开</p>
								<p style='line-height: 41px;'>2.随便找一节课，点击<span style='color:red;'>扫码上课</span>，</p>
								<p style='line-height: 41px;'>3.在电脑端切换到<span style='color:red;'>电脑上课</span>导航，</p>
								<p style='line-height: 41px;'>4.用手机直接扫描二维码即可登录</p>
							</div>
						</div>
						<div class="login_boxs_right">
							<div class="login_boxs_right_close" onclick="closelogin()">
								<img src="../assets/image/login/logonclose.png" alt="" />
							</div>
							<div class="login_boxs_right_title">
								<p>欢迎登录云师教育</p>
								<p>WELCOME TO YUNSHI EDUCATION</p>
							</div>
							<div id="phone_hide">
								<div class="login_boxs_right_tel">
									<div class="login_boxs_right_tel_input">
										<div class="phons_bg">
											<img src="../assets/image/login/phones.png" alt="" />
										</div>
										<div class="login_boxs_input">
											<input type="text" name="" id="phone" value="" />
										</div>
									</div>
								</div>
								<div class="getapp">
									<div class="getappimg">
										<img src="../assets/image/login/dengapo.png" />
									</div>
									<div class="getapptxt">
										<p>若已注册APP，请用注册号码登录</p>
									</div>
								</div>
								<div class="getapp_btn">
									<p onclick="nextStep()">下一步</p>
								</div>
							</div>
							<!--验证码输入部分-->
							<div id="code_box">
								<div class="code_box_top">
									<div class="code_box_top_left">
										<div class="top_left_img">
											<img src="../assets/image/login/logobtns.png" />
										</div>
										<div class="top_left_input">
											<input type="" maxlength="6" onchange='codefos()' id="codenum" value="" placeholder="请输入验证码" />
										</div>
									</div>
									<div class="code_box_top_right" id="code_box_top_right">
										<p id='sendcodep' onclick="sendcode()">发送验证码</p>
									</div>
									<div class="code_box_top_right_one" id='right_one'>
										
										<span id='span'></span>
									</div>
								</div>
								<p class="code_p" id='code_p'></p><!--已发送验证码至13888888888-->
								<div class="code_btn_hui">
									<p>确认登录</p>
								</div>
								<div class="code_btn_lan" id="code_btn_lan">
									<p onclick="opennewwin()">确认登录</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>
<style scoped>
.login {
	display: none;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0px;
	left: 0;
	z-index: 888;
}

.login_main {
	width: 100%;
	height: 100%;
	display: relative;
}

.login_main .login_box {
	width: 800px;
	height: 400px;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 0px 40px rgba(136, 136, 136, 0.13);
	border-radius: 20px;
	transform: translate(-50%, -50%);
	position: absolute;
	top: 50%;
	left: 50%;
}

.login_main .login_box .login_box_left {
	width: 425px;
	height: 300px;
	position: absolute;
	top: 50px;
	left: 35px;
	border-right: 1px solid rgb(246, 241, 241);
}

.login_box_left_bg {
	width: 396px;
	height: 260px;
	position: absolute;
	top: 20px;
}

.login_box_left_bg img {
	width: 100%;
	height: 100%;
}

.login_imgon {
	-webkit-animation: 1s login_img;
	background: transparent;
}

@keyframes login_img {
	0% {
		transform: scale(1.4, 1.4);
	}
	10% {
		transform: scale(1, 1);
	}
	25% {
		transform: scale(1.2, 1.2);
	}
	50% {
		transform: scale(1, 1);
	}
	70% {
		transform: scale(1.2, 1.2);
	}
	100% {
		transform: scale(1, 1);
	}
}

.login_boxs_right {
	width: 315px;
	height: 100%;
	position: absolute;
	top: 0px;
	right: 0px;
}

.login_boxs_right_close {
	width: 26px;
	height: 26px;
	position: absolute;
	top: 17px;
	right: 23px;
	cursor: pointer;
}

.login_boxs_right_close img {
	width: 100%;
	height: 100%;
}

.login_boxs_right_title {
	width: 100%;
	height: 80px;
	position: absolute;
	top: 50px;
}

.login_boxs_right_title p:nth-child(1) {
	text-align: center;
	font-size: 23px;
	color: #666666;
	font-weight: 400;
}

.login_boxs_right_title p:nth-child(2) {
	text-align: center;
	font-size: 14px;
	color: #CCCCCC;
	line-height: 55px;
}

.login_boxs_right_tel {
	width: 94%;
	height: 150px;
	position: absolute;
	top: 121px;
	left: -5px;
}

.login_boxs_right_tel_input {
	width: 100%;
	height: 45px;
	border: 1px solid #467CFF;
	margin-top: 15px;
	border-radius: 10px;
	box-shadow: 0px 0px 6px 0px #467CFF99;
	position: relative;
}

.phons_bg {
	position: absolute;
	width: 17px;
	height: 28px;
	top: 8px;
	left: 10px;
}

.phons_bg img {
	width: 100%;
	height: 100%;
}

.login_boxs_input {
	width: 250px;
	height: 30px;
	position: absolute;
	left: 39px;
	top: 8px;
}

.login_boxs_input input {
	width: 100%;
    height: 100%;
    outline: none;
    text-align: left;
    border: 0px !important;
    
}

.getapp {
	width: 94%;
	height: 35px;
	position: absolute;
	top: 185px;
	position: relative;
}

.getappimg {
	width: 20px;
	height: 20px;
	position: absolute;
	top: 10px;
	left: 40px;
}

.getappimg img {
	width: 100%;
	height: 100%;
}

.getapptxt {
	position: absolute;
	left: 70px;
	top: 10px;
}

.getapptxt p {
	color: #FC8989;
	font-size: 13px;
}

.getapp_btn {
	position: absolute;
	left: 49px;
	top: 260px;
	width: 190px;
	height: 70px;
	background: url('../assets/image/login/logobtns10.png');
	background-size: 100%;
	cursor: pointer;
	transition: 0.5;
}

.getapp_btn p {
	text-align: center;
	line-height: 53px;
	font-size: 22px;
	color: #fff;
}

#code_box {
	width: 100%;
	height: 225px;
	display: none;
	position: absolute;
	top: 122px;
	left: -14px;
}

#code_box .code_box_top_left {
	width: 179px;
	height: 40px;
	border: 1px solid #467CFF;
	border-radius: 10px;
	position: absolute;
	top: 10px;
}

#code_box .code_box_top_left .top_left_img {
	width: 20px;
	height: 23px;
	position: absolute;
	top: 10px;
	left: 5px;
}

#code_box .code_box_top_left .top_left_img img {
	width: 100%;
	height: 100%;
}

#code_box .code_box_top_left .top_left_input {
	width: 140px;
	height: 40px;
	position: absolute;
	top: 0px;
	left: 32px;
	overflow: hidden;
}

#code_box .code_box_top_left .top_left_input input {
	width: 100%;
	height: 100%;
	outline: none;
	border: 0px !important;
}

.code_box_top_right {
	width: 100px;
	height: 40px;
	background: url(../assets/image/login/yzm.png);
	background-size: 100% 100%;
	position: absolute;
	top: 10px;
	right: 23px;
}

.code_box_top_right p {
	font-size-adjust: inherit;
	text-align: center;
	line-height: 40px;
	color: #fff;
	cursor: pointer;
	font-size: 13px;
}

.code_p {
	position: absolute;
	top: 65px;
	left: 50px;
	font-size: 14px;
	color: #ccc;
}

.code_btn_hui {
	position: absolute;
	left: 49px;
	top: 130px;
	width: 190px;
	height: 70px;
	background: url(../assets/image/login/logobtns11.png);
	background-size: 100%;
	cursor: pointer;
	transition: 0.5;
}

.code_btn_hui p {
	text-align: center;
	line-height: 53px;
	font-size: 22px;
	color: #fff;
}

.code_box_top_right_one {
	width: 100px;
	height: 40px;
	background: #a4a4a4;
	background-size: 100% 100%;
	position: absolute;
	top: 10px;
	right: 23px;
	border-radius: 10px;
	display: none;
}

.code_box_top_right_one p {
	color: #fff;
	text-align: center;
	font-size: 14px;
}

.code_box_top_right_one span {
	color: #fff;
    text-align: center;
    display: block;
    line-height: 40px;
}

.code_btn_lan {
	position: absolute;
	left: 49px;
	top: 130px;
	width: 190px;
	height: 70px;
	background: url(../assets/image/login/logobtns1.png);
	background-size: 100%;
	cursor: pointer;
	transition: 0.5;
	
}

.code_btn_lan p {
	text-align: center;
	line-height: 53px;
	font-size: 22px;
	color: #fff;
}

.logout {
	cursor: pointer;
}

.logspan:hover {
	color: red;
}
</style>