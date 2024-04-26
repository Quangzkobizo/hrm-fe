<template>
  <div>This is TaskList.vue</div>
  <div>
    <ModalButton buttonText="Hello" target="exampleModal"></ModalButton>
    <MyModal :passedComponent="CreateProject" id="exampleModal"></MyModal>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

import ModalButton from "../modal/ModalButton.vue";
import MyModal from "../modal/MyModal.vue";

import CreateProject from "../project/CreateProject.vue";

export default {
  components: {
    ModalButton,
    MyModal,
  },
  data() {
    return {
      CreateProject: CreateProject,
    };
  },
};
</script>

<style scoped></style>
