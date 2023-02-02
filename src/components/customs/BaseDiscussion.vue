<template>
   <c-box>
      <c-heading color="rgba(0, 0, 0, 0.8)" font-size="30px" padding=".5rem 0px">{{ title }}</c-heading>
      <c-box v-for="data in discussion"  :key="data._id" padding="20px" overflow="hidden" box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" mt="1rem">
         <router-link class="nav-link" :to="{name: 'single-discuss' , params:{id:data._id}}">
             <c-box display="flex" padding="10px 10px 0px 10px" gap="1rem">
               <c-box>
                  <c-box padding="10px" h="50px" w="50px" display="flex" align-items="center" justify-content="center" border="1px solid #eee" border-radius="50%" bgColor="#390d0d">
                     <c-text font-size="20px" font-weight="bold" color="#fff">{{ data.uploader.firstName.charAt(0) }}</c-text>
                  </c-box>
               </c-box>
               <c-box display="flex" gap=".4rem" pb="10px" w="full" justify-content="space-between">
                  <c-box>
                     <c-heading color="#001027" font-size="16px">{{ data.uploader.firstName }} {{ data.uploader.lastName }}</c-heading>
                     <c-text font-size="12px" color="#001027" opacity=".7">{{ data.uploader.occupation }}</c-text>
                     <c-text font-size="12px" color="#001027" opacity=".7">{{ formatTime(data.uploader.createdAt) }}</c-text>
                  </c-box>
                  <c-box display="flex" gap=".2rem">
                     <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                     <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                     <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                  </c-box>
               </c-box>
            </c-box>
            <c-box padding="12px">
               <c-text font-size="16px" font-weight="600" color="#555555">{{ data.title }}</c-text>
               <template>
                  <c-box v-if="$route.name === 'single-discuss'">
                     <c-text font-size="14px" mt=".5rem" font-weight="400" color="#555555">{{ data.content }}</c-text>
                  </c-box>
                  <c-box v-else>
                     <c-text font-size="14px" mt=".5rem" font-weight="400" color="#555555">{{ truncate(data.content) }}</c-text>
                  </c-box>
               </template>
               <c-text font-size="10px" mt=".5rem" font-weight="600" text-decoration="underline" cursor="pointer" color="#555555">View more</c-text>
            </c-box>
         </router-link>
         <c-box>
            <c-box v-if="data.image !== ''" bgColor="#eee" height="300px" border="1px solid #eee">
               <img class="discussion-image" :src="data.image" onerror="this.style.display='none'">
            </c-box>
            <c-box 
               v-else
               padding="10px" display="flex" align-items="center" 
               justify-content="center" 
               h="100%" 
               w="100%"  
               :bgColor="`${returnBgColor()}`">
                  <c-text font-size="150px" font-weight="bold" color="#fff">{{ returnFirstLetter(data?.title) }}</c-text>
            </c-box>
         </c-box>
         <BaseShare 
            :buttonText="'replies'" 
            :answer="data.replies" :pin="data.retweet"  
            :url="`${getBaseUrl()}/discussion/${data._id}`" 
            :title="`${data.uploader?.firstName}  ${data.uploader?.lastName}  ` + 'created a topic on protektMe'"
            :description="data.topic"
         />
      </c-box>
   </c-box>
</template>
<script>

import { CHeading , CBox , CText } from '@chakra-ui/vue';
import BaseShare from '@/components/customs/BaseShare.vue';
import Moment from "moment";

export default {
   name: 'BaseDiscussion',
   props:{
      title: {
         type: String,
      },
      discussion: {
         type: Array,
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
         titleContent: '',
         description: '',
         status:'',
         successful: false,
      }
   },
   methods: {
      getBaseUrl(){
         return window.location.origin;
      },
      formatTime(value){
         return Moment(value).format( "dddd h:mma D MMM YYYY" ); 
      },
      truncate(data){
         return  data.slice(0 , 400) + '...'
      },
      returnFirstLetter(value){
         return value.charAt(0);
      },
      returnBgColor(){
         const randomColor = Math.floor(Math.random()*16777215).toString(16);
         return "#"+randomColor;
      },
   }
}

</script>

<style lang="scss">
   .discussion-image {
      height: 300px;
      width: 100%;
      object-fit: cover; 
   }
</style>