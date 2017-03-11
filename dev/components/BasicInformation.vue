<template lang="html">
    <div class="basic-information">
        <div class="section basic">
            <span class="en-text">&nbsp;BASIC INFORMATION&nbsp;|</span>
            <span class="zh-text">&nbsp;基本资料</span>
        </div>




        <div class="row">
            <div class="input-field col s3">
                <input
                    id="name"
                    name="name"
                    type="text"
                    class="validate"
                    v-model="todoName" />
                <label for="name">
                    <span>Name</span>
                    </br>
                    <span>姓名</span>
                </label>
            </div>

            <div class="input-field col s3">
                <input
                    id="sex-male"
                    name="sex"
                    type="radio"
                    class="with-gap"
                    value="1"
                    v-model.number="todoSex" />
                <label for="sex-male">
                    <span>M</span>
                    </br>
                    <span>男</span>
                </label>
                <input
                    id="sex-female"
                    name="sex"
                    type="radio"
                    class="with-gap"
                    value="0"
                    v-model.number="todoSex" />
                <label for="sex-female">
                    <span>F</span>
                    </br>
                    <span>女</span>
                </label>
            </div>

            <div class="input-field col s5">
                <input
                    id="age"
                    name="age"
                    type="number"
                    class="validate"
                    v-model="todoAge" />
                <label for="age">
                    <span>Age</span>
                    </br>
                    <span>年龄</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input
                    id="nationality"
                    name="nationality"
                    type="text"
                    class="validate"
                    v-model="todoNationality" />
                <label for="nationality">
                    <span>Nationality</span>
                    </br>
                    <span>民族</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input
                    id="registeredResidence"
                    name="registeredResidence"
                    type="text"
                    class="validate"
                    v-model="todoRegisteredResidence" />
                <label for="registeredResidence">
                    <span>Registered Residence</span>
                    </br>
                    <span>户籍所在地</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input
                    id="eMailAddress"
                    name="eMailAddress"
                    type="email"
                    class="validate"
                    v-model="todoEMailAddress" />
                <label for="eMailAddress">
                    <span>E-mail Address</span>
                    </br>
                    <span>电子邮箱</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    class="validate"
                    v-model="todoPhoneNumber" />
                <label for="phoneNumber">
                    <span>Phone Number</span>
                    </br>
                    <span>手机号码</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input
                    id="idNumber"
                    name="idNumber"
                    type="text"
                    class="validate"
                    v-model="todoIdNumber">
                <label for="idNumber">
                    <span>ID NO.</span>
                    </br>
                    <span>身份证号码</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input
                    id="address"
                    name="address"
                    type="text"
                    class="validate"
                    v-model="todoAddress" />
                <label for="address">
                    <span>Address</span>
                    </br>
                    <span>现住地址</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input
                    id="positionApplyingFor"
                    name="positionApplyingFor"
                    type="text"
                    class="validate"
                    v-model="todoPositionApplyingFor" />
                <label for="positionApplyingFor">
                    <span>Position Applying For</span>
                    </br>
                    <span>应聘岗位</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input
                    id="exceptedSalay"
                    name="exceptedSalay"
                    type="text"
                    class="validate"
                    v-model="todoExceptedSalay" />
                <label for="exceptedSalay">
                    <span>Excepted Salary</span>
                    </br>
                    <span>期望薪水</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input
                    id="workExperience"
                    name="workExperience"
                    type="text"
                    class="validate"
                    v-model="todoWorkExperience" />
                <label for="workExperience">
                    <span>Work Experience</span>
                    </br>
                    <span>工作年限</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input
                    id="recentJobSalay"
                    name="recentJobSalay"
                    type="number"
                    class="validate"
                    v-model="todoRecentJobSalay" />
                <label for="recentJobSalay">
                    <span>Recent Job Salary</span>
                    </br>
                    <span>最近一份工作的薪水</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input
                    id="startingData"
                    name="startingData"
                    type="date"
                    class="datepicker"
                    ref="datepicker"
                    v-model="todoStartingData" />
                <label for="startingData">
                    <span>Starting Date</span>
                    </br>
                    <span>到岗时间</span>
                </label>
            </div>
            <div class="selectReg input-field col s5 offset-s1">
                <select class="icons" name="registeredAddress" ref="select" v-model="todoRegisteredAddress">
                    <option v-for="(option, index) in todoOptions"
                        :key="index"
                        :class="option.class"
                        :disabled="option.disabled"
                        :selected="option.selected"
                        :data-icon="option.icon"
                        :value="option.value">{{ option.text }}</option>
                </select>
                <label>Choose your Registered Address</label>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    data() {
        return {
            nameMap: {
                name: {
                    compute: 'todoName',
                    active: 'updateName',
                },
            },
        };
    },
    mounted() {
        $(this.$refs.datepicker).pickadate({
            selectMonths: true,
            selectYears: 30,
        });

        $(this.$refs.select).material_select();
    },
    computed: {
        todoName: {
            get() {
                return this.$store.state.basic.name;
            },
            set(name) {
                console.log(name);
                this.$store.commit('updateName', name);
            },
        },
        todoSex: {
            get() {
                return this.$store.state.basic.sex;
            },
            set(sex) {
                this.$store.commit('updateSex', sex);
            },
        },
        todoAge: {
            get() {
                return this.$store.state.basic.age;
            },
            set(age) {
                this.$store.commit('updateAge', age);
            },
        },
        todoNationality: {
            get() {
                return this.$store.state.basic.nationality;
            },
            set(nationality) {
                this.$store.commit('updateNationality', nationality);
            },
        },
        todoRegisteredResidence: {
            get() {
                return this.$store.state.basic.registeredResidence;
            },
            set(registeredResidence) {
                this.$store.commit('updateRegisteredResidence', registeredResidence);
            },
        },
        todoEMailAddress: {
            get() {
                return this.$store.state.basic.eMailAddress;
            },
            set(eMailAddress) {
                this.$store.commit('updateEMailAddress', eMailAddress);
            },
        },
        todoPhoneNumber: {
            get() {
                return this.$store.state.basic.phoneNumber;
            },
            set(phoneNumber) {
                this.$store.commit('updatePhoneNumber', phoneNumber);
            },
        },
        todoIdNumber: {
            get() {
                return this.$store.state.basic.idNumber;
            },
            set(idNumber) {
                this.$store.commit('updateIdNumber', idNumber);
            },
        },
        todoAddress: {
            get() {
                return this.$store.state.basic.address;
            },
            set(address) {
                this.$store.commit('updateAddress', address);
            },
        },
        todoPositionApplyingFor: {
            get() {
                return this.$store.state.basic.positionApplyingFor;
            },
            set(positionApplyingFor) {
                this.$store.commit('updatePositionApplyingFor', positionApplyingFor);
            },
        },
        todoExceptedSalay: {
            get() {
                return this.$store.state.basic.exceptedSalay;
            },
            set(exceptedSalay) {
                this.$store.commit('updateExceptedSalay', exceptedSalay);
            },
        },
        todoWorkExperience: {
            get() {
                return this.$store.state.basic.workExperience;
            },
            set(workExperience) {
                this.$store.commit('updateWorkExperience', workExperience);
            },
        },
        todoRecentJobSalay: {
            get() {
                return this.$store.state.basic.recentJobSalay;
            },
            set(recentJobSalay) {
                this.$store.commit('updateRecentJobSalay', recentJobSalay);
            },
        },
        todoStartingData: {
            get() {
                return this.$store.state.basic.startingData;
            },
            set(startingData) {
                this.$store.commit('updateStartingData', startingData);
            },
        },
        todoRegisteredAddress: {
            get() {
                return this.$store.state.basic.registeredAddress;
            },
            set(registeredAddress) {
                console.log('111', registeredAddress);
                this.$store.commit('updateRegisteredAddress', registeredAddress);
            },
        },
        todoOptions: {
            get() {
                return this.$store.state.basic.options;
            },
            set(registeredAddress) {
                console.log('222', registeredAddress);
                // this.$store.commit('updateRegisteredAddress', registeredAddress);
            },
        },
        // todoBasic() {
        //     let basicObj = {};
        //     const basic = this.$store.state.basic;
        //     for (let [key, value] of Object.entries(basic)) {
        //         this.$set(basicObj, key, value);
        //     }
        //     Object.assign(basicObj.prototype, {
        //         get() {
        //             return basic;
        //         },
        //         set(value) {
        //             this.$store.commit('updateBasic', value);
        //         }
        //     });
        //     return basicObj;
        // }
    },
};
</script>

<style lang="scss" scoped>
.selectReg {
    margin-top: 30px;
}
</style>
