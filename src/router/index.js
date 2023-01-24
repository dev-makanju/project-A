import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/views/SignIn';
import SignUp from '@/views/SignUp';
import HomeView from '@/views/HomeView';
import ForumView from '@/views/ForumView';
import DiscussionView from '@/views/DiscussionView';
import TopicView from '@/views/TopicView';
import PageShell from '@/layouts/PageShell';

Vue.use(VueRouter)

const routes = [
  {
    
    path:'/sign-up',
    name: 'sign-up',
    component: SignUp,
    meta: {
      title:'Sign Up'
    }
  },
  {
    path:'/sign-in',
    name:'sign-in',
    component: SignIn,
    meta: {
      title:'Sign In'
    }
  },
  {
    path:'',
    name:'main-forum',
    component: PageShell,
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path:'forum',
        name:'forum',
        component: ForumView,
        meta: {
          title: 'Forum'
        }
      },
      {
        path:'discussion',
        name:'discussion',
        component: DiscussionView,
        meta: {
          title: 'Discussion'
        }
      },
      {
        path:'topics',
        name:'topics',
        component: TopicView,
        meta: {
          title: 'Topic'
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
