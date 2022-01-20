<template>
  <textarea
    :placeholder="caption"
    :value="value"
    @input="$emit('get-value', $event.target.value)"
    type="text"
    class="input"
  />
</template>

<script>
export default {
  name: "TextArea",
  props: {
    caption: String,
    value: String,
  },
  emits: ["get-value"],
};
</script>

<style scoped>
textarea {
  padding: 10px;
  border: 2px rgb(214, 214, 214) solid;
  border-radius: 10px;
  /* width: 250px; */
}
</style>
