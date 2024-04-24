<template>
  <div class="ms-3 me-3">
    <div class="my-header d-flex">
      <h2 class="ms-1 mb-4 d-inline me-3">All projects</h2>
      <CircleButton
        to="{}"
        tooltip="Add project"
        iconClass="fa fa-plus text-white"
      ></CircleButton>
    </div>

    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-1"
        v-for="project in Projects"
        :key="project.id"
      >
        <ProjectCard :project="project"> </ProjectCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../api";
import ProjectCard from "../project/ProjectCard";
import CircleButton from "../employees/CircleButton.vue";

export default {
  components: { ProjectCard, CircleButton },
  async setup() {
    const response = await axios.get("projects");
    const Projects = response.data;
    return { Projects };
  },
};
</script>

<style scoped></style>
