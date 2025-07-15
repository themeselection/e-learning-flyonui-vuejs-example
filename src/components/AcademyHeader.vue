<template>
    <header class="border-base-content/20 bg-base-100 fixed top-0 z-10 w-full border-b py-0.25">
        <nav class="navbar mx-auto max-w-7xl rounded-b-xl px-4 sm:px-6 lg:px-8">
            <div class="w-full lg:flex lg:items-center lg:gap-2">
                <div class="navbar-start items-center justify-between max-lg:w-full">
                    <a class="text-base-content flex items-center gap-3 text-xl font-bold" href="#">
                        <span class="icon-[tabler--code] size-8 text-primary"></span>
                        CodeCraft Academy
                    </a>
                    <div class="flex items-center gap-5 lg:hidden">
                        <a href="#" class="btn btn-primary">Sign In</a>
                        <button type="button" class="collapse-toggle btn btn-outline btn-secondary btn-square"
                            @click="toggleMobileMenu">
                            <span class="icon-[tabler--menu-2] size-5"></span>
                        </button>
                    </div>
                </div>
                <div id="navbar-block" :class="[
                    'lg:navbar-center transition-height overflow-hidden font-medium duration-300 lg:flex',
                    mobileMenuOpen ? 'block' : 'hidden lg:block'
                ]" class="grow">
                    <div class="text-base-content flex gap-6 text-base max-lg:mt-4 max-lg:flex-col lg:items-center">
                        <a href="#courses" class="hover:text-primary">Courses</a>
                        <a href="#instructors" class="hover:text-primary">Instructors</a>
                        <a href="#events" class="hover:text-primary">Events</a>
                        <a href="#pricing" class="hover:text-primary">Pricing</a>
                        <a href="#faq" class="hover:text-primary">FAQs</a>
                    </div>
                </div>
                <div class="navbar-end max-lg:hidden">
                    <a href="#" class="btn btn-primary">Sign In</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
