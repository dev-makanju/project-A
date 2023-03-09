import axios from 'axios'
import router from '../router'

const token = localStorage.getItem('mastertoken');

// Auth services
const apiClient = axios.create({
   baseURL:'https://forum-vmjl.onrender.com/api/v1/',
   headers:{
      'Access-Control-Allow-Origin':'*',
      'Authorization':'Bearer '+token,
      'Content-Type':'application/json'
   }
});

const apiService = axios.create({
   baseURL:'https://forum-vmjl.onrender.com/api/v1/',
   headers:{
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
   }
});

//export api client for usage...
export default {
   //Authentication service
   loginEvent(data){
      return apiService.post('auth/login' , data);
   },
   registerEvent(data){
      return apiService.post('auth/sign-up',data);
   },
   createForum(data){
      if(token){
         return apiClient.post('forum/create' , data);
      }else{
         router.push({name:'sign-in'})
      }
   },
   getSingleForum(data){
      return apiClient.get(`forum/get-forum/${data.id}`);
   },
   getPopularDiscussion(){
      return apiClient.get('discussion/discussion-by-retweet');
   },
   getAllForum(){
      return apiClient.get('forum/get-all-forums');
   },
   createDiscuss(data){
      if(token){
         return apiClient.post('discussion/create' , data);
      }else{
         router.push({name:'sign-in'})
      }
   },
   getDiscussionOnForum(data){
      return apiClient.get('discussion/on-forum/', data);
   },
   getUser(){
      return apiClient.get('user/me');
   },
   discussComment(data){
      if(token){
         return apiClient.post(`discussion/add-comment/${data}`);
      }else{
         router.push({name:'sign-in'});
      }
   },
   getSingleDiscuss(data){
      return apiClient.get(`discussion/${data}`);
   },
   createTopic(data){
      if(token){
         return apiClient.post(`topic/create` , data);
      }else{
         router.push({name:'sign-in'})
      }
   },
   getSingleTopic(data){
      return apiClient.get(`topic/${data}`);
   },
   answerSingleTopic(data){
      if(token){
         return apiClient.patch(`topic/answer-a-topic/${data}` , data.input);
      }else{
         router.push({name:'sign-in'})
      }
   },
   getAllTopicOnForum(data){
      return apiClient.get('topic/topics-on-forum' , data );
   },
   replyOnTopic(data){
      if(token){
         return apiClient.patch(`topic/answer-a-topic/${data.id}` , data.input);
      }else{
         router.push({name:'sign-in'});
      }
   },
   followForum(data){
      if(token){
         return apiClient.patch('forum/enroll-a-forum' , data);
      }else{
         router.push({name:'sign-in'})
      }
   },
   unfollowForum(data){
      if(token){
         return apiClient.delete('forum/unfollow-forum' , data)
      }else{
         router.push({name:'sign-in'})
      }
   },
   getAllTopics(){
      return apiClient.get('topic/get-topics-by-pins');
   },
   addDiscussionComment(data){
      if(token){
         return apiClient.patch(`discussion/add-comment/${data.id}` , data.input);
      }else{
         router.push({name:'sign-in'})
      }
   },
}