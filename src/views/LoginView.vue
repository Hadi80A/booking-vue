<template>
  <h3 class="font-black text-3xl text-green-300 fixed top-10 left-10">TRAVEL</h3>
  <RouterLink to="/" class="fixed top-10 right-10 bg-amber-500 text-white active:bg-amber-700 hover:bg-amber-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
    <font-awesome-icon icon="fa-solid fa-home"/> Return to Home 
  </RouterLink>
  <TransitionRoot
    appear
    show
    enter="transition-all  duration-500 ease-in-out"
    enter-from="opacity-0 scale-95 "
    enter-to="opacity-100 scale-100 "
    leave="transition-all duration-500"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
<div class="section overflow-hidden">
  
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-3 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper rounded-xl shadow-lg">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input  v-model="loginPhone" name="logemail" class="form-style" placeholder="Your Phone" id="logemail" autocomplete="off" required>
												<font-awesome-icon icon="fa-solid fa-user" class="input-icon"/>
											</div>	
											<div class="form-group mt-2">
												<input type="password"  v-model="loginPass" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" required>
												<font-awesome-icon icon="fa-solid fa-key" class="input-icon" />
											</div>
											<button @click="login()" class="btn mt-4">submit</button>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
											<div class="form-group">
												<input v-model="phone" type="text" name="phone" class="form-style" placeholder="Your Phone Number" id="phone" autocomplete="off" required>
												<font-awesome-icon icon="fa-regular fa-circle-user" class="input-icon" />
											</div>	
											<div class="form-group mt-2">
												<input v-model="email" type="text" name="email" class="form-style" placeholder="Your Email" id="email" autocomplete="off" required>
												<font-awesome-icon icon="fa-solid fa-at"  class="input-icon"/>
											</div>	
											<div class="form-group mt-2">
                        <input type="password" name="signpass" v-model="pass" class="form-style" placeholder="Your Password" id="signpass" autocomplete="off" required>
												<font-awesome-icon icon="fa-solid fa-fingerprint" class="input-icon " />
											</div>
                      
                      <div class="form-group mt-2">
                        <input type="password" name="signpass2" v-model="pass2" class="form-style" placeholder="Your Password Again" id="signpass2" autocomplete="off" required>
												<font-awesome-icon icon="fa-solid fa-check-double" class="input-icon " />
                        <password-meter :password="pass" />
											</div>
											<button class="btn mt-4" @click="signup()">submit</button>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
</TransitionRoot>
</template>

<script setup>
  import { TransitionRoot } from '@headlessui/vue';
  import passwordMeter from "vue-simple-password-meter";
</script>

<script>
  import { ref} from 'vue';
  import { createToast } from 'mosha-vue-toastify'; 
  import axios from 'axios';
  axios.defaults.baseURL = 'https://bookingmastermind.pythonanywhere.com'; 

  export default {
      components:{
      },
      data: () => ({
        email:ref('') ,
        phone:ref('') ,
        pass:ref('') ,
        pass2:ref(''),
        loginPhone:ref(''),
        loginPass:ref(''),
      
      }),

      methods:{
        login(){
           axios.post('/token/', {
              'phone': this.loginPhone,
              'password': this.loginPass,
                })
                .then((response) => {
                  console.log(response);
                  this.$cookies.set('refresh', response.data.refresh, { expires: '1d' });
                  this.$cookies.set('token', response.data.access, { expires: '5m' });
                  this.success('login successful');
                  this.$router.go(-1)
                })
                .catch((err) => {
                  this.error('username or password invalid');
                });
        },
          signup(){
            if(this.check()){
              axios.post('/signup/', {
                  'phone': this.phone,
                  'email': this.email,
                  'password1': this.pass,
                  'password2': this.pass2,
                })
                .then((response) => {
                
                  this.success('successful');
                })
                .catch((err) => {
                  err.response.data.message.forEach(msg => {
                    this.error(msg);
                  });
                });
            };
          },
          check(){
            if(this.pass!==this.pass2){
              document.getElementById('signpass').style='@apply border-red-200 border'
              this.error("passwords not equal")
              return false;
            }
            return true;
          },
          error(msg){
            createToast(msg,{position:'bottom-right',type:'danger',showIcon:true,timeout:10000})
          },
          success(msg){
            createToast(msg,{position:'bottom-right',type:'success',showIcon:true,timeout:10000})
          },
      }
}
</script>

<style scoped>
/* Please ❤ this if you like it! */

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');




body{
	font-weight: 300;
	font-size: 15px;
	line-height: 1.7;
	color: #c4c3ca;
	/* background-color: #1f2029; */
	background-color: rgb(229 231 235); 
	overflow-x: hidden;
	overflow-y: hidden;
}
a {
	cursor: pointer;
  transition: all 200ms linear;
}
a:hover {
	text-decoration: none;
}
.link {
  color: #858586;
}
.link:hover {
  color: #102770;
}
p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}
h4 {
  font-weight: 600;
}
h6 span{
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
}
.section{
  position: relative;
  width: 100%;
  display: block;
}
.full-height{
  min-height: 100vh;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label{
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #ffeba7;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before{
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffeba7;
  background-color: #102770;
  font-family: 'unicons';
  content: '\1F86C';
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}
.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}


.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position:absolute;    
  top: 0;
  left: 0;  
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out; 
}
.card-front, .card-back {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255,0.9);
  opacity: 0.95;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 12px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}
.center-wrap{
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}


.form-group{ 
  position: relative;
  display: block;
    margin: 0;
    padding: 0;
}
.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #0a0a0a;
  /* background-color: #1f2029; */
  background-color: rgb(235, 238, 243);
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
}
.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
}
.input-icon {
  position: absolute;
  top: 10px;
  left: 18px;
  height: 24px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: #102770;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.form-group input:-ms-input-placeholder  {
  color: #333333be;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input::-moz-placeholder  {
  color: #333333be;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:-moz-placeholder  {
  color: #333333be;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input::-webkit-input-placeholder  {
  color: #333333be;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus:-ms-input-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus::-moz-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus:-moz-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus::-webkit-input-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.btn{  
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition : all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #ffeba7;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
}
.btn:active,
.btn:focus{  
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);
}
.btn:hover{  
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);
}




.logo {
	position: absolute;
	top: 30px;
	right: 30px;
	display: block;
	z-index: 100;
	transition: all 250ms linear;
}
.logo img {
	height: 26px;
	width: auto;
	display: block;
}
</style>
