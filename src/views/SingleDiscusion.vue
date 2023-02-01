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
            
         </c-grid-item>
         <c-grid-item>
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

   import { CStack ,CSpinner , CGrid, CGridItem , CBox } from '@chakra-ui/vue';
   import BaseForum from '@/components/customs/BaseForum.vue';
   import TopicPost from '@/components/customs/BasePost.vue';
   import { mapActions } from 'vuex'

   export default {
      name:'single-discussion',
      components: {
         CGrid, 
         CStack,
         CSpinner,
         CGridItem,
         CBox,
         BaseForum,
         TopicPost,
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
         fetchSingleTopic(){
            const id = this.$route.params.id
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
               replied_by:{
                  firstName: "Oluwafemi",
                  lastName: "Abbey",
                  occupation: 'Software Engineer',
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