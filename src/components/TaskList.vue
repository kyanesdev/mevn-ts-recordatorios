<template>

<h2 class="text-center">Task List</h2>
  <ul class="list-group">
      <li
        class="list-group-item list-group-item-action"
        style="cursor:pointer"
        v-for="(task, index) in tasks"
        v-bind:key="index"
        @click="this.$router.push(`/tasks/${task._id}`)"
        
      >
        {{index + 1 + ")"}}
        {{ task.title }}
      </li>
    </ul>
</template>

<script lang="ts">
import { getTasks } from "@/api/TaskApi";
import { Task } from "@/interfaces/Task";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[],
    };
  },

  methods: {
    async loadTask() {
      const res = await getTasks();
      this.tasks = res.data;
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {
    this.loadTask();
  },
});
</script>
