<template>
  <div class="row">
    <div class="col-lg-2 col-md-3 my-sidebar">
      <div class="mt-3 ms-3 mb-3">
        <SideBar :user="user"></SideBar>
      </div>
    </div>

    <div class="col-lg-10 col-md-9">
      <NavBar></NavBar>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";

import axios from "../api";
import { sendMeRequest } from "@/apicall";

export default {
  name: "DashboardComponent",
  components: {
    SideBar,
    NavBar,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    console.log(localStorage.getItem("jwt-token"));
    this.getUser();
  },
  methods: {
    async getUser() {
      console.log("before send ME : ", localStorage.getItem("jwt-token"));
      let response = await sendMeRequest();
      if (response) {
        this.user = response.data.user;
      }
    },
  },
};
</script>

<style>
.my-sidebar {
  background-color: #343a40;
  color: rgba(255, 255, 255, 0.8);
}
</style>
