<template>
  <div class="card-pokemon" @click="img">
    <div class="card" style="width: 14rem;">
      <img class="card-img-top" v-bind:src="url" alt="Card image cap" />
      <div v-if="!load" class="spinner-border text-info" role="status"></div>
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a @click="goImg" class="btn btn-primary">Go Full Image</a>
      </div>
    </div>
  </div>
</template>

<script>
import { callApi } from "../../services/CallApi";
export default {
  props: ["name"],
  data() {
    return {
      url: require("@/assets/mari.jpg"),
      load: false,
    };
  },
  async created() {
    try {
      const dat = await callApi.getPokemon(this.name);
      const ur = dat.sprites.other["official-artwork"].front_default;
      this.url = ur;
      this.load = true;
    } catch (error) {}
  },

  methods: {
    async img() {
      try {
        const dat = await callApi.getPokemon(this.name);
      } catch (error) {}
    },
    goImg() {
      window.open(this.url, "_blanck");
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-pokemon {
  animation: zoomIn;
  animation-duration: 1000ms;
}
</style>
