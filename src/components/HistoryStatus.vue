<script setup lang="ts">
import ListElement from './ListElement.vue';
const props = defineProps<{
    image?: string,
    header: string,
    subheader?: string
}>()
</script>

<template>
    <div>
        <ListElement header="lol"/>
    </div>
</template>