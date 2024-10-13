<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';
import NavigationBarButton from './NavigationBarButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  selected: Number
})

function TryGoTo(idx: Number) {
    if (idx == props.selected) return;
    switch (idx) {
        case 0:
            router.push("/");
            break;
        case 1:
            router.push("/history/1337");
            break;
        case 2:
            router.push("/profile");
            break;
    }
}

</script>
<template>
    <NavigationBar class="navbar-main">
        <NavigationBarButton @click="TryGoTo(0)" :selected="props.selected==0">review</NavigationBarButton>
        <NavigationBarButton @click="TryGoTo(1)" :selected="props.selected==1">history</NavigationBarButton>
        <NavigationBarButton @click="TryGoTo(2)" :selected="props.selected==2">profile</NavigationBarButton>
    </NavigationBar>
</template>

<style>
.navbar-main {
    position: sticky;
}
</style>