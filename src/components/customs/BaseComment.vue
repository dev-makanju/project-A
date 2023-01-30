<template>
    <!-- show comment -->
      <div>       
         <div v-show="answer?.length !== 0">
            <c-box v-for="data in answer" :key="data._id" display="flex" padding="10px 10px 0px 10px" gap="1rem">
               <c-box>
                  <c-box padding="10px" h="50px" w="50px" display="flex" align-items="center" justify-content="center" border="1px solid #eee" border-radius="50%" bgColor="#390d0d">
                     <c-text font-size="20px" font-weight="bold" color="#fff">{{ returnFirstLetter(data.replied_by.firstName) }}</c-text>
                  </c-box>
               </c-box>
               <c-box display="flex" gap=".4rem" pb="10px" w="full" justify-content="space-between">
                  <c-box>
                     <c-heading color="#001027" font-size="16px">{{ data.replied_by.firstName }} {{ data.replied_by.lastName }}</c-heading>
                     <c-text font-size="12px" color="#001027" opacity=".7">{{ data.replied_by.occupation }}</c-text>
                     <c-text font-size="12px" color="#001027" opacity=".7">July 15, 2022 / 09:08 AM</c-text>
                     <c-text font-size="12px" mt=".5rem" color="#555555" font-weight="600">
                        {{ data.content }}
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
         </div>
      </div>
</template>

<script>

import { CHeading , CBox , CText , CButton } from '@chakra-ui/vue';
import CustomComment from '@/components/CustomComment.vue';

export default {
   name:'BaseComment',
   props: {
      answer: {
         type: Array,
      }
   },
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
   },
   methods: {
      returnFirstLetter(value){
         return value.charAt(0);
      },
   }
}
</script>