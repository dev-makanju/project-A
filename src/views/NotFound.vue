<template>
   <c-box display="flex" h="100vh" align-items="center" justify-content="center">
      <c-box  width="400px">  
         <c-heading  text-align="center" font-size="10rem">404</c-heading>
         <c-text text-align="center">Page not found</c-text>
         <p class="back" @click="$router.go(-1)" cursor="pointer">Go-back</p>
      </c-box>
   </c-box>
</template>
<script>

import { CBox , CHeading , CText } from '@chakra-ui/vue';

export default {
   name:'NotFound',
   components: {
      CBox,
      CHeading,
      CText,
   }
}
</script>
<style lang="scss">
   .back {
      color: blue;
      font-weight: 500;
      text-align: center;
      padding: 1rem 0px;
      cursor: pointer;
   }
</style>