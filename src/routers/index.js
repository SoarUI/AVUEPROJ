import Vue from 'vue'
import Router from 'vue-router'

import homeRouter from '@/routers/Home'
import gamesRouter from '@/routers/Games'
import newgamesRouter from '@/routers/NewGames'
import gamestragiesRouter from '@/routers/GameStragies'
import mineRouter from '@/routers/Mine'
import adminRouter from '@/routers/admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    newgamesRouter,
    homeRouter,
    gamesRouter,
    gamestragiesRouter,
    mineRouter,
    adminRouter,
    {
      path:'/',
      redirect:'/NewGames'
    }
  ]
})
