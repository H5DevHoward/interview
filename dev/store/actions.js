import types from './mutation-types';

const spaceID = '4445w378ct2c';
const accessToken = '8598a3a4635efaaee057684f5b6de9e85b5935be2a5d6114eebb6966ab263dec';
const contentful = require('contentful-management');
const client = contentful.createClient({ accessToken });

export default {
    submit: ({commit}) => {
        commit(types.SUBMIT);
    },
};
