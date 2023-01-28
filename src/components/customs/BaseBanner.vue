<template>
   <div>   
      <div class="banner-container">
         <div class="banner-wrapper">
            <h1>Welcome</h1>
            <p>to our</p>
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

export default {
   name:'BaseBanner',
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
</style>