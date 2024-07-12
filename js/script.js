// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
    {
        nome: 'Mario Rossi',
        ruolo: 'Developer',
        foto: 'mario.jpg'
    },
    {
        nome: 'Luigi Bianchi',
        ruolo: 'Designer',
        foto: 'luigi.jpg'
    },
    {
        nome: 'Anna Verdi',
        ruolo: 'Project Manager',
        foto: 'anna.jpg'
    },
    {
        nome: 'Laura Neri',
        ruolo: 'Tester',
        foto: 'laura.jpg'
    }
];

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
teamMembers.forEach(member => {
    console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
});

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
const teamContainer = document.getElementById('team-container');

teamMembers.forEach(member => {
    const memberInfo = document.createElement('div');
    memberInfo.textContent = `Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`;
    teamContainer.appendChild(memberInfo);
});
