
export default {
  
      path: '/Games',
      name: 'Games',
     // component: HelloWorld
     component : ()=>import('@/views/Games'),
     children:[
           {
                 path:'AppGames',
                 component:()=>import('@/components/Games/AppGame')
           },
           {
            path: 'WebGames',
            name: 'GameType1',
            // component: HelloWorld
            component : ()=>import('@/components/Games/WebGame')
            },
            {
                  path: 'PCGames',
                  name: 'GameType2',
                  // component: HelloWorld
                  component : ()=>import('@/components/Games/PCGame')
            },
            {
                  path:'Detail/1/:Id',
                  name:'Detail',
                  components:{
                        default:()=>import("@/components/Games/AppGame"),
                        Detail:()=>import("@/components/Detail")
                  },
                  props:{
                        Detail:true,
                  }
                  
            },
            {
                  path:'Detail/2/:Id',
                  components:{
                        default:()=>import("@/components/Games/WebGame"),
                        Detail:()=>import("@/components/Detail")
                  },
                  props:{
                        Detail:true,
                  }
                  
            },
            {
                  path:'Detail/3/:Id',
                  components:{
                        default:()=>import("@/components/Games/PCGame"),
                        Detail:()=>import("@/components/Detail")
                  },
                  props:{
                        Detail:true,
                  }
                  
            },
            {
                  path : '/Games',
                  redirect : '/Games/AppGames'
            }
     ]
}
