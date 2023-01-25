<template>
   <c-flex width="100%" flex-direction="rows" h="100vh">
      <c-box  flex="1" bgColor="#006BBB" :display="{base:'none', md:'flex'}" justify-content="center" align-items="center">
         <img class="form__iamge" src="../assets/sponsor/form2.svg" onerror="this.style.display='none'">   
      </c-box>
      <c-box flex="1" display="flex" justify-content="center" mt="1rem">
         <c-box w="400px">
            <c-box display="flex" align-items="center" justify-content="space-between">  
               <img class="logo" src="../assets/sponsor/logoicon.png" onerror="this.style.display='none'">
               <p class="back" @click="$router.go(-1)" cursor="pointer">back</p>
            </c-box>
            <c-heading font-size="30px" color="rgba(0, 0, 0, 0.8)" padding="20px 30px">Sign Up</c-heading>
            <form class="form">
               <div class="form__control">
                  <label for="">Email</label>
                  <input type="text" placeholder="Enter your email" required>
               </div>
               <div class="form__control">
                  <label for="">Password</label>
                  <input type="password" placeholder="Enter your password" required>
               </div>
               <div class="form__control">
                  <label for="">Confirm Password</label>
                  <input type="password" placeholder="Confirm your password" required>
               </div>
               
               <c-box mt="2rem">
                  <c-button w="full" variant-color="blue" size="md" border="none">Sign Up</c-button>
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

export default {
   name:'SignIn',
   components: {
      CFlex,
      CBox,
      CHeading,
      CButton,
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