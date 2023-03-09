<template>
   <c-box padding="1rem" :bgColor="[ isIndexPage ? '#FFFFFF' : '#006BBB']" width="100%" box-shadow="0px 2px 5px rgba(0 , 0 , 0 , .1)">   
      <c-flex :width="{ base:'90%', md: '80%' }" m="auto" 
         :flex-wrap="{ base:'wrap' , lg:'nowrap'}" 
         :gap="{base:'0px' , lg:'2.5rem'}" 
         justify-content="space-between"
         align-items="center"
         max-width="1440px"
      >
         <c-box dispaly="flex">
            <!-- App name -->
            <router-link class="nav-link" :to="{name:'home'}">
               <c-box display='flex' gap="10px" align-items="center">
                  <c-box>
                     <img class="logo" src="../../assets/sponsor/logoicon.png" oneerror="this.style.display='none'">
                  </c-box>
                  <c-heading :display="{base:'none' ,sm: 'block'}" color="white" fontSize="20px">
                     ProtektMe
                  </c-heading>
               </c-box>
            </router-link>
         </c-box>
         <c-box display="flex" align-items="center" gap="1rem" v-if="!isIndexPage">
            <c-box 
               :display="{base: 'none' , lg: 'flex' }"
               >
               <!-- App navigation for logged in user -->
               <c-box display='flex' gap="10px" align-items="center">
                  <ul class="nav-link">
                     <li>
                        <router-link class="link" :to="{name:'forum'}">Home</router-link>
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
            <c-box :display="{lg: 'flex' }" :gap="{base:'10px' , sm:'1rem'}">
               <c-box :display="{base: 'none' , lg: 'flex' }">   
                  <c-input-group>
                     <c-input-left-element><c-icon name="search" color="gray.300" /></c-input-left-element>
                     <c-input type="text" placeholder="search..."/>
                  </c-input-group>
               </c-box>
               <c-box 
                  v-if="isAuthenticated" 
                  display='flex' 
                  gap="10px" 
                  align-items="center"
               >
                  <!-- Auth user avarter icon logged in -->
                  <c-box>
                     <div class="img-holder">
                        <c-text font-size="22px" color="#fff" font-weight="600">
                           {{ $store.state.auth.firstname.charAt(0) }}
                        </c-text>
                     </div>
                  </c-box>
               </c-box>
            </c-box>
            <!-- hamburger link -->
            <c-box 
                  :display="{base: 'flex' , lg: 'none' }"
               >
               <div>
                  <c-box @click="isOpen=true" cursor="pointer" display="flex" gap="3px" flex-direction="column">
                     <c-box w="35px" h="5px" border-radius="2px" bgColor='#fff'></c-box>
                     <c-box w="35px" h="5px" border-radius="2px" bgColor='#fff'></c-box>
                     <c-box w="35px" h="5px" border-radius="2px" bgColor='#fff'></c-box>
                  </c-box>
                  <c-drawer :placement="placement" :on-close="close" :isOpen="isOpen">
                     <c-drawer-overlay :display="{base: 'flex' , lg: 'none' }"/>
                     <c-drawer-content max-width="290px" :display="{base: 'flex' , lg: 'none' }">
                        <c-drawer-header borderBottomWidth="1px"></c-drawer-header>
                           <c-drawer-body display="flex" flex-direction="column">
                              <c-breadcrumb-item padding="1rem 0px">
                                 <c-breadcrumb-link as="router-link" class="link" @click.prevent="closeNav" color="#006BBB" to="/forum">Home</c-breadcrumb-link>
                              </c-breadcrumb-item>
                              <c-breadcrumb-item padding="1rem 0px">
                                 <c-breadcrumb-link as="router-link" class="link" @click.prevent="closeNav" color="#006BBB" to="/topics">Topis</c-breadcrumb-link>
                              </c-breadcrumb-item>
                              <c-breadcrumb-item padding="1rem 0px">
                                 <c-breadcrumb-link as="router-link" class="link" color="#006BBB" @click.prevent="closeNav" to="/discussion">Discussion</c-breadcrumb-link>
                              </c-breadcrumb-item>
                           </c-drawer-body>
                        </c-drawer-content>
                  </c-drawer>
               </div>
            </c-box>
         </c-box>
         <template v-if="isIndexPage">
            <c-box>   
               <c-input-group :display="{base:'none' , lg:'flex'}">
                  <c-input-left-element><c-icon name="search" color="gray.300" /></c-input-left-element>
                  <c-input type="text" placeholder="search..."/>
               </c-input-group>
            </c-box>
            <c-box 
               v-if="isAuthenticated === false" 
               display="flex" 
               gap="10px"
            >
               <c-box :display="{base:'none' , lg:'flex'}">
                  <router-link class="btn__lin__nav" :to="{name:'sign-up'}">Sign Up</router-link>
               </c-box>
               <router-link class="btn__lin__nav active" :to="{name:'sign-in'}">Sign In</router-link>
            </c-box>
            <c-box 
               v-else 
               display="flex" 
               gap="10px">
               <router-link class="btn__lin__nav" :to="{name:'forum'}">Forum</router-link>
            </c-box>
         </template>
      </c-flex>
   </c-box>
</template>

<script>
   import { 
      CIcon, 
      CHeading, 
      CFlex, 
      CBox, 
      CText, 
      CInputGroup,
      CInputLeftElement,
      CInput,
      CDrawerBody,
      CDrawerContent,
      CDrawerHeader,
      CDrawerOverlay,
      CDrawer,
      CBreadcrumbItem,
      CBreadcrumbLink,
   } from "@chakra-ui/vue";
   import { mapGetters } from 'vuex'

   export default {
      name:'BaseHeader',
      components: {
         CDrawer,
         CFlex,
         CBox,
         CHeading,
         CText,
         CIcon,
         CInputGroup,
         CInputLeftElement,
         CInput,
         CDrawerBody,
         CDrawerContent,
         CDrawerHeader,
         CDrawerOverlay,
         CBreadcrumbItem,
         CBreadcrumbLink,
      },
      data(){
         return {
            isIndexPage: false,
            isOpen: false,
            placement: 'left'
         }
      },
      mounted(){
         this.isLandingPage();
      },
      methods: {
         ...mapGetters(['user']),
         setPlacement(value) {
            this.placement = value
         },
         close () {
            this.isOpen = false;
         },
         closeNav(){
            this.isOpen = false
            console.log('hello')
         },
         isLandingPage(){
            if(this.$route.name === 'home'){
               this.isIndexPage = true
               return;
            }
            this.isIndexPage = false
         },
      },
      computed: {
         isAuthenticated(){
            return this.$store.getters.isLoggedIn;
         },
      },
      watch:{
         $route(){
            this.isLandingPage()
         }
      }
   }
</script>

<style lang="scss" scoped>
   .img-holder{
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: #390d0d;
      display: flex;
      justify-content: center;
      align-items:center;

      & img {
         object-fit: cover;
         width: 45px;
         height: 45px;
         border-radius: 50%;
      }
   }

   .nav-link {
      display: flex;

      & li {
         list-style-type: none;
      }
   }

   .width {
      width: 100px;
   }

   .link {
      color: white;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      padding: .7rem 0px;
      display: inline-block;
      width: 80px;
      text-align: center;
      
      &:hover{
         border-bottom: 1px solid #ffffff;
      }

      &.router-link-active,
      &.router-link-exact-active {
         border-bottom: 1px solid #ffffff;
      }
   }

   .btn__lin__nav {
      padding: 10px 2rem;
      color: #006BBB;
      text-decoration: none;
      font-weight: 400;
      letter-spacing: .5px;
      border-radius: 17px;
      box-shadow: 0px 2px 5px rgba(0 , 0 , 0 , .1);

      &.active {
         background: #006BBB;
         color: #fff;
      }
   }
</style>