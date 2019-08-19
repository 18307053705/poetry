<template>
    <div class="main_login">
        <div class="banner"></div>
        <!-- 账号密码登录 -->
        <h1>账号密码登录</h1>
        <div class="froms">
            <div class="user">
                <input type="text" autocomplete='off'  v-model="textValue"   placeholder="手机号/邮箱/用户名" >
            </div>
            <div class="pass">
                <input  :type="isShow ? 'password' : 'text'" v-model="passValue"    placeholder="密码" autocomplete='off'>
                <i @click="showAction" :class="!isShow && 'action'"></i>
            </div>
        </div>
       
        <!-- 注册于忘记密码 -->
        <div class="newaccount">
            <span @click="newaccount">注册新账号</span>
            <span>忘记密码</span>
        </div>
        <!-- 登录按钮 -->
        <div class="loginBtn" @click="loginAction">
            登录
        </div>
        <!-- 服务协议 -->
        <div class="server">
            <i></i><span>登陆即同意<b>联通统一认证服务条款</b>和<b>用户协议</b></span>
        </div>
        <!--  其他登录方式  -->
        <div class="other">
            <div class="item"><span>其他登录方式</span></div>
            <div class="weixin">
                <div>
                    <img src="/images/login/Start page_weixin .png">
                    <i>微信</i>
                </div>
                <div>
                    <img src="/images/login/Start page_QQ .png">
                    <i>QQ</i>
                </div>
                <div>
                    <img src="/images/login/Start page_weibo .png">
                    <i>微博</i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:true,
            textValue:'',
            passValue:'',
        }
    },
    methods:{
        //判断是否显示密码
        showAction(){
            this.isShow = !this.isShow;
        },
        //跳转到注册页面
        newaccount(){
            this.$router.push('/enroll')
        },
        // 发送登录验证
        loginAction(){
            this.$store.dispatch('Login/loginAction',this.$router);
        } 
    },
    
}
</script>


<style lang="scss" scoped>
.main_login{
    background: url('/images/login/loginb.png') no-repeat;
    background-size: 100% 100%;
    .banner{
        width: 250px;
        height: 105px;
        margin: 44px auto;
        border: 1px #888 dashed;
        background: url('/images/login/titleLogin.png') no-repeat;
        background-size: 100% 100%;
    }
    h1{
        text-align: center;
        font-size:20px;
        margin: 62px 0 48px;
        line-height: 30px;
        height:30px;
    }
    .froms{
        width: 270px;
        margin: 0 auto;
        div{
            padding-left: 66px;
            border-bottom: 2px #888 dashed;
            background-size: 20px 25px;
            height: 50px;
            line-height: 50px;
            background-position: 26px 12px;
            background-repeat: no-repeat;
            input{
                height: 24px;
                line-height: 24px;
                font-size: 12px;
                color: #CACACA;
                border: none;
                background-color: transparent;
                border: none;
                outline: none;
            }
        }
        .user{
            background-image: url('/images/login/user.png');
           
        }
        .pass{
            position: relative;
            border-bottom: 1px #888 solid;
            background-image: url('/images/login/password.png');
            i{
                position: absolute;
                right: 10px;
                top:12px;
                width: 20px;
                height: 25px;
                background: url('/images/login/Keep out.png') no-repeat;
                background-size: 100% 100%;
            }
            .action{
               transform: rotateX(-180deg)
            }
        }
    }
    .newaccount{
        width: 270px;
        margin: 0 auto;
        line-height: 48px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        span{
            font-size:12px;
            color: #999999;
        }
    }
    .loginBtn{
        width: 270px;
        margin: 0 auto;
        line-height: 40px;
        height: 40px;
        text-align: center;
        background:url('/images/login/landing_button.png') no-repeat;
        background-size: 100%;
        font-size: 14px;
        color: #FBFBFB;
    }
    .server{
        width: 270px;
        margin: 5px auto;
        vertical-align:middle;
        height: 12px;
        line-height: 12px;
        text-align: center;
        i{
            display: inline-block;
            width: 12px;
            height: 12px;
            background:url('/images/login/agree_icon.png') no-repeat;
            background-size: 100%;
            margin-right: 7px;
        }
        span{
            display: inline-block;
            height: 12px;
            font-size: 10px;
            color: #999;
            b{
                color: #EB3636;
            }
        }
    }
    .other{
        margin-top: 60px;
        .item{
            text-align: center;
            margin: 0 80px;
            font-size: 10px;
            span{
                display: inline-block;
                margin: 0 5px;
            }
        }
        .item:after{
            flex: 1;
            content: "";
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            width: 60px;
            border-bottom: 1px solid #DCDCDC;
        }
        .item:before{
            content: "";
            width: 60px;
            border-bottom: 1px dashed #DCDCDC;
            display: inline-block;
            vertical-align: middle;
         }
         .weixin{
             margin: 0 80px;
             display: flex;
             justify-content: center;
             div{
                flex:1;
                display: flex;
                flex-direction: column;
                margin-top: 5px;
                text-align: center;
                img{
                    width: 30px;
                    height: 29px;
                    margin: 0 auto 3px;
                }
                i{
                    font-size: 10px;
                }
             }
         }
  }
}
</style>