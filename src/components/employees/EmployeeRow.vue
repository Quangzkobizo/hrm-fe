<template>
  <td class="ps-3 pe-3">
    <img
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
    <RouterLink :to="{ name: 'user.update', params: { id: user.id } }">
      <a class="my-tooltip" style="cursor: pointer">
        <i class="fas fa-edit text-primary me-1 ms-1"></i>
        <span class="my-tooltiptext">Edit</span>
      </a>
    </RouterLink>
    <a @click="deleteAlert(user.id)" class="my-tooltip" style="cursor: pointer">
      <i class="far fa-trash-alt text-danger me-1 ms-1"></i>
      <span class="my-tooltiptext">Delete</span>
    </a>
  </td>
</template>

<script>
import { toRefs } from "vue";
import axios from "../../api";

export default {
  props: {
    userProp: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { userProp: user } = toRefs(props);

    return {
      user,
    };
  },
  methods: {
    getUserAvatar(user) {
      return user.avatar
        ? `http://localhost:8000/storage/avatars/${user.avatar}`
        : "http://localhost:8000/storage/avatars/default.png";
    },
    async deleteAlert(id) {
      if (confirm("Are you sure?")) {
        const axiosRes = await axios.delete("users/" + id);
        console.log(axiosRes);
        window.location.reload();
      }
    },
  },
};
</script>

<style scoped>
td {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
}

img {
  height: 36px;
  width: 36px;
}
</style>
