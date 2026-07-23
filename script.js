// ============================================
// 1. LOADER
// ============================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const texts = ['Loading Memories...', '❤️', 'Almost There...'];
    let i = 0;
    const interval = setInterval(() => {
        document.getElementById('loaderText').textContent = texts[i % texts.length];
        i++;
        if (i > 6) {
            clearInterval(interval);
            loader.classList.add('hide');
            setTimeout(() => { loader.style.display = 'none'; }, 800);
        }
    }, 400);
});

// ============================================
// 2. HERO CARD
// ============================================
const heroCard = document.getElementById('heroCard');
const mainContent = document.getElementById('mainContent');
const hero = document.getElementById('hero');

heroCard.addEventListener('click', () => {
    heroCard.style.transform = 'scale(0.95)';
    heroCard.style.opacity = '0';
    setTimeout(() => {
        hero.style.display = 'none';
        mainContent.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById('bgMusic').play().catch(() => {});
        revealSections();
    }, 400);
});

// ============================================
// 3. TIMER
// ============================================
const startDate = new Date('2024-03-08T00:00:00');
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    if (diff < 0) return;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
setInterval(updateTimer, 1000);
updateTimer();

// ============================================
// 4. GALLERY FULL-SCREEN
// ============================================
const galleryImages = document.querySelectorAll('.gallery-grid img');
const imageModal = document.getElementById('imageModal');
const expandedImg = document.getElementById('expandedImage');
const closeImage = document.getElementById('closeImage');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        expandedImg.src = img.src;
        imageModal.classList.add('show');
    });
});
closeImage.addEventListener('click', () => imageModal.classList.remove('show'));
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) imageModal.classList.remove('show');
});

// ============================================
// 5. SECRET LETTER
// ============================================
const openSecret = document.getElementById('openSecret');
const secretModal = document.getElementById('secretModal');
const closeModal = document.getElementById('closeModal');

openSecret.addEventListener('click', () => secretModal.classList.add('show'));
closeModal.addEventListener('click', () => secretModal.classList.remove('show'));
secretModal.addEventListener('click', (e) => {
    if (e.target === secretModal) secretModal.classList.remove('show');
});

// ============================================
// 6. MAKE A WISH (CONFETTI + HEARTS)
// ============================================
const wishBtn = document.getElementById('wishBtn');
wishBtn.addEventListener('click', function() {
    const emojis = ['❤️','💖','💕','💗','✨','🎉','🌸','💫'];
    for (let i = 0; i < 150; i++) {
        const el = document.createElement('div');
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.cssText = `
            position: fixed; left: ${Math.random() * 100}vw; top: -30px;
            font-size: ${18 + Math.random() * 28}px; pointer-events: none;
            z-index: 9999; transform: rotate(${Math.random() * 360}deg);
            animation: confettiFall ${3 + Math.random() * 3}s linear forwards;
        `;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 6000);
    }
    wishBtn.textContent = '🎉 Happy Birthday Zina ❤️';
    wishBtn.disabled = true;
    setTimeout(() => {
        wishBtn.textContent = '✨ Make a Wish';
        wishBtn.disabled = false;
    }, 4000);
});
// إضافة Keyframes للكونفيتي
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes confettiFall {
        0% { transform: translateY(-20px) rotate(0deg) scale(0.8); opacity: 0; }
        15% { opacity: 1; transform: translateY(20px) rotate(20deg) scale(1); }
        100% { transform: translateY(110vh) rotate(720deg) scale(0.6); opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);

// ============================================
// 7. MUSIC TOGGLE
// ============================================
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    }
});

// ============================================
// 8. TOP BUTTON
// ============================================
document.getElementById('topBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// 9. REVEAL ON SCROLL
// ============================================
function revealSections() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });
    sections.forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(30px)';
        sec.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(sec);
    });
}
