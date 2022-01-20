<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
  .card {
    border: white 1px solid;
    border-radius: 10px;
    box-shadow: 2px 4px 10px 2px rgba(216, 216, 216, 0.582);
    padding: 15px 20px;
    transition: 0.5s ease-out;    
  }

  .card:hover {
    box-shadow: 2px 4px 10px 2px rgba(89, 228, 89, 0.089);
    border: var(--primary-color) 1px solid;
    transform: scale(1.01)
  }
</style>