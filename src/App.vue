<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

const route = useRoute()
const isAcademyPage = computed(() => route.name === 'academy')
</script>

<template>
  <Navbar v-if="!isAcademyPage" />

  <div v-if="!isAcademyPage" class="p-6">
    <RouterView />
  </div>

  <div v-else>
    <RouterView />
  </div>
</template>
