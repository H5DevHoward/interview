<template lang="html">
    <div class="form-list">
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





        <div class="container">
            <div class="section basic">
                <span class="en-text">&nbsp;BASIC INFORMATION&nbsp;|</span>
                <span class="zh-text">&nbsp;基本资料</span>
            </div>




            <div class="row option1">
                <div class="input-field col s3">
                    <input id="option1-name" name="name" type="text" class="validate">
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
                    <input id="option1-startDate" name="startDate" type="date" class="datepicker">
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




            <div class="section education">
                <span class="en-text">&nbsp;EDUCATIONAL BACKGROUND&nbsp;|</span>
                <span class="zh-text">&nbsp;教育背景</span>
            </div>




            <div class="row option2">
                <div class="input-field col s2">
                    <input id="option2-from" name="option2-from" type="date" class="datepicker">
                    <label for="option2-from">
                      <span>From</span>
                      </br>
                      <span>开始时间</span>
                    </label>
                </div>
                <div class="input-field col s2 offset-s1">
                    <input id="option2-to" name="option2-to" type="date" class="datepicker">
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




            <div class="section work">
                <span class="en-text">&nbsp;WORK EXPERIENCE&nbsp;|</span>
                <span class="zh-text">&nbsp;工作经历</span>
            </div>




            <div class="row option3">
                <div class="input-field col s2">
                    <input id="option3-from" name="option3-from" type="date" class="option3Input datepicker">
                    <label for="option3-from">
                      <span>From</span>
                      </br>
                      <span>开始时间</span>
                    </label>
                </div>
                <div class="input-field col s2 offset-s1">
                    <input id="option3-to" name="option3-to" type="date" class="option3Input datepicker">
                    <label for="option3-to">
                      <span>To</span>
                      </br>
                      <span>结束时间</span>
                    </label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option3-salary" name="salary" type="text" class="option3Input validate">
                    <label for="option3-salary">
                      <span>Salary</span>
                      </br>
                      <span>待遇</span>
                    </label>
                </div>
            </div>




            <div class="row">
                <div class="input-field col s5">
                    <input id="option3-company" name="company" type="text" class="option3Input validate">
                    <label for="option3-company">
                      <span>Company Name</span>
                      </br>
                      <span>工作单位</span>
                    </label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option3-position" name="position" type="text" class="option3Input validate">
                    <label for="option3-position">
                      <span>Position</span>
                      </br>
                      <span>职位</span>
                    </label>
                </div>
            </div>




            <div class="row">
                <div class="input-field col s5">
                    <input id="option3-address" name="address" type="text" class="option3Input validate">
                    <label for="option3-address">
                      <span>Address</span>
                      </br>
                      <span>地址</span>
                    </label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option3-super" name="recommender" type="text" class="option3Input validate">
                    <label for="option3-super">
                      <span>Supervisor's Name And Position</span>
                      </br>
                      <span>推荐人及职位</span>
                    </label>
                </div>
            </div>




            <div class="row">
                <div class="input-field col s12">
                    <textarea id="option3-reason" name="reason" type="text" class="option3Input materialize-textarea"></textarea>
                    <label for="option3-reason">
                      <span>Reason for leaving</span>
                      </br>
                      <span>离职原因</span>
                    </label>
                </div>
            </div>




            <div class="divider"></div>
            <div class="row option3">
                <div class="input-field col s2">
                    <input id="option3-from2" name="option3-from2" type="date" class="option3Input datepicker">
                    <label for="option3-from2">
                      <span>From</span>
                      </br>
                      <span>开始时间</span>
                    </label>
                </div>
                <div class="input-field col s2 offset-s1">
                    <input id="option3-to2" name="option3-to2" type="date" class="option3Input datepicker">
                    <label for="option3-to2">
                      <span>To</span>
                      </br>
                      <span>结束时间</span>
                    </label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option3-salary2" name="salary2" type="text" class="option3Input validate">
                    <label for="option3-salary2">
                      <span>Salary</span>
                      </br>
                      <span>待遇</span>
                    </label>
                </div>
            </div>





            <div class="row">
                <div class="input-field col s5">
                    <input id="option3-company2" name="company2" type="text" class="option3Input validate">
                    <label for="option3-company2">
                      <span>Company Name</span>
                      </br>
                      <span>工作单位</span>
                    </label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option3-position2" name="position2" type="text" class="option3Input validate">
                    <label for="option3-position2">
                      <span>Position</span>
                      </br>
                      <span>职位</span>
                    </label>
                </div>
            </div>




            <div class="row">
                <div class="input-field col s5">
                    <input id="option3-address2" name="address2" type="text" class="option3Input validate">
                    <label for="option3-address2">
                      <span>Address</span>
                      </br>
                      <span>地址</span>
                    </label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option3-super2" name="recommender2" type="text" class="option3Input validate">
                    <label for="option3-super2">
                      <span>Supervisor's Name And Position</span>
                      </br>
                      <span>推荐人及职位</span>
                    </label>
                </div>
            </div>




            <div class="row">
                <div class="input-field col s12">
                    <textarea id="option3-reason2" name="reason2" type="text" class="option3Input materialize-textarea"></textarea>
                    <label for="option3-reason2">
                      <span>Reason for leaving</span>
                      </br>
                      <span>离职原因</span>
                    </label>
                </div>
            </div>




            <div class="divider"></div>
            <div class="row option3">
                <div class="input-field col s2">
                    <input id="option3-from2" name="option3-from2" type="date" class="option3Input datepicker">
                    <label for="option3-from2">
                      <span>From</span>
                      </br>
                      <span>开始时间</span>
                    </label>
                </div>
                <div class="input-field col s2 offset-s1">
                    <input id="option3-to2" name="option3-to2" type="date" class="option3Input datepicker">
                    <label for="option3-to2">
                      <span>To</span>
                      </br>
                      <span>结束时间</span>
                    </label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option3-salary2" name="salary2" type="text" class="option3Input validate">
                    <label for="option3-salary2">
                      <span>Salary</span>
                      </br>
                      <span>待遇</span>
                    </label>
                </div>
            </div>




            <div class="row">
                <div class="input-field col s5">
                    <input id="option3-company2" name="company2" type="text" class="option3Input validate">
                    <label for="option3-company2">
                      <span>Company Name</span>
                      </br>
                      <span>工作单位</span>
                    </label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option3-position2" name="position2" type="text" class="option3Input validate">
                    <label for="option3-position2">
                      <span>Position</span>
                      </br>
                      <span>职位</span>
                    </label>
                </div>
            </div>




            <div class="row">
                <div class="input-field col s5">
                    <input id="option3-address2" name="address2" type="text" class="option3Input validate">
                    <label for="option3-address2">
                      <span>Address</span>
                      </br>
                      <span>地址</span>
                    </label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option3-super2" name="recommender2" type="text" class="option3Input validate">
                    <label for="option3-super2">
                      <span>Supervisor's Name And Position</span>
                      </br>
                      <span>推荐人及职位</span>
                    </label>
                </div>
            </div>




            <div class="row">
                <div class="input-field col s12">
                    <textarea id="option3-reason2" name="reason2" type="text" class="option3Input materialize-textarea"></textarea>
                    <label for="option3-reason2">
                      <span>Reason for leaving</span>
                      </br>
                      <span>离职原因</span>
                    </label>
                </div>
            </div>




            <div class="divider"></div>
            <div class="section">
                <span class="en-text">&nbsp;SPECIAL SKILLS&nbsp;|</span>
                <span class="zh-text">&nbsp;专长</span>
            </div>




            <div class="row option4">
                <div class="input-field col s5">
                    <input id="option4-skill1" name="skill1" type="text" class="option3Input validate">
                    <label class="skilllab" for="option4-skill1">1</label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option4-skill2" name="skill2" type="text" class="option3Input validate">
                    <label class="skilllab" for="option4-skill2">2</label>
                </div>
            </div>




            <div class="row">
                <div class="input-field col s5">
                    <input id="option4-skill3" name="skill3" type="text" class="option3Input validate">
                    <label class="skilllab" for="option4-skill3">3</label>
                </div>
                <div class="input-field col s5 offset-s1">
                    <input id="option4-skill4" name="skill4" type="text" class="option3Input validate">
                    <label class="skilllab" for="option4-skill4">4</label>
                </div>
            </div>




            <div class="divider"></div>
            <div class="section">
                <span class="en-text">&nbsp;HOW DID YOU KNOW OUR HIRING&nbsp;|</span>
                <span class="zh-text">&nbsp;你是如何了解我们的招聘？</span>
            </div>




            <div class="row option5">
                <div class="input-field col s2">
                    <input type="radio" name="knowRoute" value="1" class="with-gap" id="option5-site" />
                    <label for="option5-site">
                      <span>Job Sites</span>
                      </br>
                      <span>招聘网站</span>
                    </label>
                </div>
                <div class="input-field col s3">
                    <input type="radio" name="knowRoute" value="2" class="with-gap" id="option5-referee" />
                    <label for="option5-referee">
                      <span>Recommendation,Referee</span>
                      </br>
                      <span>朋友推荐，推荐人</span>
                    </label>
                </div>
                <div class="input-field col s2">
                    <input type="radio" name="knowRoute" value="3" class="with-gap" id="option5-other" />
                    <label for="option5-other">
                      <span>Others</span>
                      </br>
                      <span>其他选择</span>
                    </label>
                </div>
                <div class="input-field col s3 detail">
                    <input disabled="disabled" name="detail" id="option5-cont" type="text" class="validate option3Input" placeholder="请先勾选">
                    <label class="skilllab active" for="option5-cont">Details</label>
                </div>
            </div>




            <div class="divider"></div>
            <!-- <form action="/user/addUser" method="post"> -->
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
                            <button class="submit btn waves-effect waves-light" type="submit">Submit
                          <i class="material-icons right">send</i>
                        </button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    mounted: function(){
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 30,
        });

        $(this.$refs.select).material_select();
    }
}
</script>

<style lang="scss" scoped>
.form-list {
    overflow-x: hidden;
}

.en-text {
    font-family: "SourceHanSansCN-Medium-Alphabetic";
    letter-spacing: 4px;
    margin-left: -13px;
}

.zh-text {
    font-family: "SourceHanSansCN-Medium-Alphabetic";
    letter-spacing: 4px;
}

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

.container {
    width: 85%;
    height: 100%;
    background-color: #fff;
    margin: 100px auto 0;
    max-width: none;

    .section {
        width: 100%;
        font-size: 30px;
    }

    .row {
        margin-top: 10px;
    }

    input {
        height: 1.3rem;
        margin: 40px 0 15px 0;
    }

    textarea.materialize-textarea {
        padding: 0;
        margin: 40px 0 0 0;
        min-height: 1.3rem;
    }

    textarea {
        height: 2rem;
    }

    .input-field label.active {
        transform: translateY(-50%);
    }

    [type="radio"] + label:after, [type="radio"] + label:before {
        width: 20px;
        height: 20px;
        top: 18px !important;
    }

    .selectReg {
        margin-top: 30px;
    }

    .education,.work {
        padding-top: 5rem;
    }

    .divider {
        height: 50px;
        opacity: 0;
        visibility: hidden;
    }

    .skilllab {
        top: 2rem !important;
    }

    .detail {
        margin-top: 15px;
    }

    [type="checkbox"] + label:after, [type="checkbox"] + label:before {
        top: 25px !important;
    }

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
}

</style>
