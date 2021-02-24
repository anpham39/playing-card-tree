import Vue from 'vue';
import Vuex from 'vuex';
import deckOfCards from './modules/deck-of-cards';


Vue.use(Vuex);


function getDefaultState() {
    return {
        initialized: false,
    };
}


export default new Vuex.Store({
    state: getDefaultState(),
    modules: { deckOfCards },
    mutations: {
        resetState: s => Object.assign(s, getDefaultState()),
        setInitialized: (s, i) => s.initialized = i,
    },
});
