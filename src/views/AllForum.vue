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

            <c-box>
               <c-heading font-size="30px" mt="1rem" mb="1rem" color="rgba(0, 0, 0, 0.8)">Forum</c-heading>
               <BaseCard @following="isFollowing" :forumData="forumCard"/>
            </c-box>
         </c-grid-item>
         <c-grid-item :display="{ base:'none' , lg:'block' }">
            
         </c-grid-item>
   </c-grid>
</template>
<script>

   import { 
      CGrid,  
      CGridItem , 
      CBox , 
      CHeading, 
   } from '@chakra-ui/vue';
   import BaseCard from '@/components/customs/BaseCard.vue';
   import { mapActions } from 'vuex';

   export default {
      name:'the-topics',
      components: {
         BaseCard,
         CGrid, 
         CGridItem,
         CBox,
         CHeading,
      },
      data(){
         return {
            forumCard: {
               loading: false,
               data: [],
            },      
         }
      },
      created(){
         this.$nextTick(function () {
            this.fetchPageData();
         })   
      },
      methods: {
         ...mapActions([ 'getAllForumAction']),
         
         fetchPageData(){
            this.getForum();
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
         getForum(){
            this.forumCard.loading = true;
            this.getAllForumAction().then(res => {
               if(res.status){
                  this.forumCard.loading = false;
                  this.forumCard.data = res.data.forums;
               }
            }).catch(err => {
               this.forumCard.loading = false;
               err;
            })
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