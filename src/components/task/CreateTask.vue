<template>
  <div>This is CreateTask.vue</div>
  <hr />

  <div class="m-5">
    <h3>Form title</h3>
    <form @submit.prevent="sendRequest">
      <div class="row">
        <div class="form-group">
          <label>Task name</label>
          <input class="form-control" v-model="title" />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea
            class="form-control"
            v-model="description"
            rows="2"
          ></textarea>
        </div>
        <div class="form-group">
          <label>Deadline</label>
          <input type="number" v-model="price" class="form-control" />
        </div>

        <div class="form-group">
          <label>End date</label>
          <input type="date" v-model="end_date" class="form-control" />
        </div>
      </div>
      <div class="my-buttons mt-3 d-flex justify-content-between">
        <div class="my-left-buttons">
          <button class="btn btn-primary">Submit</button>
          <button class="btn btn-danger ms-3" data-bs-dismiss="modal">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
