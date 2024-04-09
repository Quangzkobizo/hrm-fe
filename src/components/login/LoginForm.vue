<template>
  <div class="login-box div-1st my-component m-auto text-center">
    <div class="login-logo mt-5 mb-3">
      <a href="../../index2.html" class="text-black fs-1" id="login-title">
        <b>Quangz</b>HRM
      </a>
    </div>
    <!-- /.login-logo -->
    <div class="card shadow">
      <div class="card-body login-card-body ">
        <p class="login-box-msg">Sign in to start your session</p>
        <form @submit.prevent="sendLoginRequest">
          <InputTag placeholder="Email" type="email" v-model="email"></InputTag>
          <InputTag placeholder="Password" type="password" v-model="password"></InputTag>
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
import axios from "axios";

import InputTag from "./Input.vue";
export default {
  name: "LoginForm",
  components: { InputTag },
  data(){
    return {
      email: 'quang@gmail.com',
      password: '123456',
      errorMessage: '',
    }
  },
  methods: {
    hihimodel(){
      console.log(this.email);
      console.log(this.password);
    },
    sendLoginRequest(){
      axios
        .post('http://localhost:8000/api/login',{
          email: this.email,
          password: this.password,
        })
        .then((response)=>{
          console.log(response);
          this.errorMessage = "";
          localStorage.setItem('jwt-token', response.data.authorisation.token);
          this.$router.push('/dashboard');
        })
        .catch((error)=>{
          console.log("error => "+ error);
          this.errorMessage = "Wrong email or password"
        })
    }
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
