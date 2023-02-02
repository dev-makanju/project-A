<template>
   <c-grid
      :w="{ base:'90%', lg:'80%'}"
      margin="auto"
      :template-columns="{base:'1fr' , lg:'1fr', xl:'250px 1fr 250px' , }"
      gap="4"
      mt="2rem"
      mb="6rem"
      max-width="1440px"
      >
         <c-grid-item :display="{ base:'none' , xl:'block' }">
            <!-- Add null -->
         </c-grid-item>
         <c-grid-item>
            <c-box :display="{ base:'block' , lg:'none' }">
               <BaseForum :forumData="forumData"/>
            </c-box>
            <c-box>
               <c-heading font-size="30px" mt="1rem" mb="1rem" color="rgba(0, 0, 0, 0.8)">Top Forum</c-heading>
                  <c-box box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" p="1rem" mb="2rem">
                     <c-form-control is-required>
                        <c-form-label for="fname">Forum Name</c-form-label>
                        <c-input id="fname" v-model="forumName"  placeholder="Forum Name" />
                     </c-form-control>
                     <c-form-control is-required mt="1rem">
                        <c-form-label for="fname">Description</c-form-label>
                        <c-textarea v-model="forumDesc" placeholder="Enter the forum description"/>
                     </c-form-control>
                     <c-button @click="createForum" :is-loading="isCreating" cursor="pointer" variant-color="blue" size="md" border="none" mt="1rem">Create Forum</c-button>
                  </c-box>
               <c-box>
                  <BaseCard @following="isFollowing" :forumData="forumCard"/>
               </c-box>
            </c-box>
            <c-box v-if="!topics.loading">
               <TopicPost :title="'Hot Topics'" @replied="onReplyTopic" :topic="topics"/>
            </c-box>
            <c-box v-else>
               <c-stack  h="400px" w="100%" display="flex" justify-content="center" align-items="center" v-if="topics.loading" is-inline :spacing="4">
                  <c-spinner size="lg" />
               </c-stack>
            </c-box>
            <p @click="redirect('topics')" >
               <c-text 
                  v-if="topics.data.length !== 0"
                  text-align="center" 
                  font-size="12px" 
                  mt="1rem" 
                  color="blue" 
                  font-style="italic" 
                  cursor="pointer"
               >
                  view more...
               </c-text>
            </p>
            <c-box mt="2rem">
               <c-box v-if="!discussion.loading">   
                  <BaseDiscussion :title="'Popular Discussion'" @replied="onReply" :discussion="discussion.data"/>
                  <p @click.prevent="redirect('discussion')">
                     <c-text 
                        v-if="discussion.data.length !== 0" 
                        text-align="center" 
                        font-size="12px" 
                        mt="1rem" 
                        color="blue" 
                        font-style="italic"
                        cursor="pointer">
                        view more...
                     </c-text>
                  </p>
               </c-box>
               <c-box v-else>   
                  <c-stack h="400px" w="100%" display="flex" justify-content="center" align-items="center" v-if="topics.loading" is-inline :spacing="4">
                     <c-spinner size="lg" />
                  </c-stack>
               </c-box>
            </c-box>
         </c-grid-item>
         <c-grid-item :display="{ base:'none' , lg:'block' }">
            <BaseForum :forumData="forumData"/>
         </c-grid-item>
   </c-grid>
</template>
<script>

   import { 
      CGrid, 
      CStack , 
      CSpinner , 
      CGridItem , 
      CBox , 
      CHeading, 
      CText,
      CFormControl,
      CFormLabel,
      CInput,
      CTextarea, 
      CButton
   } from '@chakra-ui/vue';
   import BaseForum from '@/components/customs/BaseForum.vue';
   import TopicPost from '@/components/customs/BasePost.vue';
   import BaseCard from '@/components/customs/BaseCard.vue';
   import BaseDiscussion from '@/components/customs/BaseDiscussion.vue';
   import { mapActions } from 'vuex'

   export default {
      name:'the-topics',
      components: {
         CButton,
         CFormControl,
         CFormLabel,
         CInput,
         CText,
         BaseDiscussion,
         BaseCard,
         CGrid, 
         CGridItem,
         CBox,
         CStack, 
         CSpinner,
         BaseForum,
         TopicPost,
         CHeading,
         CTextarea,
      },
      data(){
         return {
            title: '',
            description: '',
            status:'',
            forumName:'',
            forumDesc: '',
            isCreating: false,
            forumData: {
               loading: false,
               data: [],
            },
            forumCard: {
               loading: false,
               data: [],
            },
            topics: {
               loading: false,
               data: [],
            },
            discussion:{
               loading: false,
               data: [],
            }
            
         }
      },
      mounted(){
         this.$nextTick(function () {
            this.fetchAllTopics();
            this.fetchPageData();
         });   
      },
      methods: {
         ...mapActions([ 'getAllForumAction' , 'getAllTopicAction' , 'getAllDiscussAction' , 'getAllTopicAction' , 'createAForum' ]),
         
         fetchPageData(){
            if(this.$store.state.discussions.length !== 0){
               this.discussion.data = this.$store.state.discussions.slice(0 , 4);
            }else{
               this.getPopularDiscussion();
            }

            if(this.$store.state.forum.length !== 0){
               this.forumData.data = this.$store.state.forum;
               this.forumCard.data = this.$store.state.forum.slice(0 , 4);
            }else {
               this.getForum();
            }
         },
         redirect(value){
            this.$router.push({ name: value})
         },
         showToast(){
            this.$toast({
               title: this.title,
               description: this.description,
               status: this.status,
               duration: 10000,
               position:'top',
               variant: 'subtle',
            })
         },
         createForum(){
           if(this.forumName === '' || this.forumDesc === ""){
            this.title = 'Oops!!!'
            this.description = 'input fields cannot be empty!'
            this.status = 'error'  
            this.showToast();    
           }else{
               let input = {
                  name: this.forumName,
                  description: this.forumDesc,
                  image:'https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg'
               }
               this.isCreating = true;
               this.createAForum(input).then(res => {
                  if(res.status === 201){
                     this.isCreating = false;
                     this.title = 'Hurray!!!'
                     this.description = 'forum created successfuly!'
                     this.status = 'success' 
                     this.showToast();
                     this.forumName = '';
                     this.forumDesc = '';
 
                  }else{    
                     this.isCreating = false;
                     this.title = 'Oops!!!';
                     this.description = 'This forum name already exist!';
                     this.status = 'error';  
                     this.showToast();
                  }
               }).catch(err => {
                  this.isCreating = false;
                  this.title = 'Oops!!!'
                  this.description = 'An error occured , please try again!'
                  this.status = 'error' 
                  this.showToast(); 
                  err;
               });
           }
         },
         getForum(){
            this.forumData.loading = true;
            this.forumCard.loading = true;
            this.getAllForumAction().then(res => {
               if(res.status){
                  this.forumData.loading = false;
                  this.forumCard.loading = false;
                  this.forumData.data = this.$store.state.forum;
                  this.forumCard.data = this.$store.state.forum.slice(0 , 4)
               }
            }).catch(err => {
               this.forumData.loading = false;
               this.forumCard.loading = false;
               err;
            })
         },
         getPopularDiscussion(){
            this.discussion.loading = true;
            this.getAllDiscussAction().then(res => {
               if(res.status){
                  this.discussion.loading = false
                  this.discussion.data = res.data.discussioms.slice(0 , 4);
               }
            }).catch(err => {
               this.discussion.loading = false;
               err;
            });
         },
         fetchAllTopics(){
            this.topics.loading = true;
            this.getAllTopicAction().then(res => {
               if(res.status){
                  this.topics.loading = false;
                  this.topics.data = res.data.topics.slice(0 , 4);
               }
            }).catch(err => {
               this.topics.loading = false;
               err;
            })
         },
         onReply(data){
            const newComment = {
               createdAt: new Date().toLocaleString(),
               firstName: this.$store.state.auth.firstname,
               lastName: this.$store.state.auth.lastname,
               occupation: this.$store.state.auth.occupation,
               content: data.input.comment,
            }

            this.discussion.data.forEach(item => {
               if(item._id === data.id){
                  item.replies.unshift(newComment);
               } 
            });
         },
         onReplyTopic(data){
            const newComment = {
               createdAt: new Date().toLocaleString(),
               content: data.input.answer,
               replied_by:{
                  firstName: this.$store.state.auth.firstname,
                  lastName: this.$store.state.auth.lastname,
                  occupation: this.$store.state.auth.occupation,
               }
            }
            this.topics.data.forEach(item => {
               if(item._id === data.id){
                  item.answer.unshift(newComment);
               } 
            });
         },
         isFollowing(value){
            this.forumCard.data.forEach(item => {
               if(item._id === value){
                  item.isFollowing = true;
               }
            })
         }
      }
   }
</script>