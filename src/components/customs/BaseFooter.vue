<template>
   <c-box padding="2rem" bgColor="#1B2643" width="100%">   
      <c-flex :width="{ base:'90%', md: '80%' }" m="auto" :flex-wrap="{ base:'wrap' , lg:'nowrap'}" gap="2.5rem">
         <c-box dispaly="flex">
            <router-link class="nav-link" :to="{name: 'home'}">
               <c-box mb="1.5rem" display='flex' gap="10px" align-items="center">
                  <c-box>
                     <img class="logo" src="../../assets/sponsor/logoicon.png" oneerror="this.style.display='none'">
                  </c-box>
                  <c-heading color="white" fontSize="20px">
                     ProtektMe
                  </c-heading>
               </c-box>
            </router-link>
            <c-box>
               <c-text letterSpacing=".6px" color="rgba(255, 255, 255, 0.6)" fontSize="12px">
                  This forum is created for educational purpose , as a tool to infming the general public about the issues concerning social media data breach in nigeria among start up businesses
               </c-text>
            </c-box>
         </c-box>

         <c-box  display="flex" gap="1rem">
            <c-flex>
               <ul class="footer-link">
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">Home</c-link>   
                  </li>
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">Blog Post</c-link>   
                  </li>
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">FAQ'S</c-link>   
                  </li>
               </ul>
            </c-flex>
            <c-flex>
               <ul class="footer-link">
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/forum">Forum</c-link>   
                  </li>
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/topics">Topics</c-link>   
                  </li>
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/discussion">Discussion</c-link>   
                  </li>
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">Chat</c-link>   
                  </li>
               </ul>
            </c-flex>
         </c-box>

         <c-box  display="flex" gap="1rem">
            <c-flex>
               <ul class="footer-link">
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">About Us</c-link>   
                  </li>
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">News Letter</c-link>   
                  </li>
               </ul>
            </c-flex>
            <c-flex>
               <ul class="footer-link">
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">Contact Us</c-link>   
                  </li>
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">Address</c-link>   
                  </li>
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">Phone Number</c-link>   
                  </li>
                  <li>              
                     <c-link font-size="14px" color="white" as="router-link" to="/">Email Address</c-link>   
                  </li>
               </ul>
            </c-flex>
         </c-box>

         <c-flex mt="2rem" direction="column" gap="1rem">
            <c-flex gap="1rem">
               <c-box>
                  <a href="https://www.facebook.com/protektme_/" target="_blank">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_99_4264)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z" fill="#FFE3B3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_99_4264">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                     </svg>   
                  </a>
               </c-box>
               <c-box>
                  <a href="https://twitter.com/protekme_" target="_blank">
                     <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15 1.875C7.75195 1.875 1.875 7.75195 1.875 15C1.875 22.248 7.75195 28.125 15 28.125C22.248 28.125 28.125 22.248 28.125 15C28.125 7.75195 22.248 1.875 15 1.875ZM21.3076 11.7686C21.3164 11.9062 21.3164 12.0498 21.3164 12.1904C21.3164 16.4912 18.041 21.4453 12.0557 21.4453C10.21 21.4453 8.49902 20.9092 7.05762 19.9863C7.32129 20.0156 7.57324 20.0273 7.84277 20.0273C9.36621 20.0273 10.7666 19.5117 11.8828 18.6387C10.4531 18.6094 9.25195 17.6719 8.8418 16.3828C9.34277 16.4561 9.79395 16.4561 10.3096 16.3242C9.57342 16.1747 8.91174 15.7749 8.43696 15.1927C7.96218 14.6106 7.70357 13.8821 7.70508 13.1309V13.0898C8.13574 13.333 8.64258 13.4824 9.17285 13.5029C8.72708 13.2058 8.3615 12.8034 8.10853 12.3311C7.85556 11.8589 7.72302 11.3316 7.72266 10.7959C7.72266 10.1895 7.88086 9.63574 8.16504 9.15527C8.98214 10.1611 10.0017 10.9838 11.1576 11.5698C12.3135 12.1558 13.5797 12.4921 14.874 12.5566C14.4141 10.3447 16.0664 8.55469 18.0527 8.55469C18.9902 8.55469 19.834 8.94727 20.4287 9.58008C21.1641 9.44238 21.8672 9.16699 22.4941 8.79785C22.251 9.55078 21.7412 10.1865 21.0645 10.5879C21.7207 10.5176 22.3535 10.3359 22.9395 10.0811C22.4971 10.7314 21.9434 11.3086 21.3076 11.7686Z" fill="#FFE3B3"/>
                     </svg>
                  </a>
               </c-box>
            </c-flex>
            <c-flex gap="1rem">
               <c-box>
                  <a href="" target="_blank">
                     <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M25.1999 8.54982C21.5999 2.99982 14.2499 1.34982 8.54991 4.79982C2.99991 8.24982 1.19991 15.7498 4.79991 21.2998L5.09991 21.7498L3.89991 26.2498L8.39991 25.0498L8.84991 25.3498C10.7999 26.3998 12.8999 26.9998 14.9999 26.9998C17.2499 26.9998 19.4999 26.3998 21.4499 25.1998C26.9999 21.5998 28.6499 14.2498 25.1999 8.54982ZM22.0499 20.0998C21.4499 20.9998 20.6999 21.5998 19.6499 21.7498C19.0499 21.7498 18.2999 22.0498 15.2999 20.8498C12.7499 19.6498 10.6499 17.6998 9.14991 15.4498C8.24991 14.3998 7.79991 13.0498 7.64991 11.6998C7.64991 10.4998 8.09991 9.44982 8.84991 8.69982C9.14991 8.39982 9.44991 8.24982 9.74991 8.24982H10.4999C10.7999 8.24982 11.0999 8.24982 11.2499 8.84982C11.5499 9.59982 12.2999 11.3998 12.2999 11.5498C12.4499 11.6998 12.4499 11.9998 12.2999 12.1498C12.4499 12.4498 12.2999 12.7498 12.1499 12.8998C11.9999 13.0498 11.8499 13.3498 11.6999 13.4998C11.3999 13.6498 11.2499 13.9498 11.3999 14.2498C11.9999 15.1498 12.7499 16.0498 13.4999 16.7998C14.3999 17.5498 15.2999 18.1498 16.3499 18.5998C16.6499 18.7498 16.9499 18.7498 17.0999 18.4498C17.2499 18.1498 17.9999 17.3998 18.2999 17.0998C18.5999 16.7998 18.7499 16.7998 19.0499 16.9498L21.4499 18.1498C21.7499 18.2998 22.0499 18.4498 22.1999 18.5998C22.3499 19.0498 22.3499 19.6498 22.0499 20.0998Z" fill="#FFE3B3"/>
                     </svg>
                  </a>
               </c-box>
               <c-box>
                  <a target="_blank" href="https://www.instagram.com/protektme_/">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_99_4274)">
                        <path d="M12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z" fill="#FFE3B3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2L0 16.8C0 18.7096 0.758569 20.5409 2.10883 21.8912C3.45909 23.2414 5.29044 24 7.2 24H16.8C18.7096 24 20.5409 23.2414 21.8912 21.8912C23.2414 20.5409 24 18.7096 24 16.8V7.2C24 5.29044 23.2414 3.45909 21.8912 2.10883C20.5409 0.758569 18.7096 0 16.8 0L7.2 0ZM6.4 12C6.4 10.5148 6.99 9.09041 8.0402 8.0402C9.09041 6.99 10.5148 6.4 12 6.4C13.4852 6.4 14.9096 6.99 15.9598 8.0402C17.01 9.09041 17.6 10.5148 17.6 12C17.6 13.4852 17.01 14.9096 15.9598 15.9598C14.9096 17.01 13.4852 17.6 12 17.6C10.5148 17.6 9.09041 17.01 8.0402 15.9598C6.99 14.9096 6.4 13.4852 6.4 12ZM17.6 6.4H19.2V4.8H17.6V6.4Z" fill="#FFE3B3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_99_4274">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                     </svg>
                  </a>
               </c-box> 
            </c-flex>
         </c-flex>

      </c-flex>
      <c-flex justify-content="center" mt="4rem" mb="2rem">
            <c-text letterSpacing=".6px" color="rgba(255, 255, 255, 0.6)" fontSize="14px">
               ProtektMe Social &copy; 2022
            </c-text>
      </c-flex>
   </c-box>
</template>

<script>
   import { CHeading, CFlex , CBox , CText , CLink } from "@chakra-ui/vue";

   export default {
      name:'BaseFooter',
      components: {
         CFlex,
         CBox,
         CText,
         CHeading,
         CLink,   
      }
   }
</script>

<style lang="scss">
   .footer-link {
      list-style-type: none;

      & li {
         padding: 10px;
         min-width: 120px;
      }
   }

   .report {
      color: blue;
      font-weight:400;
      cursor:'pointer';
   }
</style>