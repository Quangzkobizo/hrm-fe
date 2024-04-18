<template>
  <div v-if="!isShowNav">
    <router-view></router-view>
  </div>
  <div v-else>
    <div class="row">
      <div class="col-lg-2 col-md-3 my-sidebar">
        <div class="mt-3 ms-3 mb-3">
          <SideBar :user="user"></SideBar>
        </div>
      </div>

      <div class="col-lg-10 col-md-9">
        <NavBar></NavBar>
        <div class="info-form w-50 m-auto mt-5">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { sendMeRequest } from "./apicall";

import SideBar from "./components/shared/SideBar";
import NavBar from "./components/shared/NavBar";

export default {
  name: "AppPage",
  components: {
    SideBar,
    NavBar,
  },
  setup() {
    const blackListRoute = ["login", "register", "logout"];
    const user = ref({});

    const route = useRoute();
    const isShowNav = computed(() => !blackListRoute.includes(route.name));

    const get = async () => {
      try {
        const response = await sendMeRequest();
        console.log("res: ", response);
        if (response && response.data.user) {
          user.value = response.data.user;
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    get();

    return { isShowNav, user };
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
@import url("https://cdn.jsdelivr.net/npm/icheck-bootstrap@3.0.1/icheck-bootstrap.min.css");

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; 
  color: #2c3e50;*/
}
</style>
