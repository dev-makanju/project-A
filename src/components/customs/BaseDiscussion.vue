<template>
   <c-box>
      <c-heading color="rgba(0, 0, 0, 0.8)" font-size="30px" padding=".5rem 0px">Discussion</c-heading>
      <c-box v-for="i in 5"  :key="i" padding="20px" box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" mt="1rem">
         <c-box display="flex" padding="10px 10px 0px 10px" gap="1rem">
            <c-box>
               <c-box padding="10px" h="50px" w="50px" border="1px solid #eee" border-radius="50%" bgColor="#eee">
                  <img class="forum__thumbnail" src="" onerror="this.style.display='none'">
               </c-box>
            </c-box>
            <c-box display="flex" gap=".4rem" pb="10px" w="full" justify-content="space-between">
               <c-box>
                  <c-heading color="#001027" font-size="16px">Reece Janet</c-heading>
                  <c-text font-size="12px" color="#001027" opacity=".7">Prro-globalist & Writer</c-text>
                  <c-text font-size="12px" color="#001027" opacity=".7">July 15, 2022 / 09:08 AM</c-text>
               </c-box>
               <c-box display="flex" gap=".2rem">
                  <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                  <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                  <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
               </c-box>
            </c-box>
         </c-box>
         <c-box padding="12px">
            <c-text font-size="16px" font-weight="600" color="#555555">How does the flow of people, goods and culture impact places?</c-text>
            <c-text font-size="14px" mt=".5rem" font-weight="400" color="#555555">One of the way that globalization has disadvantaged developed nations comes from the ‘outsourcing’ of jobs to foreign nations. 
            Businesses and corporations relocate to developing nations so they don’t have to pay the wages that developed nations pay their workers. Many of...
            </c-text>
            <c-text font-size="10px" mt=".5rem" font-weight="600" text-decoration="underline" cursor="pointer" color="#555555">View more</c-text>
         </c-box>
         <c-box>
            <c-box bgColor="#eee" height="300px" border="1px solid #eee" bac>
               <img src="" onerror="this.style.display='none'">
            </c-box>
         </c-box>
         <BaseShare :buttonText="'replies'"/>
         <c-box mt="1rem">
            <!-- content editable div -->
            <CustomComment :title="'comment'"/>
         </c-box>
         <c-box padding="12px">
            <c-box>
               <!-- show comment -->
               <BaseComment/>
            </c-box>
         </c-box>
      </c-box>
   </c-box>
</template>
<script>

import { CHeading , CBox , CText } from '@chakra-ui/vue';
import CustomComment from '@/components/CustomComment.vue';
import BaseComment from '@/components/customs/BaseComment.vue';
import BaseShare from '@/components/customs/BaseShare.vue';

export default {
   name: 'BaseDiscussion',
   components: {
      BaseShare,
      BaseComment,
      CHeading,
      CBox,
      CText,
      CustomComment,
   }
}

</script>