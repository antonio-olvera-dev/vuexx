<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand><router-link to="/">HOME</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link to="/pokedex">Pokédex</router-link></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!-- ---Input--- -->
            <div class="input-header">
              <b-form-input
              id="input-header"
                autocomplete="off"
                @focus="blockFilter(true)"
                @blur="blockFilter(false)"
                @keydown="filterPoke"
                v-model="query"
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              />
              <!-- ---Autocomplete--- -->
              <div v-if="pokeFilterBlock" class="auto-head">
                <div class="auto-head-in">
                  <div
                    v-on:click="select(name.name)"
                    class="auto-head-name"
                    v-for="name in pokemonFilter"
                    v-bind:key="name.name"
                  >
                    <p>{{ name.name }}</p>
                  </div>
                </div>
              </div>
            </div>

            <b-button
              v-on:click="search"
              size="sm"
              class="my-2 my-sm-0"
              type="button"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      query: "",
      pokeFilterBlock: false,
    };
  },
  computed: {
    ...mapState(["allPokemon", "pokemonFilter"]),
  },
 
  methods: {
    async search() {
      try {
        // const poke = await callApi.getPokemon(this.query);
        console.log(poke);
      } catch (error) {
        console.log(error);
      }
    },
    select(name) {
      this.query = name
    },

    blockFilter(bol) {
      setTimeout(() => {
        this.pokeFilterBlock = bol;
      }, 200);
    },
    filterPoke(ev) {
    
      if (ev.target.value.length == 1 && ev.key == "Backspace") {
        return (this.actionChangeFilter(this.allPokemon));
      }

      const newarray = this.allPokemon.filter(function(item) {
        return item.toLowerCase().includes(ev.target.value.toLowerCase());
      });
      this.actionChangeFilter(newarray);
    },

    ...mapActions([ 'actionChangeFilter'])
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.733);
}

a:hover {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}

.input-header {
  display: flex;
  flex-direction: column;
}
.auto-head {
  margin-top: 2.1em;
  height: 35vh;
  width: 10.8em;
  z-index: 10;
  position: absolute;
}

.auto-head-in {
  z-index: 10;
  background-color: white;
  height: 30vh;
  margin-right: 0.5em;
  margin-top: 0.3em;
  border-radius: 0.4em;
  overflow: hidden auto;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.384);
}
.auto-head-in:hover {
  cursor: pointer;
}

.auto-head-name {
  padding: 0.5em;
}
</style>
