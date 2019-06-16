import Vue from 'vue'
import Router from 'vue-router'

import homeRouter from '@/routers/Home'
import gamesRouter from '@/routers/Games'
import newgamesRouter from '@/routers/NewGames'
import gamestragiesRouter from '@/routers/GameStragies'
import mineRouter from '@/routers/Mine'

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
    {
      path:'/',
      redirect:'/NewGames'
    }
  ]
})
