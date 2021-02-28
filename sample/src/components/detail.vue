<template>
  <div class="card-detail">
    <h1>{{ card.name }}</h1>

    <dl>
      <dt><b>Suit:</b> {{ card.suit }}</dt>
      <!-- <dd></dd> -->
      <dt><b>Rank:</b> {{ card.rank }}</dt>
      <!-- <dd>{{ card.rank }}</dd> -->
    </dl>
  </div>
</template>


<style scoped lang="scss">
@import "../app.scss";

.card-detail {
  @include card();
  h1 {
    text-align: center;
  }
  dl {
    font-size: 18px;
    dt {
      margin-bottom: 8px;
    }
  }
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
