
export default {
  
      path: '/Mine',
      name: 'Mine',
     // component: HelloWorld
     component : ()=>import('@/views/Mine'),
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
                  path: 'ForgetPassword',
                  component :() =>import('@/components/ForgetPassword'),
                  },
            {
                  path: 'Center',
                  name: 'personal',
                  component :() =>import('@/components/Mine/Center.vue'),
            },
           {
            path : '/Mine',
            redirect : '/Mine/Center'
      }
     ]
     
}
