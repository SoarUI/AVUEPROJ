
export default {
  
      path: '/GameStragies',
      name: 'GameStragies',
     // component: HelloWorld
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
            path : '/GameStragies',
            redirect : '/GameStragies/AppStragies'
      }
     ]
}
