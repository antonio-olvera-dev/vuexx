<template>
  <div class="Paginator">
    <div class="cont-paginator">

      <div @click="click(num)" class="div-button-paginator" 
      v-for="num in number" 
      v-bind:key="num">

        <span class="span-pag">
          {{ num }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["number"],
  methods: {
      click(num){
        return this.$emit('acci', num)
      }
  }
};
</script>

<style>
.cont-paginator{
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
}
.div-button-paginator{
    min-width: 2em;
    padding: 0.3em;
    margin:0.3em ;
    border-radius: 0.3em;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.363);
}
.div-button-paginator:hover{
    cursor: pointer;
}
.span-pag{
    font-size: 0.8em;
}
</style>
