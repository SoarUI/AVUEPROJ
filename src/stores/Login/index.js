const state ={
username:'',
userId:-1,
isAdmin:false,
clientToken:'',
icon:''
};
const actions ={

}
const  mutations ={
 LOGININFO(state,payload)
 {
     state.username =payload.username;
     state.userId =payload.userId;
     state.isAdmin =payload.isadmin;
     state.icon=payload.icon;
     window.localStorage.setItem('username',state.username);
     state.clientToken =payload.clientToken;
     //保存到本地
     window.localStorage.setItem('ClientToken',state.clientToken);
 },
 SET_TOKEN(state,payload){
    state.clientToken =payload.clientToken;
     //保存到本地
     window.localStorage.setItem('ClientToken',state.clientToken);
 }
}
export default {
    namespaced :true,
    state,
    actions,
    mutations
}