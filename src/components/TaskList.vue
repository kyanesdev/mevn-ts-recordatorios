<template>
  <h1>Tasklist</h1>
</template>

<script lang="ts">
import { getTask } from "@/api/TaskApi";
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
      const res = await getTask();
      this.tasks = res.data;
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {
    this.loadTask();
  },
});
</script>
