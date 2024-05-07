<template>
  <div class="ms-5 me-5">
    <div class="d-flex">
      <h3 class="">Tasks</h3>
      <CircleButton
        :to="{ name: 'user.create' }"
        iconClass="fas fa-plus text-white"
        tooltip="Add employee"
        class="me-2 ms-3"
      >
      </CircleButton>
    </div>
    <h5>({{ tasks.length }} tasks in total)</h5>
    <div id="my-header" class="row fs-5 fw-bold">
      <div class="col-lg">Task name</div>
      <div class="col-lg">Description</div>
      <div class="col-lg">Deadline</div>
      <div class="col-lg">Action</div>
    </div>
    <div
      class="row border-bottom pt-2 pb-2"
      v-for="task in tasks"
      :key="task.id"
    >
      <div class="col-lg">{{ task.name }}</div>
      <div class="col-lg">{{ task.description }}</div>
      <div class="col-lg">{{ task.end_time }}</div>
      <div class="col-lg d-flex">
        <div class="my-right me-5 d-flex">
          <div id="edit-modal" style="margin-bottom: 50px">
            <div>
              <button
                type="button"
                class="bg-white border-0"
                data-bs-toggle="modal"
                data-bs-target="#create-modal"
              >
                <a class="my-tooltip" style="cursor: pointer">
                  <i class="fas fa-edit text-primary me-1 ms-1 fs-4"></i>
                  <span class="my-tooltiptext">Edit</span>
                </a>
              </button>
              <MyModal
                :passedComponent="CreateTask"
                id="create-modal"
              ></MyModal>
            </div>
          </div>

          <a class="my-tooltip" style="cursor: pointer">
            <i class="far fa-trash-alt text-danger me-1 ms-1 fs-4"></i>
            <span class="my-tooltiptext">Delete</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";
import { Modal } from "bootstrap";
import MyModal from "../modal/MyModal.vue";
import CreateProject from "../project/CreateProject.vue";
import CircleButton from "../employees/CircleButton.vue";
import CreateTask from "../task/CreateTask";

import axios from "../../api.js";

export default {
  components: {
    MyModal,
    CircleButton,
  },
  data() {
    return {
      CreateTask: markRaw(CreateTask),
    };
  },
  async setup() {
    const APIresponse = await axios.get("tasks");
    const tasks = APIresponse.data.tasks;
    console.log(tasks);

    return {
      tasks,
    };
  },
};
</script>

<style scoped>
#my-header {
  background-color: #b7c3df;
}
</style>
