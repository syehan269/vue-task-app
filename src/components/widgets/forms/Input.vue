<template>
  <input :placeholder="caption" :value="value" @input="$emit('update:value', $event.target.value)" type="text" class="input">
</template>

<script>
export default {
  name: 'Input',
  props: {
    caption: String,
    value: String
  },
  emits: [
    'update:value'
  ]
}
</script>

<style scoped>
  input {
    padding: 10px;
    border: 2px rgb(214, 214, 214) solid;
    border-radius: 10px;
    /* width: 250px; */
  }
</style>