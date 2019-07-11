<template>
 
    <div class="commentArea">
        <h3>评论</h3>
    <div class="commentbox" >
    <!--<Scroller :handleToScroll="handleScroll" :handleToTouchEnd="handleTouchEnd">-->
    <button v-if="PageIndex > 1" class="comment_more_btn" @touchstart="handleTouchPrev()">上一页</button>
    <button v-if="comments.pagecount > PageIndex " class="comment_more_btn" @touchstart="handleTouchNext()">下一页</button>
    <ul v-if="comments.CommentList.length" >
            <li>{{pullDownMsg}}</li>
            <li class="comment" v-for="comm in comments.CommentList" :key="comm.commentId">
                <div class="comment_title">{{ comm.nickname}}&nbsp;&nbsp;:{{ comm.time }} 
                    <a href="javascrit:void" @touchstart="responseto(comm.nickname,comm.commentId)">回复</a>
                </div>
                <div class="comment_content">{{ comm.content }}</div>
                <div v-if="comm.subCommentList.length!=0" class="subcomment">
                    <ul>
                    <li class="firstComment">
                        <div class="comment_title">{{ comm.subCommentList[0].responder}}:{{ comm.subCommentList[0].time }}
                            <a href="javascrit:void" @touchstart="responseto(comm.subCommentList[0].nickname,comm.subCommentList[0].commentParentId)">回复</a>
                        </div>
                        <div class="comment_content">{{ comm.subCommentList[0].content }}</div>
                    </li>
                        <li v-for="(index, item) in comm.subCommentList" :key="item.commentId">
                                    <div v-if="index > 0">
                                        <div class="comment_title">{{ item.nickname}}&nbsp;&nbsp;:{{ item.time }}
                                            <a href="javascrit:void" @touchstart="responseto(item.nickname,item.commentParentId)">回复</a>
                                        </div>
                                        <div class="comment_content">{{ item.content }}</div>
                                    </div>
                        </li>
                    </ul>
                </div>
                <div v-else class="subcomment" id="comment">
                            <ul>
                                <li v-for="item in comm.subCommentList" :key="item.commentId">
                                    <div class="comment_title">{{ item.nickname}}&nbsp;&nbsp; : {{ item.time }}</div>
                                    <div class="comment_content">{{ item.content }}</div>
                                </li>
                            </ul>
                </div>
            </li> 
        </ul> 
        
        <div v-else class="comment">还没有相关评论</div>
       
        <!--</Scroller>-->
         </div>
        <div class="commentsender" >
            <h3 >发表评论</h3>
            <textarea id="commentsender" ref="commentsender" class="commenttext" rows="5" v-model="commentarea" />
            <button @touchstart="responsecomment()" class="comment_save">发表</button>
        </div>
        
    </div>
 
</template>

<script>
export default {
name:'supercomment',
props:{
    ItemID:{type:[String,Number],default:0}
},
data(){
    return {
    comments:{
        CommentList:[],
        pagecount:1
    },
    commentarea:'',
    commentto:'',
    CommenttoparentId:0,
    PageIndex:1,
    pullDownMsg:'',
    PageSize:10
    }
},
methods:{
    showMore(comment){
       
    },
    responseto(nickname,commentid){
        this.commentTo=nickname;
        this.CommenttoparentId=commentid;
       // document.getElementById("commentsender").scrollIntoView();
       this.$nextTick(()=>{
           document.getElementById("commentsender").scrollIntoView();
           document.getElementById("commentsender").focus();
       })
    },
    responsecomment(){
        let comitem ={
            nickname:this.$store.state.login.username,
            userid:this.$store.state.login.userid||1,
            ItemId:this.ItemID,
            commentTo:this.commentTo,
            content:this.commentarea,
            commentParentId:this.CommenttoparentId
        }
        this.axios.post('/api/comment/postcomment',comitem).then( (res)=>{
        let status = res.data.status;
            if(status ==0){
                this.$message('评论成功');
                 this.axios.get('/api/comment/getcomments?itemId='+this.ItemID).then( (res)=>{
                if(res.data.status===0){
                     this.comments = res.data.data;
                      this.pagecount =this.comments.pagecount;
                }
                 });
            }
            })
    },
     handleTouchEnd:function(pos){
        if(pos.y > 15 ){
            this.PageIndex++;
        this.axios.get('/api/comment/getcomments?itemId='+this.ItemID+'&page='+this.PageIndex+'&rows='+this.PageSize)
        .then( (res)=>{
                let status = res.data.status;
                if(status ==0){
                this.comments = res.data.data;
                 this.pagecount =this.comments.pagecount;
                }
            })
        }
        console.log(pos);
    },
    handleTouchPrev:function(pos){
       // if(pos.y > 15 ){
            this.PageIndex--;
        this.axios.get('/api/comment/getcomments?itemId='+this.ItemID+'&page='+this.PageIndex+'&rows='+this.PageSize)
        .then( (res)=>{
                let status = res.data.status;
                if(status ==0){
                this.comments = res.data.data;
                 this.pagecount =this.comments.pagecount;
                }
            })
       // }
    },
    handleTouchNext:function(pos){
       // if(pos.y > 15 ){
            this.PageIndex++;
        this.axios.get('/api/comment/getcomments?itemId='+this.ItemID+'&page='+this.PageIndex+'&rows='+this.PageSize)
        .then( (res)=>{
                let status = res.data.status;
                if(status ==0){
                this.comments = res.data.data;
                 this.pagecount =this.comments.pagecount;
                }
            })
       // }
    },
    handleScroll:function(pos){
         if(pos.y > 15 ){
                this.pullDownMsg="松开更新...";
            }
    }
},
mounted()
{
    this.PageIndex =1;
     this.axios.get('/api/comment/getcomments?itemId='+this.ItemID+'&page='+this.PageIndex+'&rows='+this.PageSize).then( (res)=>{
                let status = res.data.status;
                if(status ==0){
                this.comments = res.data.data;
                this.pagecount =this.comments.pagecount;
                }
            })
}
}
</script>

<style scoped>
.detail .commentArea{
     max-height:100%;
     float:left;
}
.detail .commentArea .commentbox{
     width:100%;
     float:left;
     max-height:100%;
}
.commentbox ul{
    width:100%;
    float:left;
    display:flex;
     flex-direction:column;
}
.commentbox ul .comment{
    flex:1;
    display:flex;
    flex-direction:column;
     width:100%
}
.comment_title,.comment_content{
     flex:1;
     width:100%;
    font-size: 12px;

}
.comment_title{
    font-size: 14px;
    line-height: 28px;
    color: darkolivegreen;
}
.comment_title a{
    text-decoration:none;
}
.comment .subcomment{
    flex:1;
    display:flex;
    flex-direction:column;
    margin-left:20px;
     width:100%;
}
.subcomment .firstComment{
    flex:1;
    float:left;
    width:100%;
     display:flex;
    flex-direction:column;
}
.subcomment .comment_more_btn{
     float:left;
     width:100%;
}
.subcomment ul{
    float:left;
    margin:0;
    padding: 0;
    width:100%;
    flex:1;
    display: flex;
    flex-direction:column;
}
.subcomment ul li{
    flex:1;
    list-style: none;
}
.commentsender{
    float:left;
     width:100%;
}
.commenttext{
    float:left;
     width:100%;
}
.comment_save{
    float:right;
    height:30px;
    text-align: center;
    width:120px;
    line-height: 24px;
    font-size: 24px;
    background: #e54847 ;
    border-radius: 3px;border:none;
    display:block;
    color:#fff;
}
</style>
