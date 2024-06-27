document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // evita o envio padrão do formulário

    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    var messageElement = document.getElementById('message');

    if (campoB > campoA) {
        messageElement.textContent = 'Formulário válido! B é maior que A.';
        messageElement.className = 'message valid';
    } else {
        messageElement.textContent = 'Formulário inválido! B precisa ser maior que A.';
        messageElement.className = 'message invalid';
    }

    messageElement.style.display = 'block'; // mostrar a mensagem ao usuário
});
