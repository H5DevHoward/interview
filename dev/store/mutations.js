import types from './mutation-types';

export default {
    [types.SUBMIT] (state) {
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
