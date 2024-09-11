const apiUrl = 'https://wizard-world-api.herokuapp.com/wizards';

async function fetchWizards() {
    try {
        const response = await fetch(apiUrl);
        const wizards = await response.json();
        displayWizards(wizards);
    } catch (error) {
        console.error('Erro ao buscar bruxos:', error);
    }
}

function displayWizards(wizards) {
    const wizardsList = document.getElementById('wizards-list');
    wizardsList.innerHTML = '';

    if (!Array.isArray(wizards)) {
        wizardsList.innerText = 'Nenhum bruxo encontrado.';
        return;
    }

    wizards.forEach(wizard => {
        const wizardCard = document.createElement('div');
        wizardCard.className = 'wizard-card';
        
        const elixirName = (wizard.elixirs && Array.isArray(wizard.elixirs) && wizard.elixirs.length > 0)
            ? wizard.elixirs[0].name
            : 'Desconhecida';

        wizardCard.innerHTML = `
            <h3>${wizard.lastName || 'Nome não disponível'}</h3>
            <p><strong>Elixir:</strong> ${elixirName}</p>
        `;
        wizardsList.appendChild(wizardCard);
    });
}

fetchWizards();

const apiUrl2 = 'https://wizard-world-api.herokuapp.com/spells';

async function fetchspells() {
    try {
        const response = await fetch(apiUrl2);
        const spells = await response.json();
        displaySpells(spells);
    } catch (error) {
        console.error('Erro ao buscar feitiços:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const colors = ['#000000', '#010030'];
    let index = 0;

    function changeColor() {
        body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }

    setInterval(changeColor, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('titulo');
    const cores = ['#0011FF', '#33FF17', '#FF0000'];

    let indice = 0;

    function mudarCor() {
        h1.style.color = cores[indice];
        indice = (indice + 1) % cores.length;
    }

    setInterval(mudarCor, 2000);
});
