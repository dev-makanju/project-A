<template>
    <!-- show comment -->
      <div>       
         <div v-show="answer?.length !== 0">
            <c-box v-for="data in answer" :key="data._id" display="flex" padding="10px 10px 0px 10px" gap="1rem">
               <c-box>
                  <c-box padding="10px" h="50px" w="50px" display="flex" align-items="center" justify-content="center" border="1px solid #eee" border-radius="50%" bgColor="#390d0d">
                     <c-text font-size="20px" font-weight="bold" color="#fff">{{ returnFirstLetter(data?.replied_by?.firstName) }}</c-text>
                  </c-box>
               </c-box>
               <c-box display="flex" gap=".4rem" pb="10px" w="full" justify-content="space-between" border-bottom=".7px solid #eee">
                  <c-box>
                     <c-heading color="#001027" font-size="16px">{{ data?.replied_by?.firstName }} {{ data?.replied_by?.lastName }}</c-heading>
                     <c-text font-size="12px" color="#001027" opacity=".7">{{ data?.replied_by?.occupation }}</c-text>
                     <c-text font-size="12px" color="#001027" opacity=".7">July 15, 2022 / 09:08 AM</c-text>
                     <c-text v-html="data?.content" font-size="12px" mt=".5rem" color="#555555" font-weight="600"/>
                     <!-- content editable div -->
                  </c-box>
                  <c-box position="relative">
                     <c-box
                        v-if="isSelected === data._id"
                        position="absolute" 
                        right="-7px"
                        top="5px"
                        z-index="222"
                        bgColor="#FFF"
                        p="10px" 
                        border="2px solid #eee" 
                        border-radius="10px" 
                        box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)">         
                        <p class="report" @click="isReporting" font-size="14px">report</p>
                     </c-box>
                     <c-box display="flex" gap=".2rem" @click="toggle(data._id)" cursor="pointer">
                        <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                        <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                        <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                     </c-box>
                  </c-box>
               </c-box>
            </c-box>
         </div>
      </div>
</template>

<script>

import { CHeading , CBox , CText } from '@chakra-ui/vue';

export default {
   name:'BaseComment',
   props: {
      answer: {
         type: Array,
      }
   },
   components: {
      CHeading, 
      CBox, 
      CText, 
   },
   data(){
      return {
         isSelected: '',
         showReply: false,
      }
   },
   methods: {
      returnFirstLetter(value){
         return value?.charAt(0);
      },
      toggle(id){
         if(this.isSelected === id){
            this.isSelected = ''
            return;
         }
         this.isSelected = id;
      },
      showToast() {
         this.$toast({
            title: 'Account reported.',
            description: "Account report was successfull.",
            status: 'success',
            duration: 10000,
            position:'top',
            variant: 'subtle',
         })
      },
      isReporting(){
         this.isSelected = ''
         this.showToast();
      }
   }
}
</script>
