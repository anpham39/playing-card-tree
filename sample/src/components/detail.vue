<template>
  <div class="card-detail">
    <h1>{{ card.name }}</h1>

    <dl>
      <dt>Suit</dt>
      <dd>{{ card.suit }}</dd>
      <dt>Rank</dt>
      <dd>{{ card.rank }}</dd>
    </dl>
  </div>
</template>


<style scoped lang="scss">
@import "../app.scss";

.card-detail {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid $border-color;
  padding: $default-padding;
}
</style>


<script>
import VT from "vue-types";
import { mapState } from "vuex";

export default {
  name: "Detail",
  props: {
    cardId: VT.string.isRequired,
  },
  computed: {
    ...mapState("deckOfCards", ["cards"]),

    card() {
      return this.$store.getters["deckOfCards/getCardById"](this.cardId);
    },
  },
};
</script>
