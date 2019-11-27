import  * as service  from  "./service"

const state = {
    all: {},
    isLoading: false
}

const getters = {
    allData: (state) => {
        return state.all;
    },
    isLoading:(state)=>{
        return state.isLoading
    }
}

const mutations = {
    // mutations are function to mutate the state

    onRequest(state) {
        state.isLoading = true;
    },
    updateSateData(state, data) {
        state.all = data
        state.isLoading = false
    }
}

const actions = {
    
    // actions include async functions and api calls

    fetchData({ commit }) {
        commit('onRequest')
           return service.fetchData()
            .then(({ data }) => {
                commit("updateSateData", data);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}