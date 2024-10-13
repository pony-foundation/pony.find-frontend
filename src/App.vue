<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component, route }" id="view">
    <!-- Use a custom transition or fallback to `fade` -->
    <transition :name="route.meta.transition as string || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>