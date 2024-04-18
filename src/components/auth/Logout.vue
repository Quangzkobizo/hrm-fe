<template>
  <div>This is logout page</div>
  <a href="login">Back to login page</a>
  <br />
  <a href="dashboard">To Dashboard</a>
</template>

<script>
import { sendLogoutRequest } from "/src/apicall.js";

export default {
  name: "LogoutComp",
  created() {
    sendLogoutRequest();
  },
};
</script>

<style lang="scss" scoped></style>
