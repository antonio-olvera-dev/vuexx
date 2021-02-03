<template>
  <div class="Paginator">
    <div class="cont-paginator">
      <div
        @click="
          click(num);
          press(num);
        "
        class="div-button-paginator"
        v-for="num in number"
        v-bind:key="num"
      >
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
    click(num) {
      return this.$emit("acci", num);
    },

    press(num) {
      const elements = document.getElementsByClassName("span-pag");

      for (let i = 0; i < elements.length; i++) {
        const item = elements[i];
        if (item.innerText == num) {
          document.getElementsByClassName("div-button-paginator")[
            num - 1
          ].style.background = "rgba(0, 0, 0, 0.5)";
        } else {
          document.getElementsByClassName("div-button-paginator")[
            i
          ].style.background = "white";
        }
      }
    },
  },
};
</script>

<style>
.cont-paginator {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.div-button-paginator {
  min-width: 2em;
  padding: 0.3em;
  margin: 0.3em;
  border-radius: 0.3em;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.36);
}
.div-button-paginator:hover {
  cursor: pointer;
}
.span-pag {
  font-size: 0.8em;
}
</style>
