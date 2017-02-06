<template lang="html">
    <div class="main">
        <div class="loginBG"></div>
        <div class="login">
            <p>user name: <input id="name" type="text" name="name" value="" /></p>
            <p>password: <input id="password" type="text" name="password" /></p>
            <button class="signIn btn waves-effect waves-light left" type="submit">
                <i class="material-icons center">sign in</i>
            </button>
            <button class="visiter btn red accent-1 waves-effect waves-light center" type="submit">
                <i class="material-icons center">面试登记</i>
            </button>
            <button class="signUp btn waves-effect waves-light right" type="submit">
                <i class="material-icons center">sign up</i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .main {
        width: 100%;
        height: 100%;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("../assets/image/loginbg.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .login {
            width: 500px;
            height: 250px;
            position: relative;
            top: 50%;
            left: 50%;
            margin-top: -125px;
            margin-left: -250px;
            text-align: center;
        }

        p,input {
            font-size: 24px;
            font-family: "SourceHanSansCN-Medium-Alphabetic";
        }

        input {
            margin-left: 10px;
        }

        i {
            font-style: italic!important;
            letter-spacing: .5px!important;
            word-spacing: normal!important;
            text-transform: uppercase!important;
        }
    }
</style>
