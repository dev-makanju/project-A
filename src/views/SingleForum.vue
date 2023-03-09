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
            <c-box v-if="forumLoading">
               <c-stack h="400px" w="100%" display="flex" justify-content="center" align-items="center" is-inline :spacing="4">
                  <c-spinner size="lg" />
               </c-stack>
            </c-box>
            <!--  block below -->
            <c-box v-else> 
               <c-heading font-size="30px" mt="1rem" mb="1rem" color="rgba(0, 0, 0, 0.8)">{{ forum.name }} Forum</c-heading>
               <c-box>
                  <!-- forum -->
                  <c-box margin="1rem 0px 2rem 0px">
                     <div class="img-hdr">
                        <img :src="forum.photo" 
                        class="image-holder" onerror="this.style.display='none'">
                     </div>
                     <c-text font-size="14px" mt="1rem" line-height="1.5" color="#555555" font-weight="600">
                      {{ forum?.description }}
                     </c-text>

                     <template>
                        <c-box 
                           v-if="forum?.isFollowing" 
                           @click="unfollowForum(forum._id , forum.name)"
                        >
                              <c-button
                                 variant-color="blue" 
                                 font-size="14px" 
                                 mb="1rem" 
                                 line-height="1.5" 
                                 color="white"
                                 border="1px solid #fff" 
                                 font-weight="600"
                                 cursor="pointer"
                                 :is-loading="forum._id === selected"
                              >
                                 following
                              </c-button>
                        </c-box>
                        <c-box v-else>
                           <c-button 
                              variant-color="blue" 
                              mb=".5rem" 
                              border="none" 
                              border-radius="7px" 
                              cursor="pointer" 
                              font-size="14px"
                              @click="follow(forum?.name , forum._id)"
                              :is-loading="forum._id === selected"
                           >
                              follow
                           </c-button>
                        </c-box>
                     </template>
      
                     <c-text font-size="12px" color="#001027" opacity=".7">created on: {{ formatTime( forum.createdAt ) }}</c-text>

                     <c-text font-size="12px" color="blue" mt="1rem">
                           {{ forum.enrolled?.length }} Enrolled | {{ forum.followers?.length}} Members | {{ forum.topics?.length }} Active daily Post
                     </c-text>

                     <c-box m="1rem 0px">
                        <c-heading color="#001027" font-size="14px">This forum was created by:</c-heading>
                        <c-box  display="flex" padding="10px 10px 0px 10px" gap=".4rem">
                           <c-box>
                              <c-box 
                                 display="flex" align-items="center" 
                                 justify-content="center" 
                                 h="100px" 
                                 w="100px" 
                                 border="1px solid #eee" 
                                 border-radius="5px" 
                                 bgColor="#e74e3c">
                                 <c-text font-size="50px" font-weight="bold" color="#fff">{{ returnFirstLetter(forum.createdBy?.firstName) }}</c-text>
                              </c-box>
                           </c-box>
                           <c-box display="flex" justify-content="space-between" w="full" gap=".4rem" pb="10px">
                              <c-box>
                                 <c-heading color="#001027" font-size="20px">{{forum.createdBy?.firstName}} {{forum.createdBy?.lastName}}</c-heading>
                                 <c-text font-size="12px" color="#001027" opacity=".7">{{ forum?.createdBy?.occupation }}</c-text>
                                 <c-text font-size="12px" color="#001027" opacity=".7">{{ formatTime( forum?.createdBy?.createdAt ) }}</c-text>
                                 <c-text font-size="12px" color="blue" opacity=".7" mt="1rem">{{ returnProtected(forum?.createdBy?.email) }}</c-text>
                              </c-box>
                           </c-box>
                        </c-box>
                     </c-box>
                  </c-box>
                  <c-box w="100%">
                     <c-tabs variant="enclosed-colored"  size="md" variant-color="blue">
                        <c-tab-list>
                           <c-tab bgColor="blue" color="#fff" font-weight="bold" outline="none">Topics</c-tab>
                           <c-tab bgColor="blue" color="#fff" font-weight="bold" outline="none">Discussion</c-tab>
                        </c-tab-list>
                           
                        <c-tab-panels>
                           <c-tab-panel>
                              <!-- create topic -->

                              <c-box mt="2rem">  
                                 <c-box box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" p="1rem" mb="2rem">
                                    <c-form-control is-required mt="1rem">
                                       <c-textarea v-model="topicContent"/>
                                    </c-form-control>
                                    <c-button @click="postTopic" :is-loading="isLoadingTopic" cursor="pointer" variant-color="blue" size="md" border="none" mt="1rem">Post Topic</c-button>
                                 </c-box>   
                                 <!-- <TopicPost :title="'Topics'" :topic="topics"/> -->
                              </c-box>
                           </c-tab-panel>
                           <c-tab-panel>
                              <c-box mt="2rem">
                                 <!-- create a dicussion -->

                                 <c-box box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" p="1rem" mb="2rem">
                                    <c-form-control is-required>
                                       <c-form-label for="fname">Discussion Title</c-form-label>
                                       <c-input id="fname" v-model="discussTitle"  placeholder="Forum Name" />
                                    </c-form-control>
                                    <c-form-control is-required mt="1rem">
                                       <c-textarea v-model="discussionContent" placeholder="Enter the dicussion content"/>
                                    </c-form-control>
                                    <c-button @click="postDisscussion" :is-loading="isLoadingDiscuss" cursor="pointer" variant-color="blue" size="md" border="none" mt="1rem">Post Discussion</c-button>
                                 </c-box>
                                 <!-- <BaseDiscussion :title="'Discussions'"/> -->
                              </c-box>
                           </c-tab-panel>
                        </c-tab-panels>
                     </c-tabs>
                  </c-box>
               </c-box>
            </c-box>
         </c-grid-item>
         <c-grid-item :display="{ base:'none' , lg:'block' }">
            <BaseForum :forumData="forumData"/>
         </c-grid-item>
         <div>
            <c-modal
               :is-open="isOpen"
               :on-close="close"
            >
               <c-modal-content ref="content">
               <c-modal-header>UnFollow {{ forum_name }} Forum</c-modal-header>
               <c-modal-close-button />
               <c-modal-body>
                  <c-text>
                     You will not be able to see notifications update from this forum , however you will still be able to view all forum post.
                  </c-text>
               </c-modal-body>
               <c-modal-footer>
                  <c-button border="1px solid #fff" @click="unfollow" variant-color="blue" mr="3">
                     Unfollow
                  </c-button>
                  <c-button border="1px solid #fff" @click="close">Cancel</c-button>
               </c-modal-footer>
               </c-modal-content>
               <c-modal-overlay />
            </c-modal>
      </div>
   </c-grid>
</template>
<script>

import { 
   CGrid, 
   CGridItem , 
   CBox , 
   CHeading , 
   CText,
   CTabs,
   CTabList,
   CTabPanels,
   CTab,
   CTabPanel,
   CFormControl,
   CFormLabel,
   CInput,
   CTextarea, 
   CButton,
   CStack , 
   CSpinner , 
   CModal,
   CModalOverlay,
   CModalContent,
   CModalHeader,
   CModalFooter,
   CModalBody,
   CModalCloseButton
} from '@chakra-ui/vue';
import BaseForum from '@/components/customs/BaseForum.vue';
// import TopicPost from '@/components/customs/BasePost.vue';
// import BaseDiscussion from '@/components/customs/BaseDiscussion.vue';
import { mapActions } from 'vuex';
import Moment from "moment";

export default {
   name:'single-forum',
   components: {
      CStack , 
      CSpinner, 
      CText,
      // BaseDiscussion,
      CGrid, 
      CGridItem,
      CBox,
      BaseForum,
      // TopicPost,
      CHeading,
      CTabs,
      CTabList,
      CTabPanels,
      CTab,
      CTabPanel,
      CFormControl,
      CFormLabel,
      CInput,
      CTextarea, 
      CButton,
      CModal,
      CModalOverlay,
      CModalContent,
      CModalHeader,
      CModalFooter,
      CModalBody,
      CModalCloseButton
   },
   data(){
      return {
         topicContent: '',
         discussTitle: '',
         discussionContent:'',
         isLoadingDiscuss: false,
         isLoadingTopic: false,
         forumData: {
            loading: false,
            data: [],
         },
         topics: {
            loading: false,
            data: [],
         },
         forum_topic: {},
         forum_discuss: {},
         forum:{},
         forumLoading: false,
         selected: '',
         forum_name: '',
         unfollowId: '',
         isOpen: false,
      }
   },
   mounted(){
      this.$nextTick(function () { 
         if(this.$store.state.forum.length !== 0){
            this.forumData.data = this.$store.state.forum;
         }else{
            this.getForum();
         }
         this.fetchSingleAction();
      })
   },
   methods: {
      ...mapActions([ 'followAforum','getAllForumAction','getSingleForumAction','createAtopic', 'createADiscuss' , 'unFollowAction']),
      returnFirstLetter(value){
         return value?.charAt(0);
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
      postDisscussion(){
         if(this.discussTitle === '' || this.discussionContent === ""){
         this.title = 'Oops!!!'
         this.description = 'input fields cannot be empty!'
         this.status = 'error'  
         this.showToast();    
         }else{
            let input = {
               forum_name: this.$route.query.name,
               image:'https://cdn.pixabay.com/photo/2021/07/27/11/22/mountains-6496638_960_720.jpg',
               title: this.discussTitle,
               content: this.discussionContent
            }
            this.isLoadingDiscuss = true;
            this.createADiscuss(input).then(res => {
               if(res.status === 201){
                  console.log(res)
                  this.isLoadingDiscuss = false;
                  this.title = 'Hurray!!!'
                  this.description = 'Discussion created successfuly!'
                  this.status = 'success' 
                  this.showToast();
                  this.discussTitle = '';
                  this.discussionContent = ''; 
                  this.$router.push({name:'discussion'});
                  return;
               }    
               this.isLoadingDiscuss = false;
               this.title = 'Oops!!!';
               this.description = 'Error creating discussion!';
               this.status = 'error';  
               this.showToast();
            }).catch(err => {
               this.isLoadingDiscuss = false;
               this.title = 'Oops!!!'
               this.description = 'An error occured , please try again!'
               this.status = 'error'; 
               this.showToast(); 
               err;
            });
         }
      },
      returnProtected(value){
         const res = value?.slice(10 , -1)
         return '*********'+res;
      },
      postTopic(){
         if(this.topicContent === ''){
         this.title = 'Oops!!!'
         this.description = 'input fields cannot be empty!'
         this.status = 'error'  
         this.showToast();    
         }else{
            let input = {
               content: this.topicContent,
               forum: this.$route.query.name,
            }
            this.isLoadingTopic = true;
            this.createAtopic(input).then(res => {
               if(res.status === 201){
                  this.isLoadingTopic = false;
                  this.title = 'Hurray!!!'
                  this.description = 'Topic created successfuly!'
                  this.status = 'success' 
                  this.showToast();
                  this.content = ''
                  this.$router.push({name:'topics'});
                  return;
               }    
               this.isLoadingTopic = false;
               this.title = 'Oops!!!';
               this.description = 'Error creating topic!';
               this.status = 'error';  
               this.showToast();
            }).catch(err => {
               this.isLoadingTopic = false;
               this.title = 'Oops!!!';
               this.description = 'An error occured , please try again!';
               this.status = 'error'; 
               this.showToast(); 
               err;
            });
         }
      },
      getForum(){
         this.forumData.loading = true;
         this.getAllForumAction().then(res => {
            if(res.status){
               this.forumData.loading = false;
               this.forumData.data = this.$store.state.forum;
               console.log(this.forumData.data)
            }
         }).catch(err => {
            this.forumData.loading = false;
            err;
         })
      },
      getForumAndDisscussion(){
         // fetch topic by topic
         if(this.$store.state.forum_topic.data.length !== 0){
            this.forum_topic = this.$store.state.forum_topic.data;
         }else{
            this.fetchTopicByForum(this.forum.name)
         }
         // fetch dicussion under topic
         if(this.$store.state.forum_discuss.data.length !== 0){
            this.forum_discuss = this.$store.state.forum_discuss.data;
         }else {
            this.fetchDiscussByForum(this.forum.name)
         }
      },
      fetchSingleAction(){
         const id = this.$route.params.id
         const name = this.$route.query.name
         this.forumLoading = true;
         const input = {
            id: id,
            input: {
               name: name
            }
         }
         this.getSingleForumAction(input).then(res => {
            if(res.status === 200){
               this.forumLoading = false;
               this.forum = res.data.forum;
               this.getForumAndDisscussion();
            }
         }).catch(err => {
            this.forumLoading = false;
            err;
         })
      },
      follow(name , id){
         this.selected = id
         let data = {
            forum_name: name,
         }
         this.followAforum(data).then(res => {
            this.selected = ''
            if(res.status === 200){
               this.title = 'Success'
               this.description = `You have succefully followed ${name} forum`
               this.status = 'success'
               this.forum.isFollowing = true;
               this.showToast()
               return; 
            }
            this.title = 'Failed!'
            this.description = res.data.message
            this.status = 'error'
            this.showToast()
         }).catch(err => {
            this.selected = ''
            this.title = 'Failed!'
            this.description = 'Oops!, something went wrong'
            this.status = 'error'
            this.showToast()
            err;
         });
      },
      unfollowForum(value , name){
         this.isOpen = true;
         this.forum_name = name
         this.unfollowId = value;
      },
      unfollow(){
         this.isOpen = false;
         this.selected = this.unfollowId;
         let data = {
            name: this.forum_name
         }
         this.unFollowAction(data).then(res => {
            if(res.success){
               this.title = 'Success'
               this.description = `You have successfully unfollow ${this.forum_name} forum`
               this.status = 'success'
               this.showToast()
               return; 
            }
            this.selected = ''
            this.title = 'Failed!'
            this.description = res.data.message
            this.status = 'error'
            this.showToast()
         }).catch(err => {
            this.selected = ''
            this.title = 'Failed!'
            this.description = 'Oops!, something went wrong'
            this.status = 'error'
            this.showToast()
            err;
         })
      },
      close() {
         this.isOpen = false
      },
      formatTime(value){
         return Moment(value).format( "dddd h:mma D MMM YYYY" ); //=> "Friday 2:00pm 1 Feb 2013"
      }
   },
   watch:{
      $route(){
         this.fetchSingleAction()
      }
   }
}

</script>