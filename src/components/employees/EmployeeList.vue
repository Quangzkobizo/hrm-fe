<template>
  <div class="my-comp ms-5 me-5">
    <div class="my-table-block-head">
      <div class="pt-3 pb-3 d-flex align-items-center justify-content-between">
        <div class="my-left d-flex">
          <h5 class="ms-3 me-3 mb-0">Employees</h5>
          <div
            id="my-employee-search"
            class="bg-white rounded-3 overflow-hidden"
          >
            <label class="fas fa-search ms-2 me-2"></label>
            <input class="border-0" placeholder="Search" type="text" />
          </div>
        </div>
        <div class="my-right me-5 d-flex">
          <CircleButton
            :to="{ name: 'user.create' }"
            iconClass="fas fa-plus text-white"
            tooltip="Add employee"
          />
          <CircleButton
            :to="{}"
            iconClass="fas fa-redo text-white"
            tooltip="Refresh"
          />
        </div>
      </div>
    </div>
    <div class="my-table">
      <table>
        <thead class="my-table-head">
          <tr>
            <th>Avatar</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody class="my-table-body">
          <tr class="" v-for="user in paginatedUsers" :key="user.id">
            <EmployeeRow :userProp="user"> </EmployeeRow>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="my-pagination mt-4 me-3 ms-auto d-flex justify-content-end align-items-center"
    >
      <label class="me-3">Item per page: </label>
      <select v-model="itemPerPage">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>

      <i
        class="fas fa-angle-double-left fa-lg ms-3 me-2 my-cursor-pointer"
        @click="previousPage"
      ></i>
      <span>Page: {{ currentPage }}</span>
      <i
        class="fas fa-angle-double-right fa-lg ms-2 me-2 my-cursor-pointer"
        @click="nextPage"
      ></i>
    </div>
  </div>
</template>

<script>
import axios from "../../api.js";
import EmployeeRow from "./EmployeeRow";
import CircleButton from "./CircleButton.vue";

export default {
  name: "EmployeeList",
  components: {
    EmployeeRow,
    CircleButton,
  },
  data() {
    return {
      itemPerPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * Number(this.itemPerPage);
      const endIndex = startIndex + Number(this.itemPerPage);
      return this.userIndexResponse.slice(startIndex, endIndex);
    },
  },

  async setup() {
    let userIndexResponse = null;

    await axios
      .get("/users")
      .then((Response) => {
        userIndexResponse = Response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(userIndexResponse);

    return {
      userIndexResponse,
    };
  },
  methods: {
    async deleteAlert(id) {
      if (confirm("Are you sure?")) {
        const axiosRes = await axios.delete("users/" + id);
        console.log(axiosRes);
        window.location.reload();
      }
    },
    nextPage() {
      const totalPages = Math.ceil(
        this.userIndexResponse.length / this.itemPerPage
      );
      if (this.currentPage < totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style scoped>
.my-table-block-head {
  background-color: #cdd6eb;
}

.my-table-head th {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
}

tr {
  border-bottom: 1px solid lightgray;
}
</style>
