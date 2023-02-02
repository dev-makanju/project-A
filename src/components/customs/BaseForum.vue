<template>
   <c-box 
      :width="{ base:'100%', md:'300px'}"
      border-width="1px" 
      rounded="lg" 
      border="1px solid #eeeeee"
   >
      <c-box padding="5px" border-bottom="1px solid #eee">
         <c-heading font-size="18px" padding="10px" text-align="center">Your Forum</c-heading> 
      </c-box>
      <c-box v-if="forumData.loading">
         <c-box v-for="i in 4" :key="i" display="flex" padding="10px 10px 0px 10px" gap=".4rem">
            <c-box>
               <c-box padding="10px" h="50px" w="50px" border="1px solid #eee" border-radius="50%" bgColor="#eee">
                  
               </c-box>
            </c-box>
            <c-box display="flex" justify-content="space-between" w="full" border-bottom="1px solid #eee" gap=".4rem" pb="10px">
               <c-box  w="100%">
                  <c-box  background-color="#eee" width="70%" h="25px" border-radius="4px"></c-box>
                  <c-box background-color="#eee"  width="80%" h="15px"  mt=".3rem" border-radius="4px"></c-box>
               </c-box>
               <c-box display="flex" gap=".2rem">
                  <c-box h="6px" w="6px" bgColor="#555555" border-radius="50%"></c-box>
                  <c-box h="6px" w="6px" bgColor="#555555" border-radius="50%"></c-box>
                  <c-box h="6px" w="6px" bgColor="#555555" border-radius="50%"></c-box>
               </c-box>
            </c-box>
         </c-box>
      </c-box>
      <c-box v-if="forumData.loading === false">
         <c-box v-for="forum in forumData.data" :key="forum._id" display="flex" padding="10px 10px 0px 10px" gap=".4rem">
            <c-box>
               <c-box 
                  padding="10px" display="flex" align-items="center" 
                  justify-content="center" 
                  h="50px" 
                  w="50px" 
                  border="1px solid #eee" 
                  border-radius="50%" 
                  :bgColor="`${returnBgColor()}`">
                  <router-link class="forum-link" :to="{name:'single-forum' , params:{id: forum._id} , query:{name:forum.name}}">
                     <c-text font-size="20px" font-weight="bold" color="#fff">{{ returnFirstLetter(forum.name) }}</c-text>
                  </router-link>
               </c-box>
            </c-box>
            <c-box display="flex" justify-content="space-between" w="full" border-bottom="1px solid #eee" gap=".4rem" pb="10px">
               <c-box>
                  <router-link class="forum-link" :to="{name:'single-forum' , params:{id: forum._id} , query:{name:forum.name}}">
                     <c-heading color="#555555" font-size="16px">{{ forum.name }}</c-heading>
                  </router-link>
                  <c-text font-size="12px" color="#555555" opacity=".5">{{ forum.followers.length }} followers/ {{ forum.discussion.length }} active daily post / {{ forum.enrolled.length }} menbers engagement</c-text>
               </c-box>
               <c-box display="flex" gap=".2rem">
                  <c-box h="6px" w="6px" bgColor="#555555" border-radius="50%"></c-box>
                  <c-box h="6px" w="6px" bgColor="#555555" border-radius="50%"></c-box>
                  <c-box h="6px" w="6px" bgColor="#555555" border-radius="50%"></c-box>
               </c-box>
            </c-box>
         </c-box>
      </c-box>    
      <c-box padding="5px" border-top="1px solid #eee">
         <router-link class="nav-link" :to="{ name: 'all-forum'}">
            <c-heading opacity=".5" font-size="14px" padding="10px" text-align="center" text-decoration="underline">View All</c-heading> 
         </router-link>
      </c-box>    
   </c-box>
</template>

<script>

   import { CBox, CHeading , CText} from '@chakra-ui/vue';
   export default {
      name:'BaseFilter',
      props: {
         forumData: {
            type: Object,
         }
      },
      components:{
         CBox,
         CHeading,
         CText,
      },
      methods: {
         returnFirstLetter(value){
            return value.charAt(0);
         },
         returnBgColor(){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            return "#"+randomColor;
         }
      }
   }
</script>

<style lang="scss">
   .forum__thumbnail {
      height: 40px;
      width: 40px;
      border: 1px solid #eee;
      border-radius: 50%;
   }

   .forum-link{
      text-decoration: none;
   }
</style>

