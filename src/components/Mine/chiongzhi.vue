<template>
    <div class="block-main">
        <div class="pay">
            <div class="tr_rechtext">
                <p>1.T币是本站推出的专用于本站下载或者查看文章等的虚拟货币。</p>
                <p>2.T币以套餐形式组合推出，你可以选择支付宝或者是微信的付款方式来进行充值,T币每次5个起充。</p>
                <p>3.个人运维网站，不支持在线接口支付。</p>
                <p>4.付款成功后点击完成支付，最快1分钟内即可完成支付充值,并以邮件形式通知您处理结果。</p>
            </div>
            <div class="tr_userinfo">
              <p>将要进行充值帐号：
                <strong>{{$store.state.login.username}}</strong>
              </p>
            </div>
        <select class="ui-choose" id="uc_01" v-model="selected">
            <option class="ui-chli on" value="5">5个T币/5元</option>
            <option class="ui-chli" value="10">10个T币/10元</option>
            <option class="ui-chli" value="22">22个T币/20元</option>
            <option class="ui-chli" value="33">33个T币/30元</option>
            <option class="ui-chli" value="44">44个T币/40元</option>
            <option class="ui-chli" value="55">55个T币/50元</option>
            <option class="ui-chli" value="110">110个T币/100元</option>
            <option class="ui-chli" value="220">220个T币/200元</option>
            <option class="ui-chli" value="330">330个T币/300元</option>
            <option class="ui-chli" value="440">440个T币/400元</option>
            <option class="ui-chli" value="550">550个T币/500元</option>
        </select>
        <div class="clear"></div>
        <!--弹窗-->
        <div id="fade" class="black_overlay">
        <a href="javascript:void(0);" class="paybtn" data-type="1" @touchstart="handlepay(1)">微信支付</a>
        <a href="javascript:void(0);" class="paybtn" data-type="2" @touchstart="handlepay(2)">支付宝支付</a>
        </div>
        <div class="payImg">
        <img id="payimg" :src="payicon"  alt="请选择支付方式" />
        </div>
      
        <div class="pay-complete"><a href="javascript:;" @touchstart="handlepaybill">我已经完成充值</a></div>
        </div>
 </div>
</template>

<script>
export default {
    data(){
        return {
            payicon:'',
            selected:550
        }
    },
    created(){
        this.payicon=require("../../../public/paybill/wx.png");
    },
methods:{
    handlepay(m){
        if(m===1){
             this.payicon=require("../../../public/paybill/wx.png");
        }
        else{
             this.payicon=require("../../../public/paybill/zhifubao.png");
        }
    },
    handlepaybill(){
        this.axios.post('/api/game/paybill',{CNY:this.selected}).then((res)=>{
         var status =res.data.status;
         if(status ===0 ){
            this.$message('充值提交成功，请耐心等待审核...');
         }
      });
    }
},
}
</script>

<style>
.main .pay .tr_rechtext
{
    font-size:18px;
}
.pay .tr_userinfo,.pay .ui-choose
{
     font-size:24px;
}
.main .pay .payImg
{
    float:left;
    width:200px;
    height:200px;
}
.pay .payImg img
{
    border-color:green;
    overflow:hidden;
    width:100%;
    height:100%;
}
.pay .black_overlay
{
    height:48px;
}
.pay .black_overlay>a
{
    float:left;
    margin-right:10px;
    display:block;
    width:140px;
    height:45px;
    position:relative;
    font-size:18px;
    text-align:center;
    line-height:45px;
    text-decoration:none;
    display:block;
    width: 100px;
	background: #27AE60;
	font-weight: bold;
	color: white;
	border: 0 none;
	border-radius: 1px;
	cursor: pointer;
}
.pay .black_overlay>a:hover,.pay .pay-complete>a:hover
{
   box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
}
.pay .pay-complete
{
     float:left;
    display:block;
    height:45px;
    position:relative;
}
.pay .pay-complete>a
{
    display:block;width:228px;height:36px;
    background:#31c37c;color:#fff;font-size:
    16px;border-radius:4px;
    text-decoration:none;
    text-align:center;line-height:36px}
</style>
