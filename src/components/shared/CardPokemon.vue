<template>
  <div class="card-pokemon" @click="img">
    <div class="card" style="width: 14rem;">
      <img class="card-img-top" v-bind:src="url" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
       //url: require("@/assets/mari.jpg"),
      url:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    };
  },
  created (){
  try {
        console.log(this.url);
        // const dat = await callApi.getPokemon(name);
        // console.log(dat);
      } catch (error) {}
  },
  mounted () {

  },
  async beforeCreate() {
    
  },

  methods:{
    async img(){
       try {
        const dat = await callApi.getPokemon(name);
        console.log(dat);
       } catch (error) {
         
       }
    }
  }
};
</script>

<style scoped>
.card-pokemon {
}
</style>
