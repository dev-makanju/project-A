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
         <c-grid-item :display="{ base:'none' , xl:'block' }">
            <Basefilter/>
            <c-box mt="2rem">
               <BaseSort/>
            </c-box>
         </c-grid-item>
         <c-grid-item>
            <c-box mb="1rem" :display="{ base:'block' , xl:'none'}">
                  <c-menu>
                     <c-menu-button right-icon="chevron-down">
                        Filters
                     </c-menu-button>
                     <c-menu-list>
                        <c-box>
                           <Basefilter/>
                           <c-box mt="2rem">
                              <BaseSort/>
                           </c-box>
                        </c-box>
                     </c-menu-list>
                  </c-menu>
            </c-box>
            <c-box :display="{ base:'block' , md:'none' }">
               <BaseForum :forumData="forumData"/>
            </c-box>
            <c-stack  h="400px" w="100%" display="flex" justify-content="center" align-items="center" v-if="topics.loading" is-inline :spacing="4">
               <c-spinner size="lg" />
            </c-stack>
            <c-box v-else>
               <TopicPost @replied="onReplyTopic" :title="'Topics'" :topic="topics"/>
            </c-box>
         </c-grid-item>
         <c-grid-item :display="{ base:'none' , md:'block' }">
            <BaseForum :forumData="forumData"/>
         </c-grid-item>
   </c-grid>
</template>
<script>

   import { CStack ,CSpinner , CGrid, CGridItem , CBox , CMenu , CMenuButton , CMenuList } from '@chakra-ui/vue';
   import Basefilter from '@/components/customs/BaseFlter.vue';
   import BaseSort from '@/components/customs/BaseSort.vue';
   import BaseForum from '@/components/customs/BaseForum.vue';
   import TopicPost from '@/components/customs/BasePost.vue';
   import { mapActions } from 'vuex'

   export default {
      name:'the-topics',
      components: {
         CGrid, 
         CStack,
         CSpinner,
         CGridItem,
         Basefilter,
         CBox,
         BaseSort,
         BaseForum,
         TopicPost,
         CMenu,
         CMenuButton,
         CMenuList,
      },
      data(){
         return {
            forumData: {
               loading: false,
               data: [],
            },
            topics: {
               loading: false,
               data: [],
            }
         }
      },
      mounted(){
         this.$nextTick(function () { 
            if(this.$store.state.forum.length !== 0){
               this.forumData.data = this.$store.state.forum;
            }else{
               this.getForum();
            }
            this.fetchAllTopics();
         })
      },
      methods: {
         ...mapActions([ 'getAllForumAction','getAllTopicAction']), 
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
         fetchAllTopics(){
            this.topics.loading = true;
            this.getAllTopicAction().then(res => {
               if(res.status){
                  this.topics.loading = false;
                  this.topics.data = res.data.topics;
               }
            }).catch(err => {
               this.topics.loading = false;
               err;
            })
         },
         onReplyTopic(data){
            const newComment = {
               createdAt: new Date().toLocaleString(),
               content: data.input.answer,
               replied_by: {
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
      }
   }
</script>