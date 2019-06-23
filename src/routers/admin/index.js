export default {
  
    path: '/admin',
    name: 'admin',
   component : ()=>import('@/views/admin'),
   children:[
     {
           path: 'users',
           name: 'users',
           component :() =>import('@/components/admin/users.vue'),
     },
    {
     path : '/admin',
     redirect : '/admin/users'
}
]
}