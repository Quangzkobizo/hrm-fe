<template>
  <div class="border border-secondary rounded-2 p-3 mb-4 text-secondary shadow">
    <div class="d-flex">
      <i class="fas fa-pager fs-3 me-3 text-primary"></i>
      <h4 class="text-dark d-inline">{{ projectRef.title }}</h4>
      <CircleButton
        class="ms-auto"
        :to="{ name: 'projects.update', params: { id: projectRef.id } }"
        iconClass="fas fa-edit text-white"
        tooltip="Edit Project"
      >
      </CircleButton>
    </div>

    <p>{{ projectRef.description }}</p>
    <div>
      <div class="row">
        <div class="col-lg-4">Created</div>
        <span class="col-lg-8">
          <i class="far fa-calendar-alt me-1"></i>
          {{ projectRef.start_date }}
        </span>
      </div>
      <div class="row">
        <div class="col-lg-4">Deadline</div>
        <span class="col-lg-8">
          <i class="far fa-calendar-alt me-1"></i>
          {{ projectRef.end_date }}
        </span>
      </div>
      <div class="row">
        <div class="col-lg-4">Priority</div>
        <div class="col-lg-8">
          <span class="me-2">
            <i
              v-if="projectRef.priority === 'High'"
              class="fas fa-angle-double-up"
              style="color: #f91010"
            ></i>
            <i
              v-if="projectRef.priority === 'Medium'"
              class="fas fa-equals"
              style="color: #fccb1d"
            ></i>
            <i
              v-if="projectRef.priority === 'Low'"
              class="fas fa-angle-double-down"
              style="color: #208cdf"
            ></i>
          </span>
          <span>{{
            projectRef.priority.charAt(0).toUpperCase() +
            projectRef.priority.slice(1)
          }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">Client</div>
        <div class="col-lg-8">{{ projectRef.client }}</div>
      </div>
      <div class="row">
        <div class="col-lg-4">Price</div>
        <div class="col-lg-8">${{ projectRef.price }}</div>
      </div>

      <hr />
      <div class="d-flex justify-content-between">
        <span>Progress</span>
        <span class="">{{ projectRef.progress }}%</span>
      </div>
      <div class="progress" style="height: 8px">
        <div
          class="progress-bar my-bg-purple"
          role="progressbar"
          :style="{ width: projectRef.progress + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { toRefs } from "vue";
import CircleButton from "../employees/CircleButton.vue";

export default {
  components: {
    CircleButton,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { project: projectRef } = toRefs(props);

    // Sử dụng Moment.js để định dạng lại ngày
    let formattedStartDate = moment(projectRef.value.start_date).format(
      "MMM DD, YYYY"
    );
    let formattedEndDate = moment(projectRef.value.end_date).format(
      "MMM DD, YYYY"
    );

    const priorityString = projectRef.value.priority;
    const formatPriority =
      priorityString.charAt(0).toUpperCase() + priorityString.slice(1);

    return {
      projectRef: {
        ...projectRef.value,
        start_date: formattedStartDate,
        end_date: formattedEndDate,
        priority: formatPriority,
      },
    };
  },
};
</script>

<style scoped></style>
