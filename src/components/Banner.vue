<script setup lang="tsx">
import { defineProps } from 'vue';

const vars = defineProps({
    src: String,
    name: String
})
</script>

<template>
    <div class="banner">
        <h1 class="banner-text"><span><slot>MISSINGNO</slot></span></h1>
        <img :src="src" class="banner-image banner-image-blur"/>
        <img :src="src" class="banner-image"/>
    </div>
</template>