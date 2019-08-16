<template>
    <div class='enroll_login'>
        <div>
            <i class="back" @click="backAction"></i>
        </div>
        <h1>注册新账号</h1>
        <!-- 注册 -->
        <div class="froms">
            <div class="user">
                <input type="text" autocomplete='off'  v-model="textValue"   placeholder="手机号/邮箱/用户名" >
            </div>
            <div class="pass">
                <input  type='password' v-model="passValue"    placeholder="密码" autocomplete='off'>
            </div>
        </div>
        <div class="enroll">
            注册
        </div>
        <!-- 协议 -->
        <div class="server">
            <i></i><span>我已阅读并同意和<b>“用户协议”</b>和<b>“隐私政策”</b></span>
        </div>
       
    </div>



</template>



<script>
export default {
    data(){
        return {
            textValue:'',
            passValue:'',
        }
    },
    methods:{
        // 注册请求
        loginAction(){
            this.$store.dispatch('Login/loginAction',this.$router);
        },
        backAction(){
            this.$router.go(-1);
        }
    },
    

}
</script>

<style lang="scss" scoped>
.enroll_login{
    background: url('/images/login/loginb.png') no-repeat;
    background-size: 100% 100%;
    .back{
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-left: 17px;
        margin-top: 10px;
        background: url('/images/login/back.png') no-repeat;
        background-size: 100% 100%;
    }
    h1{
        font-size: 20px;
        text-align: center;
        margin: 130px 0 50px;
    }
    .enroll{
        width: 270px;
        margin:50px  auto 10px;
        line-height: 40px;
        height: 40px;
        text-align: center;
        background:url('/images/login/landing_button.png') no-repeat;
        background-size: 100%;
        font-size: 14px;
        color: #FBFBFB;
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
            background-image: url('/images/login/new account.png');
           
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
}

   
</style>