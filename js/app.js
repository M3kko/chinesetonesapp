// ==================== APP CONTROLLER ====================

let currentPage = 'landing';

// Switch page
function switchPage(page) {
    currentPage = page;

    const landingPage = document.getElementById('landing-page');
    const selectionPage = document.getElementById('selection-page');
    const appContainer = document.getElementById('app-container');
    const practicePage = document.getElementById('practice-page');
    const explorePage = document.getElementById('explore-page');
    const radicalsPage = document.getElementById('radicals-page');
    const decksPage = document.getElementById('decks-page');
    const deckEditorPage = document.getElementById('deck-editor-page');
    const customPracticePage = document.getElementById('custom-practice-page');

    landingPage.classList.toggle('hidden', page !== 'landing');
    selectionPage.classList.toggle('hidden', page !== 'selection');

    const appPages = ['practice', 'explore', 'radicals', 'decks', 'deck-editor', 'custom-practice'];
    appContainer.classList.toggle('hidden', !appPages.includes(page));

    practicePage.classList.toggle('hidden', page !== 'practice');
    explorePage.classList.toggle('hidden', page !== 'explore');
    radicalsPage.classList.toggle('hidden', page !== 'radicals');
    decksPage.classList.toggle('hidden', page !== 'decks');
    deckEditorPage.classList.toggle('hidden', page !== 'deck-editor');
    customPracticePage.classList.toggle('hidden', page !== 'custom-practice');

    if (page === 'explore') {
        buildPinyinChart();
    }
    if (page === 'decks') {
        renderDeckList();
    }
}

// Check if user has visited before
function checkFirstVisit() {
    const hasVisited = localStorage.getItem('polyglotVisited');
    if (hasVisited) {
        switchPage('selection');
    } else {
        switchPage('landing');
    }
}

// Continue to selection (from landing)
function continueToSelection() {
    localStorage.setItem('polyglotVisited', 'true');
    switchPage('selection');
}

// ==================== EVENT LISTENERS ====================

function initApp() {
    // Landing page
    document.getElementById('landing-guest').addEventListener('click', () => {
        continueToSelection();
    });

    // Selection page
    document.getElementById('select-pinyin').addEventListener('click', () => {
        userHasInteracted = true;
        switchPage('practice');
        setPracticeMode('all');
    });

    document.getElementById('select-radicals').addEventListener('click', () => {
        userHasInteracted = true;
        showRadicalsModeModal();
    });

    document.getElementById('select-decks').addEventListener('click', () => {
        userHasInteracted = true;
        switchPage('decks');
    });

    document.getElementById('selection-back').addEventListener('click', () => {
        switchPage('landing');
    });

    // Radicals mode modal
    document.getElementById('radicals-mode-close').addEventListener('click', hideRadicalsModeModal);

    document.getElementById('radicals-mode-modal').addEventListener('click', (e) => {
        if (e.target.id === 'radicals-mode-modal') hideRadicalsModeModal();
    });

    document.getElementById('start-radicals-btn').addEventListener('click', startRadicalsPractice);

    document.querySelectorAll('input[name="radical-mode"]').forEach(toggle => {
        toggle.addEventListener('change', updateStartButtonState);
    });

    // Pinyin practice
    document.getElementById('speaker-btn').addEventListener('click', () => {
        userHasInteracted = true;
        playAudio();
    });

    document.querySelectorAll('.tone-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            handleToneSelect(parseInt(btn.dataset.tone));
        });
    });

    document.getElementById('next-btn').addEventListener('click', loadNewCard);

    document.getElementById('pinyin-back-btn').addEventListener('click', () => {
        switchPage('selection');
    });

    document.getElementById('mistakes-btn').addEventListener('click', () => {
        if (getStrugglingKeys().length === 0) {
            alert('No mistakes to review yet! Make some mistakes first.');
            return;
        }
        setPracticeMode('mistakes');
    });

    document.getElementById('explore-btn').addEventListener('click', () => {
        switchPage('explore');
        hideTonePicker();
    });

    document.getElementById('settings-btn').addEventListener('click', () => {
        document.getElementById('settings-modal').classList.add('visible');
    });

    // Radicals page
    document.getElementById('radicals-practice-back').addEventListener('click', () => {
        exitRadicalsPractice();
    });

    document.getElementById('radicals-speaker').addEventListener('click', () => {
        userHasInteracted = true;
        playRadicalAudio();
    });

    document.getElementById('radicals-next').addEventListener('click', loadNewRadicalCard);

    // Explore page
    document.getElementById('back-btn').addEventListener('click', () => {
        switchPage('practice');
    });

    document.getElementById('explore-search').addEventListener('input', (e) => {
        hideTonePicker();
        buildPinyinChart(e.target.value);
    });

    document.getElementById('tone-picker-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'tone-picker-overlay') {
            hideTonePicker();
        }
    });

    // Mode exit
    document.getElementById('mode-exit').addEventListener('click', () => setPracticeMode('all'));

    // Settings modal
    const settingsModal = document.getElementById('settings-modal');
    document.getElementById('settings-close').addEventListener('click', () => settingsModal.classList.remove('visible'));
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) settingsModal.classList.remove('visible');
    });
    document.getElementById('reset-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress?')) {
            resetProgress();
            settingsModal.classList.remove('visible');
        }
    });

    // ==================== DECKS EVENT LISTENERS ====================

    // Decks list page
    document.getElementById('decks-back-btn').addEventListener('click', () => {
        switchPage('selection');
    });

    document.getElementById('create-deck-btn').addEventListener('click', createDeck);

    // Deck editor page
    document.getElementById('editor-back-btn').addEventListener('click', () => {
        // Save deck name before leaving
        const deck = getDeck(currentEditingDeckId);
        const nameInput = document.getElementById('deck-name-input');
        if (deck && nameInput.value.trim()) {
            deck.name = nameInput.value.trim();
            saveDecks();
        }
        switchPage('decks');
    });

    document.getElementById('delete-deck-btn').addEventListener('click', () => {
        deleteDeck(currentEditingDeckId);
    });

    document.getElementById('deck-name-input').addEventListener('change', () => {
        const deck = getDeck(currentEditingDeckId);
        const nameInput = document.getElementById('deck-name-input');
        if (deck && nameInput.value.trim()) {
            deck.name = nameInput.value.trim();
            saveDecks();
        }
    });

    document.getElementById('add-card-btn').addEventListener('click', () => {
        openCardEditor(null);
    });

    document.getElementById('start-deck-practice-btn').addEventListener('click', showPracticeModeModal);

    // Card editor modal
    document.getElementById('card-editor-close').addEventListener('click', closeCardEditor);
    document.getElementById('card-editor-modal').addEventListener('click', (e) => {
        if (e.target.id === 'card-editor-modal') closeCardEditor();
    });
    document.getElementById('card-editor-save').addEventListener('click', saveCardFromEditor);

    // Practice mode modal
    document.getElementById('deck-practice-close').addEventListener('click', closePracticeModeModal);
    document.getElementById('deck-practice-modal').addEventListener('click', (e) => {
        if (e.target.id === 'deck-practice-modal') closePracticeModeModal();
    });
    document.getElementById('choose-flip-mode').addEventListener('click', startFlipPractice);
    document.getElementById('choose-mc-mode').addEventListener('click', () => {
        if (!document.getElementById('choose-mc-mode').disabled) {
            startMcPractice();
        }
    });

    // Custom practice page
    document.getElementById('custom-practice-back').addEventListener('click', exitCustomPractice);
    document.getElementById('custom-show-answer-btn').addEventListener('click', showFlipAnswer);
    document.getElementById('custom-knew-btn').addEventListener('click', handleFlipKnew);
    document.getElementById('custom-didnt-know-btn').addEventListener('click', handleFlipDidntKnow);
    document.getElementById('custom-mc-next').addEventListener('click', loadMcCard);
    document.getElementById('custom-restart-btn').addEventListener('click', restartCustomPractice);
    document.getElementById('custom-end-back').addEventListener('click', exitCustomPractice);

    // ==================== KEYBOARD SHORTCUTS ====================

    document.addEventListener('keydown', (e) => {
        const radicalsModeModal = document.getElementById('radicals-mode-modal');
        const tonePickerOverlay = document.getElementById('tone-picker-overlay');
        const settingsModal = document.getElementById('settings-modal');
        const cardEditorModal = document.getElementById('card-editor-modal');
        const deckPracticeModal = document.getElementById('deck-practice-modal');
        const exploreSearch = document.getElementById('explore-search');

        // Handle modals
        if (cardEditorModal.classList.contains('visible')) {
            if (e.key === 'Escape') closeCardEditor();
            return;
        }

        if (deckPracticeModal.classList.contains('visible')) {
            if (e.key === 'Escape') closePracticeModeModal();
            return;
        }

        if (radicalsModeModal.classList.contains('visible')) {
            if (e.key === 'Escape') hideRadicalsModeModal();
            return;
        }

        if (tonePickerOverlay.classList.contains('visible')) {
            if (e.key === 'Escape') hideTonePicker();
            return;
        }

        if (settingsModal.classList.contains('visible')) {
            if (e.key === 'Escape') settingsModal.classList.remove('visible');
            return;
        }

        if (document.activeElement === exploreSearch) {
            if (e.key === 'Escape') exploreSearch.blur();
            return;
        }

        // Don't trigger shortcuts when typing in inputs/textareas
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
            return;
        }

        // Practice mode shortcuts
        if (currentPage === 'practice') {
            if (e.key >= '1' && e.key <= '4' && !answered) {
                handleToneSelect(parseInt(e.key));
            } else if ((e.key === ' ' || e.key === 'Enter') && answered) {
                e.preventDefault();
                loadNewCard();
            } else if (e.key === 'r' || e.key === 'R') {
                playAudio();
            }
        }

        // Radicals mode shortcuts
        if (currentPage === 'radicals' && currentRadicalMode) {
            if (e.key >= '1' && e.key <= '4' && !radicalsAnswered) {
                const buttons = document.getElementById('radicals-choices').querySelectorAll('.radical-choice-btn');
                const index = parseInt(e.key) - 1;
                if (buttons[index]) {
                    const id = parseInt(buttons[index].dataset.id);
                    handleRadicalChoice(id);
                }
            } else if ((e.key === ' ' || e.key === 'Enter') && radicalsAnswered) {
                e.preventDefault();
                loadNewRadicalCard();
            } else if (e.key === 'r' || e.key === 'R') {
                playRadicalAudio();
            } else if (e.key === 'Escape') {
                exitRadicalsPractice();
            }
        }

        // Custom practice shortcuts
        if (currentPage === 'custom-practice') {
            if (customPracticeMode === 'flip') {
                if ((e.key === ' ' || e.key === 'Enter') && !customFlipRevealed) {
                    e.preventDefault();
                    showFlipAnswer();
                } else if (customFlipRevealed) {
                    if (e.key === '1' || e.key === 'ArrowLeft') {
                        handleFlipKnew();
                    } else if (e.key === '2' || e.key === 'ArrowRight') {
                        handleFlipDidntKnow();
                    }
                }
            } else if (customPracticeMode === 'mc') {
                if (e.key >= '1' && e.key <= '4' && !customMcAnswered) {
                    const buttons = document.getElementById('custom-mc-choices').querySelectorAll('.radical-choice-btn');
                    const index = parseInt(e.key) - 1;
                    if (buttons[index]) {
                        handleMcChoice(buttons[index].dataset.cardId, buttons[index]);
                    }
                } else if ((e.key === ' ' || e.key === 'Enter') && customMcAnswered) {
                    e.preventDefault();
                    loadMcCard();
                }
            }
            if (e.key === 'Escape') {
                exitCustomPractice();
            }
        }
    });

    // ==================== INITIALIZE ====================

    loadProgress();
    loadRadicalsProgress();
    loadDecks();
    checkFirstVisit();
}

// Start the app
initApp();
