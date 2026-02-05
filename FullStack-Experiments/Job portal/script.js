
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

    // --- Dynamic Job List ---
    const jobList = document.getElementById('job-list');
    const jobCountElement = document.getElementById('job-count');
    let jobs = [];

    // Helper: Render jobs
    function renderJobs() {
        jobList.innerHTML = '';
        jobs.forEach((job, idx) => {
            const article = document.createElement('article');
            article.className = 'job-card';
            article.innerHTML = `
                <header>
                    <img alt="${job.company} Logo" src="https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=random" width="50" />
                    <h3>${job.title}</h3>
                    <p>Company: ${job.company}</p>
                </header>
                <ul>
                    <li><strong>Experience:</strong> ${job.experience}</li>
                    <li><strong>Salary:</strong> ${job.salary}</li>
                    <li><strong>Location:</strong> ${job.location}</li>
                    <li><strong>Tags:</strong> ${job.tags}</li>
                </ul>
                <p>${job.description}</p>
                <footer>
                    <button class="apply-btn" data-idx="${idx}">Apply</button>
                    <button class="delete-btn" data-idx="${idx}">Delete</button>
                </footer>
            `;
            jobList.appendChild(article);
        });
        updateJobCount();
        addJobCardListeners();
    }

    // Helper: Update job count
    function updateJobCount() {
        if (jobCountElement) {
            jobCountElement.textContent = `Featured Jobs (${jobs.length})`;
        }
    }

    // Helper: Add listeners to job cards
    function addJobCardListeners() {
        // Apply button (one-time click)
        const applyBtns = document.querySelectorAll('.apply-btn');
        applyBtns.forEach(btn => {
            btn.onclick = function() {
                if (!btn.disabled) {
                    btn.textContent = 'Applied!';
                    btn.disabled = true;
                    btn.style.background = '#059669';
                }
            };
        });
        // Delete job
        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.onclick = function() {
                const idx = parseInt(btn.getAttribute('data-idx'));
                jobs.splice(idx, 1);
                renderJobs();
            };
        });
        // Hover UI effect for job cards (extra visual feedback)
        const jobCards = document.querySelectorAll('.job-card');
        jobCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                card.style.boxShadow = '0 12px 24px -10px #10b98155';
                card.style.transform = 'translateY(-4px) scale(1.01)';
                card.style.borderColor = '#10b981';
            });
            card.addEventListener('mouseleave', function() {
                card.style.boxShadow = '';
                card.style.transform = '';
                card.style.borderColor = '';
            });
        });
    }

    // Add job form
    const addJobForm = document.getElementById('add-job-form');
    if (addJobForm) {
        addJobForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Input validation
            const title = document.getElementById('job-title').value.trim();
            const company = document.getElementById('company').value.trim();
            const experience = document.getElementById('job-experience').value.trim();
            const salary = document.getElementById('salary').value.trim();
            const location = document.getElementById('job-location').value.trim();
            const tags = document.getElementById('tags').value.trim();
            const description = document.getElementById('description').value.trim();
            if (!title || !company || !experience || !salary || !location || !description) {
                alert('Please fill in all required fields.');
                return;
            }
            jobs.push({ title, company, experience, salary, location, tags, description });
            renderJobs();
            addJobForm.reset();
        });
    }

    // --- End Dynamic Job List ---

    // ...existing code...

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
        // ...existing code...
    }

    // Add hover effect sound (visual feedback) for submit and links
    const buttons = document.querySelectorAll('input[type="submit"], article footer a, #add-job-form button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Remove legacy job count update and log
    // ...existing code...
});