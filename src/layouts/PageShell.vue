<template>
   <div class="container">
      <div class="main-container">
         <BaseHeader/>
         <Basebanner/>
         <main class="main_width">
            <router-view></router-view>
         </main>
      </div>
      <ContactForm/>
      <BaseFooter/>
   </div>
</template>

<script>
   import BaseHeader from '@/components/customs/BaseHeader.vue';
   import BaseFooter from '@/components/customs/BaseFooter.vue';
   import Basebanner from '@/components/customs/BaseBanner.vue';
   import ContactForm from '@/components/customs/ContactForm.vue';

   export default {
      name:'PageShell',
      components: {
         BaseHeader,
         BaseFooter,
         Basebanner,
         ContactForm,
      }
   }
</script>

<style lang="scss">
   @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&family=Roboto&display=swap');

   *{
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
   }

   body {
      font-family: 'Roboto', sans-serif;

   }

   .main-container {
      min-height: 100vh;
   }


</style>