<template lang="html">
    <div class="know-type">
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
                <label class="detaillab active" for="option5-cont">Details</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.detail {
    margin-top: 15px;
}

.detaillab {
    top: 1.5rem!important;
}
</style>
