<template>
    <div class="profile-tag">
        <span class="profile-tag-icon">{{ icon }}&ensp;</span> 
        <span class="profile-tag-text">{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    icon: string,
    text: string,
}>()
</script>