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
               <BaseForum/>
            </c-box>
            <TopicPost/>
         </c-grid-item>
         <c-grid-item :display="{ base:'none' , md:'block' }">
            <BaseForum/>
         </c-grid-item>
   </c-grid>
</template>
<script>

   import { CGrid, CGridItem , CBox , CMenu , CMenuButton , CMenuList } from '@chakra-ui/vue';
   import Basefilter from '@/components/customs/BaseFlter.vue';
   import BaseSort from '@/components/customs/BaseSort.vue';
   import BaseForum from '@/components/customs/BaseForum.vue';
   import TopicPost from '@/components/customs/BasePost.vue';

   export default {
      name:'the-topics',
      components: {
         CGrid, 
         CGridItem,
         Basefilter,
         CBox,
         BaseSort,
         BaseForum,
         TopicPost,
         CMenu,
         CMenuButton,
         CMenuList,
      }
   }
</script>