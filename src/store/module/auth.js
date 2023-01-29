import axios from 'axios'
import eventService from '../../events/eventService';
import router from '../../router'

const state = {
   token: localStorage.getItem('mastertoken') || '',
   user:{},
   status:'',
}

const getters = {
   isLoggedIn: (state) => !!state.token,
   user: (state) => state.user,
   authStatus: (state) => state.status,
}

const mutations = {
   USER_DELETED(state){
      state.isDeletingUser = 'deleted'
   },

   USER_DATA( state , payload){
      state.token = payload.token
   },
}

const actions = {
   //USER LOGGED IN
   async userLogin({commit} , data){
      console.log('called')
      try { 
         const response = await eventService.loginEvent(data)
         console.log(response.status , response);
         if(response.status === 200){
            const token = response.data.token;
            localStorage.setItem("mastertoken" , token);
            axios.defaults.headers.common['Authorization'] = token;
            const data = {
               token: token, 
            }  
            commit("USER_DATA" , data);
         }
         return response;
      }catch(err){
         return err.response;
      }
   },
   //USER SIGN UP
   async userSignUp({commit} , data){
      try{
         const res = await eventService.registerEvent(data );
         if(res.status){
            commit("USER_REGISTERED");
         }
         return res
      }catch(err){
         return err.response
      }
   },
   //GET LOGGED IN USER 
   async getUserInfo({commit}){
      try{
         commit("STATUS");
         const response = await eventService.getUserEvent();
         if(response.status){   
            const token = localStorage.getItem("mastertoken");
            const user = response.data.data
            const role = response.data.data.role
            const data = {
               token: token,
               userRole: role,
               user: user 
            }  
            commit("USER_DATA", data);
            commit('USER_STATUS');
         }
         return response;
      }catch(err){
         return err.response
      }
   },
   async getUserInfoById({commit} , data ){
      try{
         const response = await eventService.getUserByIdEvent(data)
         if(response.status){
            commit('RAW');
            console.log(response)
         }
         return response
      }catch(err){
         return err.reponse;
      }
   },
   //LOG USER OUT
   logout({commit}){
      localStorage.removeItem('gobtoken');
      sessionStorage.clear();
      router.push('/');
      commit('LOGGED_OUT');
      location.reload();
   },
}

export default {
   state,
   getters,
   mutations,
   actions,
}