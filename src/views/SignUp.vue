<template>
   <c-flex width="100%" flex-direction="rows" h="100vh">
      <c-box flex="1" bgColor="#006BBB" :display="{base:'none', md:'flex'}" justify-content="center" align-items="center">
         <img class="form__iamge" src="../assets/sponsor/form2.svg" onerror="this.style.display='none'">   
      </c-box>
      <c-box flex="1" display="flex" justify-content="center" overflow-y="auto">
         <c-box w="400px">
            <c-box display="flex" ml="1rem" mr="1rem" align-items="center" justify-content="space-between">  
               <img class="logo" src="../assets/sponsor/logoicon.png" onerror="this.style.display='none'">
               <p class="back" @click="$router.go(-1)" cursor="pointer">back</p>
            </c-box>
            <c-heading font-size="30px" color="rgba(0, 0, 0, 0.8)" padding="20px 30px">Sign Up</c-heading>
            <form class="form">
               <div :class="[ 'form__control' , firstNameError && 'is-error']">
                  <label for="">Firstname</label>
                  <input type="text" v-model="firstname" placeholder="Enter your firstname" required>
               </div>
               <div :class="[ 'form__control' , lastNameError && 'is-error']">
                  <label for="">Lastname</label>
                  <input type="text" v-model="lastname" placeholder="Enter your lastname" required>
               </div>
               <div :class="[ 'form__control' , occupationError && 'is-error']">
                  <label for="">Occupation</label>
                  <input type="text" v-model="occupation" placeholder="Enter your occupation" required>
               </div>
               <div :class="[ 'form__control' , emailError && 'is-error']">
                  <label for="">Email</label>
                  <input type="text" v-model="email" placeholder="Enter your email" required>
               </div>
               <div :class="[ 'form__control' , passwordError && 'is-error']">
                  <label for="">Password</label>
                  <input type="password" v-model="password" placeholder="Enter your password" required>
               </div>
               <div :class="[ 'form__control' , confirmError && 'is-error']">
                  <label for="">Confirm Password</label>
                  <input type="password" v-model="confirmPass" placeholder="Confirm your password" required>
               </div>
               
               <c-box mt="2rem">
                  <c-button @click="registerUser" w="full" variant-color="blue" size="md" border="none"
                  :is-loading="loading"
                  loading-text="signing up"
                  >Sign Up</c-button>
               </c-box>

               <c-box mt="1.5rem" display="flex" justify-content="center" align-items="center">
                  <c-box w="full" h="1px" bgColor="#000" opacity=".5"/>
                     Or
                  <c-box w="full" h="1px" bgColor="#000" opacity=".5"/>
               </c-box>

               <c-box display="flex" gap="5px" justify-content="center" p="2rem 0px">
                  <p>Don't have an account</p><router-link class="link-auth" :to="{ name:'sign-in'}">Sign In</router-link>
               </c-box>
            </form>
         </c-box>
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
         firstname: '',
         lastname: '',
         occupation: '',
         email: '',
         password: '',
         confirmPass:'',
         emailError: false,
         passwordError: false,
         confirmError: false ,
         firstNameError: false,
         lastNameError: false,
         occupationError: false,
         success: null,
         isEmailInput: null,
         isPasswordInput:null,
         loading:null,
         modalMessage:'',
         messageInfo:'',
         statusInfo: '',
         toastTitle:'',
      }
   },
    methods: {
      ...mapActions(['userSignUp' , 'userLogin' , 'getUserInfo']),
      validate(){
         this.emailError = this.email === '';
         this.passwordError = this.password === '';
         this.confirmError = this.confirmPass === '';
         this.firstNameError = this.firstname === '';
         this.lastNameError = this.lastname === '';
         this.occupationError = this.occupation === '';
         if(this.password !== this.confirmPass){
            this.toastTitle='Validation Error!!'
            this.messageInfo='Confirm password is not a match';
            this.statusInfo='error';
            this.showToast();
         }
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
      registerUser(){
         if(
            this.email === '' || 
            this.password === '' || 
            this.confirmPass === '' ||
            this.firstname === '' ||
            this.lastname === '' ||
            this.occupation === '' ||
            this.password !== this.confirmPass
         ){
            this.validate();
         }else{
            let input = {
               email: this.email,
               password: this.password,
               firstname : this.firstname,
               lastname: this.lastname,
               occupation: this.occupation,
               confirmpassword: this.confirmPass,
            }

            let logInput = {
               email: this.email,
               password: this.password,               
            }
            this.loading = true;
            this.userSignUp(input).then( res => {
               if(res.status === 201){
                     this.userLogin(logInput).then( res => {
                        if(res.status === 200){
                           this.loading = false;
                           this.statusInfo = 'success';
                           this.toastTitle = 'Hurray!!'
                           this.messageInfo = 'You have successfully created an account'
                           this.showToast()
                           this.$router.push({ name:'forum' });
                           this.$store.dispatch('getUserInfo');
                           window.location.reload();
                           return;
                        }
                        this.loading = false;
                        this.toastTitle = 'Oops!!!'
                        this.statusInfo = 'error';
                        this.messageInfo = res.data.message
                        this.showToast()
                     }).catch(err => {
                        this.loading = false;
                        this.toastTitle = 'An Error occured!'
                        this.statusInfo = 'error';
                        this.messageInfo = 'please try again'
                        this.showToast()
                        err;
                     });
               }else {
                  this.statusInfo = 'error';
                  this.toastTitle = 'Error!'
                  this.loading = false;
                  this.messageInfo = res.data.message
                  this.showToast()
               }
            }).catch(err => {
               this.loading = false;
               this.statusInfo = 'error';
               this.messageInfo = 'Oops!! , Try again'
               console.log(err);
            });
         }
      }
   },
   watch: {
      //
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
</style>