# Passaggi Logici

## MILESTONE 0
1. Creare un array di oggetti chiamato `teamMembers`.
2. Ogni oggetto nell'array rappresenta un membro del team con le seguenti proprietà:
   - `nome`: il nome del membro del team.
   - `ruolo`: il ruolo del membro del team.
   - `foto`: la stringa della foto del membro del team.

## MILESTONE 1
1. Utilizzare il metodo `forEach` per iterare su ogni oggetto nell'array `teamMembers`.
2. Per ogni membro del team, stampare su console le informazioni di `nome`, `ruolo` e `foto` utilizzando `console.log`.

## MILESTONE 2
1. Selezionare l'elemento del DOM con `id="team-container"` e salvarlo in una variabile chiamata `teamContainer`.
2. Utilizzare il metodo `forEach` per iterare su ogni oggetto nell'array `teamMembers`.
3. Per ogni membro del team:
   - Creare un nuovo elemento `div`.
   - Impostare il contenuto testuale del `div` con le informazioni di `nome`, `ruolo` e `foto`.
   - Aggiungere il `div` come figlio dell'elemento `teamContainer`.