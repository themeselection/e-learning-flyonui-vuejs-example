<template>
    <!-- Success Stories Section -->
    <section class="bg-base-100 py-16 sm:py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid gap-16 lg:grid-cols-2">
                <!-- Left Section - Success Metrics -->
                <div class="space-y-10">
                    <div class="space-y-4">
                        <div class="mb-6">
                            <span class="badge badge-primary badge-soft rounded-full">Success Stories</span>
                        </div>
                        <h2 class="text-base-content text-3xl font-bold md:text-4xl lg:text-5xl">
                            Success that
                            <span class="relative z-1">
                                <span class="font-bold text-primary">Matters</span>
                                <span
                                    class="from-primary absolute start-0 bottom-1 -z-1 h-1 w-full bg-gradient-to-r to-transparent to-80%"
                                    aria-hidden="true"></span>
                            </span>
                        </h2>
                        <p class="text-base-content/80 text-lg">
                            At CodeCraft Academy, we measure success by the achievements of our students. Our journey
                            showcases the strength found in dedication, mentorship, and continuous learning. We've
                            helped thousands transform their careers and build compelling stories of progress in tech.
                        </p>
                    </div>
                    <!-- Success Metrics -->
                    <div v-for="metric in successMetrics" :key="metric.title" class="flex items-center gap-5">
                        <div class="avatar avatar-placeholder">
                            <div class="text-bg-soft-primary rounded-box w-12">
                                <span :class="metric.icon + ' size-7.5'"></span>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <p class="text-base-content text-xl font-medium">{{ metric.value }}</p>
                            <p class="text-base-content/80">{{ metric.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Right Section - Success Stories Image -->
                <div class="my-auto h-fit">
                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                        alt="Students celebrating success" class="w-full rounded-box shadow-lg" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const successMetrics = ref([
    {
        value: '25,000+',
        description: 'Students successfully graduated',
        icon: 'icon-[tabler--users]'
    },
    {
        value: '92%',
        description: 'Job placement rate within 6 months',
        icon: 'icon-[tabler--briefcase]'
    },
    {
        value: '150+',
        description: 'Partner companies for job placement',
        icon: 'icon-[tabler--trophy]'
    },
    {
        value: '4.9/5',
        description: 'Average student satisfaction rating',
        icon: 'icon-[tabler--star]'
    }
])
</script>
