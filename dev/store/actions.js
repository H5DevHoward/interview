import types from './mutation-types';

export default {
    submit: ({commit}) => {
        commit(types.SUBMIT);
    },
};
