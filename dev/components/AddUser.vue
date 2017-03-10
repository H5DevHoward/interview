<template lang="html">
    <div id="interview" class="form-list">
        <poster-header />

        <div class="container">
            <basic-information />
            <educational-background />
            <work-experience />
            <special-skills />
            <know-type />
            <legal />
        </div>
    </div>
</template>

<script>
import PosterHeader from './PosterHeader.vue';
import BasicInformation from './BasicInformation.vue';
import EducationalBackground from './EducationalBackground.vue';
import WorkExperience from './WorkExperience.vue';
import SpecialSkills from './SpecialSkills.vue';
import KnowType from './KnowType.vue';
import Legal from './Legal.vue';

export default {
    components: {
        PosterHeader,
        BasicInformation,
        EducationalBackground,
        WorkExperience,
        SpecialSkills,
        KnowType,
        Legal,
    },
};
</script>

<style lang="scss">
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

    .education,.work {
        padding-top: 5rem;
    }

    .divider {
        height: 50px;
        opacity: 0;
        visibility: hidden;
    }

    [type="checkbox"] + label:after, [type="checkbox"] + label:before {
        top: 25px !important;
    }
}

</style>
