document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cardForm'); //Seleciona o formulário
    const card = document.getElementById('card'); //Seleciona o cartão 
    const messageInput = document.getElementById('message'); //Seleciona o campo de texto da mensagem
    const messageText = document.getElementById('messageText'); //Seleciona o texto do cartão 
    const imageUpload = document.getElementById('imageUpload');
    const imageUrlInput = document.getElementById('imageUrl');
    const cardImage = document.getElementById('cardImage');
    form.addEventListener('input', function() { //Adiciona um evento de entrada ao formulário
      const backgroundColor = document.getElementById('backgroundColor').value; // Obtém o valor da cor de fundo
      const borderColor = document.getElementById('borderColor').value; //Obtém o valor da cor da borda
      const textColor = document.getElementById('textColor').value; //Obtém o valor da cor do texto
      const message = messageInput.value; //Obtém o valor da mensagem do campo de texto
      const imageUrl = imageUrlInput.value;
      card.style.backgroundColor = backgroundColor; //Define a cor de fundo do cartão
      card.style.borderColor = borderColor; //Define a cor da borda do cartão
      card.style.color = textColor; //Define a cor do texto do cartão
      messageText.textContent = message; //Define o texto do cartão
      if (imageUpload.files && imageUpload.files[0]) { //Verifica se há arquivos selecionados no input de upload de imagem
        const reader = new FileReader();// Cria um novo objeto FileReader para ler o conteúdo do arquivo
        reader.onload = function(e) {  // Define uma função para ser executada quando a leitura do arquivo for concluída
          cardImage.src = e.target.result; // Define o src da imagem do cartão como o resultado da leitura do arquivo
        }
        reader.readAsDataURL(imageUpload.files[0]); // Inicia a leitura do arquivo como uma URL de dados (data URL)
      } else if (imageUrlInput.value.trim() !== '') {  // Se não houver arquivos selecionados, verifica se há uma URL de imagem inserida
        cardImage.src = imageUrlInput.value;   // Define o src da imagem do cartão como a URL inserida
      } else {  // Se nenhum arquivo ou URL de imagem for fornecido, limpa a imagem do cartão
        cardImage.src = ''; // Limpa a imagem do cartão
      }
    });
  });