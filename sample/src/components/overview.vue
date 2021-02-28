<template>
  <section class="tree-container">
    <h1>Cards tree</h1>
    <p class="description">
      This is a collapsable three-level tree of playing cards. When a specific
      card is chosen, it will be displayed on the card's detail component at the
      top of the page.
    </p>

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
  padding: 50px 50px 100px;
  border: 3px dashed $tree-color;
  width: 950px;
  margin: 0px auto 100px;
  h1 {
    text-transform: uppercase;
    text-decoration: underline;
    color: #ffb931;
    text-align: center;
    margin-bottom: 30px;
    font-size: 30px;
  }
  .description {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .grid-container {
    display: grid;
    grid-column-gap: 50px;
    grid-template-columns: 200px 200px 200px 200px;
  }
}

@media (max-width: 1050px) {
  .tree-container {
    width: 750px;
    .grid-container {
      grid-template-columns: 150px 150px 150px 150px;
    }
  }
}

@media (max-width: 800px) {
  .tree-container {
    width: fit-content;
    .grid-container {
      grid-template-columns: unset;
      grid-row-gap: 50px;
    }
  }
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
