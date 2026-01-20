document.addEventListener('DOMContentLoaded', function () {

    // =========================================================
    // 1. HERO CAROUSEL (Fundo dinâmico + Kickstart rápido)
    // =========================================================
    var heroCarouselElement = document.getElementById('heroCarousel');
    var heroSection = document.getElementById('hero');

    if (heroCarouselElement) {
        // Inicializa APENAS o Hero Carousel manualmente
        var heroInstance = new bootstrap.Carousel(heroCarouselElement, {
            interval: 3500, // Tempo padrão dos slides
            pause: false,   // Não para com o mouse
            ride: false     // Não inicia automático (vamos iniciar abaixo)
        });

        // Inicia o ciclo
        heroInstance.cycle();

        // KICKSTART: Força a primeira troca rápida (1.2s) APENAS no Hero
        setTimeout(function() {
            heroInstance.next(); 
        }, 1200);

        // Lógica de trocar o fundo da section
        if (heroSection) {
            heroCarouselElement.addEventListener('slide.bs.carousel', function (e) {
                var nextSlide = e.relatedTarget;
                var bgImage = nextSlide.getAttribute('data-bg');
                if (bgImage) {
                    heroSection.style.backgroundImage = 'url(' + bgImage + ')';
                }
            });
        }
    }


    // =========================================================
    // 3. LÓGICA DA NAVBAR (Fechar menu no mobile)
    // =========================================================
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link, .btn-contact');
    var menuToggle = document.getElementById('navbarNav'); 
    var navbarToggler = document.querySelector('.navbar-toggler'); 

    if (menuToggle && navbarToggler) {
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (menuToggle.classList.contains('show')) {
                    navbarToggler.click(); 
                }
            });
        });
    }

});