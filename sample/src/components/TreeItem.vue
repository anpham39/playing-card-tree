<template>
  <section class="tree-item">
    <!-- Click event on label to toggle expand and collapse -->
    <div class="label" @click="expanded = !expanded">{{ label }}</div>

    <!-- If tree item is expanded, display children content -->
    <div v-if="expanded" class="expanded-content">
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
      <!-- Tree level 3: Card name (Click to choose card) -->
      <router-link
        v-else
        class="link"
        :to="{ name: 'Home', params: { cardId: children.id.toString() } }"
        >{{ children.name }}</router-link
      >
    </div>
  </section>
</template>


<style scoped lang="scss">
@import "../app.scss";

.tree-item {
  color: $text-color;
  font-size: 18px;
  text-align: center;
  .label {
    background: $tree-color;
    padding: 15px;
    font-weight: bold;
  }
  .tree-item {
    border-left: $border;
    border-right: $border;
    border-bottom: $border;
    .label {
      background: white;
    }
    .expanded-content {
      padding-bottom: 15px;
      .link {
        color: $tree-color;
      }
    }
  }
  .tree-item:nth-child(1) {
    border-top: $border;
  }
}
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