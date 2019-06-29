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
      path: 'map',
      name: 'map',
      component :() =>import('@/components/admin/mapapi.vue'),
      },
    {
     path : '/admin',
     redirect : '/admin/users'
}
]
}