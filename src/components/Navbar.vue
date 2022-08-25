<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav>
        <ul>
            <li>
                <router-link to="/tasks">tasks</router-link>
            </li>
            <li>
                <router-link to="/task/new">create task</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar"
});

</script>