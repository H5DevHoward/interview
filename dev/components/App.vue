<template lang="html">
    <div class="app">
        <add-user />
    </div>
</template>

<script>
import LogIn from "./LogIn.vue";
import AddUser from "./AddUser.vue";

export default {
    components: {
        LogIn,
        AddUser,
    }
}
</script>
<style lang="css" rel="stylesheet/css" src="../assets/style/materialize.css"></style>
<style lang="scss" rel="stylesheet/scss" src="../style/style.scss"></style>
