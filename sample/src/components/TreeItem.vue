<template>
  <section class="tree-item">
    <!-- Click event on label to toggle expand and collapse -->
    <div class="label">
      <span :class="{ highlight: expanded }">{{ label }} </span>
      <button @click="expandItem">{{ !expanded ? "+" : "-" }}</button>
    </div>

    <!-- If tree item is expanded, display children content -->
    <div v-if="expanded" class="expanded-content">
      <div v-if="isExpandable">
        <!-- Tree level 2: Label is Rank name and children content is Card name -->
        <TreeItem
          v-for="child in children"
          :key="child"
          :label="child"
          :children="getCardByTraits(label, child)"
        >
        </TreeItem>
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
    position: relative;
    background: $tree-color;
    padding: 15px;
    font-weight: bold;
    &:hover,
    span.highlight {
      color: #000000;
    }
  }
  button {
    width: 22px;
    text-align: center;
    background: white;
    border: 1px solid #ddd;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .tree-item {
    border-left: $border;
    border-right: $border;
    border-bottom: $border;
    transition: width 2s, height 4s;
    .label {
      background: white;
      &:hover,
      span.highlight {
        color: $tree-color;
      }
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
import { mapState, mapGetters, mapMutations } from "vuex";
import { Suits } from "@/constants";

export default {
  name: "TreeItem",
  props: {
    label: "",
    children: "",
  },
  data() {
    return {
      suits: Suits,
      expanded: false,
    };
  },
  computed: {
    ...mapState(["expandedAmount"]),
    ...mapGetters("deckOfCards", ["getCardByTraits"]),

    isExpandable() {
      return Array.isArray(this.children);
    },
  },
  watch: {
    // If cards tree is reset, collapse all cards
    expandedAmount: function (newVal) {
      if (newVal == 0) this.expanded = false;
    },
  },
  methods: {
    ...mapMutations(["addExpandedAmount", "minusExpandedAmount"]),

    expandItem() {
      this.expanded = !this.expanded;

      // Keep track of expanded item amount, only Suits level matter
      if (this.suits.includes(this.label)) {
        if (this.expanded) this.addExpandedAmount();
        else this.minusExpandedAmount();
      }
    },
  },
};
</script>