<template lang="html">
    <div class="app">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" rel="stylesheet/scss" src="../style/style.scss"></style>
<style scoped>
html {
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
