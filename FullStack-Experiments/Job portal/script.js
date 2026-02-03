// Job Portal Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Job Portal loaded successfully!');
    
    // Add active class to current nav item
    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            navItems.forEach(nav => nav.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
    
    // Smooth scroll animation for job cards
    const jobCards = document.querySelectorAll('article');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    jobCards.forEach(card => observer.observe(card));
    
    // Search form validation
    const searchForm = document.querySelector('form[action="/search"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const skillsInput = document.getElementById('skills');
            if (!skillsInput.value.trim()) {
                e.preventDefault();
                skillsInput.style.borderColor = '#ef4444';
                skillsInput.focus();
                setTimeout(() => {
                    skillsInput.style.borderColor = '';
                }, 2000);
                alert('Please enter skills, titles, or companies to search!');
            }
        });
    }
    
    // Filter functionality
    const checkboxes = document.querySelectorAll('aside input[type="checkbox"]');
    const radioButtons = document.querySelectorAll('aside input[type="radio"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log(`Filter changed: ${this.parentElement.textContent.trim()}`);
            applyFilters();
        });
    });
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            console.log(`Salary filter: ${this.parentElement.textContent.trim()}`);
            applyFilters();
        });
    });
    
    function applyFilters() {
        // Get selected filters
        const selectedLocations = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.parentElement.textContent.trim().toLowerCase());
        
        const selectedSalary = Array.from(radioButtons)
            .find(rb => rb.checked);
        
        console.log('Filters applied:', {
            locations: selectedLocations,
            salary: selectedSalary ? selectedSalary.parentElement.textContent.trim() : 'Any'
        });
        
        // Visual feedback
        jobCards.forEach(card => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '0.5';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 300);
        });
    }
    
    // Add hover effect sound (visual feedback)
    const buttons = document.querySelectorAll('input[type="submit"], article footer a');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Dynamic job count update
    const jobCountElement = document.querySelector('section h2');
    if (jobCountElement && jobCountElement.textContent.includes('Featured Jobs')) {
        const count = jobCards.length;
        jobCountElement.textContent = `Featured Jobs (${count})`;
    }
    
    console.log(`Loaded ${jobCards.length} job postings`);
});