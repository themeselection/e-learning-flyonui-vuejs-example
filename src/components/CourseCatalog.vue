<template>
    <!-- Course Catalog -->
    <section id="courses" class="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
                <div class="motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0">
                    <span class="badge badge-primary badge-soft rounded-full">Course Catalog</span>
                </div>
                <h2
                    class="text-base-content motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-200 text-2xl font-semibold md:text-3xl lg:text-4xl">
                    Explore Our
                    <span class="text-primary">Popular courses</span>
                </h2>
                <p
                    class="text-base-content/80 motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-400 mx-auto max-w-2xl text-lg">
                    Choose from our comprehensive collection of courses designed to take you from beginner to expert.
                    Each path is carefully crafted with hands-on projects and real-world applications.
                </p>
            </div>

            <!-- Course Filter Tabs -->
            <div
                class="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-600 mb-12 flex justify-center">
                <nav class="tabs bg-neutral/10 rounded-field w-fit space-x-1 overflow-x-auto p-0.5 max-sm:w-full max-sm:flex-col"
                    aria-label="Course Filter Tabs" role="tablist" aria-orientation="horizontal">
                    <button v-for="tab in tabs" :key="tab.id" type="button" :class="[
                        'btn btn-text',
                        activeTab === tab.id ? 'bg-primary text-white' : ''
                    ]" @click="activeTab = tab.id">
                        {{ tab.label }}
                    </button>
                </nav>
            </div>

            <!-- Course Content Tabs -->
            <div>
                <!-- All Courses Tab -->
                <div v-show="activeTab === 'all'" role="tabpanel" aria-labelledby="all-courses-tab">
                    <div
                        class="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-800 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="course in allCourses" :key="course.id"
                            class="card group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ease-out group-hover:-translate-y-2 waves waves-primary border border-base-content/10 hover:border-primary/20">
                            <div class="relative overflow-hidden rounded-t-box">
                                <img :src="course.image" :alt="course.title"
                                    class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div class="absolute top-4 left-4">
                                    <span :class="course.categoryBadgeClass">{{ course.categoryBadge }}</span>
                                </div>
                                <div v-if="course.additionalBadge" class="absolute top-4 right-4">
                                    <span :class="course.additionalBadgeClass">{{ course.additionalBadge }}</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="flex items-start justify-between gap-4 mb-3">
                                    <h3
                                        class="card-title text-base-content group-hover:text-primary transition-colors duration-300">
                                        {{ course.title }}
                                    </h3>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--star-filled] text-warning size-4"></span>
                                        <span class="text-sm font-medium">{{ course.rating }}</span>
                                    </div>
                                </div>
                                <p class="text-base-content/80 mb-4">{{ course.description }}</p>
                                <div class="flex items-center gap-4 mb-4 text-sm text-base-content/60">
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--clock] size-4"></span>
                                        <span>{{ course.duration }}</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--users] size-4"></span>
                                        <span>{{ course.students }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 mb-4">
                                    <span v-for="tag in course.tags" :key="tag.name" :class="tag.class">{{ tag.name
                                        }}</span>
                                </div>
                                <div class="card-actions justify-between items-center">
                                    <div class="flex items-center gap-2">
                                        <span class="text-2xl font-bold text-primary">${{ course.price }}</span>
                                        <span class="text-sm text-base-content/60 line-through">${{ course.originalPrice
                                            }}</span>
                                    </div>
                                    <button class="btn btn-primary btn-sm">
                                        Enroll Now
                                        <span class="icon-[tabler--arrow-right] size-4"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Frontend Courses Tab -->
                <div v-show="activeTab === 'frontend'" role="tabpanel" aria-labelledby="frontend-tab">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="course in frontendCourses" :key="course.id"
                            class="card group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ease-out group-hover:-translate-y-2 waves waves-primary border border-base-content/10 hover:border-primary/20">
                            <div class="relative overflow-hidden rounded-t-box">
                                <img :src="course.image" :alt="course.title"
                                    class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div class="absolute top-4 left-4">
                                    <span :class="course.categoryBadgeClass">{{ course.categoryBadge }}</span>
                                </div>
                                <div v-if="course.additionalBadge" class="absolute top-4 right-4">
                                    <span :class="course.additionalBadgeClass">{{ course.additionalBadge }}</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="flex items-start justify-between gap-4 mb-3">
                                    <h3
                                        class="card-title text-base-content group-hover:text-primary transition-colors duration-300">
                                        {{ course.title }}
                                    </h3>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--star-filled] text-warning size-4"></span>
                                        <span class="text-sm font-medium">{{ course.rating }}</span>
                                    </div>
                                </div>
                                <p class="text-base-content/80 mb-4">{{ course.description }}</p>
                                <div class="flex items-center gap-4 mb-4 text-sm text-base-content/60">
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--clock] size-4"></span>
                                        <span>{{ course.duration }}</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--users] size-4"></span>
                                        <span>{{ course.students }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 mb-4">
                                    <span v-for="tag in course.tags" :key="tag.name" :class="tag.class">{{ tag.name
                                        }}</span>
                                </div>
                                <div class="card-actions justify-between items-center">
                                    <div class="flex items-center gap-2">
                                        <span class="text-2xl font-bold text-primary">${{ course.price }}</span>
                                        <span class="text-sm text-base-content/60 line-through">${{ course.originalPrice
                                            }}</span>
                                    </div>
                                    <button class="btn btn-primary btn-sm">
                                        Enroll Now
                                        <span class="icon-[tabler--arrow-right] size-4"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Backend Courses Tab -->
                <div v-show="activeTab === 'backend'" role="tabpanel" aria-labelledby="backend-tab">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="course in backendCourses" :key="course.id"
                            class="card group hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 ease-out group-hover:-translate-y-2 waves waves-secondary border border-base-content/10 hover:border-secondary/20">
                            <div class="relative overflow-hidden rounded-t-box">
                                <img :src="course.image" :alt="course.title"
                                    class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div class="absolute top-4 left-4">
                                    <span :class="course.categoryBadgeClass">{{ course.categoryBadge }}</span>
                                </div>
                                <div v-if="course.additionalBadge" class="absolute top-4 right-4">
                                    <span :class="course.additionalBadgeClass">{{ course.additionalBadge }}</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="flex items-start justify-between gap-4 mb-3">
                                    <h3
                                        class="card-title text-base-content group-hover:text-secondary transition-colors duration-300">
                                        {{ course.title }}
                                    </h3>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--star-filled] text-warning size-4"></span>
                                        <span class="text-sm font-medium">{{ course.rating }}</span>
                                    </div>
                                </div>
                                <p class="text-base-content/80 mb-4">{{ course.description }}</p>
                                <div class="flex items-center gap-4 mb-4 text-sm text-base-content/60">
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--clock] size-4"></span>
                                        <span>{{ course.duration }}</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--users] size-4"></span>
                                        <span>{{ course.students }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 mb-4">
                                    <span v-for="tag in course.tags" :key="tag.name" :class="tag.class">{{ tag.name
                                        }}</span>
                                </div>
                                <div class="card-actions justify-between items-center">
                                    <div class="flex items-center gap-2">
                                        <span class="text-2xl font-bold text-secondary">${{ course.price }}</span>
                                        <span class="text-sm text-base-content/60 line-through">${{ course.originalPrice
                                            }}</span>
                                    </div>
                                    <button class="btn btn-primary btn-sm">
                                        Enroll Now
                                        <span class="icon-[tabler--arrow-right] size-4"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Full Stack Courses Tab -->
                <div v-show="activeTab === 'fullstack'" role="tabpanel" aria-labelledby="fullstack-tab">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="course in fullstackCourses" :key="course.id"
                            class="card group hover:shadow-xl hover:shadow-warning/10 transition-all duration-300 ease-out group-hover:-translate-y-2 waves waves-warning border border-base-content/10 hover:border-warning/20">
                            <div class="relative overflow-hidden rounded-t-box">
                                <img :src="course.image" :alt="course.title"
                                    class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div class="absolute top-4 left-4">
                                    <span :class="course.categoryBadgeClass">{{ course.categoryBadge }}</span>
                                </div>
                                <div v-if="course.additionalBadge" class="absolute top-4 right-4">
                                    <span :class="course.additionalBadgeClass">{{ course.additionalBadge }}</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="flex items-start justify-between gap-4 mb-3">
                                    <h3
                                        class="card-title text-base-content group-hover:text-warning transition-colors duration-300">
                                        {{ course.title }}
                                    </h3>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--star-filled] text-warning size-4"></span>
                                        <span class="text-sm font-medium">{{ course.rating }}</span>
                                    </div>
                                </div>
                                <p class="text-base-content/80 mb-4">{{ course.description }}</p>
                                <div class="flex items-center gap-4 mb-4 text-sm text-base-content/60">
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--clock] size-4"></span>
                                        <span>{{ course.duration }}</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--users] size-4"></span>
                                        <span>{{ course.students }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 mb-4">
                                    <span v-for="tag in course.tags" :key="tag.name" :class="tag.class">{{ tag.name
                                        }}</span>
                                </div>
                                <div class="card-actions justify-between items-center">
                                    <div class="flex items-center gap-2">
                                        <span class="text-2xl font-bold text-warning">${{ course.price }}</span>
                                        <span class="text-sm text-base-content/60 line-through">${{ course.originalPrice
                                            }}</span>
                                    </div>
                                    <button class="btn btn-warning btn-sm">
                                        Enroll Now
                                        <span class="icon-[tabler--arrow-right] size-4"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Courses Tab -->
                <div v-show="activeTab === 'mobile'" role="tabpanel" aria-labelledby="mobile-tab">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="course in mobileCourses" :key="course.id"
                            class="card group hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 ease-out group-hover:-translate-y-2 waves waves-secondary border border-base-content/10 hover:border-secondary/20">
                            <div class="relative overflow-hidden rounded-t-box">
                                <img :src="course.image" :alt="course.title"
                                    class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div class="absolute top-4 left-4">
                                    <span :class="course.categoryBadgeClass">{{ course.categoryBadge }}</span>
                                </div>
                                <div v-if="course.additionalBadge" class="absolute top-4 right-4">
                                    <span :class="course.additionalBadgeClass">{{ course.additionalBadge }}</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="flex items-start justify-between gap-4 mb-3">
                                    <h3
                                        class="card-title text-base-content group-hover:text-secondary transition-colors duration-300">
                                        {{ course.title }}
                                    </h3>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--star-filled] text-warning size-4"></span>
                                        <span class="text-sm font-medium">{{ course.rating }}</span>
                                    </div>
                                </div>
                                <p class="text-base-content/80 mb-4">{{ course.description }}</p>
                                <div class="flex items-center gap-4 mb-4 text-sm text-base-content/60">
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--clock] size-4"></span>
                                        <span>{{ course.duration }}</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span class="icon-[tabler--users] size-4"></span>
                                        <span>{{ course.students }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 mb-4">
                                    <span v-for="tag in course.tags" :key="tag.name" :class="tag.class">{{ tag.name
                                        }}</span>
                                </div>
                                <div class="card-actions justify-between items-center">
                                    <div class="flex items-center gap-2">
                                        <span class="text-2xl font-bold text-secondary">${{ course.price }}</span>
                                        <span class="text-sm text-base-content/60 line-through">${{ course.originalPrice
                                            }}</span>
                                    </div>
                                    <button class="btn btn-primary">
                                        Enroll Now
                                        <span class="icon-[tabler--arrow-right] size-4"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- View All Courses CTA -->
            <div
                class="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-1000 mt-16 text-center">
                <a href="#" class="btn btn-primary btn-lg btn-gradient">
                    View All Courses
                    <span class="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                </a>
                <p class="text-base-content/60 mt-4">
                    Discover 50+ courses across different technologies and skill levels
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const activeTab = ref('all')

const tabs = ref([
    { id: 'all', label: 'All Courses' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' }
])

const allCourses = ref([
    {
        id: 1,
        title: 'Complete React Development',
        description: 'Master React from basics to advanced concepts including hooks, context, and state management.',
        price: 99,
        originalPrice: 199,
        rating: 4.9,
        level: 'Beginner',
        levelClass: 'badge badge-soft badge-primary badge-sm',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        category: 'frontend',
        categoryBadge: 'Frontend',
        categoryBadgeClass: 'badge badge-primary badge-soft',
        additionalBadge: 'New',
        additionalBadgeClass: 'badge badge-primary badge-soft',
        duration: '40 hours',
        students: '1,250 students',
        tags: [
            { name: 'Beginner', class: 'badge badge-soft badge-primary badge-sm' },
            { name: 'Projects', class: 'badge badge-soft badge-secondary badge-sm' },
            { name: 'Certificate', class: 'badge badge-soft badge-primary badge-sm' }
        ]
    },
    {
        id: 2,
        title: 'Node.js Backend Mastery',
        description: 'Build scalable backend applications with Node.js, Express, and MongoDB.',
        price: 129,
        originalPrice: 249,
        rating: 4.8,
        level: 'Intermediate',
        levelClass: 'badge badge-soft badge-secondary badge-sm',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        category: 'backend',
        categoryBadge: 'Backend',
        categoryBadgeClass: 'badge badge-secondary badge-soft',
        additionalBadge: 'Popular',
        additionalBadgeClass: 'badge badge-primary badge-soft',
        duration: '45 hours',
        students: '980 students',
        tags: [
            { name: 'Intermediate', class: 'badge badge-soft badge-secondary badge-sm' },
            { name: 'API', class: 'badge badge-soft badge-secondary badge-sm' },
            { name: 'Certificate', class: 'badge badge-soft badge-primary badge-sm' }
        ]
    },
    {
        id: 3,
        title: 'Full Stack Web Development',
        description: 'Complete bootcamp covering frontend, backend, databases, and deployment.',
        price: 299,
        originalPrice: 599,
        rating: 4.9,
        level: 'Advanced',
        levelClass: 'badge badge-soft badge-primary badge-sm',
        image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        category: 'fullstack',
        categoryBadge: 'Full Stack',
        categoryBadgeClass: 'badge badge-soft badge-primary',
        additionalBadge: 'Bestseller',
        additionalBadgeClass: 'badge badge-primary badge-soft',
        duration: '80 hours',
        students: '2,150 students',
        tags: [
            { name: 'Advanced', class: 'badge badge-soft badge-primary badge-sm' },
            { name: 'Bootcamp', class: 'badge badge-soft badge-secondary badge-sm' },
            { name: 'Job Ready', class: 'badge badge-soft badge-primary badge-sm' }
        ]
    },
    {
        id: 4,
        title: 'Python Programming Fundamentals',
        description: 'Learn Python from scratch with hands-on projects and real-world applications.',
        price: 79,
        originalPrice: 149,
        rating: 4.7,
        level: 'Beginner',
        levelClass: 'badge badge-soft badge-primary badge-sm',
        image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        category: 'backend',
        categoryBadge: 'Programming',
        categoryBadgeClass: 'badge badge-secondary',
        duration: '35 hours',
        students: '1,580 students',
        tags: [
            { name: 'Beginner', class: 'badge badge-soft badge-primary badge-sm' },
            { name: 'Projects', class: 'badge badge-soft badge-secondary badge-sm' },
            { name: 'Certificate', class: 'badge badge-soft badge-primary badge-sm' }
        ]
    },
    {
        id: 5,
        title: 'React Native App Development',
        description: 'Build cross-platform mobile apps with React Native and publish to app stores.',
        price: 159,
        originalPrice: 299,
        rating: 4.6,
        level: 'Intermediate',
        levelClass: 'badge badge-soft badge-secondary badge-sm',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        category: 'mobile',
        categoryBadge: 'Mobile',
        categoryBadgeClass: 'badge badge-secondary',
        duration: '50 hours',
        students: '720 students',
        tags: [
            { name: 'Intermediate', class: 'badge badge-soft badge-secondary badge-sm' },
            { name: 'Cross-platform', class: 'badge badge-soft badge-secondary badge-sm' },
            { name: 'Certificate', class: 'badge badge-soft badge-primary badge-sm' }
        ]
    },
    {
        id: 6,
        title: 'DevOps & Cloud Engineering',
        description: 'Master CI/CD, Docker, Kubernetes, and cloud platforms for modern deployment.',
        price: 199,
        originalPrice: 399,
        rating: 4.8,
        level: 'Advanced',
        levelClass: 'badge badge-soft badge-error badge-sm',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        category: 'backend',
        categoryBadge: 'DevOps',
        categoryBadgeClass: 'badge badge-accent',
        duration: '60 hours',
        students: '890 students',
        tags: [
            { name: 'Advanced', class: 'badge badge-soft badge-error badge-sm' },
            { name: 'Cloud', class: 'badge badge-soft badge-info badge-sm' },
            { name: 'Certificate', class: 'badge badge-soft badge-success badge-sm' }
        ]
    }
])

const frontendCourses = computed(() => {
    return allCourses.value.filter(course => course.category === 'frontend')
})

const backendCourses = computed(() => {
    return allCourses.value.filter(course => course.category === 'backend')
})

const fullstackCourses = computed(() => {
    return allCourses.value.filter(course => course.category === 'fullstack')
})

const mobileCourses = computed(() => {
    return allCourses.value.filter(course => course.category === 'mobile')
})
</script>
