<template>
   <c-box padding="1rem" bgColor="#006BBB" width="100%">   
      <c-flex :width="{ base:'90%', md: '80%' }" m="auto" 
      :flex-wrap="{ base:'wrap' , lg:'nowrap'}" 
      gap="2.5rem" 
      justify-content="space-between"
      align-items="center"
      >
         <c-box dispaly="flex">
            <c-box display='flex' gap="10px" align-items="center">
               <c-box>
                  <c-image 
                     objectFit="cover"
                     :src="require('../../assets/icons/logoIcon.png')"
                     fallback-src="https://via.placeholder.com/40"  
                     alt="logo" 
                  />
               </c-box>
               <c-heading color="white" fontSize="20px">
                  ProtektMe
               </c-heading>
            </c-box>
         </c-box>
         <c-box dispaly="flex">
            <c-box display='flex' gap="10px" align-items="center">
               <ul class="nav-link">
                  <li>
                     <router-link class="link" :to="{name:'/'}">Home</router-link>
                  </li>
                  <li>
                     <router-link class="link" :to="{name:'topics'}">Topic</router-link>
                  </li>
                  <li>
                     <router-link class="link" :to="{name:'discussion'}">Discussion</router-link>
                  </li>
               </ul>
            </c-box>
         </c-box>
         <c-box display="flex" gap="1rem">
            <c-box>   
               <c-input-group>
                  <c-input-left-element><c-icon name="search" color="gray.300" /></c-input-left-element>
                  <c-input type="text" placeholder="search..."/>
               </c-input-group>
            </c-box>
            <c-box display='flex' gap="10px" align-items="center">
               <c-text color="white" fontSize="14px" font-weight="400">
                  Timothy A.
               </c-text>
               <c-icon name="chevron-down" color="#ffffff" cursor="pointer"/>
               <c-box>
                  <c-image
                     border-radius="50%" 
                     objectFit="cover"
                     :src="require('../../assets/icons/logoIcon.png')"
                     fallback-src="https://via.placeholder.com/40"  
                     alt="logo" 
                  />
               </c-box>
            </c-box>
         </c-box>
      </c-flex>
   </c-box>
</template>

<script>
   import { 
      CIcon, 
      CHeading, 
      CImage, 
      CFlex, 
      CBox, 
      CText, 
      CInputGroup,
      CInputLeftElement,
      CInput,
   } from "@chakra-ui/vue";

   export default {
      name:'BaseHeader',
      components: {
         CFlex,
         CBox,
         CHeading,
         CText,
         CImage,
         CIcon,
         CInputGroup,
         CInputLeftElement,
         CInput,
      }
   }
</script>

<style lang="scss">
   .nav-link {
      display: flex;


      & li {
         list-style-type: none;
         padding: 7px 20px;
         
         &:hover{
            border-bottom: 1px solid #ffffff;
         }
      }
   }

   .link {
      color: white;
      text-decoration: none;
   }
</style>