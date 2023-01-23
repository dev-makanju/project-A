<template>
    <!-- show comment -->
      <c-box display="flex" padding="10px 10px 0px 10px" gap="1rem">
         <c-box>
            <c-box padding="10px" h="50px" w="50px" border="1px solid #eee" border-radius="50%" bgColor="#eee">
               <img class="forum__thumbnail" src="" onerror="this.style.display='none'">
            </c-box>
         </c-box>
         <c-box display="flex" gap=".4rem" pb="10px" w="full" justify-content="space-between">
            <c-box>
               <c-heading color="#001027" font-size="16px">Reece Janet</c-heading>
               <c-text font-size="12px" color="#001027" opacity=".7">Psychologist, Politician & Public Speaker</c-text>
               <c-text font-size="12px" color="#001027" opacity=".7">July 15, 2022 / 09:08 AM</c-text>
               <c-text font-size="12px" mt=".5rem" color="#555555" font-weight="600">
                  How does the flow of people, goods and culture impact places? This is one of the many reply I'm giving you here please don't ming my comment  thanks for the update
               </c-text>
               <c-button @click="showReply = !showReply" mt=".5rem" bgColor="#DCEAFF" size="xs" font-size="10px" border="none" cursor="pointer" color="blue">Reply</c-button>
               <!-- content editable div -->
               <c-box mt=".5rem" v-if="showReply">
                  <CustomComment/>
               </c-box>
            </c-box>
            <c-box display="flex" gap=".2rem">
               <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
               <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
               <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
            </c-box>
         </c-box>
      </c-box>
</template>

<script>

import { CHeading , CBox , CText , CButton } from '@chakra-ui/vue';
import CustomComment from '@/components/CustomComment.vue';

export default {
   name:'BaseComment',
   components: {
      CButton,
      CHeading, 
      CBox, 
      CText, 
      CustomComment,
   },
   data(){
      return {
         showReply: false,
      }
   }
}
</script>