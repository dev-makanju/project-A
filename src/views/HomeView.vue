<template>
   <div>      
      <div class="home">
         <div class="home__child">
            <div v-scrollanimation class="text__holder image__holder">
               <img src="../assets/group3.svg" onerror="this.style.display='none'">
            </div>
            <div v-scrollanimation class="text__holder">
               <h2 class="orange">Learning from the Best</h2>
               <p>
                  Contributing to the numerous discussion and topics on this forum , will help you to learn from so many people. broaden your knowledge of social and community engagement.
               </p>
            </div>
         </div>
         <div class="home__child">
            <div v-scrollanimation class="text__holder">
               <h2 class="blue">Favorite Topic</h2>
               <p>
                  On this platform their are several Discussion Topics, which some may be of interest to different users, feel free to create discussion topics.
               </p>
            </div>
            <div v-scrollanimation class="text__holder image__holder">
               <img src="../assets/group4.svg" onerror="this.style.display='none'">
            </div>
         </div>
         <div class="home__child">
            <div v-scrollanimation class="image__holder text__holder">
               <img src="../assets/group2.svg" onerror="this.style.display='none'">
            </div>
            <div v-scrollanimation class="text__holder">
               <h2 class="blue">Group Discussion</h2>
               <p>
                  People have the right to their opinion, community guidelines are in place to keep every user safe, avoid using vulgar languages and try to respect one another.
               </p>
            </div>
         </div>

         <div class="home__child">
            <div v-scrollanimation class="text__holder">
               <h2 class="orange">Chat Explore</h2>
               <p>
                  Explore our chat features, create a discussion , air your opinion and let other contribute to your thought. This is what the platform is all about.
               </p>
            </div>
            <div v-scrollanimation class="text__holder image__holder">
               <img src="../assets/group1.svg" onerror="this.style.display='none'">
            </div>
         </div>
      </div>
      <div class="about">
         <section class="about-section">
            <div class="about-text-input">
               <h1>About Us</h1>
               <p>
                  This forum is created for educational purpose , as a tool to infming the general public about the issues concerning social media data breach in nigeria among start up businesses
               </p>
               <div v-scrollanimation class="btn">Learn More</div>
            </div>
            <div class="about__img">
               <img src="../assets/about.svg" onerror="this.style.display='none'">
            </div>
         </section>
      </div>
   </div>
</template>

<script>
export default {
   name:'HomeView',
}
</script>

<style lang="scss" scoped>
   .text__holder {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & h2 {
         margin: 1rem;
         font-size: 28px;
      }

      & p {
         font-size: 16px;
         color: #000000cc;
         word-spacing: .3px;
      }

      &.before-enter{
         opacity: 0;
         transform: translateY(60px);
         transition: 2s ease-in-out all; 
      }
      &.enter{
         opacity: 1;
         transform: translateY(0px);
      }
   }

   .home {
      width: 80%;
      margin: 0px auto;
      margin-top: 4rem;
      max-width: 1440px;

      &__child{
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center;
         gap: 2rem;
         margin-top: 1rem;

         @media (max-width: 600px) {
            flex-direction: column;
         }

         @media (max-width: 600px) {   
            &:nth-child(2){
               flex-direction: column-reverse;
            }

            &:nth-child(4){
               flex-direction: column-reverse;
            }  
         }

         .image__holder img{
            max-width: 350px;

            @media (max-width: 900px) {
               max-width: 200px;
            }

            @media (max-width: 600px) {
               max-width: 300px;
            }
         }
      }
   }

   .about {
      background: #006BBB;
      margin-top: 4rem;
   }

   .about-section {
      overflow: hidden;
      position: relative;
      height: 650px;
      max-width: 1440px;
      margin: 0px auto;

      @media (max-width: 768px) {
         height: 120vh;
      }

      .about__img img {
         width: 500px;
         position: absolute;
         bottom: -50%;
         right: 0;

         
         @media (max-width: 768px) {
            bottom: -38%;
         }

         @media (max-width: 350px) {
            bottom: 20%;
         }

      }
   }

   .about-text-input {
      margin-left: 8.5%;
      max-width: 650px;
      padding: 1rem .8rem;

      h1{
         padding: 2rem 0;
         font-size: 34px;
         color: #fff;
         font-weight: 600;
      }

      p {
         font-size: 18px;
         color: #fff;
      }
   }

   .btn {
      padding: 1rem;
      border-radius: 5px;
      background-color: #FFC872;
      color: #000;
      width: 200px;
      text-align: center;
      margin: 2rem 0;

      &.before-enter{
         opacity: 0;
         transform: scale(.5) scale(.2) rotateZ(-25deg);
         transition: 1s ease-in-out all; 
      }
      &.enter{
         opacity: 1;
         transform: scale(1) rotateZ(0deg);;
      }
   }

   .orange {
      color: #FFC872;
   }

   .blue {
      color: #006BBB;
   }
</style>