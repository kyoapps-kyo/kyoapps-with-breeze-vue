const state = {
    top: 0,
};
const mutations = {
    updateScreenY(state, payload) {
        state.top = payload.top;
    },
};
const actions = {
    asyncUpdateScreenY(context, top) {
        context.commit("updateScreenY", { top: top });
    },
};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
