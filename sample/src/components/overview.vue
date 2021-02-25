<template>
  <section>
    <div>Cards tree</div>

    <!-- <div v-for="suit in suits" :key="suit">
      <p>{{ suit }}</p>
      <div v-for="rank in ranks" :key="rank">
        <p>{{ rank }}</p>
        <div>{{ getSingleCard(suit, rank).name }}</div>
      </div>
    </div> -->

    <!-- Tree level 1: Label is Suit name and children content is Ranks array-->
    <tree-item
      v-for="suit in suits"
      :key="suit"
      :label="suit"
      :children="ranks"
    />
  </section>
</template>


<style scoped lang="scss">
section {
  background: #eee;
  padding: 200px;
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
