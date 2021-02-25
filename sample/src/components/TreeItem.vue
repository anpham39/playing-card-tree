<template>
  <div>
    <!-- Click event on label to toggle expand and collapse -->
    <p @click="expanded = !expanded">{{ label }}</p>

    <!-- If tree item is expanded, display children content -->
    <div v-if="expanded">
      <div v-if="isExpandable">
        <!-- Tree level 2: Label is Rank name and children content is Card name -->
        <tree-item
          v-for="child in children"
          :key="child"
          :label="child"
          :children="getCardByTraits(label, child)"
        >
        </tree-item>
      </div>
      <!-- Tree level 3: Card name updating chosen card -->
      <router-link
        v-else
        :to="{ name: 'Home', params: { cardId: children.id.toString() } }"
        >{{ children.name }}</router-link
      >
    </div>
  </div>
</template>


<style scoped lang="scss">
</style>


<script>
import { mapGetters } from "vuex";

export default {
  name: "tree-item",
  props: {
    label: "",
    children: "",
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    ...mapGetters("deckOfCards", ["getCardByTraits"]),
    isExpandable() {
      return Array.isArray(this.children);
    },
  },
};
</script>