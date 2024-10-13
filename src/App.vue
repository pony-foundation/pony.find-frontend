<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router';

const router = useRouter();

const value = ref<Number>(0);

function TryGoTo(idx: Number) {
    if (idx == value.value) return;
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
  <v-app>
    <v-main scrollable>
      <RouterView></RouterView>
    </v-main>

    <v-bottom-navigation grow v-model="value">
      <v-btn @click="router.push('/')" value="review">
          <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn @click="router.push('/history/1337')" value="history">
          <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn @click="router.push('/profile')" value="profile">
          <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    </v-app>
</template>