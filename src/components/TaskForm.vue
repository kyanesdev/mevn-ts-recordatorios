<template>
  <div class="col-md-4 offset-md-4">

    <h2 class="text-center">Create Task</h2>

    <form @submit.prevent="saveTask()" class="card card-body">
      <input type="text" placeholder="Write a title" v-model="task.title" class="form-control mb-3" />

      <textarea
        rows="3"
        placeholder="Write a description"
        v-model="task.description"
        class="form-control mb-3"
        autofocus="true"
      ></textarea>

      <button class="btn btn-primary"
      :disabled="!task.title || !task.description"
      >Save</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/api/TaskApi";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },

  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      console.log(res);
      this.$router.push({ name: "tasks" });
    },
  },
});
</script>
