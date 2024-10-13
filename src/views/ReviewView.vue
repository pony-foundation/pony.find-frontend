<script setup lang="ts">
import MainNavigationBar from '@/components/MainNavigationBar.vue';
import ProfilePictureReview from '@/components/ProfilePictureReview.vue';

</script>

<template>
      <div>
        <main>
          <ProfilePictureReview src="https://derpicdn.net/img/2024/10/13/3462871/large.png" name="ВЛАД КОТ"/>
        </main>
        <MainNavigationBar :selected="0"/>
    </div>
</template>
