<template>
  <Card class="task-container">
    <div class="task-header">
      <h3 class="task-title">{{ task.title }}</h3>
      <p class="task-date">{{ task.date }}</p>
    </div>
    <p class="task-detail">{{ task.body }}</p>
  </Card>  
</template>

<script>
import Card from '../Card.vue'

export default {
  name: 'TaskItem',
  props: {
    task: Object
  },
  components: {
    Card
  }
}
</script>

<style scoped>
  p {
    font-weight: 500;
  }

  .task-container {
    margin: 20px 0;
  }

  .task-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .task-date {
    font-size: 0.8rem;
    font-weight: 400;
  }

  .task-detail {
    text-align: start;
    font-weight: 400;
  }
</style>