// ==================== CUSTOM DECKS ====================

// State
let customDecks = [];
let currentEditingDeckId = null;
let currentEditingCardId = null; // null = adding new card, string = editing existing
let customPracticeMode = null; // 'flip' or 'mc'
let customPracticeDeckId = null;
let customPracticeCards = [];
let customPracticeIndex = 0;
let customFlipRevealed = false;
let customFlipKnew = 0;
let customFlipMissed = 0;
let customMcCorrect = 0;
let customMcIncorrect = 0;
let customMcStreak = 0;
let customMcAnswered = false;
let customMcCurrentCard = null;

// ==================== CRUD ====================

function loadDecks() {
    const saved = localStorage.getItem('customDecks');
    if (saved) {
        customDecks = JSON.parse(saved);
    }
}

function saveDecks() {
    localStorage.setItem('customDecks', JSON.stringify(customDecks));
}

function createDeck() {
    const deck = {
        id: Date.now().toString(),
        name: 'New Deck',
        cards: [],
        createdAt: new Date().toISOString()
    };
    customDecks.push(deck);
    saveDecks();
    openDeckEditor(deck.id);
}

function deleteDeck(deckId) {
    if (!confirm('Delete this deck and all its cards?')) return;
    customDecks = customDecks.filter(d => d.id !== deckId);
    saveDecks();
    switchPage('decks');
}

function getDeck(deckId) {
    return customDecks.find(d => d.id === deckId);
}

function addCardToDeck(deckId, front, back) {
    const deck = getDeck(deckId);
    if (!deck) return;
    deck.cards.push({
        id: Date.now().toString(),
        front: front.trim(),
        back: back.trim()
    });
    saveDecks();
}

function updateCard(deckId, cardId, front, back) {
    const deck = getDeck(deckId);
    if (!deck) return;
    const card = deck.cards.find(c => c.id === cardId);
    if (!card) return;
    card.front = front.trim();
    card.back = back.trim();
    saveDecks();
}

function deleteCard(deckId, cardId) {
    const deck = getDeck(deckId);
    if (!deck) return;
    deck.cards = deck.cards.filter(c => c.id !== cardId);
    saveDecks();
}

// ==================== RENDERING ====================

function renderDeckList() {
    const deckListEl = document.getElementById('deck-list');
    const decksEmptyEl = document.getElementById('decks-empty');

    deckListEl.innerHTML = '';

    if (customDecks.length === 0) {
        decksEmptyEl.style.display = '';
        return;
    }

    decksEmptyEl.style.display = 'none';

    customDecks.forEach(deck => {
        const item = document.createElement('div');
        item.className = 'deck-item';
        item.innerHTML = `
            <div class="deck-item-content">
                <div class="deck-item-name">${escapeHtml(deck.name)}</div>
                <div class="deck-item-count">${deck.cards.length} card${deck.cards.length !== 1 ? 's' : ''}</div>
            </div>
            <div class="deck-item-arrow">→</div>
        `;
        item.addEventListener('click', () => openDeckEditor(deck.id));
        deckListEl.appendChild(item);
    });
}

function openDeckEditor(deckId) {
    currentEditingDeckId = deckId;
    switchPage('deck-editor');

    const deck = getDeck(deckId);
    if (!deck) return;

    const deckNameInput = document.getElementById('deck-name-input');
    deckNameInput.value = deck.name;

    renderCardList();
    updateStartPracticeButton();
}

function renderCardList() {
    const cardListEl = document.getElementById('card-list');
    const deck = getDeck(currentEditingDeckId);
    if (!deck) return;

    cardListEl.innerHTML = '';

    deck.cards.forEach(card => {
        const item = document.createElement('div');
        item.className = 'card-item';
        item.innerHTML = `
            <div class="card-item-content">
                <span class="card-item-front">${escapeHtml(card.front)}</span>
                <span class="card-item-separator">→</span>
                <span class="card-item-back">${escapeHtml(card.back)}</span>
            </div>
            <div class="card-item-actions">
                <button class="card-action-btn edit" title="Edit">✎</button>
                <button class="card-action-btn delete" title="Delete">✕</button>
            </div>
        `;
        item.querySelector('.edit').addEventListener('click', (e) => {
            e.stopPropagation();
            openCardEditor(card.id);
        });
        item.querySelector('.delete').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCard(currentEditingDeckId, card.id);
            renderCardList();
            updateStartPracticeButton();
        });
        cardListEl.appendChild(item);
    });
}

function updateStartPracticeButton() {
    const deck = getDeck(currentEditingDeckId);
    const btn = document.getElementById('start-deck-practice-btn');
    if (!deck || !btn) return;
    btn.disabled = deck.cards.length === 0;
}

// ==================== CARD EDITOR MODAL ====================

function openCardEditor(cardId) {
    currentEditingCardId = cardId || null;
    const modal = document.getElementById('card-editor-modal');
    const title = document.getElementById('card-editor-title');
    const frontInput = document.getElementById('card-front-input');
    const backInput = document.getElementById('card-back-input');

    if (cardId) {
        title.textContent = 'Edit Card';
        const deck = getDeck(currentEditingDeckId);
        const card = deck.cards.find(c => c.id === cardId);
        if (card) {
            frontInput.value = card.front;
            backInput.value = card.back;
        }
    } else {
        title.textContent = 'Add Card';
        frontInput.value = '';
        backInput.value = '';
    }

    modal.classList.add('visible');
    frontInput.focus();
}

function closeCardEditor() {
    const modal = document.getElementById('card-editor-modal');
    modal.classList.remove('visible');
    currentEditingCardId = null;
}

function saveCardFromEditor() {
    const frontInput = document.getElementById('card-front-input');
    const backInput = document.getElementById('card-back-input');
    const front = frontInput.value.trim();
    const back = backInput.value.trim();

    if (!front || !back) return;

    if (currentEditingCardId) {
        updateCard(currentEditingDeckId, currentEditingCardId, front, back);
    } else {
        addCardToDeck(currentEditingDeckId, front, back);
    }

    closeCardEditor();
    renderCardList();
    updateStartPracticeButton();
}

// ==================== PRACTICE MODE MODAL ====================

function showPracticeModeModal() {
    const deck = getDeck(currentEditingDeckId);
    if (!deck || deck.cards.length === 0) return;

    const modal = document.getElementById('deck-practice-modal');
    const mcBtn = document.getElementById('choose-mc-mode');
    const mcHint = document.getElementById('mc-requirement-hint');

    // MC requires 4+ cards
    const canMc = deck.cards.length >= 4;
    mcBtn.disabled = !canMc;
    mcHint.style.display = canMc ? 'none' : '';

    modal.classList.add('visible');
}

function closePracticeModeModal() {
    const modal = document.getElementById('deck-practice-modal');
    modal.classList.remove('visible');
}

// ==================== FLIP MODE PRACTICE ====================

function startFlipPractice() {
    closePracticeModeModal();
    customPracticeMode = 'flip';
    customPracticeDeckId = currentEditingDeckId;

    const deck = getDeck(customPracticeDeckId);
    customPracticeCards = shuffleArray([...deck.cards]);
    customPracticeIndex = 0;
    customFlipKnew = 0;
    customFlipMissed = 0;

    switchPage('custom-practice');
    setupFlipUI();
    loadFlipCard();
}

function setupFlipUI() {
    const modeLabel = document.getElementById('custom-practice-mode');
    modeLabel.textContent = 'Flip Mode';

    document.getElementById('custom-flip-stats').style.display = '';
    document.getElementById('custom-mc-stats').style.display = 'none';
    document.getElementById('custom-flip-controls').style.display = '';
    document.getElementById('custom-mc-choices').style.display = 'none';
    document.getElementById('custom-mc-next').style.display = 'none';
    document.getElementById('custom-flashcard').style.display = '';
    document.getElementById('custom-end-summary').style.display = 'none';
}

function loadFlipCard() {
    if (customPracticeIndex >= customPracticeCards.length) {
        showEndSummary();
        return;
    }

    customFlipRevealed = false;
    const card = customPracticeCards[customPracticeIndex];

    document.getElementById('custom-card-front').textContent = card.front;
    const backEl = document.getElementById('custom-card-back');
    backEl.textContent = card.back;
    backEl.classList.add('hidden');

    document.getElementById('custom-show-answer-btn').style.display = '';
    document.getElementById('custom-show-answer-btn').classList.add('visible');
    document.getElementById('custom-flip-buttons').classList.add('hidden');

    updateFlipStats();
}

function showFlipAnswer() {
    customFlipRevealed = true;

    document.getElementById('custom-card-back').classList.remove('hidden');
    document.getElementById('custom-show-answer-btn').style.display = 'none';
    document.getElementById('custom-flip-buttons').classList.remove('hidden');
}

function handleFlipKnew() {
    customFlipKnew++;
    customPracticeIndex++;
    loadFlipCard();
}

function handleFlipDidntKnow() {
    customFlipMissed++;
    // Re-add the card near the end for another try
    const card = customPracticeCards[customPracticeIndex];
    const insertAt = Math.min(
        customPracticeIndex + 3 + Math.floor(Math.random() * 3),
        customPracticeCards.length
    );
    customPracticeCards.splice(insertAt, 0, { ...card });
    customPracticeIndex++;
    loadFlipCard();
}

function updateFlipStats() {
    const remaining = customPracticeCards.length - customPracticeIndex;
    document.getElementById('custom-knew-count').textContent = customFlipKnew;
    document.getElementById('custom-remaining-count').textContent = remaining;
    document.getElementById('custom-missed-count').textContent = customFlipMissed;
}

// ==================== MC MODE PRACTICE ====================

function startMcPractice() {
    closePracticeModeModal();
    customPracticeMode = 'mc';
    customPracticeDeckId = currentEditingDeckId;

    customMcCorrect = 0;
    customMcIncorrect = 0;
    customMcStreak = 0;

    switchPage('custom-practice');
    setupMcUI();
    loadMcCard();
}

function setupMcUI() {
    const modeLabel = document.getElementById('custom-practice-mode');
    modeLabel.textContent = 'Multiple Choice';

    document.getElementById('custom-flip-stats').style.display = 'none';
    document.getElementById('custom-mc-stats').style.display = '';
    document.getElementById('custom-flip-controls').style.display = 'none';
    document.getElementById('custom-mc-choices').style.display = '';
    document.getElementById('custom-mc-next').style.display = '';
    document.getElementById('custom-flashcard').style.display = '';
    document.getElementById('custom-end-summary').style.display = 'none';

    document.getElementById('custom-card-back').classList.add('hidden');
}

function loadMcCard() {
    customMcAnswered = false;
    const deck = getDeck(customPracticeDeckId);
    if (!deck || deck.cards.length < 4) return;

    // Pick a random card as the correct answer
    const correctIndex = Math.floor(Math.random() * deck.cards.length);
    customMcCurrentCard = deck.cards[correctIndex];

    // Pick 3 distractors
    const distractorIndices = new Set();
    while (distractorIndices.size < 3) {
        const idx = Math.floor(Math.random() * deck.cards.length);
        if (idx !== correctIndex) distractorIndices.add(idx);
    }

    const choices = shuffleArray([
        customMcCurrentCard,
        ...Array.from(distractorIndices).map(i => deck.cards[i])
    ]);

    // Show front
    document.getElementById('custom-card-front').textContent = customMcCurrentCard.front;
    document.getElementById('custom-card-back').classList.add('hidden');

    // Build choices
    const choicesEl = document.getElementById('custom-mc-choices');
    choicesEl.innerHTML = '';

    choices.forEach(card => {
        const btn = document.createElement('button');
        btn.className = 'radical-choice-btn';
        btn.dataset.cardId = card.id;
        btn.innerHTML = `<span class="choice-main">${escapeHtml(card.back)}</span>`;
        btn.addEventListener('click', () => handleMcChoice(card.id, btn));
        choicesEl.appendChild(btn);
    });

    document.getElementById('custom-mc-next').classList.remove('visible');
    updateMcStats();
}

function handleMcChoice(selectedId, clickedBtn) {
    if (customMcAnswered) return;
    customMcAnswered = true;

    const isCorrect = selectedId === customMcCurrentCard.id;

    if (isCorrect) {
        customMcCorrect++;
        customMcStreak++;
        showStreakToast(customMcStreak);
    } else {
        customMcIncorrect++;
        customMcStreak = 0;
    }

    // Highlight buttons
    const choicesEl = document.getElementById('custom-mc-choices');
    const buttons = choicesEl.querySelectorAll('.radical-choice-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.cardId === customMcCurrentCard.id) {
            btn.classList.add('correct');
        } else if (btn === clickedBtn && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show answer on card
    document.getElementById('custom-card-back').classList.remove('hidden');
    document.getElementById('custom-mc-next').classList.add('visible');
    updateMcStats();
}

function updateMcStats() {
    document.getElementById('custom-mc-correct').textContent = customMcCorrect;
    document.getElementById('custom-mc-streak').textContent = customMcStreak;
    document.getElementById('custom-mc-incorrect').textContent = customMcIncorrect;
}

// ==================== END SUMMARY ====================

function showEndSummary() {
    document.getElementById('custom-flashcard').style.display = 'none';
    document.getElementById('custom-flip-controls').style.display = 'none';
    document.getElementById('custom-mc-choices').style.display = 'none';
    document.getElementById('custom-mc-next').style.display = 'none';

    const summary = document.getElementById('custom-end-summary');
    summary.style.display = '';

    const statsEl = document.getElementById('custom-end-stats');
    statsEl.innerHTML = `
        <div class="custom-end-stat">
            <div class="custom-end-stat-value correct-val">${customFlipKnew}</div>
            <div class="custom-end-stat-label">Knew</div>
        </div>
        <div class="custom-end-stat">
            <div class="custom-end-stat-value incorrect">${customFlipMissed}</div>
            <div class="custom-end-stat-label">Missed</div>
        </div>
    `;
}

function restartCustomPractice() {
    if (customPracticeMode === 'flip') {
        startFlipPractice();
    } else {
        startMcPractice();
    }
}

function exitCustomPractice() {
    if (customPracticeDeckId) {
        openDeckEditor(customPracticeDeckId);
    } else {
        switchPage('decks');
    }
}

// ==================== HELPERS ====================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
