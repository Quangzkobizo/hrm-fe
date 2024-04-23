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
          <div
            class="my-circle-button my-tooltip d-flex justify-content-center align-items-center"
          >
            <RouterLink :to="{ name: 'user.create' }">
              <i class="fas fa-plus text-white"></i>
              <span class="my-tooltiptext">Add employee</span>
            </RouterLink>
          </div>
          <div
            class="my-circle-button my-tooltip d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-redo text-white"></i>
            <span class="my-tooltiptext">Refresh</span>
          </div>
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
            <td class="ps-3 pe-3">
              <img
                height="36px"
                width="36px"
                :src="getUserAvatar(user)"
                alt="Avatar"
                class="rounded-circle opacity-75"
              />
            </td>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.birthDate }}</td>
            <td>{{ user.gender }}</td>
            <td>
              <RouterLink
                :to="{ name: 'user.update', params: { id: user.id } }"
              >
                <a class="my-tooltip" style="cursor: pointer">
                  <i class="fas fa-edit text-primary me-1 ms-1"></i>
                  <span class="my-tooltiptext">Edit</span>
                </a>
              </RouterLink>
              <a
                @click="deleteAlert(user.id)"
                class="my-tooltip"
                style="cursor: pointer"
              >
                <i class="far fa-trash-alt text-danger me-1 ms-1"></i>
                <span class="my-tooltiptext">Delete</span>
              </a>
            </td>
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

export default {
  name: "EmployeeList",
  data() {
    return {
      itemPerPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.itemPerPage;
      const endIndex = startIndex + this.itemPerPage;
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

    getUserAvatar(user) {
      return user.avatar
        ? `http://localhost:8000/storage/avatars/${user.avatar}`
        : "http://localhost:8000/storage/avatars/default.png";
    },
  },
};
</script>

<style scoped>
.my-table-block-head {
  background-color: #cdd6eb;
}

.my-table-head th,
.my-table-body td {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
}

tr {
  border-bottom: 1px solid lightgray;
}

.my-circle-button {
  background-color: #3f51b5;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
}
</style>
