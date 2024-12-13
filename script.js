// Adiciona um comentário à tela
function addComment(text) {
  const container = document.getElementById("comments-container");
  const commentElement = document.createElement("div");
  commentElement.textContent = text;
  commentElement.className = "comment";

  // Adiciona o comentário ao container
  container.appendChild(commentElement);

  // Remove o comentário após a animação
  setTimeout(() => {
    commentElement.remove();
  }, 5000); // Duração da animação
}

// Simula comentários para teste
function simulateComments() {
  const sampleComments = [
    "Olá, pessoal!",
    "Adorei esta ideia!",
    "Como faço para participar?",
    "Excelente apresentação!",
    "Vocês são incríveis!",
    "Onde posso saber mais?",
    "Fiquei impressionado com isto!",
    "Aguardo mais conteúdos assim!"
  ];

  let index = 0;
  setInterval(() => {
    addComment(sampleComments[index]);
    index = (index + 1) % sampleComments.length; // Recomeça quando acabar
  }, 1500); // Intervalo entre comentários
}

// Inicia a simulação
simulateComments();
