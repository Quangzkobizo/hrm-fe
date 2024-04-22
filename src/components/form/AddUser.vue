<template>
  <div class="ms-5">
    <h3>New employee</h3>
    <h6>Just create these infomation, you can add more later</h6>
    <br />
    <form @submit.prevent="submitForm">
      <label>Name</label>
      <input v-model="name" type="text" />
      <br />
      <label>Email</label>
      <input v-model="email" type="email" />
      <br />

      <label>Password</label>
      <input v-model="password" type="password" />
      <br />

      <button type="submit" class="rounded-2">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "../../api";
export default {
  name: "AddUser",
  data() {
    return {
      name: "newEmployee",
      email: "new@gmail.com",
      password: "123456",
    };
  },
  setup() {},
  methods: {
    async submitForm() {
      axios
        .post("register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((Response) => {
          console.log(Response);
          this.$router.push("/users");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
label {
  width: 100px;
}

input {
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
