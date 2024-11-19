<script setup>
import AbTestingIcon from "vue-material-design-icons/AbTesting.vue"

const props = defineProps({
  selected: Boolean
})
</script>

<template>
  <div class="navbar-container">
    <button @click="$emit('click')" :class="['navbar-button',selected?'navbar-button-selected':'']">
        <slot class="navbar-button-icon" name="icon"><AbTestingIcon/></slot>
        <div><slot class="navbar-button-text"></slot></div>
    </button>
  </div>
</template>