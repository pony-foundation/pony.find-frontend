<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
const props = defineProps<{
    date: Date
}>()

dayjs.extend(relativeTime)

const rtf1 = new Intl.RelativeTimeFormat();
</script>

<template>
    <h2 class="history-date">
        {{ dayjs(date).fromNow() }}
    </h2>
</template>

<style>
.history-date {
    font-weight: 600;
    font-size: 24px;
    padding: 1rem;
}
</style>