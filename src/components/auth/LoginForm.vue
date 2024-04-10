<template>
  <div class="login-box div-1st my-component m-auto text-center">
    <div class="login-logo mt-5 mb-3">
      <a href="../../index2.html" class="text-black fs-1" id="login-title">
        <b>Quangz</b>HRM
      </a>
    </div>
    <!-- /.login-logo -->
    <div class="card shadow">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form @submit.prevent="login">
          <InputTag placeholder="Email" type="email" v-model="email"></InputTag>
          <InputTag
            placeholder="Password"
            type="password"
            v-model="password"
          ></InputTag>
          <span class="mb-1 text-danger">{{ errorMessage }}</span>
          <div class="d-flex justify-content-between">
            <div class="">
              <div class="icheck-primary">
                <input type="checkbox" id="remember" />
                <label for="remember"> Remember Me </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="">
              <button type="submit" class="btn btn-primary btn-block">
                Sign In
              </button>
            </div>
            <!-- /.col -->
          </div>
        </form>

        <div class="social-auth-links text-center mb-3">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-primary mb-2">
            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
          </a>
          <a href="#" class="btn btn-block btn-danger">
            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
          </a>
        </div>
        <!-- /.social-auth-links -->

        <div class="">
          <p class="mb-1">
            <a class="text-decoration-none" href="forgot-password.html"
              >I forgot my password</a
            >
          </p>
          <p class="mb-0">
            <a class="text-decoration-none" href="register.html"
              >Register a new membership</a
            >
          </p>
        </div>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
  <!-- /.login-box -->
</template>

<script>
import InputTag from "./Input.vue";
import axios from "../../api.js";
import { sendLoginRequest } from "../../apicall";

export default {
  name: "LoginForm",
  components: { InputTag },
  data() {
    return {
      email: "quang@gmail.com",
      password: "123456",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        // Nếu có jwt_token, kiểm tra xem người dùng đã xác thực chưa bằng cách gọi API
        const response = await sendLoginRequest(this.email, this.password);

        if (response) {
          this.errorMessage = "";
          localStorage.setItem("jwt-token", response.data.authorisation.token);
          this.$router.push("/dashboard");
        } else {
          throw new Error("Aiza, khong on roi");
        }
      } catch (error) {
        console.log(error);
        this.errorMessage = "Wrong email or password";
      }
    },
    async sendLoginRequest1111() {
      await axios
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.errorMessage = "";
          localStorage.setItem("jwt-token", response.data.authorisation.token);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = "Wrong email or password";
        });
    },
  },
};
</script>

<style>
.div-1st {
  width: 360px;
}

#login-title {
  text-decoration: none;
}
</style>
