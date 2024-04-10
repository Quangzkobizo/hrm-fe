<template>
  <div>
    <a>
      <img
        height="30px"
        width="30px"
        :src="imgSrc"
        alt="Logo"
        class="me-1 rounded-circle opacity-75"
      />
      <span class="brand-text font-weight-light ms-2">{{ label }}</span>
    </a>
    <hr />
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        imgSrc: {
            type: String,
            default: '',
        }
    }
};
</script>

<style lang="scss" scoped>

</style>

