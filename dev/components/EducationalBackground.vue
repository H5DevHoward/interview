<template lang="html">
    <div class="educational-background">
        <div class="section education">
            <span class="en-text">&nbsp;EDUCATIONAL BACKGROUND&nbsp;|</span>
            <span class="zh-text">&nbsp;教育背景</span>
        </div>




        <div class="row option2">
            <div class="input-field col s2">
                <input
                    id="option2-from"
                    name="eduFrom"
                    type="date"
                    class="datepicker"
                    ref="from"
                    v-model="todoEduFrom">
                <label for="eduFrom">
                  <span>From</span>
                  </br>
                  <span>开始时间</span>
                </label>
            </div>
            <div class="input-field col s2 offset-s1">
                <input
                    id="option2-to"
                    name="eduTo"
                    type="date"
                    class="datepicker"
                    ref="to"
                    v-model="todoEduTo">
                <label for="eduTo">
                  <span>To</span>
                  </br>
                  <span>结束时间</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input
                    id="option2-major"
                    name="major"
                    type="text"
                    class="validate"
                    v-model="todoMajor">
                <label for="option2-major">
                  <span>Major</span>
                  </br>
                  <span>专业</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input
                    id="option2-school"
                    name="school"
                    type="text"
                    class="validate"
                    v-model="todoSchool">
                <label for="option2-school">
                  <span>Graduated From</span>
                  </br>
                  <span>毕业院校</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input
                    id="option2-diploma"
                    name="diploma"
                    type="text"
                    class="validate"
                    v-model="todoDiploma">
                <label for="option2-diploma">
                  <span>Diploma</span>
                  </br>
                  <span>文凭</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input
                    id="option2-cet"
                    name="cet"
                    type="text"
                    class="validate"
                    v-model="todoCet">
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
    computed: {
        todoEduFrom: {
            get() {
                return this.$store.state.education.from;
            },
            set(value) {
                this.$store.commit('updateEduFrom', value);
            },
        },
        todoEduTo: {
            get() {
                return this.$store.state.education.to;
            },
            set(value) {
                this.$store.commit('updateEduTo', value);
            },
        },
        todoMajor: {
            get() {
                return this.$store.state.education.major;
            },
            set(value) {
                this.$store.commit('updateMajor', value);
            },
        },
        todoSchool: {
            get() {
                return this.$store.state.education.graduatedFrom;
            },
            set(value) {
                this.$store.commit('updateSchool', value);
            },
        },
        todoDiploma: {
            get() {
                return this.$store.state.education.diploma;
            },
            set(value) {
                this.$store.commit('updateDiploma', value);
            },
        },
        todoCet: {
            get() {
                return this.$store.state.education.english;
            },
            set(value) {
                this.$store.commit('updateCet', value);
            },
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
