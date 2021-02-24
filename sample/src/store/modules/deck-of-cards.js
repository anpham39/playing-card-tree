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
            // let id = 1;

            Object.entries(Suits).map(([suit, name]) => Ranks.map(rank => {
                cards.push({ rank, suit, name: `${rank} of ${name}` });
                // id += 1;
            }));
            console.log('Cards', cards);
            commit('setCards', cards);
        },
        getSingleCard({state}) {
            console.log('single', state.cards.filter(card => (card.rank == '2' && card.suit == '♦'))); 
        }
    },
};
