<template>
    <div class="bg-base-100" data-theme="light">
        <!-- Navigation Header -->
        <AcademyHeader />

        <!-- Hero Section -->
        <HeroSection />

        <!-- Course Catalog -->
        <CourseCatalog />

        <!-- Instructor Profiles -->
        <InstructorProfiles />

        <!-- Events Section -->
        <EventsSection />

        <!-- Success Stories -->
        <SuccessStories />

        <!-- Pricing Section -->
        <PricingSection />

        <!-- FAQ Section -->
        <FAQSection />

        <!-- Footer -->
        <FooterSection />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AcademyHeader from '../components/AcademyHeader.vue'
import CourseCatalog from '../components/CourseCatalog.vue'
import EventsSection from '../components/EventsSection.vue'
import FAQSection from '../components/FAQSection.vue'
import FooterSection from '../components/FooterSection.vue'
import HeroSection from '../components/HeroSection.vue'
import InstructorProfiles from '../components/InstructorProfiles.vue'
import PricingSection from '../components/PricingSection.vue'
import SuccessStories from '../components/SuccessStories.vue'
import { initializeFlyonUI, initSmoothScrolling } from '../utils/academy.js'

onMounted(() => {
    // Initialize FlyonUI components
    initializeFlyonUI()

    // Initialize smooth scrolling
    initSmoothScrolling()
})
</script>

<style scoped>
/* Any component-specific styles can go here */
</style>
