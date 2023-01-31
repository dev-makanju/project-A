import axios from 'axios'

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

//

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
      return apiClient.post('forum/create' , data);
   },
   getSingleForum(data){
      return apiClient.get(`forum/get-forum/${data}`);
   },
   getPopularDiscussion(){
      return apiClient.get('discussion/discussion-by-retweet');
   },
   getAllForum(){
      return apiClient.get('forum/get-all-forums');
   },
   createDiscuss(data){
      return apiClient.post('discussion/create' , data);
   },
   getDiscussionOnForum(data){
      return apiClient.get('discussion/on-forum/' , data);
   },
   discussComment(data){
      return apiClient.post(`discussion/add-comment/${data}`);
   },
   getSingleDiscuss(data){
      return apiClient.get(`discussion/${data}`);
   },
   createTopic(data){
      return apiClient.post(`topic/create` , data);
   },
   getSingleTopic(data){
      return apiClient.get(`topic/${data}`);
   },
   answerSingleTopic(data){
      return apiClient.post(`topic/answer-a-topic/${data}`);
   },
   getAllTopicOnForum(data){
      return apiClient.get('topic/topics-on-forum' , data);
   },
   replyOnTopic(data){
      return apiClient.post(`topic/reply-a-topic/${data}`);
   },
   followForum(data){
      return apiClient.patch('forum/enroll-a-forum' ,data);
   },
   getAllTopics(){
      return apiClient.get('topic/get-topics-by-pins');
   }
}