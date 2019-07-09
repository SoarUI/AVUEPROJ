import Vue from 'vue'
import Router from 'vue-router'

import gamesRouter from '@/routers/Games'
import newgamesRouter from '@/routers/NewGames'
import gamestragiesRouter from '@/routers/GameStragies'
import mineRouter from '@/routers/Mine'
import adminRouter from '@/routers/admin'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    newgamesRouter,
    gamesRouter,
    gamestragiesRouter,
    mineRouter,
    adminRouter,
    {
      path:'/Detail/1/:Id',
      components:{
            //default:()=>import("@/components/GameStragies/AppStragies"),
            Detail:()=>import("@/components/GameStragies/Detail.vue")
      },
      props:{
            Detail:true,
      }
      
},
{
      path:'/Detail/2/:Id',
      components:{
            //default:()=>import("@/components/GameStragies/WebStragies"),
            Detail:()=>import("@/components/GameStragies/Detail.vue")
      },
      props:{
            Detail:true,
      }
      
},
{
      path:'/Detail/3/:Id',
      components:{
            //default:()=>import("@/components/GameStragies/PCStragies"),
            Detail:()=>import("@/components/GameStragies/Detail.vue")
      },
      props:{
            Detail:true,
      }
      
},
    {
      path:'/',
      redirect:'NewGames'
    }
  ]
})
