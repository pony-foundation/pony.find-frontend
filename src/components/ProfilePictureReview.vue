<script setup lang="tsx">
import { defineProps } from 'vue';

const vars = defineProps({
    src: String,
    name: String
})
</script>
<template>
    <div class="review-image">
        <h1>{{ name??"MISSINGNO" }}</h1>
        <img :src="src" class=""/>
        <div class="review-image-blur"></div>
    </div>
</template>