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
               <c-box h="40px" w="120px" mt="1rem" mb="1rem" bgColor="#eee"></c-box>
               <c-box>
                  <!-- forum -->
                  <c-box margin="1rem 0px 2rem 0px">
                     <div class="img-hdr">
                        <img src="" 
                        class="image-holder" onerror="this.style.display='none'">
                     </div>
                     <c-box w="100%" bg="#eee" mt="1rem" h="100px">
                     </c-box>

                     <c-box color="blue" mt="1rem" bgColor="#eee" h="30px" w="100%"></c-box>

                     <c-box color="blue" mt="1rem" bgColor="#eee" h="30px" w="100%"></c-box>

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
                                 bgColor="#eee">
                                 <c-text font-size="50px" font-weight="bold" color="#fff">Hey</c-text>
                              </c-box>
                           </c-box>
                           <c-box display="flex" justify-content="space-between" w="full" gap=".4rem" pb="10px">
                              <c-box>
                                 <c-box color="#001027"  h="30px" w="200"></c-box>
                                 <c-box  bgColor="#eee" h="30px" w="200px"></c-box>
                                 <c-box  bgColor="#eee" h="30px" w="200px"></c-box>
                                 <c-box  bgColor="#eee" h="30px" w="200px" mt="1rem"></c-box>
                              </c-box>
                           </c-box>
                        </c-box>
                     </c-box>
                  </c-box>
               </c-box>
            </c-box>
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
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by Eng
                     </c-text>

                     <c-text 
                        font-size="14px" 
                        mt="1rem" 
                        line-height="1.5" 
                        color="blue" 
                        font-weight="600"
                     >
                        following
                     </c-text>
                     <c-text font-size="12px" color="#001027" opacity=".7">created on: {{ formatTime( forum.createdAt ) }}</c-text>

                     <c-text font-size="12px" color="blue" mt="1rem">
                           {{ forum.enrolled.length }} Enrolled | {{ forum.followers.length}} Members | {{ forum.topics.length }} Active daily Post
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
                                 <c-text font-size="50px" font-weight="bold" color="#fff">{{ returnFirstLetter(forum.createdBy.firstName) }}</c-text>
                              </c-box>
                           </c-box>
                           <c-box display="flex" justify-content="space-between" w="full" gap=".4rem" pb="10px">
                              <c-box>
                                 <c-heading color="#001027" font-size="20px">{{forum.createdBy.firstName}} {{forum.createdBy.lastName}}</c-heading>
                                 <c-text font-size="12px" color="#001027" opacity=".7">{{ forum.createdBy.occupation }}</c-text>
                                 <c-text font-size="12px" color="#001027" opacity=".7">{{ formatTime( forum.createdBy.createdAt ) }}</c-text>
                                 <c-text font-size="12px" color="blue" opacity=".7" mt="1rem">{{ forum.createdBy.email }}</c-text>
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
                              <c-box mt="2rem">     
                                 <TopicPost :title="'Topics'"/>
                                 <c-text text-align="center" font-size="12px" mt="1rem" color="blue" font-style="italic" cursor="pointer">view more...</c-text>
                              </c-box>
                           </c-tab-panel>
                           <c-tab-panel>
                              <c-box mt="2rem">
                                 <BaseDiscussion :title="'Discussions'"/>
                                 <c-text text-align="center" font-size="12px" mt="1rem" color="blue" font-style="italic" cursor="pointer">view more...</c-text>
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
   CTabPanel
} from '@chakra-ui/vue';
import BaseForum from '@/components/customs/BaseForum.vue';
import TopicPost from '@/components/customs/BasePost.vue';
import BaseDiscussion from '@/components/customs/BaseDiscussion.vue';
import { mapActions } from 'vuex';
import Moment from "moment";

export default {
   name:'single-forum',
   components: {
      CText,
      BaseDiscussion,
      CGrid, 
      CGridItem,
      CBox,
      BaseForum,
      TopicPost,
      CHeading,
      CTabs,
      CTabList,
      CTabPanels,
      CTab,
      CTabPanel
   },
   data(){
      return {
         forumData: {
            loading: false,
            data: [],
         },
         forum:{},
         forumLoading: false,
      }
   },
   mounted(){
      if(this.$store.state.forum.length !== 0){
         this.forumData.data = this.$store.state.forum;
         return;
      }else{
         this.getForum();
      }
      
      this.fetchSingleAction();
   },
   methods: {
      ...mapActions([ 'getAllForumAction','getSingleForumAction']),
      returnFirstLetter(value){
         return value.charAt(0);
      },
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
      fetchSingleAction(){
         const id = this.$route.params.id
         this.forumLoading = true;
         this.getSingleForumAction(id).then(res => {
            if(res.status){
               this.forumLoading = false;
               this.forum = res.data.forum;
               console.log(this.forum)
            }
         }).catch(err => {
            this.forumLoading = false;
            err;
         })
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