<template>
  <div class="ms-5 me-5">
    <h3>Add project</h3>
    <form @submit.prevent="sendRequest">
      <div class="row">
        <div class="form-group col-lg-6">
          <label>Project title</label>
          <input
            class="form-control"
            v-model="title"
            placeholder="Enter title of Project"
          />
        </div>
        <div class="form-group col-lg-6">
          <label>Client</label>
          <input
            class="form-control"
            v-model="client"
            placeholder="Who pay for this Project"
          />
        </div>
        <div class="form-group col-lg-6">
          <label>Price</label>
          <input
            type="number"
            v-model="price"
            class="form-control"
            placeholder="$$$"
          />
        </div>
        <div class="form-group col-lg-6">
          <label>Priority</label>
          <select class="form-control" v-model="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div class="form-group col-lg-6">
          <label>Start date</label>
          <input type="date" v-model="start_date" class="form-control" />
        </div>
        <div class="form-group col-lg-6">
          <label>End date</label>
          <input type="date" v-model="end_date" class="form-control" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea
            class="form-control"
            v-model="description"
            rows="3"
          ></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
      <RouterLink :to="{ name: 'projects.index' }">
        <button class="btn btn-danger mt-3 ms-3">Cancel</button>
      </RouterLink>
    </form>
  </div>
</template>

<script>
import { warn } from "vue";
import axios from "../../api";
export default {
  data() {
    return {
      title: "Efren Reyes",
      client: "FSR",
      priority: "high",
      price: 673,
      start_date: null,
      end_date: null,
      description: "nothing to mieu ta this project",
    };
  },
  setup() {},
  methods: {
    sendRequest() {
      if (
        !this.title ||
        !this.client ||
        !this.priority ||
        !this.start_date ||
        !this.end_date ||
        !this.description
      ) {
        alert("Please fill all fields");
        return;
      }

      if (this.price <= 0) {
        alert("Price need to be positive");
        return;
      }

      const startDate = new Date(this.start_date);
      const endDate = new Date(this.end_date);

      if (startDate > endDate) {
        alert("End date must be later than Start date");
        return;
      }

      axios.post("projects", {
        title: this.title,
        client: this.client,
        priority: this.priority,
        price: this.price,
        start_date: this.start_date,
        end_date: this.end_date,
        description: this.description,
        progress: 0,
      });

      this.$router.push("/projects");
    },
  },
};
</script>

<style scoped>
label {
  font-weight: 555;
  margin-top: 10px;
}
</style>
