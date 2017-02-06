<template lang="html">
    <div class="basic-information">
        <div class="section basic">
            <span class="en-text">&nbsp;BASIC INFORMATION&nbsp;|</span>
            <span class="zh-text">&nbsp;基本资料</span>
        </div>




        <div class="row option1">
            <div class="input-field col s3">
                <input
                    id="option1-name"
                    name="name"
                    type="text"
                    class="validate"
                    @blur="handleBlur" />
                <label for="option1-name">
                    <span>Name</span>
                    </br>
                    <span>姓名</span>
                </label>
            </div>

            <div class="input-field col s3">
                <input type="radio" class="with-gap" name="sex" value="0" id="option1-male" checked="checked" />
                <label for="option1-male">
                    <span>M</span>
                    </br>
                    <span>男</span>
                </label>
                <input type="radio" class="with-gap" name="sex" value="1" id="option1-female" />
                <label for="option1-female">
                    <span>F</span>
                    </br>
                    <span>女</span>
                </label>
            </div>

            <div class="input-field col s5">
                <input id="option1-birth" name="birthDay" type="text" class="validate">
                <label for="option1-birth">
                    <span>Age</span>
                    </br>
                    <span>年龄</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input id="option1-nation" name="nationality" type="text" class="validate">
                <label for="option1-nation">
                    <span>Nationality</span>
                    </br>
                    <span>民族</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input id="option1-residence" name="residence" type="text" class="validate">
                <label for="option1-residence">
                    <span>Registered Residence</span>
                    </br>
                    <span>户籍所在地</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input id="option1-email" name="email" type="email" class="validate">
                <label for="option1-email">
                    <span>E-mail Address</span>
                    </br>
                    <span>电子邮箱</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input id="option1-phone" name="phone" type="tel" class="validate">
                <label for="option1-phone">
                    <span>Phone Number</span>
                    </br>
                    <span>手机号码</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input id="option1-idnu" name="idNu" type="text" class="validate">
                <label for="option1-idnu">
                    <span>ID NO.</span>
                    </br>
                    <span>身份证号码</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input id="option1-address" name="nowAddress" type="text" class="validate">
                <label for="option1-address">
                    <span>Address</span>
                    </br>
                    <span>现住地址</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input id="option1-position" name="positionApply" type="text" class="validate">
                <label for="option1-position">
                    <span>Position Applying For</span>
                    </br>
                    <span>应聘岗位</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input id="option1-exceptSal" name="exceptSalary" type="text" class="validate">
                <label for="option1-exceptSal">
                    <span>Excepted Salary</span>
                    </br>
                    <span>期望薪水</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input id="option1-workAge" name="workAge" type="text" class="validate">
                <label for="option1-workAge">
                    <span>Work Experience</span>
                    </br>
                    <span>工作年限</span>
                </label>
            </div>
            <div class="input-field col s5 offset-s1">
                <input id="option1-lastSalary" name="lastSalary" type="text" class="validate">
                <label for="option1-lastSalary">
                    <span>Recent Job Salary</span>
                    </br>
                    <span>最近一份工作的薪水</span>
                </label>
            </div>
        </div>




        <div class="row">
            <div class="input-field col s5">
                <input id="option1-startDate" name="startDate" type="date" class="datepicker" ref="datepicker">
                <label for="option1-startDate">
                    <span>Starting Date</span>
                    </br>
                    <span>到岗时间</span>
                </label>
            </div>
            <div class="selectReg input-field col s5 offset-s1">
                <select class="icons" ref="select">
                    <option value="" disabled selected>选择你的登记地址</option>
                    <option value="" data-icon="/images/snow.png" class="circle">南京</option>
                    <option value="" data-icon="/images/snow.png" class="circle">长沙</option>
                    <option value="" data-icon="/images/snow.png" class="circle">无锡</option>
                </select>
                <label>Choose your Registered Address</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted: function(){
        $(this.$refs.datepicker).pickadate({
            selectMonths: true,
            selectYears: 30,
        });

        $(this.$refs.select).material_select();
    },
    methods: {
        handleBlur() {
            console.log(111);
        }
    }
}
</script>

<style lang="scss" scoped>
.selectReg {
    margin-top: 30px;
}
</style>
