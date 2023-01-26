<template>  
   <c-box>
      <label class="container">{{title}}
         <input type="checkbox" checked="checked">
         <span class="checkmark"></span>
      </label>
   </c-box>  
</template>

<script>

   import { CBox } from '@chakra-ui/vue';

   export default {
      name:'BaseFilter',
      props: {
         title: {
            type: String,
            default: 'label'
         }
      },
      components:{
         CBox,
      },
      data() {
         return {

         }
      }
   }
</script>

<style lang="scss" scoped>
   .container {
      display: block;
      position: relative;
      padding-left: 35px;
      cursor: pointer;
      font-size: 18px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
   }

   /* Hide the browser's default checkbox */
   .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
   }

   /* Create a custom checkbox */
   .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      border: 2px solid blue;
      border-radius: 3px;
   }

   

   /* When the checkbox is checked, add a blue background */
   .container input:checked ~ .checkmark {
     background-color: #2196F3;
   }

   /* Create the checkmark/indicator (hidden when not checked) */
   .checkmark:after {
      content: "";
      position: absolute;
      display: none;
   }

   /* Show the checkmark when checked */
   .container input:checked ~ .checkmark:after {
      display: block;
   }

   /* Style the checkmark/indicator */
   .container .checkmark:after {
      left: 5px;
      top: 2px;
      width: 4px;
      height: 7px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
   }

</style>