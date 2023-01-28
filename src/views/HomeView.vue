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
                  Lorem ipsum dolor sit amet consectetur. Erat mollis sapien aliquet a bibendum sem augue quisque aliquam. Tristique maecenas diam scelerisque non. Pellentesque sollicitudin integer pharetra donec faucibus risus. Imperdiet blandit arcu malesuada felis dignissim egestas nisi. Suscipit diam pellentesque consectetur quis. Lectus habitant quam lacus sociis malesuada sit. Massa turpis vitae et amet a convallis posuere. Feugiat venenatis dignissim pharetra euismod. Nisi dui id ultricies pharetra. Euismod egestas arcu enim donec sed at vestibulum enim adipiscing. Cras tellus sed aliquam at in mattis aliquet. Lobortis tellus scelerisque magnis elit vitae.
               </p>
            </div>
         </div>
         <div class="home__child">
            <div v-scrollanimation class="text__holder">
               <h2 class="blue">Favorite Topic</h2>
               <p>
                  Sem convallis turpis amet consectetur scelerisque purus arcu nunc. Venenatis feugiat elit aliquet congue turpis pharetra nec. In malesuada laoreet id porttitor augue amet nec praesent. Aliquam nunc dui mollis volutpat orci a urna elementum. Vitae malesuada placerat fermentum pellentesque. Ultrices cras faucibus gravida et quis augue vitae tortor auctor. Eget sit sit eu a enim curabitur.
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
                  Lorem ipsum dolor sit amet consectetur. Erat mollis sapien aliquet a bibendum sem augue quisque aliquam. Tristique maecenas diam scelerisque non. Pellentesque sollicitudin integer pharetra donec faucibus risus. Imperdiet blandit arcu malesuada felis dignissim egestas nisi. Suscipit diam pellentesque consectetur quis. Lectus habitant quam lacus sociis malesuada sit. Massa turpis vitae et amet a convallis posuere. Feugiat venenatis dignissim pharetra euismod. Nisi dui id ultricies pharetra. Euismod egestas arcu enim donec sed at vestibulum enim adipiscing. Cras tellus sed aliquam at in mattis aliquet. Lobortis tellus scelerisque magnis elit vitae.
               </p>
            </div>
         </div>

         <div class="home__child">
            <div v-scrollanimation class="text__holder">
               <h2 class="orange">Chat Explore</h2>
               <p>
                  Sem convallis turpis amet consectetur scelerisque purus arcu nunc. Venenatis feugiat elit aliquet congue turpis pharetra nec. In malesuada laoreet id porttitor augue amet nec praesent. Aliquam nunc dui mollis volutpat orci a urna elementum. Vitae malesuada placerat fermentum pellentesque. Ultrices cras faucibus gravida et quis augue vitae tortor auctor. Eget sit sit eu a enim curabitur.
               </p>
            </div>
            <div v-scrollanimation class="text__holder image__holder">
               <img src="../assets/group1.svg" onerror="this.style.display='none'">
            </div>
         </div>
      </div>
      <section class="about-section">
         <div class="about-text-input">
            <h1>About Us</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur. Erat mollis sapien aliquet a bibendum sem augue quisque aliquam. Tristique maecenas diam scelerisque non. Pellentesque sollicitudin integer pharetra donec faucibus risus. Imperdiet blandit arcu malesuada felis dignissim egestas nisi. Suscipit diam pellentesque consectetur quis. Lectus habitant quam lacus sociis malesuada sit. Massa turpis vitae et amet a convallis posuere. Feugiat venenatis dignissim pharetra euismod. Nisi dui id ultricies pharetra. Euismod egestas arcu enim donec sed at vestibulum enim adipiscing. Cras tellus sed aliquam at in mattis aliquet. Lobortis tellus scelerisque magnis elit vitae.
               Sem convallis turpis amet consectetur scelerisque purus arcu nunc. Venenatis feugiat elit aliquet congue turpis pharetra nec. 
            </p>
            <div v-scrollanimation class="btn">Learn More</div>
         </div>
         <div class="about__img">
            <img src="../assets/about.svg" onerror="this.style.display='none'">
         </div>
      </section>
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

   .about-section {
      background: #006BBB;
      margin-top: 4rem;
      overflow: hidden;
      position: relative;
      height: 100vh;

      @media (max-width: 768px) {
         height: 120vh;
      }

      .about__img img {
         width: 500px;
         position: absolute;
         bottom: -50%;
         right: 0;

         
         @media (max-width: 768px) {
            bottom: -55%;
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