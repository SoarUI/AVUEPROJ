
export default {
  
      path: '/GameStragies',
      name: 'GameStragies',
     component : ()=>import('@/views/GameStragies'),
     children : [
           {
                 path : 'AppStragies',
                 name: 'appstragies',
                 component:()=>import('@/components/GameStragies/AppStragies')
           },
           {
            path : 'WebStragies',
            name: 'Webstragies',
            component:()=>import('@/components/GameStragies/WebStragies')
      },
      {
            path : 'PCStragies',
            name: 'pcstragies',
            component:()=>import('@/components/GameStragies/PCStragies')
      },
     
      {
            path:'Detail/1/:Id',
            components:{
                  //default:()=>import("@/components/GameStragies/AppStragies"),
                  Detail:()=>import("@/components/Mine/articleDetail.vue")
            },
            props:{
                  Detail:true,
            }
            
      },
      {
            path:'Detail/2/:Id',
            components:{
                  //default:()=>import("@/components/GameStragies/WebStragies"),
                  Detail:()=>import("@/components/Mine/articleDetail.vue")
            },
            props:{
                  Detail:true,
            }
            
      },
      {
            path:'Detail/3/:Id',
            components:{
                  //default:()=>import("@/components/GameStragies/PCStragies"),
                  Detail:()=>import("@/components/Mine/articleDetail.vue")
            },
            props:{
                  Detail:true,
            }
            
      },
      {
            path : '/GameStragies',
            redirect : '/GameStragies/AppStragies'
      }
     ]
}
