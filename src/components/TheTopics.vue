<template>
   <c-grid
      w="80%"
      margin="auto"
      template-columns="250px 1fr 250px"
      gap="4"
      mt="2rem"
      mb="6rem"
      >
         <c-grid-item>
            <Basefilter/>
            <c-box mt="2rem">
               <BaseSort/>
            </c-box>
         </c-grid-item>
         <c-grid-item>
            <TopicPost/>
         </c-grid-item>
         <c-grid-item>
            <BaseForum/>
         </c-grid-item>
   </c-grid>
</template>
<script>

   import { CGrid, CGridItem , CBox } from '@chakra-ui/vue';
   import Basefilter from '@/components/customs/BaseFlter.vue';
   import BaseSort from '@/components/customs/BaseSort.vue';
   import BaseForum from '@/components/customs/BaseForum.vue';
   import TopicPost from '@/components/customs/BasePost.vue';

   export default {
      name:'the-topics',
      components: {
         CGrid, 
         CGridItem,
         Basefilter,
         CBox,
         BaseSort,
         BaseForum,
         TopicPost,
      }
   }
</script>