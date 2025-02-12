function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); // Tambah atau hapus class 'show'
}


// Highlight Menu Aktif Saat Navigasi
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelector(".nav-links a.active").classList.remove("active");
        this.classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const textArray = ["a Programmer", "a Designer", "a Web Developer", "a Gamer","a Web Designer"];
    let textIndex = 0; // Indeks kata
    let charIndex = 0; // Indeks huruf dalam kata
    let isDeleting = false; // Status apakah sedang menghapus
    let typingSpeed = 100; // Kecepatan mengetik default

    function typeEffect() {
        const currentText = textArray[textIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex--);
            typingSpeed = 50; // Kecepatan saat menghapus
        } else {
            textElement.textContent = currentText.substring(0, charIndex++);
            typingSpeed = 100; // Kecepatan saat mengetik
        }

        // **Tunggu sebelum mulai menghapus teks setelah selesai mengetik**
        if (!isDeleting && charIndex === currentText.length + 1) {
            typingSpeed = 1500; // Jeda sebelum mulai menghapus
            isDeleting = true;
        } 
        // **Tunggu sebelum mulai mengetik teks baru setelah penghapusan selesai**
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; // Pindah ke teks berikutnya
            typingSpeed = 500; // Jeda sebelum mulai mengetik teks baru
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect(); // Jalankan efek mengetik pertama kali
});



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-scale, .slide-up, .bounce-in, .blur-in");

    function handleScroll() {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible"); // Hilangkan efek saat keluar viewport
            }
        });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slide-in, .slide-in-left, .slide-in-right");

    const slideInObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show"); // Menghapus class saat elemen keluar dari viewport
                }
            });
        },
        { threshold: 0.2 } // Elemen akan muncul saat 20% terlihat di layar
    );

    elements.forEach(el => slideInObserver.observe(el));
});

const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector("#home");

window.addEventListener("scroll", function () {
    const heroHeight = heroSection.offsetHeight; // Ambil tinggi Hero Section
    const currentScroll = window.scrollY;

    if (currentScroll > heroHeight - 50) { 
        // Jika user scroll melewati Hero Section, sembunyikan navbar
        navbar.classList.add("hidden");
    } else {
        // Jika masih di Hero Section, tampilkan navbar
        navbar.classList.remove("hidden");
    }
});

