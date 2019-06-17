
export default {
  
      path: '/NewGames',
      name: 'NewGames',
     component : ()=>import('@/views/NewGames'),
     children :[
           {
                 path: 'AppGame',
                 name: 'GameType',
                 // component: HelloWorld
                 component : ()=>import('@/components/NewGames/AppGame')
           },
           {
            path: 'WebGame',
            name: 'GameType1',
            // component: HelloWorld
            component : ()=>import('@/components/NewGames/WebGame')
            },
            {
                  path: 'PCGame',
                  name: 'GameType2',
                  // component: HelloWorld
                  component : ()=>import('@/components/NewGames/PCGame')
            },
            {
                  path:'Detail/1/:Id',
                  name:'Detail',
                  components:{
                        default:()=>import("@/components/NewGames/AppGame"),
                        Detail:()=>import("@/components/Detail")
                  },
                  props:{
                        Detail:true,
                  }
                  
            },
            {
                  path:'Detail/2/:Id',
                  components:{
                        default:()=>import("@/components/NewGames/WebGame"),
                        Detail:()=>import("@/components/Detail")
                  },
                  props:{
                        Detail:true,
                  }
                  
            },
            {
                  path:'Detail/3/:Id',
                  components:{
                        default:()=>import("@/components/NewGames/PCGame"),
                        Detail:()=>import("@/components/Detail")
                  },
                  props:{
                        Detail:true,
                  }
                  
            },
            {
                  path : '/NewGames',
                  redirect : '/NewGames/AppGame'
            }
     ]
}
