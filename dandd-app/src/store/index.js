import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        isLogged: false,
    },
    mutations: { //syncronous
        setIsLogged(state, payload) {
            //sets the state based on the boolean with payload from actions
            state.isLogged = Boolean(payload);
        }
    },
    actions: { //asyncronous
        async setIsLogged(state) {
            // checks if the user is logged in or not and sends the payload to mutations
            this.token = await sessionStorage.getItem("token");
            this.user = await JSON.parse(sessionStorage.getItem("user"));
            if (this.token == null || this.user == null) {
            state.isLogged = false;
            } else {
            state.isLogged = true;
            }
            state.commit("setIsLogged", state.isLogged);
        },
    },
    modules: {

    },
    getters: {
        // a getter to be able to get the state on pages and components in the application
        getIsLogged: state => state.isLogged
    }
});