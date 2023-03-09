// eslint-disable-next-line vue/multi-word-component-names
<template>
   <div class="modal">
      <slot/> 
   </div>
</template>

<script>
export default {
   name:'BaseModal',
}
</script>

<style lang="scss" scoped>
   .modal{
      position: fixed;
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.472);
   }
</style>