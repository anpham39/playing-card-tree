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
        // async getSingleCard({state}, suit = 'Diamonds', rank = '3') {
        //     var filteredCards = await state.cards.filter(card => (card.rank == rank && card.suit == suit))
        //     console.log('single', filteredCards[0]);
        //     return filteredCards[0];
        // }
    },
    getters: {
        getSingleCard: (state) => (suit, rank) => {
          return state.cards.find(card => (card.suit == suit && card.rank == rank))
        }
      }
    
};
