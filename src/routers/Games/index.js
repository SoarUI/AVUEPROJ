
export default {
  
      path: '/Games',
      name: 'Games',
     component : ()=>import('@/views/Games'),
     children:[
           {
                 path:'AppGames',
                 name: 'GGameTypeApp',
                 component:()=>import('@/components/Games/AppGame')
           },
           {
            path: 'WebGames',
            name: 'GGameType1',
            component : ()=>import('@/components/Games/WebGame')
            },
            {
                  path: 'PCGames',
                  name: 'GGameType2',
                  component : ()=>import('@/components/Games/PCGame')
            },
            {
                  path:'Detail/1/:Id',
                  components:{
                        default:()=>import("@/components/Games/AppGame"),
                        GameDetail:()=>import("@/components/Games/Detail")
                  },
                  props:{
                        GameDetail:true,
                  }
                  
            },
            {
                  path:'Detail/2/:Id',
                  components:{
                        default:()=>import("@/components/Games/WebGame"),
                        GameDetail:()=>import("@/components/Games/Detail")
                  },
                  props:{
                        GameDetail:true,
                  }
                  
            },
            {
                  path:'Detail/3/:Id',
                  components:{
                        default:()=>import("@/components/Games/PCGame"),
                        GameDetail:()=>import("@/components/Games/Detail")
                  },
                  props:{
                        GameDetail:true,
                  }
                  
            },
            {
                  path : '/Games',
                  redirect : '/Games/AppGames'
            }
     ]
}
