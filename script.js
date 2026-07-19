document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Tutup menu saat link diklik (UX yang baik)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 2. Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Animations (Intersection Observer)
    // Fungsi ini membuat elemen muncul pelan-pelan saat kita scroll ke bawah
    const observerOptions = {
        threshold: 0.2 // Elemen harus 20% terlihat baru animasi jalan
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi jalan sekali
            }
        });
    }, observerOptions);

    // Target semua elemen yang punya class animasi
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Form Handling (Simulasi)
    const form = document.getElementById('myForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Disini biasanya kode backend. Untuk demo, kita pakai alert saja.
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Mengirim...';
        
        setTimeout(() => {
            alert('Terima kasih! Pesan Anda telah terkirim. Saya akan menghubungi Anda segera.');
            form.reset();
            btn.innerText = originalText;
        }, 1500);
    });
});