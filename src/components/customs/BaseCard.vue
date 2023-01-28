<template>
   <div>
      <c-flex :flex-direction="{ base:'column' , sm:'row' , xl:'row' }" justify-content="center" align-items="center" gap="1rem" flex-wrap="wrap">
         <c-flex v-for="i in 4" :key="i" flex-direction="column" :flex="{ md:'1 1 40%' , xl:'1 1 40%'}" max-width="300px" height="300px" border-radius="5px" box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)">
            <div class="img-hdr">
               <img src="" class="image-holder" onerror="this.style.display='none'">
            </div>
            <c-box p=".8rem" h="full" position="relative">   
               <c-flex justify-content="space-between" w="full">
                  <c-heading font-size="20px" color="#2A2A2A">Public Speaking</c-heading>
                  <c-box display="flex" gap=".2rem">
                     <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                     <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                     <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                  </c-box>
               </c-flex>
               <c-text font-size="14px" mt=".5rem">
                  Explore the definition, and examples of interpersonal conflict, and the primary types.
               </c-text>
               <c-box mt="1rem" position="absolute" bottom="12px">
                  <c-flex font-size="10px" color="blue">25K Enrolled | 23k Members | 26 Active daily Post</c-flex>
               </c-box>
            </c-box>
         </c-flex>
      </c-flex>
      <c-box display="flex" justify-content="center" mt="2rem" mb="2rem">
         <c-button variant-color="blue" size="md" border="none">see more</c-button>
      </c-box>
   </div>
</template>
<script>

import { 
   CBox, 
   CButton, 
   CFlex, 
   CHeading, 
   CText
} from '@chakra-ui/vue';

export default {
   name:'base-card',
   props: {
      data: {
         type: Object,
      }
   },
   components: {
      CBox, 
      CButton, 
      CFlex, 
      CHeading,
      CText
   }
}
</script>

<style lang="scss">
   .image-holder {
      height: 200px; 
      width: 100%;
      border: none;
      object-fit: cover;
   }

   .img-hdr {
      height: 200px; 
      width: 100%;
      background-color: #eee;
   }
</style>