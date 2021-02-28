<template>
  <div class="button-div">
    <!-- Only display when there is card expanded -->
    <button v-if="expandedAmount != 0" @click="resetCardsTree">
      Reset cards
    </button>
  </div>
</template>


<style lang="scss" scoped>
@import "../app.scss";

.button-div {
  text-align: center;
  margin-top: 40px;
  button {
    background: white;
    color: #af0000;
    font-weight: bold;
    font-size: 17px;
    border: 2.5px solid $tree-color;
    border-radius: 5px;
    box-shadow: 0px 3px 4px #8080807d;
    padding: 15px;
    line-height: 1;
  }
}
</style>


<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ResetButton",
  computed: {
    ...mapState(["expandedAmount"]),
  },
  methods: {
    ...mapMutations(["resetExpandedAmount"]),

    async resetCardsTree() {
      // Collapse all cards and navigate to home view
      await this.resetExpandedAmount();
      if (this.$route.fullPath != "/") this.$router.push("/");
    },
  },
};
</script>
