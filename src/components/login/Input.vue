<template>
  <div class="mb-3 input-div">
    <input
      class="form-control w-75 d-inline-block border-0 bg-transparent"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
    <span
      :class="type === 'email' ? 'fas fa-envelope w-25' : 'fas fa-lock w-25'"
    ></span>
  </div>
</template>

<script>
export default {
  name: "InputTag",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(newValue) {
      this.$emit("update:modelValue", newValue);
    },
  },
};
</script>

<style>
.input-div {
  border: 1px solid gray;
  border-radius: 10px;
  color: gray;
}
</style>
