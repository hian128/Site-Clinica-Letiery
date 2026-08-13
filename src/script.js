// ===============================
// ROLAGEM SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// ===============================
// ANIMAÇÕES AO ROLAR
// ===============================

const elementos = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add('active');

        }

    });

}, {
    threshold: 0.3,
    rootMargin: "0px 0px -80px 0px"
});


elementos.forEach((elemento) => {
    observer.observe(elemento);
});
