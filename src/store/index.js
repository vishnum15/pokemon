import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemonList: []
    },
    getters: {
        GET_POKEMON_LIST: (state) => state.pokemonList
    },
    mutations: {
        APPEND_POKEMONDATA_FOR_EACH_POKEMON(state, pokemons) {
            state.pokemonList.push(pokemons);
        }
    },
    actions: {
        async FETCH_POKEMONS({
            commit,
            dispatch
        },limit) {
            try {
                const data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit='+ limit +'&offset=0')
                data.data.results.forEach(function(item) {
                    dispatch('FETCH_POKEMONDATA_FOR_EACH_POKEMON', item);
                })
            } catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async FETCH_POKEMONDATA_FOR_EACH_POKEMON({
            commit
        }, payload) {
            try {

                const data = await axios.get(payload.url);

                commit('APPEND_POKEMONDATA_FOR_EACH_POKEMON', data.data);

            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    modules: {}
})