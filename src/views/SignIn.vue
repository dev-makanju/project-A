<template>
   <c-flex width="100%" flex-direction="rows" h="100vh">
      <c-box flex="1" display="flex" justify-content="center" mt="1rem" align-items="center">
         <c-box w="400px">
            <c-box display="flex" ml="1rem" mr="1rem" align-items="center" justify-content="space-between">  
               <img class="logo" src="../assets/sponsor/logoicon.png" onerror="this.style.display='none'">
               <p class="back" @click="$router.go(-1)" cursor="pointer">back</p>
            </c-box>
            <c-heading font-size="30px" color="rgba(0, 0, 0, 0.8)" padding="20px 30px">Sign In</c-heading>
            <form class="form">
               <div :class="[ 'form__control' , emailError && 'is-error']">
                  <label for="">Email</label>
                  <input type="text" v-model="email" placeholder="Enter your email" required>
               </div>
                  <div :class="[ 'form__control' , passwordError && 'is-error']">
                  <label for="">Password</label>
                  <input type="password" v-model="password" placeholder="Enter your password" required>
               </div>
               <div class="form__control__check">
                  <input type="checkbox" value="lsRememberMe" id="rememberMe">
                  <label for="">Remember me</label>
               </div>
               
               <c-box mt="2rem">
                  <c-button @click="loginUser" w="full" variant-color="blue" size="md" border="none"
                     :is-loading="loading"
                     loading-text="signing in"
                  >
                     Sign In
                  </c-button>
               </c-box>

               <c-box mt="1.5rem" display="flex" justify-content="center" align-items="center">
                  <c-box w="full" h="1px" bgColor="#000" opacity=".5"/>
                     Or
                  <c-box w="full" h="1px" bgColor="#000" opacity=".5"/>
               </c-box>

               <c-box display="flex" gap="5px" justify-content="center" p="2rem 0px">
                  <p>Don't have an account</p><router-link class="link-auth" :to="{ name:'sign-up'}">Sign Up</router-link>
               </c-box>
            </form>
         </c-box>
      </c-box>
      <c-box  flex="1" bgColor="#006BBB" :display="{base:'none', md:'flex'}" justify-content="center" align-items="center">
         <img class="form__iamge" src="../assets/sponsor//formimage.svg" onerror="this.style.display='none'">   
      </c-box>
   </c-flex>
</template>
<script>

import { CFlex , CBox , CHeading , CButton  } from "@chakra-ui/vue";
import { mapActions } from 'vuex'

export default {
   name:'SignIn',
   components: {
      CFlex,
      CBox,
      CHeading,
      CButton,
   },
   data(){
      return {
         email: '',
         password: '',
         emailError: false,
         passwordError: false,
         success: null,
         isEmailInput: null,
         isPasswordInput:null,
         loading:null,
         toastTitle: '',
         modalMessage:'',
         messageInfo:'',
         statusInfo: '',
      }
   },
   mounted(){
      this.remenberMe();
   },
   methods: {
      ...mapActions(['userLogin','getUserInfo']),
      validate(){
         this.emailError = this.email === ''
         this.passwordError = this.password === ''
      },
       showToast() {
         this.$toast({
            title: this.toastTitle,
            description: this.messageInfo,
            status: this.statusInfo,
            duration: 10000,
            position:'top',
            variant: 'subtle',
         })
      },
      remenberMe(){
         const rmCheck = document.getElementById("rememberMe");
         if (localStorage.checkbox && localStorage.checkbox !== "") {
            rmCheck.setAttribute("checked", "checked");
            this.email = localStorage.email;
         } else {
            rmCheck.removeAttribute("checked");
            this.email = "";
         }
      },
      loginUser(){
         if(this.email === '' || this.password === ''){
            this.validate();
         }else{
            let input = {
              email: this.email,
              password: this.password,
            }
            const rmCheck = document.getElementById("rememberMe");
            if (rmCheck.checked && this.email !== "") {
               localStorage.username = this.email;
               localStorage.checkbox = rmCheck.value;
            } else {
               localStorage.username = "";
               localStorage.checkbox = "";
            }

            this.loading = true;
            this.userLogin(input).then( res => {
               if(res.status === 200){
                  this.loading = false;
                  this.$router.push('/forum');
                  this.$store.dispatch('getUserInfo');
                  window.location.reload();
                  return;
               }
               this.toastTitle = 'Oops!!!'
               this.statusInfo = 'error';
               this.loading = false;
               this.messageInfo = res.data.message
               this.showToast()
            }).catch(err => {
               this.toastTitle = 'An Error occured!'
               this.loading = false;
               this.statusInfo = 'error';
               this.messageInfo = 'please try again'
               this.showToast()
               err;
            });
         }
      }
   }
}

</script>

<style lang="scss">
   .form__control__check {
      display: inline;
      
      & label{
         margin-left: 10px;
         font-size: 14px;
         font-weight: 600;
         color: rgba(0, 0, 0, 0.8);
      }
   }

   .link-auth {
      text-decoration: none;
      color: blue;
   }

   .form__iamge {
      max-width: 400px;
   }

   .form {
      box-shadow: 0px 2px 5px rgba(0 , 0 , 0 , .1);
      border-radius: 7px;
      padding: 20px 30px;
   }

   .form__control {
      margin-bottom: 1rem;

      & label {
         display: block;
         font-size: 14px;
         padding: 10px 7px;
         color:rgba(0, 0, 0, 0.8);
         font-weight: bold;
      }

      & input {
         padding: 7px;
         width: 100%;
         border: none;
         border-bottom: 1px solid black;
         outline: none;
         font-size: 14px;
      }
   }

   .logo {
      width: 70px;
   }

   .is-error input{
      border-bottom: 1px solid red !important ;
   }
</style>