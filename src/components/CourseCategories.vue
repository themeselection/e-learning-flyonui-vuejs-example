<template>
    <!-- Course Categories -->
    <div
        class="motion-preset-slide-up-md motion-duration-900 motion-opacity-in-0 motion-delay-2000 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        <!-- Frontend Development -->
        <div class="group cursor-pointer">
            <div
                class="card hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ease-out group-hover:-translate-y-2 border border-base-content/10 hover:border-primary/20">
                <div class="card-body">
                    <div class="mb-4">
                        <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span class="icon-[tabler--brand-react] size-6 text-primary"></span>
                        </div>
                    </div>
                    <h3 class="text-base-content text-xl font-bold mb-2">Frontend Development</h3>
                    <p class="text-base-content/70 mb-4">
                        Master React, Vue.js, and modern frontend technologies to build stunning user interfaces.
                    </p>
                    <div class="flex items-center gap-2 text-sm text-primary">
                        <span>12 Courses</span>
                        <span class="icon-[tabler--arrow-right] size-4"></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Backend Development -->
        <div class="group cursor-pointer">
            <div
                class="card hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ease-out group-hover:-translate-y-2 border border-base-content/10 hover:border-primary/20">
                <div class="card-body">
                    <div class="mb-4">
                        <div class="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                            <span class="icon-[tabler--brand-nodejs] size-6 text-success"></span>
                        </div>
                    </div>
                    <h3 class="text-base-content text-xl font-bold mb-2">Backend Development</h3>
                    <p class="text-base-content/70 mb-4">
                        Learn Node.js, Python, databases, and API development to power your applications.
                    </p>
                    <div class="flex items-center gap-2 text-sm text-success">
                        <span>15 Courses</span>
                        <span class="icon-[tabler--arrow-right] size-4"></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Full Stack -->
        <div class="group cursor-pointer md:col-span-2 lg:col-span-1">
            <div
                class="card hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ease-out group-hover:-translate-y-2 border border-base-content/10 hover:border-primary/20">
                <div class="card-body">
                    <div class="mb-4">
                        <div class="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                            <span class="icon-[tabler--stack-2] size-6 text-warning"></span>
                        </div>
                    </div>
                    <h3 class="text-base-content text-xl font-bold mb-2">Full Stack Development</h3>
                    <p class="text-base-content/70 mb-4">
                        Combine frontend and backend skills to become a complete web developer.
                    </p>
                    <div class="flex items-center gap-2 text-sm text-warning">
                        <span>8 Courses</span>
                        <span class="icon-[tabler--arrow-right] size-4"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// No reactive data needed for this component
</script>
