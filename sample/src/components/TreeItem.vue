<template>
  <div>
    <p @click="expanded = !expanded">{{ label }}</p>

    <div v-if="expanded">
      <div v-if="Array.isArray(children)">
        <tree-item
          v-for="child in children"
          :key="child"
          :label="child"
          :children="getSingleCard(label, child)"
        >
        </tree-item>
      </div>
      <div v-else>{{ children.name }}</div>
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
    ...mapGetters("deckOfCards", ["getSingleCard"]),
    // isExpandable() {
    //     console.log(typeof);
    //     return
    // }
  },
};
</script>