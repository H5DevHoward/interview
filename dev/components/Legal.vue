<template lang="html">
    <div class="legal">
        <div class="divider"></div>
        <table class="bordered option6">
            <tr>
                <td class="td-first">
                    <div class="row section">
                        <div class="col s12 center">
                            <span class="en-text2">By submiting below, i acknowledge that I have read and understand the following...</span>
                            </br>
                            <span class="zh-text">在提交之前，我已阅读并了解以下提示...</span>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="td-second">
                    <div class="row">
                        <div class="col s12 center">
                            <span class="en-text2">I personally guarantee that the information I provided on this application is accurate.</span>
                            </br>
                            <span class="zh-text">本人承诺保证所有填写资料真实。</span>
                        </div>
                        <div class="input-field col s5 offset-s9 center">
                            <input type="checkbox" class="filled-in" id="option6-box" />
                            <label for="option6-box">
                        <span>Have Read</span>
                        </br>
                        <span>已阅读</span>
                      </label>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="row center">
                        <button
                            class="submit btn waves-effect waves-light"
                            type="submit"
                            @click="submit"
                            >Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';


export default {
    // computed: mapGetters([
    //     'todoBasic',
    // ]),
    methods: mapActions([
        'submit',
    ]),
};
</script>

<style lang="scss" scoped>
.td-first {
    padding-bottom: 0;

    .row {
        margin-bottom: 0;
    }
}

.td-second .s12 span {
    font-size: 30px;
}
@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local("Material Icons"), local("MaterialIcons-Regular"), url("../assets/font/Material-Icons.woff") format("woff");
}

.material-icons {
    font-family: 'Material Icons';
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}
</style>
