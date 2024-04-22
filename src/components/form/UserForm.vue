<template>
  <div class="my-comp w-50 m-auto">
    <div class="my-header">
      <h3 class="text-white ms-3 pt-2 pb-2">Update user info</h3>
    </div>

    <div class="my-form ps-3 pe-3 pb-5">
      <form @submit.prevent="submitForm">
        <div class="my-input-group mt-3">
          <label class="fw-bold">Name</label>
          <input
            v-model="myFormData.name"
            type="text"
            class="form-control"
            placeholder="Mr Brown"
          />
        </div>

        <div class="my-input-group mt-3">
          <label class="fw-bold">Phone</label>
          <input
            v-model="myFormData.phone"
            type="text"
            class="form-control"
            placeholder="0123456789"
          />
        </div>

        <div class="my-input-group mt-3">
          <label class="fw-bold">Address</label>
          <input
            v-model="myFormData.address"
            type="text"
            class="form-control"
            placeholder="Somewhere on the earth"
          />
        </div>

        <div class="my-input-group mt-3">
          <label class="fw-bold">Birth Date</label>
          <input
            v-model="myFormData.birthDate"
            type="date"
            class="form-control"
            placeholder="3/2/2003"
          />
        </div>

        <div class="my-input-group mt-3">
          <label class="fw-bold">Gender</label>
          <select v-model="myFormData.gender" class="form-control">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="my-input-group mt-3">
          <label class="fw-bold">Avatar</label>
          <input
            @change="handleAvatarChange"
            type="file"
            class="form-control"
            placeholder="Your name"
          />
        </div>

        <div class="d-flex justify-content-center mt-4">
          <button type="submit" class="rounded-3">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../../api.js";
import axiosOrigin from "axios";
// import { $route } from "vue-router";
import { useRoute } from "vue-router";
import { onMounted, reactive, ref, toRefs } from "vue";

// import axios from "axios";

export default {
  name: "InfoForm",

  setup() {
    //get Route param
    const route = useRoute();
    const UserId = route.params.id;
    const myFormData = reactive({
      name: "",
      phone: "",
      address: "",
      birthDate: "",
      gender: "",
      avatar: null,
    });
    const userToEdit = ref({});

    const get = async () => {
      try {
        // const response = await sendMeRequest();
        const response = await axios.get("/users/" + UserId);

        if (response && response.data.user) {
          userToEdit.value = response.data.user;
          myFormData.name = userToEdit.value.name;
          myFormData.phone = userToEdit.value.phone;
          myFormData.address = userToEdit.value.address;
          myFormData.birthDate = userToEdit.value.birthDate;
          myFormData.gender = userToEdit.value.gender;
        }
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    onMounted(() => {
      get();
    });

    return { userToEdit, myFormData };
  },

  methods: {
    async submitForm() {
      console.log("Let SUBMIT");

      // Tạo một mảng chứa các promise từ các phương thức không đồng bộ
      const asyncTasks = [];
      asyncTasks.push(this.handleTextInfo());

      if (this.myFormData.avatar) {
        console.log("let upload image");
        asyncTasks.push(this.handleFileUpload());
      }

      // Đợi cho tất cả các promise hoàn thành
      await Promise.all(asyncTasks);

      await this.$router.push("/dashboard");
      window.location.reload();
    },
    async handleFileUpload() {
      // Get the selected file
      const file = this.myFormData.avatar;
      // Create FormData object to hold the file
      const formData = new FormData();
      formData.append("avatar", file);

      // Get JWT token from local storage
      const token = localStorage.getItem("jwt-token");

      // Create headers containing JWT token
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };

      // Send upload request to the server with JWT token in header
      // I use Origin axios because I need diffirent Content-Type in headers
      axiosOrigin
        .post(
          "http://localhost:8000/api/users-avatar/" + this.userToEdit.id,
          formData,
          {
            headers,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async handleTextInfo() {
      const formData = new FormData();

      formData.append("name", this.myFormData.name);
      formData.append("phone", this.myFormData.phone);
      formData.append("address", this.myFormData.address);
      formData.append("birthDate", this.myFormData.birthDate);
      formData.append("gender", this.myFormData.gender);

      console.log("let's go AXIOS");

      axios
        .put("/users/" + this.userToEdit.id, this.myFormData)
        .then((response) => {
          console.log(response.data);
          // Handle response here
        })
        .catch((error) => {
          console.error(error);
          // Handle error here
        });
    },
    handleAvatarChange(event) {
      this.myFormData.avatar = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.my-comp {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
}

.my-header {
  background-color: dodgerblue;
}
</style>
