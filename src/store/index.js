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
    isFollowing: false,
    forum_topic: {
      loading: false,
      data: []
    },
    forum_discuss: {
      loading: false,
      data: []
    },
    discussions: []
  },
  getters: {
  },
  mutations: {
    DEFAULT(){
      //just a placeholder form
    },
    UPDATE_DISCUSS(){
      //
    },
    UPDATE_TOPIC(){
      //
    },
    UPDATE_DICUSSION_COMMENT(){
      //
    },
    UPDATE_FORUM(state , payload){
      if(state.forum.length < 5){
        state.forum = state.forum.push(payload);
      }
    },
    SET_ALL_FORUM(state , payload){
      state.forum = payload.forums.slice(0 , 5)
    },
    SET_FOLLOW(state){
      state.isFollowing = true;
    },
    SET_FORUM_TOPIC(state , payload){
      state.forum_topic.loading = payload;
    },
    SET_FORUM_DISCUSS(state , payload){
      state.forum_discuss.loading = payload;
    },
    GET_ALL_DICUSSION(state , payload){
      state.discussions = payload;
    }
  },
  actions: {
    async createAForum({commit},data){
      try{
        const response = await eventService.createForum(data)
        if(response.status){
          commit('UPDATE_FORUM' , response.data.forum);
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
    async getSingleForumAction({commit} ,data){
      try{
        const response = await eventService.getSingleForum(data); 
        if(response.status){
          commit('SET_FOLLOW')
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async createAtopic({commit} , data){
      try{
        const response = await eventService.createTopic(data)
        if(response.status){
          console.log(response);
          commit('UPDATE_TOPIC');
        }
        return response; 
      }catch(err){
        return err.response;
      }
    },
    async getAllTopicAction(){
      try{
        const response = await eventService.getAllTopics();
        if(response.status){
          //stay focused  
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async getSingleTopicAction({commit},data){
      try{
        const response = await eventService.getSingleTopic(data);
        if(response.status){
           commit('DEFAULT')
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async createADiscuss({commit},data){
      try{
        const response = await eventService.createDiscuss(data);
        if(response.status){
          console.log(response);
          commit('UPDATE_DISCUSS')
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async getAllDiscussAction({commit}){
      try{
        const response = await eventService.getPopularDiscussion();
        if(response.status){
          commit('GET_ALL_DICUSSION' , response.data.discussioms);
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async getSingleDiscussion({commit},data){
      try{
        const response = await eventService.getSingleDiscuss(data);
        if(response.status){
          commit("DEFAULT");
        } 
        return response;
      }catch(err){
        return err.response;
      }
    },
    async followAforum({commit} , data){
      try{
        const response = await eventService.followForum(data);
        if(response.status){
          commit('SET_FOLLOW')
        } 
        return response;
      }catch(err){
        return err.response;
      }
    },
    async unFollowAction({commit} , data){
      try{
        const response = await eventService.unfollowForum(data)
        if(response.status){
          commit('DEFAULT');
        }
        return response;
      }catch(err){
         err;
      }
    },
    async getTopicByForum({commit} , data){
      try{
        commit('SET_FORUM_TOPIC' , true)
        const response = await eventService.getAllTopicOnForum(data);
        if(response.status){
          commit('SET_FORUM_TOPIC' , false)
          console.log(response)
        }
        return response;
      }catch(err){
        commit('SET_FORUM_TOPIC' , false)
        return err.response;
      }
    },
    async getDiscussionByForum({commit} ,data){
      try{
        commit('SET_FORUM_DISCUSS' , true)
        const response = await eventService.getDiscussionOnForum(data);
        if(response.status){
          commit('SET_FORUM_DISCUSS' , false)
          console.log(response)
        }
        return response;
      }catch(err){
        commit('SET_FORUM_DISCUSS' , false)
        return err.response;
      }
    },
    async commentOnDiscussion({commit} , data){
      try{
        const response = await eventService.addDiscussionComment(data);
        if(response.status){
          commit('UPDATE_DICUSSION_COMMENT' , false)
        }
        return response;
      }catch(err){
        return err.response;
      }
    },
    async commentOnTopic({commit} , data){
      try{
        const response = await eventService.replyOnTopic(data);
        if(response.status){
          commit('UPDATE_DICUSSION_COMMENT' , false)
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
