// Initialize Lucide icons
lucide.createIcons();

// Footer Year Update
const yearEl = document.getElementById('current-year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Typing Animation Logic
if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
        strings: ['Competitive Programmer', 'Web Developer', 'Software Engineer', 'Problem Solver', 'AI Enthusiast',''],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
}

// Data for the projects
const projects = [
    {
        title: "Age Calculator Web App",
        description: "A simple Age Calculator Web app built using HTML, CSS, and JavaScript.",
        longDescription: `Age calculator\nDeveloped a high-precision Age Calculator featuring a sleek, responsive interface that provides instantaneous chronological data. By implementing complex date-logic algorithms, the tool calculates age down to the exact year, month, and day, ensuring a seamless and error-free user experience across all devices.`,
        image: "agecalc.png",
        liveDemo: "https://kpsuthar.github.io/age-calculator/",
        
        technologies: ["HTML5", "CSS3", "JavaScript","Git"]
    },
   
    {
        title: "Text to QR generator",
        description: "A Qr generator Web App built using HTML, CSS, and JavaScript.",
        longDescription: "Architected a high-fidelity QR generation engine utilizing asynchronous API integration to provide real-time data encoding. The project features a cutting-edge Glassmorphism UI, leveraging CSS3 backdrop filters and dynamic blurring effects to deliver a premium user experience. Optimized for performance and cross-browser compatibility, the tool handles complex URL structures and text-to-image rendering with 100% data integrity",
        image: "qr.png",
        liveDemo: "https://kpsuthar.github.io/Qr/",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Expence Dashbord",
        description: "A classic Expence Dashbord built with HTML, CSS, and JavaScript.",
        longDescription: "Expense dashboard is a premium financial tracking dashboard built with a modern Glassmorphism UI, focusing on high-end aesthetics and seamless user experience. It leverages JavaScript's Array Methods to calculate real-time balances, income, and expenses while ensuring data persistence through LocalStorage. This project demonstrates a strong command of DOM manipulation and CSS backdrop-filter effects to create a professional, data-driven web application",
        image: "expence.png",
        liveDemo: "https://kpsuthar.github.io/expence/",
      
        technologies: ["HTML", "CSS", "JavaScript",]
    },
    
];

// --- Modal Functionality ---
function openProjectDetails(index) {
    const project = projects[index];
    const modal = document.getElementById('project-modal');
    
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.longDescription || project.description;
    
    const imgElement = document.getElementById('modal-image');
    if (project.image) {
        imgElement.src = project.image;
        imgElement.style.display = 'block';
    } else {
        imgElement.style.display = 'none';
    }

    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = project.technologies.map(tech => 
        `<span class="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-800">${tech}</span>`
    ).join('');

    // Dynamic Button Logic for Modal
    const modalLive = document.getElementById('modal-live');
    

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// --- Render Projects Function ---
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map((p, index) => `
        <div class="glow-card bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col h-full shadow-lg transition-all duration-300">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">${p.title}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">${p.description}</p>
            <div class="flex flex-col space-y-3 mt-auto">
                <button onclick="openProjectDetails(${index})" class="w-full py-2 bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-600/50 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all">
                    View Details
                </button>
                <div class="flex space-x-2">
                    ${p.liveDemo ? `<a href="${p.liveDemo}" target="_blank" class="flex-1 text-center py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-gray-900 dark:text-white text-sm transition-colors">Demo</a>` : ''}
                    
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

// Bio "See More" Functionality
const seeMoreBtn = document.getElementById('see-more-btn');
const bioMore = document.getElementById('bio-more');

if (seeMoreBtn && bioMore) {
    seeMoreBtn.addEventListener('click', () => {
        if (bioMore.classList.contains('hidden')) {
            bioMore.classList.remove('hidden');
            seeMoreBtn.textContent = 'See Less';
        } else {
            bioMore.classList.add('hidden');
            seeMoreBtn.textContent = 'See More...';
        }
    });
}

// Glow Card Mousemove Effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glow-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ==========================================
// Dark/Light Mode Toggle Logic (Global)
// ==========================================
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    if (document.documentElement.classList.contains('dark')) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function() {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    });
}

// ==========================================
// EmailJS Contact Form Logic

// ==========================================
// 1. Initialize immediately
(function() {
    emailjs.init("452q9_LMzj8wUpFVN"); 
})();

window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            // 1. Send the first email (To You - template_l7fs4rv)
            emailjs.sendForm('service_hrbw0wk', 'template_l7fs4rv', this)
                .then(function() {
                    console.log("Admin email sent!");
                    
                    // 2. Send the second email (To User - template_g4d2eqk)
                    // We return this so the next .then waits for it
                    return emailjs.sendForm('service_hrbw0wk', 'template_g4d2eqk', contactForm);
                })
                .then(function(response) {
                    // This runs only after BOTH emails are successful
                    console.log("SUCCESS!", response.status, response.text);
                    
                    formStatus.innerText = "✅ Message sent and confirmation sent!";
                    formStatus.className = "text-center mt-4 text-green-500 block";
                    formStatus.style.display = "block"; 
                    
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.error("FAILED...", error);
                    formStatus.innerText = "❌ Something went wrong.";
                    formStatus.className = "text-center mt-4 text-red-500 block";
                    formStatus.style.display = "block";
                })
                .finally(function() {
                    submitBtn.innerText = "Send Message";
                    submitBtn.disabled = false;
                });
        });
    }
};