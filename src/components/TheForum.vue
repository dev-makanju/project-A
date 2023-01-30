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
               <c-box>
                  <BaseCard :forumData="forumCard"/>
               </c-box>
            </c-box>
            <c-box v-if="!topics.loading">
               <TopicPost :title="'Hot Topics'" :topic="topics"/>
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
                  <BaseDiscussion :title="'Popular Discussion'" :discussion="discussion.data"/>
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
                  <c-stack  h="400px" w="100%" display="flex" justify-content="center" align-items="center" v-if="topics.loading" is-inline :spacing="4">
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

   import { CGrid, CStack , CSpinner , CGridItem , CBox , CHeading , CText } from '@chakra-ui/vue';
   import BaseForum from '@/components/customs/BaseForum.vue';
   import TopicPost from '@/components/customs/BasePost.vue';
   import BaseCard from '@/components/customs/BaseCard.vue';
   import BaseDiscussion from '@/components/customs/BaseDiscussion.vue';
   import { mapActions } from 'vuex'

   export default {
      name:'the-topics',
      components: {
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
      },
      data(){
         return {
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
      created(){
         if(this.$store.state.forum.length !== 0){
            this.forumData.data = this.$store.state.forum;
            this.forumCard.data = this.$store.state.forum.slice(0 , 4);
            return;
         }else{
            this.getForum();
         }

         if(this.$store.state.discussions.length !== 0){
            this.discussion.data = this.$store.state.discussions.slice(0 , 4);
            console.log(this.discussion.data)
            return;
         }else{
            this.getPopularDiscussion();
         }
         
         this.fetchAllTopics();
      },
      methods: {
         ...mapActions([ 'getAllForumAction' , 'getAllTopicAction' , 'getAllDiscussAction' , 'getAllTopicAction']),
         redirect(value){
            console.log(value)
            this.$router.push({ name: value})
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
         }
      }
   }
</script>