<template>
    <!-- Stats Section -->
    <div
        class="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-2400 grid grid-cols-2 gap-6 md:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-primary text-3xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-base-content/60 text-sm">{{ stat.label }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const stats = ref([
    {
        value: '2,500+',
        label: 'Students Enrolled'
    },
    {
        value: '95%',
        label: 'Job Placement Rate'
    },
    {
        value: '50+',
        label: 'Expert Instructors'
    },
    {
        value: '24/7',
        label: 'Support Available'
    }
])
</script>
