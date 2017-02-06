<template lang="html">
    <div class="app">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" rel="stylesheet/css" src="../assets/style/materialize.css"></style>
<style lang="scss" rel="stylesheet/scss" src="../style/style.scss"></style>
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
