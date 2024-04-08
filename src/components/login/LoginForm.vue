<template>
  <div class="login-box div-1st my-component m-auto">
    <div class="login-logo mt-5 mb-3">
      <a href="../../index2.html" class="text-black fs-1" id="login-title">
        <b>Admin</b>LTE
      </a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form method="post" @submit="hihimodel()">
          <InputTag placeholder="Email" type="email" v-model="email"></InputTag>
          <InputTag placeholder="Password" type="password" v-model="password"></InputTag>
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
export default {
  name: "LoginForm",
  components: { InputTag },
  data(){
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    hihimodel(){
      console.log(this.email);
      console.log(this.password);
    },
    sendLoginRequest(){
      
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
