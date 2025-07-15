<template>
    <main class="pt-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex min-h-screen flex-col justify-center gap-16 py-20">
                <!-- Hero Content -->
                <div class="flex max-w-4xl flex-col items-center gap-8 text-center mx-auto">
                    <!-- Badge -->
                    <div
                        class="bg-base-200 border-base-content/20 motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 flex w-fit items-center gap-2.5 rounded-full border px-4 py-2">
                        <span class="badge badge-primary shrink-0 rounded-full">New</span>
                        <span class="text-base-content/80">Advanced React & Node.js Bootcamp Starting Soon</span>
                    </div>

                    <!-- Main Heading -->
                    <h1
                        class="text-base-content motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-400 text-5xl leading-[1.15] font-bold text-balance max-md:text-3xl">
                        Master <span class="text-primary">Modern Development</span> Skills
                        <br />
                        Build Your <span class="text-primary">Dream Career</span>
                    </h1>

                    <!-- Description -->
                    <p
                        class="text-base-content/80 motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-800 max-w-2xl text-lg">
                        Join thousands of developers who've transformed their careers with our hands-on coding
                        bootcamps,
                        mentorship programs, and project-based learning approach.
                    </p>

                    <!-- CTA Buttons -->
                    <div
                        class="motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-1200 flex items-center gap-4 max-sm:flex-col">
                        <a href="#" class="btn btn-primary btn-gradient btn-lg">
                            Start Learning Today
                            <span class="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                        </a>
                        <a href="#" class="btn btn-soft btn-primary btn-lg">
                            View Courses
                            <span class="icon-[tabler--play] size-5"></span>
                        </a>
                    </div>

                    <!-- Trust Indicators -->
                    <div
                        class="motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-1600 flex items-center gap-6 max-sm:flex-col">
                        <div
                            class="avatar-group pull-up motion-preset-slide-right-md motion-duration-800 motion-opacity-in-0 motion-delay-1800 -space-x-5">
                            <div v-for="(avatar, index) in heroData.avatars" :key="index" class="tooltip">
                                <div class="tooltip-toggle avatar">
                                    <div class="w-12">
                                        <img :src="avatar.image" :alt="avatar.name" />
                                    </div>
                                </div>
                                <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
                                    role="tooltip">
                                    <span class="tooltip-body">{{ avatar.name }}</span>
                                </span>
                            </div>
                            <div class="tooltip cursor-default">
                                <div class="tooltip-toggle avatar avatar-placeholder">
                                    <div class="bg-neutral text-neutral-content w-12 text-sm">+2.5k</div>
                                </div>
                                <span class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
                                    role="tooltip">
                                    <span class="tooltip-body">2.5k+ more Clients</span>
                                </span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1 text-start">
                            <div class="flex items-center gap-0.5">
                                <span class="icon-[tabler--star-filled] size-5 text-warning"></span>
                                <span class="icon-[tabler--star-filled] size-5 text-warning"></span>
                                <span class="icon-[tabler--star-filled] size-5 text-warning"></span>
                                <span class="icon-[tabler--star-filled] size-5 text-warning"></span>
                                <span class="icon-[tabler--star-filled] size-5 text-warning"></span>
                                <span class="text-base-content/80 text-sm font-medium ms-1">4.9/5</span>
                            </div>
                            <div class="text-base-content/60 text-sm">
                                Trusted by 2,500+ students worldwide
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Course Categories -->
                <div
                    class="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-2000 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Frontend Development -->
                    <div class="group cursor-pointer">
                        <div
                            class="card hover:shadow-xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500 ease-out group-hover:-translate-y-3 waves waves-primary border border-base-content/10 hover:bg-primary/5">
                            <div class="card-body">
                                <div class="flex items-center gap-4 mb-4">
                                    <div
                                        class="bg-primary/10 text-primary rounded-lg p-3 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary/20 group-hover:rotate-3">
                                        <span
                                            class="icon-[tabler--brand-react] size-6 transition-transform duration-300 group-hover:scale-110"></span>
                                    </div>
                                    <div class="flex-1">
                                        <h3
                                            class="card-title text-base-content group-hover:text-primary transition-colors duration-300">
                                            Frontend Development</h3>
                                        <p
                                            class="text-base-content/60 text-sm group-hover:text-primary/80 transition-colors duration-300">
                                            React, Vue, Angular</p>
                                    </div>
                                </div>
                                <div class="card-actions justify-between items-center">
                                    <span
                                        class="badge badge-soft badge-primary badge-sm group-hover:bg-primary/20 transition-colors duration-300">12
                                        Courses</span>
                                    <span
                                        class="icon-[tabler--arrow-right] text-base-content/60 group-hover:text-primary size-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Backend Development -->
                    <div class="group cursor-pointer">
                        <div
                            class="card hover:shadow-xl hover:shadow-success/20 hover:border-success/30 transition-all duration-500 ease-out group-hover:-translate-y-3 waves waves-success border border-base-content/10 hover:bg-success/5">
                            <div class="card-body">
                                <div class="flex items-center gap-4 mb-4">
                                    <div
                                        class="bg-success/10 text-success rounded-lg p-3 transition-all duration-300 group-hover:scale-125 group-hover:bg-success/20 group-hover:rotate-3">
                                        <span
                                            class="icon-[tabler--brand-nodejs] size-6 transition-transform duration-300 group-hover:scale-110"></span>
                                    </div>
                                    <div class="flex-1">
                                        <h3
                                            class="card-title text-base-content group-hover:text-success transition-colors duration-300">
                                            Backend Development</h3>
                                        <p
                                            class="text-base-content/60 text-sm group-hover:text-success/80 transition-colors duration-300">
                                            Node.js, Python, Java</p>
                                    </div>
                                </div>
                                <div class="card-actions justify-between items-center">
                                    <span
                                        class="badge badge-soft badge-success badge-sm group-hover:bg-success/20 transition-colors duration-300">15
                                        Courses</span>
                                    <span
                                        class="icon-[tabler--arrow-right] text-base-content/60 group-hover:text-success size-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Full Stack -->
                    <div class="group cursor-pointer md:col-span-2 lg:col-span-1">
                        <div
                            class="card hover:shadow-xl hover:shadow-warning/20 hover:border-warning/30 transition-all duration-500 ease-out group-hover:-translate-y-3 waves waves-warning border border-base-content/10 hover:bg-warning/5">
                            <div class="card-body">
                                <div class="flex items-center gap-4 mb-4">
                                    <div
                                        class="bg-warning/10 text-warning rounded-lg p-3 transition-all duration-300 group-hover:scale-125 group-hover:bg-warning/20 group-hover:rotate-3">
                                        <span
                                            class="icon-[tabler--stack-2] size-6 transition-transform duration-300 group-hover:scale-110"></span>
                                    </div>
                                    <div class="flex-1">
                                        <h3
                                            class="card-title text-base-content group-hover:text-warning transition-colors duration-300">
                                            Full Stack</h3>
                                        <p
                                            class="text-base-content/60 text-sm group-hover:text-warning/80 transition-colors duration-300">
                                            Complete Web Development</p>
                                    </div>
                                </div>
                                <div class="card-actions justify-between items-center">
                                    <span
                                        class="badge badge-soft badge-warning badge-sm group-hover:bg-warning/20 transition-colors duration-300">8
                                        Bootcamps</span>
                                    <span
                                        class="icon-[tabler--arrow-right] text-base-content/60 group-hover:text-warning size-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stats Section -->
                <div
                    class="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-2400 grid grid-cols-2 gap-6 md:grid-cols-4">
                    <div class="text-center">
                        <div class="text-primary text-3xl font-bold mb-2">2,500+</div>
                        <div class="text-base-content/60 text-sm">Students Enrolled</div>
                    </div>
                    <div class="text-center">
                        <div class="text-primary text-3xl font-bold mb-2">95%</div>
                        <div class="text-base-content/60 text-sm">Job Placement Rate</div>
                    </div>
                    <div class="text-center">
                        <div class="text-primary text-3xl font-bold mb-2">50+</div>
                        <div class="text-base-content/60 text-sm">Expert Instructors</div>
                    </div>
                    <div class="text-center">
                        <div class="text-primary text-3xl font-bold mb-2">24/7</div>
                        <div class="text-base-content/60 text-sm">Support Available</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
// No reactive data needed for this component
const heroData = ref({
    avatars: [
        { name: "Sarah Johnson", image: "https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" },
        { name: "David Chen", image: "https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" },
        { name: "Maria Garcia", image: "https://cdn.flyonui.com/fy-assets/avatar/avatar-9.png" }
    ],

})
</script>
