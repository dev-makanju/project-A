<template>
  <div class="container">
      <router-view></router-view>
  </div>
</template>

<script lang="js">

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components:{
    //
  },
  mounted(){
    if(this.$store.getters.isLoggedIn){
      this.fetchUserInformation()
    }
  },
  methods: {
    ...mapActions(['getUserInfo']),
    fetchUserInformation(){
      this.$store.dispatch('getUserInfo')
    } 
  }
}

</script>

