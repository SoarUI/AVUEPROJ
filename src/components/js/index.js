import vue from 'vue'
import msgbox from './MessageBox'
export var messagebox =(function(){

return function(opts){
    var defaults={
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handlecancel:null,
        handleok:null
    };
    for(var attr in opts){
        defaults[attr]=opts[attr];

    }
    var myvm =vue.extend(msgbox);
    var vm = new myvm({
        el:document.createElement('div'),
        data:{
            title:defaults.title,
            content:defaults.content,
            cancel:defaults.cancel,
            ok:defaults.ok
        },
        methods:{
            handlecancel(){
                defaults.handlecancel && defaults.handlecancel.call(this);
                document.body.removeChild(vm.$el);
            },
            handleok(){
                defaults.handleok && defaults.handleok.call(this);
                document.body.removeChild(vm.$el);
            }
        }
    });
    document.body.appendChild(vm.$el);
};
})();