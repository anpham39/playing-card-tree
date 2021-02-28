<template>
  <section class="tree-container">
    <h1>Cards tree</h1>

    <!-- Tree component: Tree level 1 (Label is Suit name and children content is Ranks array) -->
    <div class="grid-container">
      <TreeItem
        v-for="suit in suits"
        :key="suit"
        :label="suit"
        :children="ranks"
      />
    </div>

    <!-- Reset button component: Collapse all tree item and unchose card if has any  -->
    <ResetButton />
  </section>
</template>


<style lang="scss" scoped>
@import "../app.scss";

.tree-container {
  padding: 50px 10vw 100px;
  border: 3px dashed $tree-color;
}

h1 {
  text-transform: uppercase;
  text-decoration: underline;
  color: #ffb931;
  text-align: center;
  margin-bottom: 60px;
  font-size: 30px;
}

.grid-container {
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns:
    calc((80vw - 166px) / 4) calc((80vw - 166px) / 4) calc((80vw - 166px) / 4)
    calc((80vw - 166px) / 4);
}
</style>


<script>
import { Ranks, Suits } from "@/constants";
import { mapGetters } from "vuex";
import TreeItem from "./TreeItem.vue";
import ResetButton from "./ResetButton.vue";

export default {
  name: "Overview",
  data() {
    return {
      suits: Suits,
      ranks: Ranks,
    };
  },
  computed: {
    ...mapGetters("deckOfCards", ["getSingleCard"]),
  },
  components: {
    TreeItem,
    ResetButton,
  },
};
</script>
