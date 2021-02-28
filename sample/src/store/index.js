import Vue from 'vue';
import Vuex from 'vuex';
import deckOfCards from './modules/deck-of-cards';


Vue.use(Vuex);


function getDefaultState() {
    return {
        initialized: false,
        expandedAmount: 0,
    };
}


export default new Vuex.Store({
    state: getDefaultState(),
    modules: { deckOfCards },
    mutations: {
        resetState: s => Object.assign(s, getDefaultState()),
        setInitialized: (s, i) => s.initialized = i,
        addExpandedAmount: (s) => s.expandedAmount += 1,
        minusExpandedAmount: (s) => s.expandedAmount -= 1,
        resetExpandedAmount: (s) => s.expandedAmount = 0,
    },
});
