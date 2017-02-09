import types from './mutation-types';

const spaceID = '4445w378ct2c';
const accessToken = '8598a3a4635efaaee057684f5b6de9e85b5935be2a5d6114eebb6966ab263dec';
const contentful = require('contentful-management');
const client = contentful.createClient({ accessToken });

export default {
    // [types.UPDATEBASIC] (state, payload) {
    //     console.log(payload);
    //     state.name = payload.name;
    //     state.sex = payload.sex;
    //     state.age = payload.age;
    //     state.nationality = payload.nationality;
    //     state.registeredResidence = payload.registeredResidence;
    //     state.eMailAddress = payload.eMailAddress;
    //     state.phoneNumber = payload.phoneNumber;
    //     state.idNumber = payload.idNumber;
    //     state.address = payload.address;
    //     state.positionApplyingFor = payload.positionApplyingFor;
    //     state.exceptedSalay = payload.exceptedSalay;
    //     state.workExperience = payload.workExperience;
    //     state.recentJobSalay = payload.recentJobSalay;
    //     state.startingData = payload.startingData;
    //     state.registeredAddress= payload.registeredAddress;
    // },
    updateName(state, payload) {
        state.name = payload;
    },
    updateSex(state, payload) {
        state.sex = payload;
    },
    updateAge(state, payload) {
        state.age = payload;
    },
    updateNationality(state, payload) {
        state.nationality = payload;
    },
    updateRegisteredResidence(state, payload) {
        state.registeredResidence = payload;
    },
    updateEMailAddress(state, payload) {
        state.eMailAddress = payload;
    },
    updatePhoneNumber(state, payload) {
        state.phoneNumber = payload;
    },
    updateIdNumber(state, payload) {
        state.idNumber = payload;
    },
    updateAddress(state, payload) {
        state.address = payload;
    },
    updatePositionApplyingFor(state, payload) {
        state.positionApplyingFor = payload;
    },
    updateExceptedSalay(state, payload) {
        state.exceptedSalay = payload;
    },
    updateWorkExperience(state, payload) {
        state.workExperience = payload;
    },
    updateRecentJobSalay(state, payload) {
        state.recentJobSalay = payload;
    },
    updateStartingData(state, payload) {
        state.startingData = payload;
    },
    updateRegisteredAddress(state, payload) {
        state.registeredAddress = payload;
    },
    
    [types.SUBMIT] (state) {
        console.log('submit...');
        const fields = {
            name: {
                'en-US': state.name,
            },
            sex: {
                'en-US': state.sex,
            },
            age: {
                'en-US': state.age,
            },
            nationality: {
                'en-US': state.nationality,
            },
            registeredResidence: {
                'en-US': state.registeredResidence,
            },
            eMailAddress: {
                'en-US': state.eMailAddress,
            },
            phoneNumber: {
                'en-US': state.phoneNumber,
            },
            idNumber: {
                'en-US': state.idNumber,
            },
            address: {
                'en-US': state.address,
            },
            positionApplyingFor: {
                'en-US': state.positionApplyingFor,
            },
            exceptedSalay: {
                'en-US': state.exceptedSalay,
            },
            workExperience: {
                'en-US': state.workExperience,
            },
            recentJobSalay: {
                'en-US': state.recentJobSalay,
            },
            startingData: {
                'en-US': state.startingData,
            },
            registeredAddress: {
                'en-US': state.registeredAddress,
            },
        };

        client.getSpace(spaceID)
            .then(space => {
                space.createEntry('user', {
                    fields,
                });
            })
            .then(e => console.log(e));
    },
};
