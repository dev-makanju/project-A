import axios from 'axios'

const token = localStorage.getItem('gobtoken');
const apiClient = axios.create({
   baseURL:'https://forum-vmjl.onrender.com/api/v1/',
   headers:{
      'Access-Control-Allow-Origin':'*',
      'Authorization':'Bearer '+token,
      'Content-Type':'application/json'
   }
});

//export api client for usage...
export default {
   //Authentication service
   loginEvent(data){
      return apiClient.post('auth/login' , data);
   },
   registerEvent(data){
      return apiClient.post('auth/sign-up',data);
   },
}