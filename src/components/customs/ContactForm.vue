<template>
   <div class="contact__form">
      <h2>Subscribe to our News Letters</h2>
      <c-box 
         height="200px" 
         bgColor="#ffffff" 
         borderRadius="7px" 
         boxShadow="0px 2px 30px 5px rgba(0 , 0 , 0 , .3)" 
         :width="{ base:'90%' , md:'50%'}"
         padding="2rem"
         >
         <c-box w="full" mt="1rem">   
            <c-input border="1px solid #eeeeee" placeholder="Please Input your email address"/>
            <c-box mt="2rem" w="full" display="flex" justify-content="center">
               <c-button variant-color="green" bgColor="#FFC872" color="#000" border="none">Subscribe Now</c-button>
            </c-box>
         </c-box>
      </c-box>
   </div>
</template>

<script>

import { CBox , CInput , CButton } from '@chakra-ui/vue';

export default {
   name:'contact-us',
   components: {
      CBox,
      CInput,
      CButton,
   }
}
</script>
<style lang="scss">
   .mail__logo {
      width: 100px;
      transform: translateX(-50px);
   }

   .contact__form {
      height: 500px;
      background: rgba(255, 200, 114, 0.15);
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