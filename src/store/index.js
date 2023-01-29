import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/module/auth'
import eventService from '@/events/eventService';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forum: [],
    topis: {},
    discuss: {},    
  },
  getters: {
  },
  mutations: {
    SET_ALL_FORUM(state , payload){
      state.forum = payload.forums.slice(0 , 5)
    },
  },
  actions: {
    async createAForum(data){
      try{
        const response = await eventService.createForum(data)
        if(response.status){
          console.log(response);
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async getAllForumAction({commit}){
      try {
        const response = await eventService.getAllForum();
        if(response.status){
          commit('SET_ALL_FORUM' , response.data);
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async getSingleForumAction(data){
      try{
        const response = await eventService.getSingleForum(data); 
        if(response.status){
          console.log(response)
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async createAtopic(data){
      try{
        const response = await eventService.createTopic(data)
        if(response.status){
          console.log(response);
        }
        return response; 
      }catch(err){
        return err.response;
      }
    },
    async getAllTopicAction(){
      try{
        const response = await eventService.getAllTopic();
        if(response.status){
          //  
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async getSingleTopicAction(data){
      try{
        const response = await eventService.getSingleTopic(data);
        if(response.status){
           console.log(response);
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async createADiscuss(data){
      try{
        const response = await eventService.createDiscuss(data);
        if(response.status){
          console.log(response)
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async getAllDiscussAction(){
      try{
        const response = await eventService.getDiscussion();
        if(response.status){
           console.log(response);
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async getSingleDiscussion(data){
      try{
        const response = await eventService.replyOnTopic(data);
        if(response.status){
          console.log(response);
        } 
        return response;
      }catch(err){
        return err.response;
      }
    }
  },
  modules: {
    auth,
  },
})
