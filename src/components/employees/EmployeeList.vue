<template>
  <div class="my-comp ms-5 me-5">
    <div class="my-table-block-head">
      <div class="pt-3 pb-3 d-flex align-items-center">
        <h5 class="ms-3 me-3 mb-0">Employees</h5>
        <div id="my-employee-search" class="bg-white rounded-3 overflow-hidden">
          <label class="fas fa-search ms-2 me-2"></label>
          <input class="border-0" placeholder="Search" type="text" />
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
          <tr class="" v-for="user in userIndexResponse" :key="user.id">
            <td class="ps-3 pe-3">
              <img
                height="36px"
                width="36px"
                :src="
                  'http://localhost:8000/storage/avatars/' +
                  (user.avatar ? user.avatar : 'default.png')
                "
                alt="Logo"
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
              <a class="my-tooltip" style="cursor: pointer">
                <i class="fas fa-edit text-primary me-3"></i>
                <span class="my-tooltiptext">Edit</span>
              </a>
              <a class="my-tooltip" style="cursor: pointer">
                <i class="far fa-trash-alt text-danger"></i>
                <span class="my-tooltiptext">Delete</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "../../api.js";

export default {
  name: "EmployeeList",
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
</style>
