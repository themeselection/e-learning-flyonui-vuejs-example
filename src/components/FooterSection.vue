<template>
    <!-- footer section -->
    <footer>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div class="mb-10 flex items-center justify-between gap-4 max-lg:flex-wrap">
                <div>
                    <h3 class="text-base-content mb-2 text-2xl font-semibold">Subscribe to our Newsletter</h3>
                    <p class="text-base-content/80">Get weekly coding tips, tutorials, and updates about our courses!
                    </p>
                </div>
                <div class="flex gap-3">
                    <input v-model="email" type="email" placeholder="Your email" class="input max-w-sm" />
                    <button class="btn btn-primary btn-gradient" @click="subscribeNewsletter">
                        Subscribe
                    </button>
                </div>
            </div>

            <!-- Footer Links Grid -->
            <div class="footer grid-flow-row grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                <!-- Courses -->
                <div class="gap-5">
                    <h4 class="text-base-content text-lg font-medium">Courses</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-base-content/80 link link-animated">Web Development</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Mobile Development</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Data Science</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">UI/UX Design</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Game Development</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Cloud Computing</a></li>
                    </ul>
                </div>

                <!-- Resources -->
                <div class="gap-5">
                    <h4 class="text-base-content text-lg font-medium">Resources</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-base-content/80 link link-animated">Learning Paths</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Blog</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Tutorials</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Documentation</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Free Resources</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Cheat Sheets</a></li>
                    </ul>
                </div>

                <!-- Community -->
                <div class="gap-5">
                    <h4 class="text-base-content text-lg font-medium">Community</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-base-content/80 link link-animated">Forums</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Discord Server</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Events</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Hackathons</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Meetups</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Student Projects</a></li>
                    </ul>
                </div>

                <!-- Company -->
                <div class="gap-5">
                    <h4 class="text-base-content text-lg font-medium">Company</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-base-content/80 link link-animated">About Us</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Careers</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Press</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Partners</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Affiliate Program</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Contact</a></li>
                    </ul>
                </div>

                <!-- Legal -->
                <div class="gap-5">
                    <h4 class="text-base-content text-lg font-medium">Legal</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-base-content/80 link link-animated">Terms of Service</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Privacy Policy</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Cookie Policy</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">GDPR Compliance</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Accessibility</a></li>
                        <li><a href="#" class="text-base-content/80 link link-animated">Security</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="via-primary/30 mx-auto h-px bg-gradient-to-r from-transparent to-transparent"></div>

        <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6 lg:px-8">
            <a href="" title="CodeCraft Academy" class="text-base-content flex items-center gap-3 text-xl font-bold">
                <img src="https://i.imgur.com/8U1sx0c.png" class="size-8" alt="CodeCraft Academy logo" />
                <span>CodeCraft Academy</span>
            </a>
            <div class="flex h-5 gap-4">
                <a href="#" class="link" aria-label="Github Link">
                    <span class="icon-[tabler--brand-github] size-5"></span>
                </a>
                <a href="#" class="link" aria-label="Discord Link">
                    <span class="icon-[tabler--brand-discord] size-5"></span>
                </a>
                <a href="#" class="link" aria-label="Twitter Link">
                    <span class="icon-[tabler--brand-x] size-5"></span>
                </a>
                <a href="#" class="link" aria-label="LinkedIn Link">
                    <span class="icon-[tabler--brand-linkedin] size-5"></span>
                </a>
                <a href="#" class="link" aria-label="YouTube Link">
                    <span class="icon-[tabler--brand-youtube] size-5"></span>
                </a>
            </div>
            <div class="text-base-content text-base text-wrap">
                &copy; 2025
                <a href="" class="text-primary">CodeCraft Academy</a>,
                Empowering coders for a better future.
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribeNewsletter = () => {
    if (email.value) {
        alert(`Thank you for subscribing with ${email.value}!`)
        email.value = ''
    } else {
        alert('Please enter a valid email address.')
    }
}
</script>
