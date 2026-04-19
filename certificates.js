const certifications = [
    
    {
        title: "Python Programming",
        issuer: "Udemy",
        image: "python.png",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ab0a5b16-b289-4424-98bf-6fb84081db52.pdf",
        linkText: "Verify",
        isPdf: false,
        category: "Programing"
    },
     {
        title: "Java for Beginners",
        issuer: "Udemy",
        image: "java.png",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9df1665a-0bc8-46ac-a5db-9bc1ed8f0d24.pdf",
        linkText: "Verify",
        isPdf: false,
        category: "Programing"
    },
     {
        title: "Data Analytics",
        issuer: "Deloitte",
        image: "data.png",
        link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_X4XcJybxKogrQqQct_1764260544100_completion_certificate.pdf",
        linkText: "Verify",
        isPdf: false,
        category: "Data Analytics"
    },
    
];

function renderCertifications() {
    const container = document.getElementById('certifications-container');
    if (!container) return;
    container.innerHTML = '';

    const grouped = certifications.reduce((acc, cert) => {
        const cat = cert.category || 'Other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(cert);
        return acc;
    }, {});

    for (const category in grouped) {
        const catSection = document.createElement('div');
        catSection.className = 'mb-16';
        catSection.innerHTML = `<h3 class="text-3xl font-bold text-gray-900 dark:text-gray-200 text-center mb-8">${category}</h3>`;

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

        grouped[category].forEach((cert, index) => {
            const icon = cert.isPdf ? 'file-text' : 'external-link';
            const linkColor = cert.isPdf ? 'bg-gray-600 hover:bg-gray-700' : 'bg-purple-600 hover:bg-purple-700';
            const isHidden = index >= 3 ? 'hidden extra-cert' : '';

            grid.innerHTML += `
                <div class="glow-card bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col h-full shadow-lg ${isHidden}">
                    <img src="${cert.image}" alt="${cert.title}" class="w-full h-40 object-cover rounded-md mb-4 border border-gray-300 dark:border-gray-500">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex-grow">${cert.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Issued by: ${cert.issuer}</p>
                    <div class="mt-auto">
                        <a href="${cert.link}" target="_blank" class="inline-flex items-center px-4 py-2 ${linkColor} text-white font-medium rounded-lg transition-all w-full justify-center">
                            ${cert.linkText} <i data-lucide="${icon}" class="w-4 h-4 ml-2"></i>
                        </a>
                    </div>
                </div>`;
        });

        catSection.appendChild(grid);

        if (grouped[category].length > 3) {
            const btnContainer = document.createElement('div');
            btnContainer.className = 'text-center mt-8';
            const seeMoreBtn = document.createElement('button');
            seeMoreBtn.className = 'px-6 py-2 bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-400/50 rounded-full hover:bg-blue-600 hover:text-white transition-all font-semibold';
            seeMoreBtn.textContent = 'See More...';
            
            seeMoreBtn.onclick = () => {
                const extras = grid.querySelectorAll('.extra-cert');
                const isShowing = extras[0].classList.contains('hidden');
                
                extras.forEach(el => el.classList.toggle('hidden'));
                seeMoreBtn.textContent = isShowing ? 'See Less' : 'See More...';
            };
            
            btnContainer.appendChild(seeMoreBtn);
            catSection.appendChild(btnContainer);
        }

        container.appendChild(catSection);
    }
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', renderCertifications);