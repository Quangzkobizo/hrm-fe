<template>
  <div class="ms-5 me-5">
    <h3>{{ formTitle }}</h3>
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
            placeholder="describe this project"
          ></textarea>
        </div>
      </div>
      <div class="my-buttons mt-3 d-flex justify-content-between">
        <div class="my-left-buttons">
          <button type="submit" class="btn btn-primary">Submit</button>
          <RouterLink :to="{ name: 'projects.index' }">
            <button class="btn btn-danger ms-3">Cancel</button>
          </RouterLink>
        </div>
        <div v-if="route.name.endsWith('update')" class="my-right-buttons">
          <button
            type="button"
            @click="deleteProject"
            class="btn btn-danger me-5"
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "../../api";
export default {
  async setup() {
    const route = useRoute();

    //Default values
    let title = "Efren Reyes";
    let client = "FSR";
    let priority = "high";
    let price = 673;
    let start_date = "2020-01-01";
    let end_date = "2021-01-01";
    let description = "nothing to mieu ta this project";

    if (route.name.endsWith("update")) {
      const showResonse = await axios.get("projects/" + route.params.id);
      const projectData = showResonse.data;
      title = projectData.title;
      client = projectData.client;
      priority = projectData.priority;
      price = projectData.price;
      start_date = projectData.start_date;
      end_date = projectData.end_date;
      description = projectData.description;
    }

    start_date = start_date.slice(0, 10);
    end_date = end_date.slice(0, 10);

    const formTitle = route.name.endsWith("projects")
      ? "Update project"
      : "Create project";

    return {
      title,
      client,
      priority,
      price,
      start_date,
      end_date,
      description,
      route,
      formTitle, //The title of this form
    };
  },
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

      let myFormData = {
        title: this.title,
        client: this.client,
        priority: this.priority,
        price: this.price,
        start_date: this.start_date,
        end_date: this.end_date,
        description: this.description,
        progress: 0,
      };

      if (this.route.name.endsWith("update")) {
        axios.put("projects/" + this.route.params.id, myFormData);
      } else {
        axios.post("projects", myFormData);
      }
      this.$router.push("/projects");
    },
    deleteProject() {
      if (confirm("Are you sure to delete this project")) {
        axios.delete("projects/" + this.route.params.id);

        this.$router.push({ name: "projects.index" });
      }
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
