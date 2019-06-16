
export default {
  
      path: '/Mine',
      name: 'Mine',
     // component: HelloWorld
     component : ()=>import('@/components/Mine'),
     children:[
           {
                 path: 'Login',
                 name: 'login',
                 component :() =>import('@/components/Login'),
           },
           {
            path: 'Register',
            name: 'Register',
            component :() =>import('@/components/Register'),
            },
            {
                  path: 'Center',
                  name: 'personal',
                  component :() =>import('@/components/Mine/Center.vue'),
            },
           {
            path : '/',
            redirect : '/Mine/Center'
      }
     ]
     
}
