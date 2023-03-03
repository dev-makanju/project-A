<template>
   <c-box bgColor="rgba(255, 200, 114, 0.15)">    
      <div class="contact__form">
         <h2>Subscribe to our News Letter</h2>
         <c-box 
            height="200px" 
            bgColor="#ffffff" 
            borderRadius="7px" 
            boxShadow="0px 2px 30px 5px rgba(0 , 0 , 0 , .3)" 
            :width="{ base:'90%' , md:'50%'}"
            padding="2rem"
            >
            <c-box w="full" mt="1rem">   
               <c-input v-model.trim="email" border="1px solid #eeeeee" placeholder="Please Input your email address"/>
               <c-box mt="2rem" w="full" display="flex" justify-content="center">
                  <c-button @click="submitForm" variant-color="blue" bgColor="#FFC872" color="#000" border="none">Subscribe Now</c-button>
               </c-box>
            </c-box>
         </c-box>
      </div>
   </c-box>
</template>

<script>

import { CBox , CInput , CButton } from '@chakra-ui/vue';

export default {
   name:'contact-us',
   components: {
      CBox,
      CInput,
      CButton,
   },
   data(){
      return {
         email: '',
         title: '',
         status: '',
         content:'',
      }
   },
   methods: {
      showToast() {
         this.$toast({
            title: this.title,
            description: this.content,
            status: this.status,
            duration: 10000,
            position: top,
         })
      },
      submitForm(){
         const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
         const email = regex.test(this.email);
         
         if(email){
            this.title = 'Thank You !!'
            this.content = "You have successfully sign up for our newsletter"
            this.status = 'success';
            this.showToast() 
            return;
         }
            this.title = 'Invalid Email !!'
            this.content = "Kindly provide a valid email address"
            this.status = 'error';
            this.showToast();
      }
   },
}
</script>
<style lang="scss">
   .mail__logo {
      width: 100px;
      transform: translateX(-50px);
   }

   .contact__form {
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 3rem;
      max-width: 1440px;
      margin: 0px auto;

      & h2 {
         color: #006BBB;

      }
   }
</style>