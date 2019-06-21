const state ={
username:'',
userId:-1,
clientToken:''
};
const actions ={

}
const  mutations ={
 LOGININFO(state,payload)
 {
     state.username =payload.username;
     state.userId =payload.userId;
     
     window.localStorage.setItem('username',state.username);
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