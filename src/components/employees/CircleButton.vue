<template>
  <div
    class="my-circle-button my-tooltip ms-2 me-2 d-flex justify-content-center align-items-center"
  >
    <RouterLink :to="to">
      <i :class="iconClass"></i>
      <span class="my-tooltiptext">{{ tooltip }}</span>
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
    tooltip: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.my-circle-button {
  background-color: #3f51b5;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
</style>
