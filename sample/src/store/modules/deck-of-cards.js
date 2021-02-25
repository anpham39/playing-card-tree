import { Ranks, Suits } from '@/constants';


function getDefaultState() {
    return {
        cards: [],
    };
}


export default {
    namespaced: true,
    state: getDefaultState(),
    mutations: {
        resetState: s => Object.assign(s, getDefaultState()),
        setCards: (s, cards) => s.cards = cards,
    },
    actions: {
        initialize({ commit }) {
            const cards = [];
            let id = 1

            Suits.map((suit) => Ranks.map(rank => {
                cards.push({ id, rank, suit, name: `${rank} of ${suit}` });
                id +=1;
            }));
            console.log('Cards', cards);
            commit('setCards', cards);
        },
    },
    getters: {
        getCardByTraits: (state) => (suit, rank) => {
          return state.cards.find(card => (card.suit == suit && card.rank == rank))
        },
        getCardById: (state) => (id) => {
          return state.cards.find(card => (card.id == id))
        }
      }
    
};
