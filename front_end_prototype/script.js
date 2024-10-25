const questions = {
    1: {
        text: "Questão 1: Qual é a capital da França?",
        options: ["Paris", "Roma", "Madrid", "Berlim"]
    },
    2: {
        text: "Questão 2: Qual é a fórmula da água?",
        options: ["CO2", "H2O", "NaCl", "C6H12O6"]
    },
    3: {
        text: "Questão 3: Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Rembrandt"]
    }
};

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const toggleBtn = document.getElementById('toggle-btn');

    sidebar.classList.toggle('closed');
    mainContent.classList.toggle('expanded');

    // Alternar visibilidade do botão "abrir menu"
    if (sidebar.classList.contains('closed')) {
        toggleBtn.style.display = 'block';
    } else {
        toggleBtn.style.display = 'none';
    }
}

function showQuestion(questionNumber) {
    const questionText = document.getElementById('question-text');
    const navItems = document.querySelectorAll('.nav-item');
    const questionOptions = document.getElementById('question-options');

    // Atualiza o texto da questão
    questionText.textContent = questions[questionNumber].text;

    // Remove a classe 'active' de todas as questões e adiciona na questão clicada
    navItems.forEach(item => item.classList.remove('active'));
    navItems[questionNumber - 1].classList.add('active');

    // Atualiza as opções de resposta
    questionOptions.innerHTML = ""; // Limpa as opções antigas
    questions[questionNumber].options.forEach((option, index) => {
        const optionWrapper = document.createElement('div');
        optionWrapper.classList.add('option-wrapper');
        optionWrapper.style.display = 'flex';
        optionWrapper.style.alignItems = 'center';

        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = String.fromCharCode(65 + index); // A, B, C...

        const optionText = document.createElement('span');
        optionText.style.marginLeft = '10px'; // Espaço entre círculo e texto da opção
        optionText.textContent = option;

        optionWrapper.appendChild(optionElement);
        optionWrapper.appendChild(optionText);

        optionWrapper.onclick = function () {
            selectOption(optionElement);
        };

        questionOptions.appendChild(optionWrapper);
    });
}


function selectOption(option) {
    const options = document.querySelectorAll('.option');
    
    // Remove a classe 'selected-option' de todas as opções e adiciona na opção clicada
    options.forEach(opt => opt.classList.remove('selected-option'));
    option.classList.add('selected-option');
}