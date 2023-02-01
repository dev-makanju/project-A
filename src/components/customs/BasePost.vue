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
            :pin="data.pins"/>
         <c-box mt="1rem">
            <!-- content editable div -->
            <CustomComment :successful="successful" :id="data._id" @newComment="SubmitComment"/>
         </c-box>
         <c-box padding="12px">
            <c-box>
               <!-- show comment -->
               <BaseComment :answer="data.answer"/>
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
import Moment from "moment";
import { mapActions } from 'vuex'

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
      BaseComment,
      CHeading,
      CBox,
      CText,
      CustomComment,
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
      ...mapActions(['commentOnTopic']),
      returnFirstLetter(value){
         return value.charAt(0);
      },
      getBaseUrl(){
         return window.location.origin;
      },
      formatTime(value){
         return Moment(value).format( "dddd h:mma D MMM YYYY" ); 
      },
      showToast(){
         this.$toast({
            title: this.titleContent,
            description: this.description,
            status: this.status,
            duration: 10000,
            position:'top',
            variant: 'subtle',
         })
      },
      SubmitComment(value , id){
         let data = {
            id: id,
            input: {
               answer: value
            }
         }
         this.commentOnTopic(data).then(res => {
            if(res.status === 201){
               this.titleContent = 'Success!!';
               this.description = 'You added a comment!';
               this.status = 'success'; 
               this.successful = true;
               this.showToast();
               this.$emit('replied' , data )
            }else{
               this.titleContent = 'Failed Comment!!!';
               this.description = 'An error occured , please try again!';
               this.successful = true;
               this.status = 'error'; 
               this.showToast();
            }
         }).catch(err => {
            this.titleContent = 'Error!!!';
            this.successful = true;
            this.description = 'Please try again!';
            this.status = 'error'; 
            this.showToast();
            err;
         });
      }
   }
}

</script>

<style lang="css">
   .nav-link{
      text-decoration: none;
   }
</style>