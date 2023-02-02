import axios from 'axios'
import eventService from '../../events/eventService';
import router from '../../router'

const state = {
   token: localStorage.getItem('mastertoken') || '',
   user:{},
   status:'',
   firstname: '',
   lastname: '',
   occupation: '',
   email: '',
}

const getters = {
   isLoggedIn: (state) => !!state.token,
   user: (state) => state.user,
   authStatus: (state) => state.status,
}

const mutations = {
   STATUS(){
      //
   },
   USER_REGISTERED(){
      //
   },
   USER_STATUS(){
      //
   },
   USER_DELETED(state){
      state.isDeletingUser = 'deleted'
   },
   LOGGED_OUT(state){
      state.token = ''
   },
   USER_AUTH(state , payload){
      state.token = payload.token;
   },
   USER_DATA( state , payload){
      state.user = payload;
      state.firstname = payload.firstName;
      state.lastname = payload.lastName;
      state.email = payload.email;
      state.occupation = payload.occupation;
   },
}

const actions = {
   //USER LOGGED IN
   async userLogin({commit} , data){
      try { 
         const response = await eventService.loginEvent(data)
         if(response.status === 200){
            const token = response.data.token;
            localStorage.setItem("mastertoken" , token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const data = {
               token: token, 
            }  
            commit("USER_AUTH" , data);
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
         return err.response;
      }
   },
   //GET LOGGED IN USER 
   async getUserInfo({commit}){
      try{
         commit("STATUS");
         const response = await eventService.getUser();
         if(response.status){   
            const user = response.data.data.user
            commit("USER_DATA", user);
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
         }
         return response
      }catch(err){
         return err.reponse;
      }
   },
   //LOG USER OUT
   logout({commit}){
      localStorage.removeItem('mastertoken');
      sessionStorage.clear();
      router.push({name:'home'});
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