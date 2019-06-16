
export default {
  
      path: '/NewGames',
      name: 'NewGames',
     // component: HelloWorld
     component : ()=>import('@/components/NewGames'),
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
                  path : '/',
                  redirect : '/NewGames/AppGame'
            }
     ]
}
