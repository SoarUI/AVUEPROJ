const state ={
username:'',
userId:-1
};
const actions ={

}
const mutations ={
 LOGIN_INFO(state,payload)
 {
     state.username =payload.username;
     state.userId =payload.userId;
 }
}
export default {
    namespace :true,
    state,
    actions,
    mutations
}