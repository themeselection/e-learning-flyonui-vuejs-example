<template>
    <!-- Upcoming Events / Webinars Section -->
    <section id="events" class="bg-base-200 py-16 sm:py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mb-16 text-center sm:mb-20 lg:mb-24">
                <div class="mb-6">
                    <span class="badge badge-primary badge-soft rounded-full">Live Learning</span>
                </div>
                <h2 class="text-base-content mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                    Upcoming Events &amp;
                    <span class="relative z-1">
                        <span class="font-bold text-primary">Webinars</span>
                        <span
                            class="from-primary absolute start-0 bottom-1 -z-1 h-1 w-full bg-gradient-to-r to-transparent to-80%"
                            aria-hidden="true"></span>
                    </span>
                </h2>
                <p class="text-base-content/80 mx-auto max-w-3xl text-xl">
                    Join our live sessions to learn directly from industry experts, participate in Q&amp;As, and network
                    with fellow developers.
                </p>
            </div>

            <!-- Events Grid -->
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <!-- Event Cards -->
                <div v-for="event in events" :key="event.id"
                    class="card group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ease-out group-hover:-translate-y-2 waves waves-primary border border-base-content/10 hover:border-primary/20">
                    <div class="relative overflow-hidden rounded-t-box">
                        <img :src="event.image" :alt="event.title"
                            class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute top-4 left-4">
                            <span class="badge badge-primary badge-soft">{{ event.type }}</span>
                        </div>
                        <div class="absolute top-4 right-4">
                            <span :class="event.statusClass">{{ event.status }}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="flex items-start justify-between gap-4 mb-3">
                            <h3
                                class="card-title text-base-content group-hover:text-primary transition-colors duration-300">
                                {{ event.title }}
                            </h3>
                        </div>
                        <div class="flex items-center gap-4 mb-4 text-sm text-base-content/60">
                            <div class="flex items-center gap-1">
                                <span class="icon-[tabler--calendar] size-4"></span>
                                <span>{{ event.date }}</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="icon-[tabler--clock] size-4"></span>
                                <span>{{ event.time }}</span>
                            </div>
                        </div>
                        <p class="text-base-content/80 mb-4">
                            {{ event.description }}
                        </p>
                        <div class="flex items-center gap-2 mb-4">
                            <span v-for="badge in event.badges" :key="badge.text" :class="badge.class">{{ badge.text
                                }}</span>
                        </div>
                        <div class="card-actions justify-between items-center">
                            <div class="flex items-center gap-2">
                                <span class="text-2xl font-bold text-primary">{{ event.price }}</span>
                                <span v-if="event.originalPrice" class="text-sm text-base-content/60 line-through">{{
                                    event.originalPrice }}</span>
                            </div>
                            <button class="btn btn-primary">
                                {{ event.buttonText }}
                                <span class="icon-[tabler--arrow-right] size-4"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- View All Events CTA -->
            <div class="mt-16 text-center">
                <a href="#" class="btn btn-primary btn-lg btn-gradient">
                    View All Events
                    <span class="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                </a>
                <p class="text-base-content/60 mt-4">
                    Join our community of learners and stay updated with the latest events
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const events = ref([
    {
        id: 1,
        title: 'Advanced React Performance Optimization Workshop',
        description: 'Learn advanced techniques for optimizing React applications with Sarah Johnson. Live coding and Q&A session included.',
        date: 'July 15, 2025',
        time: '2:00 PM EST',
        type: 'Webinar',
        status: 'Live',
        statusClass: 'badge badge-error badge-soft',
        price: 'Free',
        originalPrice: null,
        buttonText: 'Register Now',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        badges: [
            { text: 'Advanced', class: 'badge badge-soft badge-warning badge-sm' },
            { text: 'React', class: 'badge badge-soft badge-info badge-sm' },
            { text: 'Performance', class: 'badge badge-soft badge-success badge-sm' }
        ]
    },
    {
        id: 2,
        title: 'System Design for Large Scale Applications',
        description: 'Join Marcus Chen for an intensive workshop on designing scalable systems. Includes hands-on exercises.',
        date: 'July 20, 2025',
        time: '10:00 AM EST',
        type: 'Workshop',
        status: 'Upcoming',
        statusClass: 'badge badge-warning badge-soft',
        price: '$49',
        originalPrice: '$99',
        buttonText: 'Save Spot',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        badges: [
            { text: 'Advanced', class: 'badge badge-soft badge-error badge-sm' },
            { text: 'Architecture', class: 'badge badge-soft badge-info badge-sm' },
            { text: 'Live Coding', class: 'badge badge-soft badge-success badge-sm' }
        ]
    },
    {
        id: 3,
        title: 'Breaking into Tech: Career Panel Discussion',
        description: 'Expert panel featuring tech leaders sharing insights on starting and growing your tech career.',
        date: 'July 25, 2025',
        time: '6:00 PM EST',
        type: 'Panel Discussion',
        status: 'Open',
        statusClass: 'badge badge-success badge-soft',
        price: 'Free',
        originalPrice: null,
        buttonText: 'Join Event',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        badges: [
            { text: 'Career', class: 'badge badge-soft badge-primary badge-sm' },
            { text: 'Networking', class: 'badge badge-soft badge-info badge-sm' },
            { text: 'Q&A', class: 'badge badge-soft badge-success badge-sm' }
        ]
    }
])
</script>
