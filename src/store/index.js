import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allPokemon:[],
    pokemonFilter:[]
  },
  mutations: {
    loadPokemon(state, pokemon){
      state.allPokemon = pokemon;
      state.pokemonFilter = pokemon;
    },

    changeFilter(state, poke){
      state.pokemonFilter = poke;
    }
  },
  actions: {
    actionLoadPokemon({commit}, pokemon){
      commit('loadPokemon', pokemon);
    },
    actionChangeFilter({commit}, poke){
      commit('changeFilter', poke);
    }
  },
  modules: {
  }
})
