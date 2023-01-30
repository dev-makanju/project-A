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
            <TopicPost :title="'Hot Topics'"/>
            <c-text text-align="center" font-size="12px" mt="1rem" color="blue" font-style="italic" cursor="pointer">view more...</c-text>
            <c-box mt="2rem">
               <BaseDiscussion :title="'Popular Discussion'"/>
               <c-text text-align="center" font-size="12px" mt="1rem" color="blue" font-style="italic" cursor="pointer">view more...</c-text>
            </c-box>
         </c-grid-item>
         <c-grid-item :display="{ base:'none' , lg:'block' }">
            <BaseForum :forumData="forumData"/>
         </c-grid-item>
   </c-grid>
</template>
<script>

   import { CGrid, CGridItem , CBox , CHeading , CText } from '@chakra-ui/vue';
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
         this.getHotTopics();
         this.getPopularDiscussion();
      },
      methods: {
         ...mapActions([ 'getAllForumAction' , 'getAllTopicAction' , 'getAllDiscussAction']),
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
         getHotTopics(){
            this.getAllTopicAction().then(res => {
               if(res.status){
                  console.log(res)
               }
            }).catch(err => {
               err;
            })
         },
         getPopularDiscussion(){
            this.getAllDiscussAction().then(res => {
               if(res.status){
                  console.log(res)
               }
            }).catch(err => {
               err;
            })
         }
      }
   }
</script>