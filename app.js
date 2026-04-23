document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Injection: Contact
    document.getElementById('logo').textContent = portfolioData.site.logoText;
    document.getElementById('hero-title').setAttribute('data-target', portfolioData.hero.title);
    document.getElementById('hero-subtitle').setAttribute('data-target', portfolioData.hero.subtitle);

    document.getElementById('contact-email').textContent = portfolioData.site.email;
    document.getElementById('contact-email').href = `mailto:${portfolioData.site.email}`;

    document.getElementById('contact-ig').textContent = `Instagram / ${portfolioData.site.instagramHandle}`;
    document.getElementById('contact-ig').href = portfolioData.site.instagramUrl;

    // Construct the About section dynamically with the new lists framework
    const aboutContainer = document.getElementById('about-content');
    /* === 使用者請注意：若要更改 About 區塊的標題、內文顏色與大小，請修改下方的 style="..." 裡面的 CSS 數值 === * <h2> (標題)、<p> (內文) 以及 <li> (列表項目)*/
    let aboutHtml = `<h2 style="font-size: 2rem; font-weight: 600; text-transform: uppercase; margin-bottom: 30px;">${portfolioData.about.title}</h2>
                     <p style="font-size: 1rem; font-weight: 400; max-width: 800px; margin-bottom: 60px; line-height: 1.6;">${portfolioData.about.description}</p>`;

    const renderList = (title, items) => {
        if (!items || items.length === 0) return '';
        /* === 若要修改各個列表（如工作經驗、學歷）的副標題與項目文字樣式，請修改下方的 style="..." === */
        let listStr = `<div style="margin-bottom: 40px; margin-right: 20px;">
                          <h3 style="font-size: 1rem; font-weight: 400; color: #666; text-transform: uppercase; margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 5px; display: inline-block;">${title}</h3>
                          <ul style="list-style: none; padding: 0;">`;
        items.forEach(item => {
            listStr += `<li style="font-size: 1rem; font-weight: 400; margin-bottom: 12px; color: #000000ff;">${item}</li>`;
        });/*更動學歷的內文*/
        listStr += `</ul></div>`;
        return listStr;
    };

    aboutHtml += `<div class="about-grid" style="display: flex; flex-wrap: wrap; justify-content: flex-start; gap: 4vw;">
                    ${renderList('Work Experience', portfolioData.about.experience)}
                    ${renderList('Education', portfolioData.about.education)}
                    ${renderList('Skills', portfolioData.about.skills)}
                  </div>`;

    aboutContainer.innerHTML = aboutHtml;


    // 2. Custom Neon Cursor
    const cursor = document.getElementById('custom-cursor');
    const neonColors = ['#00ff2fff', '#ff00cc', '#00ccff', '#00ffcc', '#ff6004ff'];

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const addCursorHover = () => {
        cursor.classList.add('hover');
        cursor.style.backgroundColor = neonColors[Math.floor(Math.random() * neonColors.length)];
    };
    const removeCursorHover = () => {
        cursor.classList.remove('hover');
        cursor.className = 'custom-cursor';
        cursor.style.backgroundColor = '#ccff00';
    };

    const attachHovers = () => {
        document.querySelectorAll('a, button, .gallery-block-image, .lightbox-nav-zone, .nav-link, .logo').forEach(el => {
            el.removeEventListener('mouseenter', addCursorHover);
            el.removeEventListener('mouseleave', removeCursorHover);
            el.addEventListener('mouseenter', addCursorHover);
            el.addEventListener('mouseleave', removeCursorHover);
        });
    }

    // Custom Smooth Scroll for Anchor Links
    document.querySelectorAll('.nav-link, .logo').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1000; // ★ 您可以修改這個毫秒數來決定網頁滑動的速度 (1200 = 1.2秒)
                    let start = null;

                    window.requestAnimationFrame(function step(timestamp) {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;

                        // Easing function (easeInOutCubic) 給予滑順的加減速物理感
                        const easeInOutCubic = p => p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
                        const easeProgress = easeInOutCubic(Math.min(progress / duration, 1));

                        window.scrollTo(0, startPosition + distance * easeProgress);
                        if (progress < duration) window.requestAnimationFrame(step);
                    });
                }
            }
        });
    });

    // 3. Scramble Effect (Updated for non-sequential, random completion)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    const scrambleElements = document.querySelectorAll('.scramble-text');

    scrambleElements.forEach(el => {
        const targetText = el.getAttribute('data-target');
        el.innerHTML = '';

        const totalFrames = 50; // 66 frames * 30ms interval = ~2s
        let frame = 0;

        // Randomly assign a "freeze frame" for each character index
        const freezeFrames = targetText.split('').map(() => Math.floor(Math.random() * (totalFrames - 10))); // Finish a bit early so it settles

        const interval = setInterval(() => {
            el.innerHTML = targetText.split('').map((letter, index) => {
                if (letter === ' ') return ' ';
                if (letter === '\\n' || letter === '\n') return '<br>';

                // If the current frame has surpassed this character's designated stop frame, show the solid letter
                if (frame >= freezeFrames[index]) {
                    return letter;
                }

                // Otherwise, keep randomly scrambling
                const randColor = neonColors[Math.floor(Math.random() * neonColors.length)];
                return `<span style="color: ${randColor}">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
            }).join('');

            if (frame >= totalFrames) clearInterval(interval);
            frame++;
        }, 30);
    });

    // 4. Works Gallery Elements
    const worksGrid = document.getElementById('works-grid');
    const imagesGrid = document.getElementById('images-grid');
    const galleryOverlay = document.getElementById('gallery-overlay');
    const galleryNavTitle = document.getElementById('gallery-nav-title');
    const galleryClickArea = document.getElementById('gallery-click-area');
    const galleryClose = document.getElementById('gallery-close');

    // 5. Lightbox Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxClose = document.getElementById('lightbox-close');
    const lbLeft = document.getElementById('lightbox-left');
    const lbRight = document.getElementById('lightbox-right');

    let currentProjectIndex = 0;

    // Lightbox slider state -> Array of objects { src, caption }
    let currentLbImages = [];
    let currentLbIndex = 0;

    portfolioData.works.forEach((work, index) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `
            <div class="grid-image-container">
                <img src="${work.image}" class="grid-image-base" alt="${work.title}" loading="lazy">
                ${work.imageHover ? `<img src="${work.imageHover}" class="grid-image-hover" alt="${work.title} hover" loading="lazy">` : ''}
            </div>
            <div class="grid-info">
                <h3>${work.title}</h3>
                <p>${work.category}</p>
            </div>
        `;

        item.addEventListener('mouseenter', addCursorHover);
        item.addEventListener('mouseleave', removeCursorHover);
        item.addEventListener('click', () => openGallery(index));
        worksGrid.appendChild(item);
    });

    // 4.5 Photography Grid Rendering
    if (portfolioData.images) {
        portfolioData.images.forEach((imgObj) => {
            const item = document.createElement('div');
            item.className = 'grid-item';
            item.innerHTML = `
                <div class="image-grid-item-inner">
                    <img src="${imgObj.cover}" class="grid-image" style="margin: 0; background-color: #eee;" alt="${imgObj.title}" loading="lazy">
                    <div class="image-grid-overlay">
                        <div class="image-grid-title">${imgObj.title}</div>
                    </div>
                </div>
            `;

            item.addEventListener('mouseenter', addCursorHover);
            item.addEventListener('mouseleave', removeCursorHover);

            item.addEventListener('click', () => {
                currentLbImages = imgObj.album || [{ src: imgObj.cover, caption: imgObj.title }];
                currentLbIndex = 0;

                updateLightboxUI();
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            imagesGrid.appendChild(item);
        });
    }

    const updateGalleryContent = () => {
        const work = portfolioData.works[currentProjectIndex];

        // Unified Top Bar Title
        galleryNavTitle.innerHTML = `${work.title} <span>/ ${work.category}</span>`;

        // Gather images for light box Slide View
        currentLbImages = [];
        if (work.content && work.content.length > 0) {
            work.content.forEach(b => {
                if (b.type === 'image') {
                    currentLbImages.push({
                        src: b.src,
                        caption: b.caption || work.title
                    });
                }
            });
        }
        if (currentLbImages.length === 0) currentLbImages.push({ src: work.image, caption: work.title });

        let html = '';

        // Dynamic Project Info Grid
        if (work.info && Object.keys(work.info).length > 0) {
            html += `<div class="project-info-grid">`;
            for (const [key, value] of Object.entries(work.info)) {
                html += `<div class="info-item"><h4>${key}</h4><p>${value}</p></div>`;
            }
            html += `</div>`;
        }

        // Free Layout Content
        if (work.content && work.content.length > 0) {
            work.content.forEach((block) => {
                const w = block.width || '100%';
                const mt = block.marginTop || '40px';
                let alignStyle = 'align-self: center;';
                if (block.align === 'left') alignStyle = 'align-self: flex-start;';
                if (block.align === 'right') alignStyle = 'align-self: flex-end;';

                const styleStr = `width: ${w}; margin-top: ${mt}; ${alignStyle}`;

                if (block.type === 'image') {
                    html += `<img src="${block.src}" class="gallery-block-image" style="${styleStr}" alt="Detail">`;
                } else if (block.type === 'text') {
                    html += `<div class="gallery-block-text" style="${styleStr}">${block.text}</div>`;
                }
            });
        }

        galleryClickArea.innerHTML = html;

        // Bind Lightbox Triggers
        galleryClickArea.querySelectorAll('.gallery-block-image').forEach(img => {
            img.addEventListener('click', (e) => {
                const srcIdx = currentLbImages.findIndex(lbImg => lbImg.src === img.getAttribute('src'));
                currentLbIndex = srcIdx > -1 ? srcIdx : 0;

                updateLightboxUI();
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        attachHovers();
        galleryClickArea.scrollTop = 0;
    };

    const updateLightboxUI = () => {
        const lbObj = currentLbImages[currentLbIndex];
        lightboxImg.src = lbObj.src;
        lightboxTitle.textContent = lbObj.caption;
    };

    const openGallery = (index) => {
        currentProjectIndex = index;
        updateGalleryContent();
        galleryOverlay.classList.remove('hidden');
        galleryOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Close Modal logic
    const closeGallery = () => {
        galleryOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };
    galleryClose.addEventListener('click', closeGallery);

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        if (!galleryOverlay.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    };
    lightboxClose.addEventListener('click', closeLightbox);
    document.getElementById('lightbox-bg').addEventListener('click', closeLightbox);

    // ESC Key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox.classList.contains('active')) {
                closeLightbox();
            } else if (galleryOverlay.classList.contains('active')) {
                closeGallery();
            }
        } else if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                if (currentLbImages.length > 0) {
                    currentLbIndex = (currentLbIndex - 1 + currentLbImages.length) % currentLbImages.length;
                    updateLightboxUI();
                }
            }
            else if (e.key === 'ArrowRight') {
                if (currentLbImages.length > 0) {
                    currentLbIndex = (currentLbIndex + 1) % currentLbImages.length;
                    updateLightboxUI();
                }
            }
        }
    });

    // Lightbox Slide Interactions
    lbLeft.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentLbImages.length === 0) return;
        currentLbIndex = (currentLbIndex - 1 + currentLbImages.length) % currentLbImages.length;
        updateLightboxUI();
    });

    lbRight.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentLbImages.length === 0) return;
        currentLbIndex = (currentLbIndex + 1) % currentLbImages.length;
        updateLightboxUI();
    });
});
