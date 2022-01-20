<template>
  <div class="container">
    <form @submit.prevent="addTask">
      <div class="create-form">
        <Input
          class="input-form"
          caption="Title"
          :value="title"
          @update:value="title = $event"
        />
        <TextArea
          class="input-form"
          caption="Detail"
          :value="body"
          @get-value="body = $event"
        />
        <Button
          type="submit"
          class="button-form"
          :caption="!status ? 'Add New' : 'loading...'"
        />
      </div>
    </form>
    <Separator />
    <div v-show="isLoaded">
      <div v-if="taskList.length > 0" class="task-list">
        <TaskItem v-for="task in taskList" :key="task.id" :task="task" />
      </div>
      <div v-else>
        <p>No Data is Present</p>
      </div>
    </div>
    <p v-show="!isLoaded">{{ message }}</p>
  </div>
</template>

<script>
import Button from "../components/widgets/Button.vue";
import Input from "../components/widgets/forms/Input.vue";
import TextArea from "../components/widgets/forms/TextArea";
import Separator from "../components/widgets/Separator.vue";
import TaskItem from "../components/widgets/items/Task.vue";
import axios from "axios";

export default {
  name: "Task",
  data() {
    return {
      taskList: [],
      message: "Loading items...",
      isLoaded: false,
      status: false,
      title: "",
      body: "",
    };
  },
  components: {
    Button,
    Input,
    TextArea,
    Separator,
    TaskItem,
  },
  methods: {
    async getTask() {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.taskList = response.data;
          this.isLoaded = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async addTask() {
      if (!this.title) {
        alert("Title is empty!");
        return;
      }

      if (!this.body) {
        alert("Detail is empty");
        return;
      }

      let newTask = {
        id: Math.floor(Math.random() * 1000),
        userId: Math.floor(Math.random() * 1000),
        title: this.title,
        body: this.body,
      };

      this.status = !this.status;

      await axios
        .post("https://jsonplaceholder.typicode.com/posts", newTask)
        .then(() => {
          this.taskList = [newTask, ...this.taskList];
        })
        .catch((error) => {
          console.error(error);
          this;
        });

      this.status = !this.status;
    },
  },
  async created() {
    this.getTask();
  },
};
</script>

<style scoped>
.create-form {
  display: flex;
  flex-direction: column;
}

.input-form {
  margin: 5px 0;
}

.button-form {
  margin: 5px 0;
  flex-grow: 1;
}
</style>
