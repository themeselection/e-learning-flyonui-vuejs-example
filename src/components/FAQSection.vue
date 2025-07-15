<template>
    <!-- FAQ Section -->
    <section id="faq" class="bg-base-100 py-8 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header with Badge -->
            <div class="mb-12 text-center sm:mb-16 lg:mb-24">
                <div class="badge badge-soft badge-primary mb-4 rounded-full">Frequently Asked Questions</div>
                <h2 class="text-base-content mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
                    Got Questions? We've Got Answers
                </h2>
                <p class="text-base-content/80 text-xl">
                    Find answers to the most common questions about our coding programs and learning experience
                </p>
            </div>

            <!-- FAQ Grid Container -->
            <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <!-- Left Accordion -->
                <div class="accordion accordion-bordered">
                    <div v-for="(faq, index) in leftFaqs" :key="faq.id" class="accordion-item"
                        :class="{ active: activeItems.includes(faq.id) }" :id="faq.id">
                        <button class="accordion-toggle inline-flex items-center justify-between gap-x-4 text-start"
                            :aria-controls="`${faq.id}-collapse`" :aria-expanded="activeItems.includes(faq.id)"
                            @click="toggleItem(faq.id)">
                            {{ faq.question }}
                            <span
                                class="icon-[tabler--chevron-down] accordion-item-active:rotate-180 size-4.5 shrink-0 transition-transform duration-300"></span>
                        </button>
                        <div :id="`${faq.id}-collapse`"
                            class="accordion-content transition-height w-full overflow-hidden duration-300"
                            :class="{ hidden: !activeItems.includes(faq.id) }" :aria-labelledby="faq.id" role="region">
                            <div class="px-5 pb-4">
                                <p class="text-base-content/80">{{ faq.answer }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Accordion -->
                <div class="accordion accordion-bordered h-max">
                    <div v-for="faq in rightFaqs" :key="faq.id" class="accordion-item"
                        :class="{ active: activeItems.includes(faq.id) }" :id="faq.id">
                        <button class="accordion-toggle inline-flex items-center justify-between gap-x-4 text-start"
                            :aria-controls="`${faq.id}-collapse`" :aria-expanded="activeItems.includes(faq.id)"
                            @click="toggleItem(faq.id)">
                            {{ faq.question }}
                            <span
                                class="icon-[tabler--chevron-down] accordion-item-active:rotate-180 size-4.5 shrink-0 transition-transform duration-300"></span>
                        </button>
                        <div :id="`${faq.id}-collapse`"
                            class="accordion-content transition-height w-full overflow-hidden duration-300"
                            :class="{ hidden: !activeItems.includes(faq.id) }" :aria-labelledby="faq.id" role="region">
                            <div class="px-5 pb-4">
                                <p class="text-base-content/80">{{ faq.answer }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Still Have Questions CTA -->
            <div class="mt-16 text-center">
                <h3 class="text-base-content mb-4 text-2xl font-bold">Still have questions?</h3>
                <p class="text-base-content/70 mb-8 text-lg">
                    Our team is here to help you find the perfect learning path
                </p>
                <a href="#" class="btn btn-primary btn-lg">
                    <span class="icon-[tabler--messages] size-5"></span>
                    Contact Support
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const activeItems = ref(['programs']) // First item active by default

const toggleItem = (itemId) => {
    const index = activeItems.value.indexOf(itemId)
    if (index > -1) {
        activeItems.value.splice(index, 1)
    } else {
        activeItems.value.push(itemId)
    }
}

const leftFaqs = ref([
    {
        id: 'programs',
        question: 'What programming languages and technologies do you teach?',
        answer: 'We cover all modern technologies including JavaScript, React, Vue.js, Node.js, Python, MongoDB, PostgreSQL, and more. Our curriculum is regularly updated to match industry demands.'
    },
    {
        id: 'experience',
        question: 'Do I need prior coding experience to enroll?',
        answer: 'No prior experience is required! Our courses are designed for complete beginners and include foundational concepts. We also offer advanced tracks for experienced developers looking to upskill.'
    },
    {
        id: 'payment-plans',
        question: 'What payment plans and financing options are available?',
        answer: 'We offer flexible payment options including monthly subscriptions, one-time payments, and income-share agreements. Financial aid and scholarships are available for qualifying students.'
    },
    {
        id: 'job-assistance',
        question: 'Do you provide job placement assistance?',
        answer: 'Yes! Our Pro and Premium plans include comprehensive career services including resume reviews, interview preparation, portfolio development, and direct connections with hiring partners.'
    },
    {
        id: 'certification',
        question: 'Will I receive a certification?',
        answer: 'Upon completion of each course, you\'ll receive a certificate of completion. Our certificates are recognized by industry partners and can be added to your LinkedIn profile and resume.'
    }
])

const rightFaqs = ref([
    {
        id: 'time-commitment',
        question: 'What\'s the time commitment?',
        answer: 'Our courses are self-paced, but we recommend 10-15 hours per week for optimal progress. Full bootcamp programs typically take 3-6 months to complete depending on your pace.'
    },
    {
        id: 'refund-policy',
        question: 'What is your refund policy?',
        answer: 'We offer a 30-day money-back guarantee for all our courses. If you\'re not satisfied with your learning experience, you can request a full refund within the first 30 days.'
    },
    {
        id: 'support',
        question: 'What kind of support will I receive?',
        answer: 'You\'ll have access to our community forums, live Q&A sessions, 1-on-1 mentorship (Pro/Premium), and 24/7 technical support. Our instructors are always available to help.'
    },
    {
        id: 'portfolio',
        question: 'Will I build a portfolio during the program?',
        answer: 'Absolutely! You\'ll build 10+ real-world projects that showcase your skills to potential employers. We provide guidance on presenting your work professionally.'
    },
    {
        id: 'start-date',
        question: 'When can I start?',
        answer: 'You can start immediately after enrollment! Our courses are available 24/7, and new cohorts for live sessions start every month. Check our events calendar for upcoming start dates.'
    }
])
</script>
