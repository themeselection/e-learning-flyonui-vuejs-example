<template>
    <!-- Pricing Section -->
    <section id="pricing" class="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
                <div class="badge badge-soft badge-primary mb-4 rounded-full">Pricing Plans</div>
                <h2 class="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
                    <span class="relative z-1">
                        Flexible Learning Plans
                        <span
                            class="from-primary absolute start-0 bottom-0 -z-1 h-0.5 w-full bg-gradient-to-r to-transparent to-100%"
                            aria-hidden="true"></span>
                    </span>
                </h2>
                <p class="text-base-content/80 text-xl">
                    Choose the perfect plan that fits your learning goals and budget
                </p>
            </div>
            <!-- Pricing Cards -->
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- Basic Plan -->
                <div class="card card-border border-2 bg-transparent shadow-none">
                    <div class="card-body gap-0 space-y-8">
                        <div class="space-y-6">
                            <h3 class="text-base-content text-3xl font-semibold">Basic</h3>
                            <div class="flex items-baseline gap-1">
                                <span class="text-base-content/80 mb-auto text-lg font-medium">$</span>
                                <span class="text-primary text-6xl font-bold">49</span>
                                <span class="text-base-content/80 text-lg">/month</span>
                            </div>
                            <p class="text-base-content/80">
                                Perfect for beginners looking to start their coding journey with essential skills.
                            </p>
                        </div>
                        <button class="btn btn-primary btn-outline w-full">Get Started</button>
                        <ul class="space-y-3">
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Access to 5 core courses</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Weekly coding challenges</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Basic project templates</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Community forum access</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Email support</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Pro Plan -->
                <div class="card border-primary border-2 bg-transparent shadow-none">
                    <div class="card-body gap-0 space-y-8">
                        <div class="space-y-6">
                            <h3 class="text-base-content text-3xl font-semibold">Pro</h3>
                            <div class="flex items-baseline gap-1">
                                <span class="text-base-content/80 mb-auto text-lg font-medium">$</span>
                                <span class="text-primary text-6xl font-bold">99</span>
                                <span class="text-base-content/80 text-lg">/month</span>
                            </div>
                            <p class="text-base-content/80">
                                Ideal for serious learners who want to deepen their skills with professional guidance.
                            </p>
                        </div>
                        <button class="btn btn-primary w-full">Join Pro</button>
                        <ul class="space-y-3">
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Access to all 20+ courses</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Advanced coding challenges</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Real-world project assignments</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Weekly group mentoring sessions</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Priority email & chat support</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Premium Plan -->
                <div class="card card-border border-2 bg-transparent shadow-none md:col-span-2 lg:col-span-1">
                    <div class="card-body gap-0 space-y-8">
                        <div class="space-y-6">
                            <h3 class="text-base-content text-3xl font-semibold">Premium</h3>
                            <div class="flex items-baseline gap-1">
                                <span class="text-base-content/80 mb-auto text-lg font-medium">$</span>
                                <span class="text-primary text-6xl font-bold">199</span>
                                <span class="text-base-content/80 text-lg">/month</span>
                            </div>
                            <p class="text-base-content/80">
                                The complete package for aspiring developers seeking career-ready skills and
                                mentorship.
                            </p>
                        </div>
                        <button class="btn btn-primary btn-outline w-full">Go Premium</button>
                        <ul class="space-y-3">
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>All Pro plan features</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>1-on-1 mentoring (4 sessions/month)</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Career guidance & portfolio review</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Industry certifications included</span>
                            </li>
                            <li class="text-base-content flex items-start gap-2">
                                <span
                                    class="icon-[tabler--circle-filled] text-base-content/80 mt-1.5 size-3 shrink-0"></span>
                                <span>Job placement assistance</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No reactive data needed for this component
</script>
