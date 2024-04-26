<template>
  <div class="my-comp">
    <!-- Brand Logo -->
    <MenuItem
      v-for="item in menuItems"
      :key="item.label"
      :label="item.label"
      :imgSrc="item.imgSrc"
    />

    <div>
      <span class="fas fa-users"></span>
      <router-link :to="{ name: 'user.index' }">
        <span class="brand-text ms-3">Employees</span>
      </router-link>
      <hr />
    </div>

    <div>
      <i class="fas fa-pager"></i>
      <router-link :to="{ name: 'projects.index' }">
        <span class="brand-text ms-3">Projects</span>
      </router-link>
      <hr />
    </div>

    <div>
      <i class="fas fa-tasks"></i>
      <router-link :to="{ name: 'tasks.index' }">
        <span class="brand-text ms-3">Tasks</span>
      </router-link>
    </div>

    <hr />

    <!-- SidebarSearch Form -->
    <div class="input-group my-search">
      <input
        class="form-control form-control-sidebar"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <div class="input-group-append">
        <button class="btn btn-sidebar">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>

    <!-- DIV này chỉ để TEST -->
    <div>
      <hr />
      ROLE: {{ user.role }}
      <hr />

      ID: {{ user.id }}
      <hr />
      <a href="/#/user/update"></a>
    </div>

    <!-- THIS DIV IS FOR TEST ONLY -->
    <div class="will-delete">
      <a href="/#/logout">Logout</a>
      <br />
      <a href="/#/login">Login</a>
      <br />
      <a href="/#/dashboard">Dashboard</a>
      <br />
      <router-link :to="{ name: 'user.update', params: { id: user.id } }"
        >user/update
      </router-link>
    </div>
  </div>
</template>

<script>
import MenuItem from "../menu/MenuItem.vue";
import homeImg from "../../../public/gecko.webp";
// import userImg from "../../../public/gecko.webp";
import { computed, toRefs } from "vue";

export default {
  name: "SideBar",
  components: { MenuItem },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { user: userData } = toRefs(props);

    const menuItems = computed(() => {
      return [
        {
          label: "App name",
          imgSrc: homeImg,
        },
        {
          label: userData == null ? "no_info" : userData.value.name,
          imgSrc:
            "http://localhost:8000/storage/avatars/" + userData.value.avatar,
        },
      ];
    });

    return {
      menuItems,
    };
  },
};
</script>

<style scoped>
.my-comp {
  height: 100vh;
}

.my-search {
  background-color: #3f474e;
  border: 1px solid #56606a;
  border-radius: 10px;
}

.my-search input {
  background-color: transparent;
  border: none;
}

.my-search input::placeholder {
  color: #56606a !important;
  opacity: 1; /* Firefox */
}

.form-control:focus {
  background-color: #3f474e;
  color: white;
}
.my-search i {
  color: white;
}
</style>
