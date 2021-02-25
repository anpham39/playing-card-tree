<template>
  <div class="home-view">
    <div class="overview-beside-detail">
      <div class="detail-wrapper">
        <detail v-if="cardId" :card-id="cardId" />
        <div v-else class="empty-card">No card selected</div>
      </div>
      <div class="overview-wrapper">
        <overview />
      </div>
    </div>

    <!-- <instructions /> -->
  </div>
</template>


<style scoped lang="scss">
@import "../app.scss";

.empty-card {
  @include card();
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
</style>


<script>
import Detail from "@/components/detail.vue";
import Instructions from "@/components/instructions.vue";
import Overview from "@/components/overview.vue";

export default {
  name: "Home",
  components: { Detail, Instructions, Overview },
  props: {
    cardId: { validator: (v) => v === null || typeof v === "string" },
  },
};
</script>
