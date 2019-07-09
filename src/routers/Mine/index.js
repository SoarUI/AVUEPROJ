
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
                  children:[
                        {
                              path:'Selfimg',
                              component :() =>import('@/components/Mine/Selfimg.vue'),
                        },
                        {
                              path:'writestragies',
                              component :() =>import('@/components/Mine/writestragies.vue'),
                        },
                        {
                              path:'chiongzhi',
                              component :() =>import('@/components/Mine/chiongzhi.vue'),
                        },
                        {
                              path:'myarticle',
                              component :() =>import('@/components/Mine/myarticle.vue'),
                        },
                        {
                              path : '/Mine/Center',
                              redirect : '/Mine/Center/Selfimg'
                        }
                  ]
            },
            
           {
            path : '/Mine',
            redirect : '/Mine/Center'
      }
     ]
     
}
