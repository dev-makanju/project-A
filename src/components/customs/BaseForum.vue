<template>
   <c-box 
      width="300px"
      border-width="1px" 
      rounded="lg" 
      border="1px solid #eeeeee"
   >
      <c-box padding="5px" border-bottom="1px solid #eee">
         <c-heading font-size="18px" padding="10px" text-align="center">Your Forum</c-heading> 
      </c-box>    
      <c-box v-for="i in 5" :key="i" display="flex" padding="10px 10px 0px 10px" gap=".4rem">
         <c-box>
            <c-box padding="10px" h="50px" w="50px" border="1px solid #eee" border-radius="50%" bgColor="#eee">
               <img class="forum__thumbnail" src="" onerror="this.style.display='none'">
            </c-box>
         </c-box>
         <c-box display="flex" border-bottom="1px solid #eee" gap=".4rem" pb="10px">
            <c-box>
               <c-heading color="#555555" font-size="16px">MacroEconomics</c-heading>
               <c-text font-size="12px" color="#555555" opacity=".5">94.6 followers/ 34 active daily post / 20k menbers engagement</c-text>
            </c-box>
            <c-box display="flex" gap=".2rem">
               <c-box h="6px" w="6px" bgColor="#555555" border-radius="50%"></c-box>
               <c-box h="6px" w="6px" bgColor="#555555" border-radius="50%"></c-box>
               <c-box h="6px" w="6px" bgColor="#555555" border-radius="50%"></c-box>
            </c-box>
         </c-box>
      </c-box>
      <c-box padding="5px" border-top="1px solid #eee">
         <c-heading opacity=".5" font-size="14px" padding="10px" text-align="center" text-decoration="underline">View All</c-heading> 
      </c-box>    
   </c-box>
</template>

<script>

   import { CBox, CHeading , CText} from '@chakra-ui/vue';

   export default {
      name:'BaseFilter',
      components:{
         CBox,
         CHeading,
         CText,
      },
      data() {
         return {

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
</style>

