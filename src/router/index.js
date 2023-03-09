import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/views/SignIn';
import SignUp from '@/views/SignUp';
import HomeView from '@/views/HomeView';
import ForumView from '@/views/ForumView';
import DiscussionView from '@/views/DiscussionView';
import TopicView from '@/views/TopicView';
import NotFound from '../views/NotFound.vue';
import SingleForumPage from '../views/SingleForum.vue';
import PageShell from '@/layouts/PageShell';
import store from '../store';
import SingleTopic from '../views/SingleTopic.vue';
import SingleDiscuss from '../views/SingleDiscusion.vue';
import AllForum from '../views/AllForum.vue';


Vue.use(VueRouter)

const routes = [
  {
    path:'/sign-up',
    name: 'sign-up',
    component: SignUp,
    meta: {
      title:'Sign Up',
      requiresGuest: true,
    }
  },
  {
    path:'/sign-in',
    name:'sign-in',
    component: SignIn,
    meta: {
      title:'Sign In',
      requiresGuest: true,
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
          title: 'Forum',
        }
      },
      {
        path:'forum/:id',
        name:'single-forum',
        component: SingleForumPage,
        meta: {
          title: 'Forum',
        }
      },
      {
        path:'all-forum/',
        name:'all-forum',
        component: AllForum,
        meta: {
          title: 'All forum',
        }
      },
      {
        path:'topic/:id',
        name:'single-topic',
        component: SingleTopic,
        meta: {
          title: 'Forum',
        }
      },
      {
        path:'discussion/:id',
        name:'single-discuss',
        component: SingleDiscuss,
        meta: {
          title: 'discussion',
        }
      },
      {
        path:'discussion',
        name:'discussion',
        component: DiscussionView,
        meta: {
          title: 'Discussion',
        }
      },
      {
        path:'topics',
        name:'topics',
        component: TopicView,
        meta: {
          title: 'Topic',
        }
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error',
    component: NotFound,
    meta:{
        title:'404-notfound'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to , from , next) => {
    const user = store.getters.isLoggedIn;
    if(to.matched.some(res => res.meta.requiresGuest)){
      if(user){
         next({name:'forum' });
         return;
      }
      next();
    }else{
      return next();
    }
});


router.beforeEach((to , from , next) => {
    const user = store.getters.isLoggedIn;
    if(to.matched.some(res => res.meta.requiresAuth)){
      if(!user){
        return next({ name:'sign-in' })
      }
      next();
    }else{
      return next();
    }
});


export default router
