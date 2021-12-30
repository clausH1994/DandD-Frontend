import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        isLogged: false,
    },
    mutations: { //syncronous
        setIsLogged(state, payload) {
            state.isLogged = Boolean(payload);
        }
    },
    actions: { //asyncronous
        async setIsLogged(state) {
            this.token = await sessionStorage.getItem("token");
            this.user = await JSON.parse(sessionStorage.getItem("user"));
            if (this.token == null || this.user == null) {
            state.isLogged = false;
            } else {
            state.isLogged = true;
            }
            state.commit("setIsLogged", state.isLogged);
        },

/*         async checkIsLogged(state) {
            const user = await JSON.parse(sessionStorage.getItem("user"));
            state.commit("setIsLogged", user);
        } */
    },
    modules: {

    },
    getters: {
        getIsLogged: state => state.isLogged
    }
});