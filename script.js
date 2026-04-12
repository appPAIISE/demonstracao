const paywall = document.getElementById('paywall');
let temporizadorBloqueio;

// Função chamada quando o utilizador clica em "Assistir Demonstração"
function startExperience() {
    // 1. Desliza suavemente até ao vídeo
    document.getElementById('main-player').scrollIntoView({ behavior: 'smooth' });
    
    // 2. Limpa qualquer contagem anterior (Isto impede o bug de abrir várias vezes)
    clearTimeout(temporizadorBloqueio);
    
    // 3. Inicia o cronómetro EXATO. Não liga a play ou pause.
    // 300000 = 5 minutos. Muda este número para o tempo que quiseres.
    temporizadorBloqueio = setTimeout(() => {
        paywall.style.display = 'flex';
    }, 10); 
}

// Função chamada quando o utilizador clica em "Continuar a ver teste"
function resumeVideo() {
    // 1. Esconde a oferta
    paywall.style.display = 'none';
    
    // 2. Recomeça a contagem para voltar a mostrar a oferta passada a mesma quantidade de tempo
    clearTimeout(temporizadorBloqueio);
    temporizadorBloqueio = setTimeout(() => {
        paywall.style.display = 'flex';
    }, 300000); // <-- Podes mudar este tempo também, se quiseres.
}