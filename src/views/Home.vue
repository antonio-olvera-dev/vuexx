<template>
  <div class="home">
    <div class="container mt-2">
      <div class="row">
        <div class="col-12">
          <Paginator v-on:acci="acci" :number="clacPag()" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center" v-for="poke in pokemonFilter" v-bind:key="poke">
          <CardPokemon class="mt-5 mb-5" :name="poke" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardPokemon from "../components/shared/CardPokemon.vue";
import Paginator from "../components/shared/Paginator.vue";
import { callApi } from "../services/CallApi";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      count: 0,
      cuan: 40,
    };
  },

  async mounted() {
    const pok = await callApi.getAllPokemon(this.cuan);
    const newPok = pok.results.map((po) => {
      return po.name;
    });
    this.count = pok.count;
    this.actionLoadPokemon(newPok);
  },
  computed: {
    ...mapState(["allPokemon", "pokemonFilter"]),
  },
  methods: {
    ...mapActions(["actionLoadPokemon"]),
    async acci(num) {
      try {
        const num2 = num - 1;
        const pokemm = await callApi.getAllPokemon(this.cuan, num2 * 40);
        const newPok = pokemm.results.map((po) => {
          return po.name;
        });
         this.actionLoadPokemon(newPok);
      } catch (error) {
        console.log(error);
      }
    },
    clacPag() {
      let num = 0;
      num = this.count / this.cuan;
      num = Math.ceil(num);

      return num;
    },
  },
  components: {
    CardPokemon,
    Paginator,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
