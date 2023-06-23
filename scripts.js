
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 190 * i);
    });
}

const titulo2 = document.querySelector('.mainh2');
const titulo3 = document.querySelector('.ling');
typeWriter(titulo2)
typeWriter(titulo3)


window.sr = ScrollReveal({ reset: true });

sr.reveal('.sobre1', { duration: 1000 });
sr.reveal('.sobre2', { duration: 1000 });
sr.reveal('.bannert', { duration: 1000 });
sr.reveal('.formbanner', { duration: 1000 });
sr.reveal('.bannercont3', { duration: 1000 });