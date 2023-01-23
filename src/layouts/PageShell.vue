<template>
   <div class="container">
      <div class="main-container">
         <BaseHeader/>
         <Basebanner/>
         <main>
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
   *{
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
   }

   .main-container {
      min-height: 100vh;
   }

</style>