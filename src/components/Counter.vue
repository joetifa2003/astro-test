<template>
    <div class="container">
        <h1>Vue counter</h1>
        <div class="counter">
            <button @click="subtract()">-</button>
            <pre>{{ count }}</pre>
            <button @click="add()">+</button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const count = ref(0);
        const add = () => (count.value = count.value + 1);
        const subtract = () => (count.value = count.value - 1);

        return {
            count,
            add,
            subtract,
        };
    },
};
</script>
