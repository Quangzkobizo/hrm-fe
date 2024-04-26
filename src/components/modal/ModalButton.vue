<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    :data-bs-target="'#' + target"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ModalButton",
  props: {
    buttonText: String,
    target: String,
  },
};
</script>

<style scoped></style>
