<template>
   <c-box 
      maxW="sm" 
      border-width="1px" 
      rounded="lg" 
      border="1px solid #eeeeee"
   >
      <c-box padding="5px" border-bottom="1px solid #eee">
         <c-heading font-size="18px" padding="10px">Filter By</c-heading> 
      </c-box>    
      <c-box padding="5px">
         <c-box padding="10px">
            <CustomFilter :title="'All'"/>
         </c-box>
      </c-box>
      <c-box padding="5px">
         <c-box padding="10px">
            <CustomFilter :title="'Recently added'"/>
         </c-box>
      </c-box>
      <c-box padding="5px">
         <c-box padding="10px">
            <CustomFilter :title="'Top contributor'"/>
         </c-box>
      </c-box>
      <c-box padding="5px">
         <c-box padding="10px">
            <CustomFilter :title="'Highest engagement'"/>
         </c-box>
      </c-box>  
       <c-box padding="5px">
         <c-box padding="10px">
            <CustomFilter :title="'Highest retweet'"/>
         </c-box>
      </c-box>  
       <c-box padding="5px">
         <c-box padding="10px">
            <CustomFilter :title="'Recent contributions'"/>
         </c-box>
      </c-box>  
       <c-box padding="5px">
         <c-box padding="10px">
            <CustomFilter :title="'Top comments'"/>
         </c-box>
      </c-box>
   </c-box>
</template>

<script>

   import { CBox, CHeading} from '@chakra-ui/vue';
   import CustomFilter from '@/components/customs/CustomCheck.vue';

   export default {
      name:'BaseFilter',
      components:{
         CBox,
         CHeading,
         CustomFilter
      },
      data() {
         return {

         }
      }
   }
</script>

