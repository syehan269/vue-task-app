<template>
  <button :type="type">
    {{ caption }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    caption: String
  }
}
</script>

<style scoped>
  button {
    padding: 10px 10px;
    border: 0;
    border-radius: 10px;
    background: var(--primary-color);
    color: white;
    cursor: pointer;
  }
</style>
