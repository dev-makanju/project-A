<template>
   <c-box>
      <c-heading color="rgba(0, 0, 0, 0.8)" font-size="30px" padding=".5rem 0px">{{ title }}</c-heading>
      <c-box v-for="data in discussion"  :key="data._id" padding="20px" box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" mt="1rem">
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
            <c-text font-size="16px" font-weight="600" color="#555555">How does the flow of people, goods and culture impact places?</c-text>
            <c-text font-size="14px" mt=".5rem" font-weight="400" color="#555555">{{ data.content }}</c-text>
            <c-text font-size="10px" mt=".5rem" font-weight="600" text-decoration="underline" cursor="pointer" color="#555555">View more</c-text>
         </c-box>
         <c-box>
            <c-box bgColor="#eee" height="300px" border="1px solid #eee">
               <img class="discussion-image" src="https://cdn.pixabay.com/photo/2017/08/30/07/56/clock-2696234_960_720.jpg" onerror="this.style.display='none'">
            </c-box>
         </c-box>
         <BaseShare :buttonText="'replies'" :answer="data.replies" :pin="data.retweet"/>
         <c-box mt="1rem">
            <!-- content editable div -->
            <CustomComment :successful="successful" :id="data._id" @newComment="SubmitComment" :title="'comment'"/>
         </c-box>
         <c-box padding="12px">
            <c-box>
               <!-- show comment -->
               <BaseComment :answer="data.replies"/>
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
import { mapActions } from 'vuex';

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
      BaseComment,
      CHeading,
      CBox,
      CText,
      CustomComment,
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
      ...mapActions(['commentOnDiscussion']), 
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
               comment: value
            }
         }
         this.commentOnDiscussion(data).then(res => {
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

<style lang="scss" scoped>
   .discussion-image {
      height: 300px;
      width: 100%;
      object-fit: cover; 
   }
</style>