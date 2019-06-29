import vue from 'vue'
import msgbox from './src/index.vue'
var messagebox =function(opts){
    var defaults={
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handlecancel:null,
        handleok:null
    };
    //属性合并
    for(var attr in opts){
        defaults[attr]=opts[attr];

    }
    //extern是构建一个组件的构造器，返回构造的组件
    var myvm =vue.extend(msgbox);
    var vm = new myvm({
        el:document.createElement('div'),
        //数据绑定到组件上
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
export default messagebox