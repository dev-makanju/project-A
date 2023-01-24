<template>
   <div>      
      <div class="home">
         <div class="home__child">
            <div class="text__holder image__holder">
               <img src="../assets/group3.svg" onerror="this.style.display='none'">
            </div>
            <div class="text__holder">
               <h2>Learning from the Best</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur. Erat mollis sapien aliquet a bibendum sem augue quisque aliquam. Tristique maecenas diam scelerisque non. Pellentesque sollicitudin integer pharetra donec faucibus risus. Imperdiet blandit arcu malesuada felis dignissim egestas nisi. Suscipit diam pellentesque consectetur quis. Lectus habitant quam lacus sociis malesuada sit. Massa turpis vitae et amet a convallis posuere. Feugiat venenatis dignissim pharetra euismod. Nisi dui id ultricies pharetra. Euismod egestas arcu enim donec sed at vestibulum enim adipiscing. Cras tellus sed aliquam at in mattis aliquet. Lobortis tellus scelerisque magnis elit vitae.
               </p>
            </div>
         </div>
         <div class="home__child">
            <div class="text__holder">
               <h2>Favorite Topic</h2>
               <p>
                  Sem convallis turpis amet consectetur scelerisque purus arcu nunc. Venenatis feugiat elit aliquet congue turpis pharetra nec. In malesuada laoreet id porttitor augue amet nec praesent. Aliquam nunc dui mollis volutpat orci a urna elementum. Vitae malesuada placerat fermentum pellentesque. Ultrices cras faucibus gravida et quis augue vitae tortor auctor. Eget sit sit eu a enim curabitur.
               </p>
            </div>
            <div class="text__holder image__holder">
               <img src="../assets/group4.svg" onerror="this.style.display='none'">
            </div>
         </div>
         <div class="home__child">
            <div class="image__holder text__holder">
               <img src="../assets/group2.svg" onerror="this.style.display='none'">
            </div>
            <div class="text__holder">
               <h2>Group Discussion</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur. Erat mollis sapien aliquet a bibendum sem augue quisque aliquam. Tristique maecenas diam scelerisque non. Pellentesque sollicitudin integer pharetra donec faucibus risus. Imperdiet blandit arcu malesuada felis dignissim egestas nisi. Suscipit diam pellentesque consectetur quis. Lectus habitant quam lacus sociis malesuada sit. Massa turpis vitae et amet a convallis posuere. Feugiat venenatis dignissim pharetra euismod. Nisi dui id ultricies pharetra. Euismod egestas arcu enim donec sed at vestibulum enim adipiscing. Cras tellus sed aliquam at in mattis aliquet. Lobortis tellus scelerisque magnis elit vitae.
               </p>
            </div>
         </div>

         <div class="home__child">
            <div class="text__holder">
               <h2>Chat Explore</h2>
               <p>
                  Sem convallis turpis amet consectetur scelerisque purus arcu nunc. Venenatis feugiat elit aliquet congue turpis pharetra nec. In malesuada laoreet id porttitor augue amet nec praesent. Aliquam nunc dui mollis volutpat orci a urna elementum. Vitae malesuada placerat fermentum pellentesque. Ultrices cras faucibus gravida et quis augue vitae tortor auctor. Eget sit sit eu a enim curabitur.
               </p>
            </div>
            <div class="text__holder image__holder">
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
            <div class="btn">Learn More</div>
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
         font-size: 34px;
      }

      & p {
         font-size: 22px;
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

      .about__img img {
         width: 500px;
         position: absolute;
         bottom: -50%;
         right: 0;

      }
   }

   .about-text-input {
      margin-left: 8.5%;
      max-width: 650px;
      padding: 1rem .8rem;

      h1{
         padding: 2rem 0;
         font-size: 64px;
         color: #fff;
         font-weight: 600;
      }

      p {
         font-size: 20px;
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
   }
</style>