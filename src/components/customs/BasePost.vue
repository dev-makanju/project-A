<template>
   <c-box>
      <c-heading color="rgba(0, 0, 0, 0.8)" font-size="30px" padding=".5rem 0px">{{ title }}</c-heading>
      <c-box v-for="data in topic.data"  :key="data._id" padding="20px" box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" mt="1rem">
         <router-link class="nav-link" :to="{name:'single-topic' , params: { id: data._id }}">
            <c-box display="flex" padding="10px 10px 0px 10px" gap="1rem">
               <c-box>
                  <c-box padding="10px" h="50px" w="50px" display="flex" align-items="center" justify-content="center" border="1px solid #eee" border-radius="50%" bgColor="#390d0d">
                     <c-text font-size="20px" font-weight="bold" color="#fff">{{ returnFirstLetter(data.uploader.firstName) }}</c-text>
                  </c-box>
               </c-box>
               <c-box display="flex" gap=".4rem" pb="10px" w="full" justify-content="space-between">
                  <c-box>
                     <c-heading color="#001027" font-size="16px">{{ data.uploader.firstName }} {{ data.uploader.lastName }}</c-heading>
                     <c-text font-size="12px" color="#001027" opacity=".7">{{ data.uploader.occupation }}</c-text>
                     <c-text font-size="12px" color="#001027" opacity=".7">{{ formatTime(data.createdAt) }}</c-text>
                  </c-box>
                  <c-box display="flex" gap=".2rem">
                     <c-box h="6px" w="6px" bgColor="#1667DF" border-radius="50%"></c-box>
                     <c-box h="6px" w="6px" bgColor="#1667DF" border-radius="50%"></c-box>
                     <c-box h="6px" w="6px" bgColor="#1667DF" border-radius="50%"></c-box>
                  </c-box>
               </c-box>
            </c-box>
            <c-box padding="12px">
               <c-text font-size="16px" font-weight="600" color="#555555">{{ data.topic }}</c-text>
            </c-box>
         </router-link>
         <BaseShare 
            :url="`${getBaseUrl()}/topic/${data._id}`" 
            :title="`${data.uploader?.firstName}  ${data.uploader?.lastName}  ` + 'created a topic on protektMe'"
            :description="data.topic" 
            :answer="data.answer" 
            :pin="data.pins"
         />
      </c-box>
   </c-box>
</template>
<script>

import { CHeading , CBox , CText } from '@chakra-ui/vue';
import BaseShare from '@/components/customs/BaseShare.vue';
import Moment from "moment";

export default {
   name: 'BasePost',
   props:{
      title: {
         type: String,
      },
      topic: {
         type: Object
      }
   },
   components: {
      BaseShare,
      CHeading,
      CBox,
      CText,
   },
   data(){
      return {
         successful: false,
         titleContent: '',
         description: '',
         status: ''
      }
   },
   methods: {
      returnFirstLetter(value){
         return value.charAt(0);
      },
      getBaseUrl(){
         return window.location.origin;
      },
      formatTime(value){
         return Moment(value).format( "dddd h:mma D MMM YYYY" ); 
      },
   }
}

</script>

<style lang="css">
   .nav-link{
      text-decoration: none;
   }
</style>