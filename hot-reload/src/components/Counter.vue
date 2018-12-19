<template>
    <div class="">
        <h2>The Count is: {{ count }}</h2>

        <button type="button" @click="count += 10">Increment</button>
    </div>
</template>

<script>
    export default {
        data() {
            return { count: 0 }
        }
    }
</script>
