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
                    v-model="todoBasic.name" />
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
                    v-model="todoBasic.sex" />
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
                    v-model="todoBasic.sex" />
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
                    v-model="todoBasic.age" />
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
                    v-model="todoBasic.nationality" />
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
                    v-model="todoBasic.registeredResidence" />
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
                    v-model="todoBasic.eMailAddress" />
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
                    v-model="todoBasic.phoneNumber" />
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
                    type="number"
                    class="validate"
                    v-model="todoBasic.idNumber">
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
                    v-model="todoBasic.address" />
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
                    v-model="todoBasic.positionApplyingFor" />
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
                    type="number"
                    class="validate"
                    v-model="todoBasic.exceptedSalay" />
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
                    v-model="todoBasic.workExperience" />
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
                    v-model="todoBasic.recentJobSalay" />
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
                    v-model="todoBasic.startingData" />
                <label for="startingData">
                    <span>Starting Date</span>
                    </br>
                    <span>到岗时间</span>
                </label>
            </div>
            <div class="selectReg input-field col s5 offset-s1">
                <select class="icons" ref="select" v-model="todoBasic.registeredAddress">
                    <option v-for="(option, index) in todoBasic.options"
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
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters([
        'todoBasic',
    ]),
    mounted: function(){
        $(this.$refs.datepicker).pickadate({
            selectMonths: true,
            selectYears: 30,
        });

        $(this.$refs.select).material_select();
    },
}
</script>

<style lang="scss" scoped>
.selectReg {
    margin-top: 30px;
}
</style>
