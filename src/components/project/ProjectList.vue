<template>
  <h2 class="ms-1 mb-4">All project</h2>
  <div class="row">
    <div
      class="col-lg-3 col-md-4 col-sm-1"
      v-for="project in Projects"
      :key="project.id"
    >
      <ProjectCard :project="project"> Hehe </ProjectCard>
    </div>
  </div>
</template>

<script>
import axios from "../../api";
import ProjectCard from "../project/ProjectCard";
export default {
  components: { ProjectCard },
  async setup() {
    const response = await axios.get("projects");
    const Projects = response.data;
    return { Projects };
  },
};
</script>

<style scoped></style>
