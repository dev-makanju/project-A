<template>
   <div>
      <c-flex :flex-direction="{ base:'column' , sm:'row' , xl:'row' }" justify-content="center" align-items="center" gap="1rem" flex-wrap="wrap">
         <template v-if="forumData.loading">   
            <c-flex 
               v-for="i in 4" 
               :key="i" 
               flex-direction="column" 
               :flex="{ md:'1 1 40%' , xl:'1 1 40%'}" 
               width="300px" 
               height="300px" 
               border-radius="5px" 
               box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" 
               overflow="hidden"
            >
               <div class="img-hdr">
                  <img src="" 
                  class="image-holder" onerror="this.style.display='none'">
               </div>
               <c-box p=".8rem" h="full" position="relative">   
                  <c-flex justify-content="space-between" w="full">
                     <c-heading font-size="20px" color="#2A2A2A"></c-heading>
                     <c-box display="flex" gap=".2rem">
                        <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                        <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                        <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                     </c-box>
                  </c-flex>
                  <c-box background-color="#eee" width="70%" h="20px" border-radius="4px"></c-box>
                  <c-box background-color="#eee" width="70%" mt=".2rem" h="20px" border-radius="4px"></c-box>
                  <c-box background-color="#eee" width="70%" mt=".2rem" h="20px" border-radius="4px"></c-box>

                  <c-box mt="1rem" position="absolute" bottom="12px" w="100%">
                     <c-box background-color="#eee" width="80%"  h="25px"  border-radius="4px"></c-box>
                  </c-box>
               </c-box>
            </c-flex>
         </template>
         <template v-else>  
               <c-flex 
                  v-for="forum in forumData.data" 
                  :key="forum._id" 
                  flex-direction="column" 
                  :flex="{ md:'1 1 40%' , xl:'1 1 40%'}" 
                  max-width="300px" 
                  height="300px" 
                  border-radius="5px" 
                  box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)" 
                  overflow="hidden"
               >
                  <div class="img-hdr">
                     <template>
                        <c-box v-if="forum?.photo !== ''">
                           <img 
                              :src="forum?.photo" 
                              class="image-holder" 
                              onerror="this.style.display='none'"
                           >
                        </c-box>
                        <c-box 
                           v-else
                           padding="10px" display="flex" align-items="center" 
                           justify-content="center" 
                           h="100%" 
                           w="100%"  
                           :bgColor="`${returnBgColor()}`">
                           <router-link class="forum-link" :to="{name:'single-forum' , params:{id: forum._id} , query:{name:forum.name}}">
                              <c-text font-size="60px" font-weight="bold" color="#fff">{{ returnFirstLetter(forum?.name) }}</c-text>
                           </router-link>
                        </c-box>
                     </template>
                  </div>
                  <c-box p=".8rem" h="full" position="relative">   
                     <c-flex justify-content="space-between" w="full">
                        <router-link class="forum-link" :to="{name:'single-forum' , params:{id: forum._id} , query: {name: forum.name}}">
                           <c-heading font-size="20px" color="#2A2A2A">{{ forum.name }}</c-heading>
                        </router-link>
                        <c-box display="flex" gap=".2rem">
                           <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                           <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                           <c-box h="4px" w="4px" bgColor="#1667DF" border-radius="50%"></c-box>
                        </c-box>
                     </c-flex>
                     <c-text font-size="14px" mt=".5rem">
                        {{ truncate(forum.description)  }}
                     </c-text>
                     <c-box mt="1rem" position="absolute" bottom="12px">
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
                           <c-flex font-size="10px" color="blue">
                           {{ forum?.enrolled?.length }} Enrolled | {{ forum?.followers?.length }} Members | {{ forum?.topics?.length }} Active daily Post
                           </c-flex>
                     </c-box>
                  </c-box>
               </c-flex>
         </template>
      </c-flex>
      <c-box display="flex" justify-content="center" mt="2rem" mb="2rem">
         <router-link class="nav-link" :to="{name:'all-forum'}">
            <c-button variant-color="blue" size="md" border="none">see more</c-button>
         </router-link>
      </c-box>
        <div>
            <c-modal
               :is-open="isOpen"
               :on-close="close"
            >
               <c-modal-content ref="content">
               <c-modal-header>UnFollow {{ forum }} Forum</c-modal-header>
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
   </div>
</template>
<script>

import { 
   CText,
   CBox, 
   CButton, 
   CFlex, 
   CHeading, 
   CModal,
   CModalOverlay,
   CModalContent,
   CModalHeader,
   CModalFooter,
   CModalBody,
   CModalCloseButton
} from '@chakra-ui/vue';
import { mapActions } from 'vuex';

export default {
   name:'base-card',
   props: {
      forumData: {
         type: Object,
      }
   },
   components: {
      CText,
      CBox, 
      CButton, 
      CFlex, 
      CHeading,
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
         forum: '',
         unfollowId: '',
         isOpen: false,
         title: '',
         description: '',
         status: '',
         selected: '',
      }
   },
   methods: {
      close() {
         this.isOpen = false
      },
      ...mapActions(['followAforum' , 'unFollowAction']),
      findLength(value){
         return value.length;
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
      truncate(data){
         return data.slice(0 , 100) + '...'
      },
      returnFirstLetter(value){
         return value.charAt(0);
      },
      returnBgColor(){
         const randomColor = Math.floor(Math.random()*16777215).toString(16);
         return "#"+randomColor;
      },
      unfollowForum(value , name){
         this.isOpen = true;
         this.forum = name
         this.unfollowId = value;
      },
      unfollow(){
         this.isOpen = false;
         this.selected = this.unfollowId;
         let data = {
            name: this.forum
         }
         this.unFollowAction(data).then(res => {
            if(res.success){
               this.title = 'Success'
               this.description = `You have successfully unfollow ${this.forum} forum`
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
               this.showToast()
               this.$emit('following' , id)
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
      }
   }
}
</script>

<style lang="scss">
   .image-holder {
      height: 200px; 
      width: 100%;
      border: none;
      object-fit: cover;
   }

   .img-hdr {
      height: 200px; 
      width: 100%;
      background-color: #eee;
      overflow: hidden;

      &:hover{
         & img {
            transform: scale(1.2);
            transition: .5s ease;
         }
      }
   }
</style>