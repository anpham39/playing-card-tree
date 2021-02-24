<template>
  <section>
    <div>Cards tree</div>

    <div v-for="suit in suits" :key="suit">
      <p>{{ suit }}</p>
      <div v-for="rank in ranks" :key="rank">
        <p>{{ rank }}</p>
        <div>{{ getSingleCard(suit, rank).name }}</div>
      </div>
    </div>
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
};
</script>
