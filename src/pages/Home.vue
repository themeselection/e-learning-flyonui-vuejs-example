<template>
  <div class="bg-base-100" data-theme="light">
    <!-- Navigation Header -->
    <Navbar />

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
import CourseCatalog from '../components/CourseCatalog.vue'
import EventsSection from '../components/EventsSection.vue'
import FAQSection from '../components/FAQSection.vue'
import FooterSection from '../components/FooterSection.vue'
import HeroSection from '../components/HeroSection.vue'
import InstructorProfiles from '../components/InstructorProfiles.vue'
import Navbar from '../components/Navbar.vue'
import PricingSection from '../components/PricingSection.vue'
import SuccessStories from '../components/SuccessStories.vue'


</script>

<style scoped>
/* Any component-specific styles can go here */
</style>
