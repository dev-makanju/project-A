<template>
   <c-grid
      :w="{ base:'90%', lg:'80%'}"
      margin="auto"
      :template-columns="{base:'1fr' , lg:'1fr', xl:'250px 1fr 250px' , }"
      gap="4"
      mt="2rem"
      mb="6rem"
      >
         <c-grid-item :display="{ base:'none' , xl:'block' }">
            <!-- Add null -->
         </c-grid-item>
         <c-grid-item>
            <c-box :display="{ base:'block' , lg:'none' }">
               <BaseForum/>
            </c-box>
            <c-box>
               <c-heading font-size="30px" mt="1rem" mb="1rem" color="rgba(0, 0, 0, 0.8)">Top Forum</c-heading>
               <c-box>
                  <BaseCard/>
               </c-box>
            </c-box>
            <TopicPost :title="'Hot Topics'"/>
            <c-text text-align="center" font-size="12px" mt="1rem" color="blue" font-style="italic" cursor="pointer">view more...</c-text>
            <c-box mt="2rem">
               <BaseDiscussion :title="'Popular Discussion'"/>
               <c-text text-align="center" font-size="12px" mt="1rem" color="blue" font-style="italic" cursor="pointer">view more...</c-text>
            </c-box>
         </c-grid-item>
         <c-grid-item :display="{ base:'none' , lg:'block' }">
            <BaseForum/>
         </c-grid-item>
   </c-grid>
</template>
<script>

   import { CGrid, CGridItem , CBox , CHeading , CText } from '@chakra-ui/vue';
   import BaseForum from '@/components/customs/BaseForum.vue';
   import TopicPost from '@/components/customs/BasePost.vue';
   import BaseCard from '@/components/customs/BaseCard.vue';
   import BaseDiscussion from '@/components/customs/BaseDiscussion.vue';

   export default {
      name:'the-topics',
      components: {
         CText,
         BaseDiscussion,
         BaseCard,
         CGrid, 
         CGridItem,
         CBox,
         BaseForum,
         TopicPost,
         CHeading,
      },
      data(){
         return {
            forumData: {},
         }
      }
   }
</script>