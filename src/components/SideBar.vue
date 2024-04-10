<template>
  <div class="my-comp">
    <!-- Brand Logo -->
    <MenuItem
      v-for="item in menuItems"
      :key="item.label"
      :label="item.label"
      :imgSrc="item.imgSrc"
    />

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
  </div>
</template>

<script>
import MenuItem from "./menu/MenuItem.vue";
import homeImg from "../../public/gecko.webp";
import userImg from "../../public/gecko.webp";
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
          imgSrc: userImg,
        },
      ];
    });

    return {
      menuItems,
    };
  },
};
</script>

<style>
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
