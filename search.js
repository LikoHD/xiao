function filterAssistants() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const assistantGrid = document.getElementById('assistantGrid');
    const assistantCards = assistantGrid.getElementsByClassName('assistant-card');

    for (let i = 0; i < assistantCards.length; i++) {
        const title = assistantCards[i].getElementsByClassName('assistant-title')[0];
        if (title.innerHTML.toUpperCase().includes(filter)) {
            assistantCards[i].style.display = '';
        } else {
            assistantCards[i].style.display = 'none';
        }
    }
}