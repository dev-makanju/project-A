<template>
   <c-grid
      :w="{ base:'90%', lg:'80%'}"
      margin="auto"
      :template-columns="{base:'1fr' , md:'1fr 250px', xl :'250px 1fr 250px' , }"
      gap="4"
      mt="2rem"
      mb="6rem"
      max-width="1440px"
      >
         <c-grid-item :display="{ base:'none' , xl:'block' }"></c-grid-item>
         <c-grid-item>
            <c-box :display="{ base:'block' , md:'none' }">
               <BaseForum :forumData="forumData"/>
            </c-box>
            <div id="scroll-track">
                  <c-stack  h="400px" w="100%" display="flex" justify-content="center" align-items="center" v-if="loading" is-inline :spacing="4">
               <c-spinner size="lg" />
            </c-stack>
            <c-box v-else>
               <!-- copy and paste single dicussion -->
               <c-box padding="20px" box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" mt="1rem">
                     <c-box display="flex" padding="10px 10px 0px 10px" gap="1rem">
                        <c-box>
                           <c-box padding="10px" h="50px" w="50px" display="flex" align-items="center" justify-content="center" border="1px solid #eee" border-radius="50%" bgColor="#390d0d">
                              <c-text font-size="20px" font-weight="bold" color="#fff">{{ data.uploader?.firstName?.charAt(0) }}</c-text>
                           </c-box>
                        </c-box>
                        <c-box display="flex" gap=".4rem" pb="10px" w="full" justify-content="space-between">
                           <c-box>
                              <c-heading color="#001027" font-size="16px">{{ data?.uploader?.firstName }} {{ data.uploader?.lastName }}</c-heading>
                              <c-text font-size="12px" color="#001027" opacity=".7">{{ data.uploader?.occupation }}</c-text>
                              <c-text font-size="12px" color="#001027" opacity=".7">{{ formatTime(data.uploader?.createdAt) }}</c-text>
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
                     </c-box>
                  <c-box>
                     <c-box bgColor="#eee" height="300px" border="1px solid #eee">
                        <img class="discussion-image" src="https://cdn.pixabay.com/photo/2017/08/30/07/56/clock-2696234_960_720.jpg" onerror="this.style.display='none'">
                     </c-box>
                  </c-box>
                  <BaseShare 
                        :buttonText="'replies'" 
                        :answer="data.replies" 
                        :pin="data.retweet"  
                        :url="`${getBaseUrl()}${$route.fullPath}`" 
                        :title="`${data.uploader?.firstName}  ${data.uploader?.lastName}  ` + 'created a topic on protektMe'"
                        :description="data.topic"/>
                  <c-box mt="1rem">
                     <!-- content editable div -->
                     <CustomComment @reset="resetForm" :successful="successful" :id="data._id" @newComment="SubmitComment" :title="'comment'"/>
                  </c-box>
                  <c-box padding="12px">
                     <c-box>
                        <!-- show comment -->
                        <BaseComment :answer="data.replies"/>
                     </c-box>
                  </c-box>
               </c-box>
            </c-box>
            </div>
         </c-grid-item>
         <c-grid-item :display="{ base:'none' , md:'block' }">
            <BaseForum :forumData="forumData"/>
         </c-grid-item>
   </c-grid>
</template>
<script>

   import { CStack ,CSpinner , CGrid, CGridItem , CBox , CText, CHeading } from '@chakra-ui/vue';
   import BaseForum from '@/components/customs/BaseForum.vue';
   import { mapActions } from 'vuex'
   import Moment from "moment"; 
   import CustomComment from '@/components/CustomComment.vue';
   import BaseComment from '@/components/customs/BaseComment.vue';
   import BaseShare from '@/components/customs/BaseShare.vue';

   export default {
      name:'single-discussion',
      components: {
         CGrid, 
         CStack,
         CSpinner,
         CGridItem,
         CBox,
         BaseForum,
         CustomComment,
         BaseShare,
         BaseComment,
         CText,
         CHeading,
      },
      data(){
         return {
            forumData: {
               loading: false,
               data: [],
            },
            titleContent: '',
            description:'',
            status: '', 
            successful: false,
            loading: false,
            data: {},
         }
      },
      mounted(){
         this.$nextTick(function () { 
            if(this.$store.state.forum.length !== 0){
               this.forumData.data = this.$store.state.forum;
            }else{
               this.getForum();
            }
            this.fetchSingleDiscuss()
            this.scrollToView()
         })
      },
      methods: {
         ...mapActions([ 'getAllForumAction','getSingleDiscussion' , 'commentOnDiscussion']), 
         getForum(){
            this.forumData.loading = true;
            this.getAllForumAction().then(res => {
               if(res.status){
                  this.forumData.loading = false;
                  this.forumData.data = this.$store.state.forum;
               }
            }).catch(err => {
               this.forumData.loading = false;
               err;
            })
         },
         resetForm(){
            this.successful = false;
         },
         getBaseUrl(){
            return window.location.origin;
         },
         formatTime(value){
            return Moment(value).format( "dddd h:mma D MMM YYYY" ); 
         },
         returnFirstLetter(value){
           return value?.charAt(0);
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
         scrollToView(){
            const view = document.getElementById('scroll-track')
            view.scrollIntoView({behavior: "smooth"});
         },
         fetchSingleDiscuss(){
            const id = this.$route.params.id
            this.loading = true;
            this.getSingleDiscussion(id).then(res => {
               if(res.status){
                  this.loading = false;
                  this.data = res.data.content;
               }
            }).catch(err => {
               this.loading = false;
               err;
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
               this.successful = true;
               if(res.status === 201){
                  this.titleContent = 'Success!!';
                  this.description = 'You added a comment!';
                  this.status = 'success'; 
                  this.showToast();
                  const newComment = {
                     createdAt: new Date().toLocaleString(),
                     content: data.input.comment,
                     replied_by: {
                        firstName: this.$store.state.auth.firstname,
                        lastName: this.$store.state.auth.lastname,
                        occupation: this.$store.state.auth.occupation,
                     }
                  }
                  this.data.replies.unshift(newComment);
                  return;
               }
               this.titleContent = 'Failed Comment!!!';
               this.description = 'An error occured , please try again!';
               this.status = 'error'; 
               this.showToast();
            }).catch(err => {
               this.titleContent = 'Error!!!';
               this.description = 'Please try again!';
               this.status = 'error'; 
               this.showToast();
               err;
            });
         },
      }
   }
</script>