<template>
   <div>
      <div :class="['main-banner', this.$route.name === 'home' && 'add-padding']">
         <div v-if="this.$route.name !== 'home'" class="banner-container">
            <div class="banner-wrapper">
               <h1 v-scrollanimation class="big-text">Welcome</h1>
               <p v-scrollanimation class="big-text">to our</p>
               <span class="small-image-holder">
                  <img src="../../assets/NameLogo.svg">
               </span>
            </div>
            <div class="desctop">
               <span v-if="isDiscussion" class="big-image-holder">
                  <img src="../../assets/banner1.svg">
               </span>
               <span v-if="isTopic"  class="big-image-holder">
                  <img src="../../assets/banner2.svg">
               </span>
               <span v-if="isForum" class="big-image-holder">
                  <img src="../../assets/banner3.svg">
               </span>
            </div>
         </div>
         <c-box mt="3rem 0px">
            <div v-if="$route.name === 'home'" class="banner-wrapper_main">
               <div class="main_vee">
                  <h1 v-scrollanimation class="big-text">Welcome to our community</h1>
                  <p>We Aim to help reduce the risk of data using Social Media</p>
                  
                  <router-link class="next-link" to="/forum">View Forum</router-link>

                  <c-text font-size="1rem 0px" color="#fff">and make a difference</c-text>
               </div>
               <div class="desctop main_vee border">
                  <div class="img-banner">
                     <img src="../../assets/NameLogo.svg">
                  </div>
               </div>
            </div>
         </c-box>      

         <div class="banner-social-share">
            <ul>
               <li v-if="$store.getters.isLoggedIn">
                  <svg @click="logout" class="logout" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                     <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"/>
                     </svg>
               </li>
               <li>
                  <a href="https://www.facebook.com/protektme_/" target="_blank">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_99_4264)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z" fill="#1667DF"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_99_4264">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                     </svg>
                  </a>
               </li>
               <li>
                  <a href="https://twitter.com/protekme_" target="_target"> 
                     <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1.875C7.75195 1.875 1.875 7.75195 1.875 15C1.875 22.248 7.75195 28.125 15 28.125C22.248 28.125 28.125 22.248 28.125 15C28.125 7.75195 22.248 1.875 15 1.875ZM21.3076 11.7686C21.3164 11.9062 21.3164 12.0498 21.3164 12.1904C21.3164 16.4912 18.041 21.4453 12.0557 21.4453C10.21 21.4453 8.49902 20.9092 7.05762 19.9863C7.32129 20.0156 7.57324 20.0273 7.84277 20.0273C9.36621 20.0273 10.7666 19.5117 11.8828 18.6387C10.4531 18.6094 9.25195 17.6719 8.8418 16.3828C9.34277 16.4561 9.79395 16.4561 10.3096 16.3242C9.57342 16.1747 8.91174 15.7749 8.43696 15.1927C7.96218 14.6106 7.70357 13.8821 7.70508 13.1309V13.0898C8.13574 13.333 8.64258 13.4824 9.17285 13.5029C8.72708 13.2058 8.3615 12.8034 8.10853 12.3311C7.85556 11.8589 7.72302 11.3316 7.72266 10.7959C7.72266 10.1895 7.88086 9.63574 8.16504 9.15527C8.98214 10.1611 10.0017 10.9838 11.1576 11.5698C12.3135 12.1558 13.5797 12.4921 14.874 12.5566C14.4141 10.3447 16.0664 8.55469 18.0527 8.55469C18.9902 8.55469 19.834 8.94727 20.4287 9.58008C21.1641 9.44238 21.8672 9.16699 22.4941 8.79785C22.251 9.55078 21.7412 10.1865 21.0645 10.5879C21.7207 10.5176 22.3535 10.3359 22.9395 10.0811C22.4971 10.7314 21.9434 11.3086 21.3076 11.7686Z" fill="#1667DF"/>
                     </svg>
                  </a>
               </li>
               <li>
                  <a href="https://www.instagram.com/protektme_/" target="_target">
                     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px"> <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" fill="#1667DF"/></svg>
                  </a>
               </li>
            </ul>
         </div>
      </div>   
      <!-- logo banner -->
      <div class="sponsor-banner">
         <span>
            <img src="../../assets/sponsor/sponsor1.svg">
         </span>
         <span>
            <img src="../../assets/sponsor/sponsor2.svg">
         </span>
         <span>
            <img src="../../assets/sponsor/sponsor4.svg">
         </span>
         <span>
            <img src="../../assets/sponsor/sponsor3.png">
         </span>
         <span>
            <img src="../../assets/sponsor/sponsor6.svg">
         </span>
      </div>
   </div>
</template>
<script>

import { CText , CBox } from '@chakra-ui/vue';

export default {
   name:'BaseBanner',
   components: {
      CText,
      CBox
   },
   data(){
      return {
         isForum: false,
         isDiscussion: false,
         isTopic: false,
      }
   },
   mounted() {
      this.checkScreen()
   },
   methods:{
      checkScreen(){
         const forum = this.$route.name;
         this.isForum = false;
         this.isDiscussion = false;
         this.isTopic = false;
         switch(forum){
            case 'forum':
               this.isForum = true;
               break;
            case 'discussion':
               this.isDiscussion = true;
               break;
            case 'topics':
               this.isTopic = true
               break;     
         }
      },
      logout(){
         this.$store.dispatch('logout')
      }
   },
   watch:{
      $route(){
         this.checkScreen();
      }
   }
}

</script>

<style lang="scss">
   .logout {
      stroke-width: 2px;
      fill: #f31d06;
      padding-right: 4px;
   }
   .border {
      border-radius: 50% 0px 0px 50%;
      background: #FFC872; 
      padding: 0px 0px 0px 20px;
      
      & .img-banner {
         background: #fff;   
         height: 100%;
         border-radius: 50% 0px 0px 50%;
         display: flex;
         justify-content: center;
         align-items: center;
      }

      img{
         height: 150px;
      }
   }

   .main-banner {
      position: relative;
   }

   .main_vee{
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
         font-size: 30px;
         color: #FFFFFF;

         @media (max-width: 450px) {
            text-align: center;
         }
      }

      p {
         color: #FFFFFF;
         opacity: .6;
         font-size: 14px;
         padding: 1.5rem 0px;
      
         @media (max-width: 450px) {
            text-align: center;
         }
      }
   }

   .banner-wrapper_main {
      background-color: #006BBB;
      border-radius: 10px;
      box-shadow: 0px 2px 5px rgba(0 , 0 , 0 , .1);
      width: 80%;
      margin:0px auto;
      display: flex;
      height: 400px;
      max-width: 1440px;
   }

   .next-link{
      padding: 10px 40px;
      border-radius: 5px;
      margin:"1rem 0px";
      text-decoration: none;
      background: #FFC872;
      color: #252525cc;
   }

   .banner-social-share {
      position: absolute;
      top: 0px;
      height: 100%;
      width: 40px;
      right: 0px;
      display: flex;
      align-items: center;

      & > div {
         flex: 1;
         border: 1px solid red;
      }

      & ul {
         background-color: #D9D9D9;
         width: 100%;
         box-shadow: 0px 2px 5px rgba(0 , 0 , 0 , .3);
         border-radius: 10px 0px 0px 10px;
         
         & li {
            list-style-type: none;
            padding: .8rem;
            cursor: pointer;
         }
      }
   }

   .sponsor-banner {
      background: #FFC872;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      overflow-x: auto ;

      & span img {
         width: 120px;
      }
   }

   .banner-container {
      min-height: 400px;
      display: flex;
      width: 80%;
      margin: auto;
      overflow: hidden;
      flex-direction: row;
      justify-content: space-between;
      gap: 3rem;

      @media (max-width: 600px) {
         flex-direction: column;
         width: 100%;
      }
   }

   .small-image-holder {
      img {
         width: 300px;
      }
   }

   .banner-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: auto;

      @media (max-width: 600px) {
         height: 300px;
      }

      h1 {
         font-size: 30px;
         color: #006BBB;
      }

      p {
         color:#000000;
         opacity: .6;
      }
   }

   .desctop {
      display: none;

      @media (min-width: 994px) {
         display: block;
      }
   }

   .add-padding {
      padding: 2rem 0px;
   }

   .big-text {
      &.before-enter{
         opacity: 0;
         transform: translateY(12px);
         transition: 1s ease-in-out all; 
      }
      &.enter{
         opacity: 1;
         transform: translateY(0px);
      }
   }

</style>