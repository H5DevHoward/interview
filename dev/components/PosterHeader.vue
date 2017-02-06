<template lang="html">
    <div class="top-container">
        <div class="preload logo-bg">
            <img src="../assets/image/logo-bg.jpg" alt="">
        </div>
        <div class="preload logo">
            <img src="../assets/image/logo.png" alt="">
        </div>
        <div class="preload txt">
            <img src="../assets/image/txt.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.top-container {
    position: relative;
    height: 451px;
    overflow: hidden;

    .logo-bg {
        width: 1920px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -960px;
    }

    .logo {
        width: 380px;
        position: absolute;
        top: 150px;
        left: 50%;
        margin-left: -190px;
    }

    .txt {
        width: 250px;
        position: absolute;
        top: 250px;
        left: 50%;
        margin-left: -125px;
    }
}
</style>
