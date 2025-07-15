<template>
    <!-- Instructor Profiles Section -->
    <section id="instructors" class="bg-base-100 py-16 sm:py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-16 text-center sm:mb-20 lg:mb-24">
                <div class="mb-6">
                    <span class="badge badge-primary badge-soft rounded-full">Expert Instructors</span>
                </div>
                <h2 class="text-base-content mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                    Meet Our World-Class
                    <span class="relative z-1 text-primary">
                        Instructors
                    </span>
                </h2>
                <p class="text-base-content/80 mx-auto max-w-3xl text-xl">
                    Learn from industry experts who have years of experience in top tech companies and are passionate
                    about sharing their knowledge with the next generation of developers.
                </p>
            </div>

            <!-- Instructor Grid -->
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                <!-- Instructor Cards -->
                <div v-for="instructor in instructors" :key="instructor.id"
                    class="card group hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300 ease-out">
                    <div class="card-body text-center p-8">

                        <div class="avatar mx-auto mb-6">
                            <div
                                class="w-24 h-24 rounded-full ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                                <img :src="instructor.avatar" :alt="instructor.name"
                                    class="rounded-full object-cover" />
                            </div>
                        </div>
                        <h3 class="text-base-content text-xl font-bold mb-2">{{ instructor.name }}</h3>
                        <p class="text-base-content/60 text-sm mb-4">{{ instructor.experience }}</p>
                        <p class="text-primary font-medium mb-2">{{ instructor.title }}</p>
                        <p class="text-base-content/70 mb-4">{{ instructor.bio }}</p>

                        <div class="flex items-center justify-center gap-4">
                            <a v-for="social in instructor.socials" :key="social.platform" :href="social.url"
                                class="link text-base-content/60 hover:text-primary"
                                :aria-label="`${instructor.name} ${social.platform}`">
                                <span :class="social.icon + ' size-5'"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="mt-16 text-center">
                <h3 class="text-base-content mb-4 text-2xl font-bold">Ready to Learn from the Best?</h3>
                <p class="text-base-content/70 mb-8 text-lg">
                    Join thousands of students who are already learning from our world-class instructors
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="#" class="btn btn-primary btn-lg">
                        <span class="icon-[tabler--users] size-5"></span>
                        Meet Our Team
                    </a>
                    <a href="#" class="btn btn-secondary btn-lg">
                        <span class="icon-[tabler--school] size-5"></span>
                        Browse Courses
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const instructors = ref([
    {
        id: 1,
        name: 'Sarah Johnson',
        title: 'Senior Frontend Developer',
        bio: 'Former Google engineer with 8+ years experience in React and Vue.js.',
        experience: 'Ex - Google, Meta',
        rating: '4.9',
        avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png',
        socials: [
            { platform: 'GitHub', url: '#', icon: 'icon-[tabler--brand-github]' },
            { platform: 'LinkedIn', url: '#', icon: 'icon-[tabler--brand-linkedin]' },
            { platform: 'Twitter', url: '#', icon: 'icon-[tabler--brand-x]' }
        ]
    },
    {
        id: 2,
        name: 'Michael Chen',
        title: 'Full Stack Architect',
        bio: 'Ex-Microsoft engineer specializing in Node.js and cloud technologies.',
        experience: 'Ex - Microsoft, Amazon',
        rating: '4.8',
        avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png',
        socials: [
            { platform: 'GitHub', url: '#', icon: 'icon-[tabler--brand-github]' },
            { platform: 'LinkedIn', url: '#', icon: 'icon-[tabler--brand-linkedin]' },
            { platform: 'Twitter', url: '#', icon: 'icon-[tabler--brand-x]' }
        ]
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        title: 'UX/UI Design Lead',
        bio: 'Design systems expert with experience at Apple and Airbnb.',
        experience: 'Ex - Netflix, Spotify',
        rating: '4.9',
        avatar: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png',
        socials: [
            { platform: 'GitHub', url: '#', icon: 'icon-[tabler--brand-github]' },
            { platform: 'LinkedIn', url: '#', icon: 'icon-[tabler--brand-linkedin]' },
            { platform: 'Dribbble', url: '#', icon: 'icon-[tabler--brand-dribbble]' }
        ]
    }
])
</script>
