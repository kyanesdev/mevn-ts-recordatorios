<template>
    <div class="col-md-4 offset-md-4">
        <h2 class="text-center">Task Detail</h2>

    <form @submit.prevent="handledUpdate()" class="card card-body">
        <input type="text" v-model="currentTask.title" class="form-control mb-3">
        <textarea rows="3" v-model="currentTask.description" class="form-control mb-3"></textarea>
        <button class="btn btn-primary" :disabled="!currentTask.title || !currentTask.description">Update</button>
    </form>

    <div class="text-center">
        <button @click="handleDelete()" class="btn btn-danger">Delete</button>
    </div>
    
    </div>
</template>

<script lang="ts">
import { deleteTask, getTask, updateTask } from '@/api/TaskApi'
import { Task } from '@/interfaces/Task';
import {defineComponent} from '@vue/runtime-core'


export default defineComponent({
    data(){
        return {

            currentTask: {} as Task

        }
    },
    methods: {
        async loadTask(id: string){
           const res = await getTask(id);
           this.currentTask = res.data;
        },

        async handledUpdate(){
            if(typeof this.$route.params.id === "string"){
                await updateTask(this.$route.params.id, this.currentTask);
                this.$router.push("/");
            }

        },
        async handleDelete(){

            if(typeof this.$route.params.id === "string"){
                await deleteTask(this.$route.params.id)
                this.$router.push("/");
            }
            
        }
    },
    mounted(){
    if(typeof this.$route.params.id === "string"){
        this.loadTask(this.$route.params.id);
    }
    },
});
</script>