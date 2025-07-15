// FlyonUI initialization for Academy components
export const initializeFlyonUI = () => {
    // Initialize dropdowns, modals, and other interactive components
    if (typeof window !== 'undefined' && window.FlyonUI) {
        // Initialize all FlyonUI components
        window.FlyonUI.init()
    }
}

// Smooth scrolling utility
export const initSmoothScrolling = () => {
    const navLinks = document.querySelectorAll('a[href^="#"]')

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href')
            if (targetId === '#') return

            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                e.preventDefault()

                // Calculate offset to account for fixed header
                const header = document.querySelector('header')
                const headerHeight = header ? header.offsetHeight : 80
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

                // Smooth scroll to the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                })

                // Update URL without causing a jump
                history.pushState(null, null, targetId)
            }
        })
    })
}
