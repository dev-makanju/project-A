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
            <div v-if="this.$route.name === 'home'" class="banner-wrapper_main">
               <div class="main_vee">
                  <h1 v-scrollanimation class="big-text">Welcome to our community</h1>
                  <p>We Aim to help reduce the risk of data using Social Media</p>
                  
                  <router-link class="next-link" to="/sign-up">Join Us</router-link>

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
               <li>
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
               </li> 
               <li>
                  <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_99_4270)">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M30 15C30 23.2838 23.2838 30 15 30C6.71625 30 0 23.2838 0 15C0 6.71625 6.71625 0 15 0C23.2838 0 30 6.71625 30 15ZM15.5375 11.0738C14.0788 11.68 11.1625 12.9362 6.79 14.8413C6.08 15.1237 5.7075 15.4 5.67375 15.67C5.61625 16.1275 6.18875 16.3075 6.96625 16.5513C7.0725 16.585 7.1825 16.6187 7.295 16.6562C8.06125 16.905 9.09125 17.1962 9.62625 17.2075C10.1125 17.2175 10.655 17.0175 11.2537 16.6075C15.3387 13.8488 17.4475 12.455 17.58 12.425C17.6737 12.4037 17.8037 12.3762 17.8913 12.455C17.9788 12.5325 17.97 12.68 17.9613 12.72C17.9038 12.9612 15.6613 15.0475 14.4987 16.1275C14.1362 16.4638 13.88 16.7025 13.8275 16.7575C13.71 16.8787 13.59 16.995 13.475 17.1063C12.7625 17.7913 12.23 18.3062 13.505 19.1462C14.1175 19.55 14.6075 19.8838 15.0962 20.2163C15.63 20.58 16.1625 20.9425 16.8525 21.395C17.0275 21.51 17.195 21.6287 17.3587 21.745C17.98 22.1887 18.5387 22.5862 19.2288 22.5237C19.6287 22.4862 20.0437 22.11 20.2537 20.9862C20.75 18.3287 21.7275 12.5738 21.9538 10.2013C21.9675 10.0043 21.9591 9.80636 21.9287 9.61125C21.9106 9.45366 21.8338 9.30866 21.7138 9.205C21.535 9.05875 21.2575 9.0275 21.1325 9.03C20.5688 9.04 19.7038 9.34125 15.5375 11.0738Z" fill="#1667DF"/>
                     </g>
                     <defs>
                     <clipPath id="clip0_99_4270">
                     <rect width="30" height="30" fill="white"/>
                     </clipPath>
                     </defs>
                  </svg>
               </li>
               <li>
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15 1.875C7.75195 1.875 1.875 7.75195 1.875 15C1.875 22.248 7.75195 28.125 15 28.125C22.248 28.125 28.125 22.248 28.125 15C28.125 7.75195 22.248 1.875 15 1.875ZM21.3076 11.7686C21.3164 11.9062 21.3164 12.0498 21.3164 12.1904C21.3164 16.4912 18.041 21.4453 12.0557 21.4453C10.21 21.4453 8.49902 20.9092 7.05762 19.9863C7.32129 20.0156 7.57324 20.0273 7.84277 20.0273C9.36621 20.0273 10.7666 19.5117 11.8828 18.6387C10.4531 18.6094 9.25195 17.6719 8.8418 16.3828C9.34277 16.4561 9.79395 16.4561 10.3096 16.3242C9.57342 16.1747 8.91174 15.7749 8.43696 15.1927C7.96218 14.6106 7.70357 13.8821 7.70508 13.1309V13.0898C8.13574 13.333 8.64258 13.4824 9.17285 13.5029C8.72708 13.2058 8.3615 12.8034 8.10853 12.3311C7.85556 11.8589 7.72302 11.3316 7.72266 10.7959C7.72266 10.1895 7.88086 9.63574 8.16504 9.15527C8.98214 10.1611 10.0017 10.9838 11.1576 11.5698C12.3135 12.1558 13.5797 12.4921 14.874 12.5566C14.4141 10.3447 16.0664 8.55469 18.0527 8.55469C18.9902 8.55469 19.834 8.94727 20.4287 9.58008C21.1641 9.44238 21.8672 9.16699 22.4941 8.79785C22.251 9.55078 21.7412 10.1865 21.0645 10.5879C21.7207 10.5176 22.3535 10.3359 22.9395 10.0811C22.4971 10.7314 21.9434 11.3086 21.3076 11.7686Z" fill="#1667DF"/>
                  </svg>
               </li>
               <li>
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M25.1999 8.54982C21.5999 2.99982 14.2499 1.34982 8.54991 4.79982C2.99991 8.24982 1.19991 15.7498 4.79991 21.2998L5.09991 21.7498L3.89991 26.2498L8.39991 25.0498L8.84991 25.3498C10.7999 26.3998 12.8999 26.9998 14.9999 26.9998C17.2499 26.9998 19.4999 26.3998 21.4499 25.1998C26.9999 21.5998 28.6499 14.2498 25.1999 8.54982ZM22.0499 20.0998C21.4499 20.9998 20.6999 21.5998 19.6499 21.7498C19.0499 21.7498 18.2999 22.0498 15.2999 20.8498C12.7499 19.6498 10.6499 17.6998 9.14991 15.4498C8.24991 14.3998 7.79991 13.0498 7.64991 11.6998C7.64991 10.4998 8.09991 9.44982 8.84991 8.69982C9.14991 8.39982 9.44991 8.24982 9.74991 8.24982H10.4999C10.7999 8.24982 11.0999 8.24982 11.2499 8.84982C11.5499 9.59982 12.2999 11.3998 12.2999 11.5498C12.4499 11.6998 12.4499 11.9998 12.2999 12.1498C12.4499 12.4498 12.2999 12.7498 12.1499 12.8998C11.9999 13.0498 11.8499 13.3498 11.6999 13.4998C11.3999 13.6498 11.2499 13.9498 11.3999 14.2498C11.9999 15.1498 12.7499 16.0498 13.4999 16.7998C14.3999 17.5498 15.2999 18.1498 16.3499 18.5998C16.6499 18.7498 16.9499 18.7498 17.0999 18.4498C17.2499 18.1498 17.9999 17.3998 18.2999 17.0998C18.5999 16.7998 18.7499 16.7998 19.0499 16.9498L21.4499 18.1498C21.7499 18.2998 22.0499 18.4498 22.1999 18.5998C22.3499 19.0498 22.3499 19.6498 22.0499 20.0998Z" fill="#1667DF"/>
                  </svg>
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
               console.log(forum)
               break;
            case 'discussion':
               this.isDiscussion = true;
               break;
            case 'topics':
               this.isTopic = true
               break;     
         }
      }
   },
   watch:{
      $route(){
         console.log('changed');
         this.checkScreen();
      }
   }
}

</script>

<style lang="scss">
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