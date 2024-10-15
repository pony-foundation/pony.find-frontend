<script setup lang="ts">
import ListElement from './ListElement.vue';
const props = defineProps<{
    image?: string,
    name: string,
    status?: string
}>()
</script>

<template>
    <ListElement :class="status?'like':'dislike'" :image="image" :subheader="status?'Лайк':'Дизлайк'"  :header="name"/>
</template>

<style scoped lang="scss">
.dislike {
background-color: rgba(255, 0, 0, 0.1);
}

.like {
    background-color: rgba(#008CFF, 0.1);
}
</style>