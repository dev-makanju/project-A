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
         <c-box v-if="!discussion.loading">
            <BaseDiscussion :title="'Discussion'" :discussion="discussion.data"/>
         </c-box>
         <c-box v-else>
            <c-stack  h="400px" w="100%" display="flex" justify-content="center" align-items="center" is-inline :spacing="4">
               <c-spinner size="lg"/>
            </c-stack>
         </c-box>
      </c-grid-item>
      <c-grid-item :display="{ base:'none' , md:'block' }">
         <BaseForum :forumData="forumData"/>
      </c-grid-item>
</c-grid>
</template>

<script>

import { CStack , CSpinner , CGrid, CGridItem , CBox , CMenu , CMenuButton , CMenuList} from '@chakra-ui/vue';
import Basefilter from '@/components/customs/BaseFlter.vue';
import BaseSort from '@/components/customs/BaseSort.vue';
import BaseForum from '@/components/customs/BaseForum.vue';
import BaseDiscussion from '@/components/customs/BaseDiscussion.vue';
import { mapActions } from 'vuex'

export default {
   name:'TheDiscussion',   
   components: {
      CGrid, 
      CGridItem, 
      CBox,
      Basefilter,
      BaseSort,
      BaseForum,
      BaseDiscussion,
      CMenu, 
      CMenuButton,
      CMenuList,
      CStack, 
      CSpinner
   },
   data(){
      return {
         forumData: {
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
      this.$nextTick(function () {
         if(this.$store.state.forum.length !== 0){
            this.forumData.data = this.$store.state.forum;
         }else{
            this.getForum();
         }

         if(this.$store.state.discussions.length !== 0){
            this.discussion.data = this.$store.state.discussions;
         }else{
            this.getPopularDiscussion();
         } 
      })  
   },
   methods: {
      ...mapActions(['getAllForumAction' , 'getAllDiscussAction']), 
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
      getPopularDiscussion(){
         this.discussion.loading = true;
         this.getAllDiscussAction().then(res => {
            if(res.status){
               this.discussion.loading = false;
               this.discussion.data = res.data.discussioms;
            }
         }).catch(err => {
            this.discussion.loading = false;
            err;
         });
      },
   }
}

</script>