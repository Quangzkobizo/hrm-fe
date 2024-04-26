<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Close button need this attribute: {{ data-bs-dissmiss="modal" }}-->
        <component :is="passedComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    passedComponent: Object,
    id: String,
  },
};
</script>

<style scoped></style>
