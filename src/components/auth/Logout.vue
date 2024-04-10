<template>
  <div>This is logout page</div>
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
