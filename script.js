// Centralized site script: header, modal, search, filters, and news ticker

// Modal functionality (accessible)
function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    const focusable = modal.querySelector('input, button, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Tab functionality
function openTab(evt, tabName) {
    // Prevent default link behavior where applicable
    if (evt && typeof evt.preventDefault === 'function') evt.preventDefault();

    // Hide tab contents
    const tabcontent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabcontent.length; i++) tabcontent[i].classList.remove('active');

    // Remove active class from tab links
    const tablinks = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tablinks.length; i++) tablinks[i].classList.remove('active');

    // Activate selected
    const target = document.getElementById(tabName);
    if (target) target.classList.add('active');
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
}

// Utility: logout (used on Tours-travles page)
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
}

// Enhanced header and page behaviors
document.addEventListener('DOMContentLoaded', function() {
    // Nav toggle & accessible mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('main-nav');
    if (navToggle && mainNav) {
        const firstFocusable = () => mainNav.querySelector('a, button, input, [tabindex]:not([tabindex="-1"])');

        const closeMenu = () => {
            navToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            mainNav.setAttribute('aria-hidden', 'true');
            navToggle.focus();
            document.removeEventListener('click', onDocClick);
            document.removeEventListener('keydown', onKeyDown);
        };

        const onDocClick = (e) => {
            if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) closeMenu();
        };

        const onKeyDown = (e) => {
            if (e.key === 'Escape') { closeMenu(); }
        };

        navToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            mainNav.classList.toggle('active');
            const isActive = mainNav.classList.contains('active');
            mainNav.setAttribute('aria-hidden', String(!isActive));
            if (isActive) {
                const focusEl = firstFocusable();
                if (focusEl) focusEl.focus();
                setTimeout(() => {
                    document.addEventListener('click', onDocClick);
                    document.addEventListener('keydown', onKeyDown);
                }, 0);
            } else {
                document.removeEventListener('click', onDocClick);
                document.removeEventListener('keydown', onKeyDown);
            }
        });
    }

    // Program filters and package UI
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const categoryContents = document.querySelectorAll('.category-content');
            categoryContents.forEach(content => content.classList.remove('active'));
            const categoryId = this.getAttribute('data-category');
            if (document.getElementById(categoryId)) document.getElementById(categoryId).classList.add('active');
        });
    });

    const packageFilters = document.querySelectorAll('.package-filter');
    packageFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            packageFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            const packageCards = document.querySelectorAll('.package-card');
            packageCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Search handler (basic placeholder)
    const searchBtn = document.getElementById('searchBtn') || document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const q = searchInput.value.trim();
            if (!q) { alert('Please enter a search term.'); return; }
            alert('Search: ' + q);
        });
    }

    // If nav links overflow, add class to allow scrolling and keep links accessible
    (function manageNavOverflow(){
        const navbarEl = document.querySelector('.navbar');
        const navLinksEl = document.querySelector('.nav-links');
        if (!navbarEl || !navLinksEl) return;

        // Make nav focusable for keyboard scrolling
        if (!navLinksEl.hasAttribute('tabindex')) navLinksEl.setAttribute('tabindex', '0');

        // Allow arrow keys to scroll when nav has focus
        navLinksEl.addEventListener('keydown', function(e){
            if (e.key === 'ArrowRight') { navLinksEl.scrollBy({ left: 80, behavior: 'smooth' }); e.preventDefault(); }
            if (e.key === 'ArrowLeft') { navLinksEl.scrollBy({ left: -80, behavior: 'smooth' }); e.preventDefault(); }
        });

        // Simple overflow detection for has-overflow class
        function checkNavOverflow(){
            if (navLinksEl.scrollWidth > navLinksEl.clientWidth) {
                navbarEl.classList.add('has-overflow');
            } else {
                navbarEl.classList.remove('has-overflow');
            }
        }

        let resizeTimer;
        window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(checkNavOverflow, 150); });
        window.addEventListener('load', () => { checkNavOverflow(); setTimeout(checkNavOverflow, 120); });
        document.addEventListener('DOMContentLoaded', () => { setTimeout(checkNavOverflow, 80); });

        // Re-check after fonts/images settle in
        setTimeout(checkNavOverflow, 400);

        checkNavOverflow();
    })();


    // Form submissions with defensive checks
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', function(e) { e.preventDefault(); alert('Login functionality would be implemented here.'); closeAuthModal(); });
    const signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', function(e) { e.preventDefault(); alert('Sign up functionality would be implemented here.'); closeAuthModal(); });

    // Booking form (Tours-travles page)
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const destinationInput = document.getElementById('destination');
            const destVal = destinationInput ? destinationInput.value : '';
            alert('Search functionality would be implemented here. Would search for: ' + destVal);
        });
    }

    // News ticker functionality (if present)
    const newsItems = document.querySelectorAll('.news-item');
    const newsPrev = document.querySelector('.news-prev');
    const newsNext = document.querySelector('.news-next');
    if (newsItems.length > 0 && newsPrev && newsNext) {
        let currentItem = 0;
        newsItems.forEach((item, index) => { if (index !== 0) item.style.display = 'none'; });
        newsNext.addEventListener('click', function() { newsItems[currentItem].style.display = 'none'; currentItem = (currentItem + 1) % newsItems.length; newsItems[currentItem].style.display = 'block'; });
        newsPrev.addEventListener('click', function() { newsItems[currentItem].style.display = 'none'; currentItem = (currentItem - 1 + newsItems.length) % newsItems.length; newsItems[currentItem].style.display = 'block'; });
        setInterval(() => { newsItems[currentItem].style.display = 'none'; currentItem = (currentItem + 1) % newsItems.length; newsItems[currentItem].style.display = 'block'; }, 10000);
    }

    // Keep the CSS variable --header-height in sync with actual header height
    function updateHeaderHeight() {
        const header = document.querySelector('header');
        if (!header) return;
        const height = header.offsetHeight + 'px';
        document.documentElement.style.setProperty('--header-height', height);
    }

    // Initialize and keep in sync on resize
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('authModal');
    if (modal && event.target == modal) closeAuthModal();
});

// Close modal with ESC
window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('authModal');
        if (modal && modal.style.display === 'block') closeAuthModal();
    }
});