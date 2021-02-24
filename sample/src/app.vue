<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style scoped lang="scss">
* {
  border: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  margin: 0;
  outline: none;
  padding: 0;
}
</style>


<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  beforeMount() {
    this.initialize();
    this.getSingleCard();
    this.setInitialized(true);
  },
  methods: {
    ...mapActions("deckOfCards", ["initialize", "getSingleCard"]),
    ...mapMutations(["setInitialized"]),
  },
};
</script>
