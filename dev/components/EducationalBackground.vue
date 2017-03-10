<template lang="html">
    <div class="educational-background">
        <div class="section education">
            <span class="en-text">&nbsp;EDUCATIONAL BACKGROUND&nbsp;|</span>
            <span class="zh-text">&nbsp;教育背景</span>
        </div>




        <div class="row option2">
            <div class="input-field col s2">
                <input id="option2-from" name="option2-from" type="date" class="datepicker" ref="from">
                <label for="option2-from">
                  <span>From</span>
                  </br>
                  <span>开始时间</span>
                </label>
            </div>
            <div class="input-field col s2 offset-s1">
                <input id="option2-to" name="option2-to" type="date" class="datepicker" ref="to">
                <label for="option2-to">
                  <span>To</span>
                  </br>
                  <span>结束时间</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input id="option2-major" name="major" type="text" class="validate">
                <label for="option2-major">
                  <span>Major</span>
                  </br>
                  <span>专业</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input id="option2-school" name="school" type="text" class="validate">
                <label for="option2-school">
                  <span>Graduated From</span>
                  </br>
                  <span>毕业院校</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input id="option2-diploma" name="diploma" type="text" class="validate">
                <label for="option2-diploma">
                  <span>Diploma</span>
                  </br>
                  <span>文凭</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input id="option2-cet" name="cet" type="text" class="validate">
                <label for="option2-cet">
                  <span>English</span>
                  </br>
                  <span>英语能力</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        $(this.$refs.from).pickadate({
            selectMonths: true,
            selectYears: 30,
        });
        $(this.$refs.to).pickadate({
            selectMonths: true,
            selectYears: 30,
        });
    },
};
</script>

<style lang="scss" scoped>
</style>
