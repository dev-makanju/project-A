<template>
   <div>
      <c-flex :flex-direction="{ base:'column' , sm:'row' , xl:'row' }" justify-content="center" align-items="center" gap="1rem" flex-wrap="wrap">
         <template v-if="forumData.loading">   
            <c-flex 
               v-for="i in 4" 
               :key="i" 
               flex-direction="column" 
               :flex="{ md:'1 1 40%' , xl:'1 1 40%'}" 
               max-width="300px" 
               height="300px" 
               border-radius="5px" 
               box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" 
               overflow="hidden"
            >
               <div class="img-hdr">
                  <img src="" 
                  class="image-holder" onerror="this.style.display='none'">
               </div>
               <c-box p=".8rem" h="full" position="relative">   
                  <c-flex justify-content="space-between" w="full">
                     <c-heading font-size="20px" color="#2A2A2A"></c-heading>
                     <c-box display="flex" gap=".2rem">
                        <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                        <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                        <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                     </c-box>
                  </c-flex>
                  <c-box background-color="#eee" width="70%" h="20px" border-radius="4px"></c-box>
                  <c-box background-color="#eee" width="70%" mt=".2rem" h="20px" border-radius="4px"></c-box>
                  <c-box background-color="#eee" width="70%" mt=".2rem" h="20px" border-radius="4px"></c-box>

                  <c-box mt="1rem" position="absolute" bottom="12px" w="100%">
                     <c-box background-color="#eee" width="80%"  h="25px"  border-radius="4px"></c-box>
                  </c-box>
               </c-box>
            </c-flex>
         </template>
         <template v-if="forumData.loading === false">  
               <c-flex v-for="forum in forumData.data" :key="forum._id" flex-direction="column" :flex="{ md:'1 1 40%' , xl:'1 1 40%'}" max-width="300px" height="300px" border-radius="5px" box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" overflow="hidden">
                  <div class="img-hdr">
                     <img src="https://cdn.pixabay.com/photo/2023/01/07/07/16/houses-7702757_960_720.jpg" 
                     class="image-holder" onerror="this.style.display='none'">
                  </div>
                  <c-box p=".8rem" h="full" position="relative">   
                     <c-flex justify-content="space-between" w="full">
                        <c-heading font-size="20px" color="#2A2A2A">{{ forum.name }}</c-heading>
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
                        <c-flex font-size="10px" color="blue">
                           {{ forum.enrolled.length }} Enrolled | {{ forum.followers.length }} Members | {{ forum.topics.length }} Active daily Post</c-flex>
                     </c-box>
                  </c-box>
               </c-flex>
         </template>
      </c-flex>
      <c-box display="flex" justify-content="center" mt="2rem" mb="2rem">
         <c-button variant-color="blue" size="md" border="none">see more</c-button>
      </c-box>
   </div>
</template>
<script>

import { 
   CText,
   CBox, 
   CButton, 
   CFlex, 
   CHeading, 
} from '@chakra-ui/vue';

export default {
   name:'base-card',
   props: {
      forumData: {
         type: Object,
      }
   },
   components: {
      CText,
      CBox, 
      CButton, 
      CFlex, 
      CHeading,
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
      overflow: hidden;

      &:hover{
         & img {
            transform: scale(1.2);
            transition: .5s ease;
         }
      }
   }
</style>