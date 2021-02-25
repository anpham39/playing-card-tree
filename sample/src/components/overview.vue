<template>
  <section class="tree-container">
    <h1>Cards tree</h1>

    <!-- <div v-for="suit in suits" :key="suit">
      <p>{{ suit }}</p>
      <div v-for="rank in ranks" :key="rank">
        <p>{{ rank }}</p>
        <div>{{ getSingleCard(suit, rank).name }}</div>
      </div>
    </div> -->

    <!-- Tree level 1: Label is Suit name and children content is Ranks array-->
    <div class="grid-container">
      <tree-item
        v-for="suit in suits"
        :key="suit"
        :label="suit"
        :children="ranks"
      />
    </div>
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
  grid-template-columns: auto auto auto auto;
}
</style>


<script>
import { Ranks, Suits } from "@/constants";
import { mapGetters } from "vuex";
import TreeItem from "./TreeItem.vue";

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
  },
};
</script>
