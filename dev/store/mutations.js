import types from './mutation-types';

const spaceID = '4445w378ct2c';
const accessToken = '8598a3a4635efaaee057684f5b6de9e85b5935be2a5d6114eebb6966ab263dec';
const contentful = require('contentful-management');
const client = contentful.createClient({accessToken});

export default {
    // basic
    updateName(state, payload) {
        state.basic.name = payload;
    },
    updateSex(state, payload) {
        state.basic.sex = payload;
    },
    updateAge(state, payload) {
        state.basic.age = payload;
    },
    updateNationality(state, payload) {
        state.basic.nationality = payload;
    },
    updateRegisteredResidence(state, payload) {
        state.basic.registeredResidence = payload;
    },
    updateEMailAddress(state, payload) {
        state.basic.eMailAddress = payload;
    },
    updatePhoneNumber(state, payload) {
        state.basic.phoneNumber = payload;
    },
    updateIdNumber(state, payload) {
        state.basic.idNumber = payload;
    },
    updateAddress(state, payload) {
        state.basic.address = payload;
    },
    updatePositionApplyingFor(state, payload) {
        state.basic.positionApplyingFor = payload;
    },
    updateExceptedSalay(state, payload) {
        state.basic.exceptedSalay = payload;
    },
    updateWorkExperience(state, payload) {
        state.basic.workExperience = payload;
    },
    updateRecentJobSalay(state, payload) {
        state.basic.recentJobSalay = payload;
    },
    updateStartingData(state, payload) {
        state.basic.startingData = payload;
    },
    // education
    updateEduFrom(state, payload) {
        state.education.from = payload;
    },
    updateEduTo(state, payload) {
        state.education.to = payload;
    },
    updateMajor(state, payload) {
        state.education.major = payload;
    },
    updateSchool(state, payload) {
        state.education.graduatedFrom = payload;
    },
    updateDiploma(state, payload) {
        state.education.diploma = payload;
    },
    updateCet(state, payload) {
        state.education.english = payload;
    },

    [types.SUBMIT] (state) {
        console.log('submit...');
        const index = $('.selectReg li.active').index();
        state.basic.registeredAddress = state.basic.options[index === -1 ? 0 : index].text;

        const fields = {
            // basic
            name: {
                'en-US': state.basic.name,
            },
            sex: {
                'en-US': state.basic.sex ? '男' : '女',
            },
            age: {
                'en-US': state.basic.age,
            },
            nationality: {
                'en-US': state.basic.nationality,
            },
            registeredResidence: {
                'en-US': state.basic.registeredResidence,
            },
            eMailAddress: {
                'en-US': state.basic.eMailAddress,
            },
            phoneNumber: {
                'en-US': state.basic.phoneNumber,
            },
            idNumber: {
                'en-US': state.basic.idNumber,
            },
            address: {
                'en-US': state.basic.address,
            },
            positionApplyingFor: {
                'en-US': state.basic.positionApplyingFor,
            },
            exceptedSalay: {
                'en-US': state.basic.exceptedSalay,
            },
            workExperience: {
                'en-US': state.basic.workExperience,
            },
            recentJobSalay: {
                'en-US': state.basic.recentJobSalay,
            },
            startingData: {
                'en-US': state.basic.startingData,
            },
            registeredAddress: {
                'en-US': state.basic.registeredAddress,
            },
            // education
            from: {
                'en-US': state.education.from,
            },
            to: {
                'en-US': state.education.to,
            },
            major: {
                'en-US': state.education.major,
            },
            graduatedFrom: {
                'en-US': state.education.graduatedFrom,
            },
            diploma: {
                'en-US': state.education.diploma,
            },
            english: {
                'en-US': state.education.english,
            },
        };

        console.log(fields);


        client.getSpace(spaceID)
            .then(space => {
                space.createEntry('user', {
                    fields,
                });
            })
            .then(e => console.log(e));
    },
};
