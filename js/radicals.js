// ==================== RADICALS PRACTICE ====================

// State
let radicalsModes = ['audio-meaning', 'audio-radical', 'radical-meaning', 'meaning-radical'];
let currentRadicalMode = null;
let currentRadical = null;
let radicalsCorrect = 0;
let radicalsIncorrect = 0;
let radicalsStreak = 0;
let radicalsAnswered = false;
let radicalsAudio = null;
let showPinyinHints = true;
let strugglingRadicals = {};

// Load radicals progress from localStorage
function loadRadicalsProgress() {
    const saved = localStorage.getItem('radicalsProgress');
    if (saved) {
        const data = JSON.parse(saved);
        radicalsCorrect = data.correct || 0;
        radicalsIncorrect = data.incorrect || 0;
        strugglingRadicals = data.struggling || {};
        showPinyinHints = data.showPinyin !== false;
        const modalPinyinToggle = document.getElementById('modal-pinyin-toggle');
        if (modalPinyinToggle) modalPinyinToggle.checked = showPinyinHints;
        updateRadicalsStats();
        updateRadicalsStrugglingIndicator();
    }
}

// Save radicals progress
function saveRadicalsProgress() {
    localStorage.setItem('radicalsProgress', JSON.stringify({
        correct: radicalsCorrect,
        incorrect: radicalsIncorrect,
        struggling: strugglingRadicals,
        showPinyin: showPinyinHints
    }));
}

// Get struggling radical IDs
function getStrugglingRadicalIds() {
    return Object.keys(strugglingRadicals).filter(id => strugglingRadicals[id] >= 1).map(Number);
}

// Update radicals stats display
function updateRadicalsStats() {
    const radicalsCorrectEl = document.getElementById('radicals-correct');
    const radicalsIncorrectEl = document.getElementById('radicals-incorrect');
    const radicalsStreakEl = document.getElementById('radicals-streak');
    if (radicalsCorrectEl) radicalsCorrectEl.textContent = radicalsCorrect;
    if (radicalsIncorrectEl) radicalsIncorrectEl.textContent = radicalsIncorrect;
    if (radicalsStreakEl) radicalsStreakEl.textContent = radicalsStreak;
}

// Update radicals struggling indicator
function updateRadicalsStrugglingIndicator() {
    const radicalsStrugglingIndicator = document.getElementById('radicals-struggling-indicator');
    const radicalsStrugglingCount = document.getElementById('radicals-struggling-count');
    const count = getStrugglingRadicalIds().length;
    if (radicalsStrugglingCount) radicalsStrugglingCount.textContent = count;
    if (radicalsStrugglingIndicator) radicalsStrugglingIndicator.classList.toggle('visible', count > 0);
}

// Get random distractors (wrong answers)
function getRadicalDistractors(correctRadical, count = 3) {
    const distractors = [];
    const usedIds = new Set([correctRadical.id]);

    while (distractors.length < count) {
        const randomRadical = RADICALS[Math.floor(Math.random() * RADICALS.length)];
        if (!usedIds.has(randomRadical.id)) {
            usedIds.add(randomRadical.id);
            distractors.push(randomRadical);
        }
    }

    return distractors;
}

// Update start button state based on selected modes
function updateStartButtonState() {
    const modeToggles = document.querySelectorAll('input[name="radical-mode"]');
    const startRadicalsBtn = document.getElementById('start-radicals-btn');
    const anySelected = Array.from(modeToggles).some(toggle => toggle.checked);
    if (startRadicalsBtn) startRadicalsBtn.disabled = !anySelected;
}

// Show radicals mode selection modal
function showRadicalsModeModal() {
    const modalPinyinToggle = document.getElementById('modal-pinyin-toggle');
    const radicalsModeModal = document.getElementById('radicals-mode-modal');
    if (modalPinyinToggle) modalPinyinToggle.checked = showPinyinHints;
    updateStartButtonState();
    radicalsModeModal.classList.add('visible');
}

// Hide radicals mode modal
function hideRadicalsModeModal() {
    const radicalsModeModal = document.getElementById('radicals-mode-modal');
    radicalsModeModal.classList.remove('visible');
}

// Start radicals practice with selected modes
function startRadicalsPractice() {
    const modeToggles = document.querySelectorAll('input[name="radical-mode"]');
    const modalPinyinToggle = document.getElementById('modal-pinyin-toggle');
    const radicalsModeIndicator = document.getElementById('radicals-mode-indicator');

    const selectedModes = [];
    modeToggles.forEach(toggle => {
        if (toggle.checked) {
            selectedModes.push(toggle.value);
        }
    });

    if (selectedModes.length === 0) {
        alert('Please select at least one practice mode');
        return;
    }

    radicalsModes = selectedModes;
    showPinyinHints = modalPinyinToggle.checked;
    saveRadicalsProgress();

    hideRadicalsModeModal();
    switchPage('radicals');

    if (radicalsModes.length === 1) {
        const modeNames = {
            'audio-meaning': 'Audio → Meaning',
            'audio-radical': 'Audio → Radical',
            'radical-meaning': 'Radical → Meaning',
            'meaning-radical': 'Meaning → Radical'
        };
        radicalsModeIndicator.textContent = modeNames[radicalsModes[0]];
    } else {
        radicalsModeIndicator.textContent = `Mixed Mode (${radicalsModes.length} types)`;
    }

    loadNewRadicalCard();
}

// Exit radicals practice back to selection
function exitRadicalsPractice() {
    switchPage('selection');
}

// Play radical audio
function playRadicalAudio() {
    if (!currentRadical) return;

    const { pinyin, tone } = parsePinyinWithTone(currentRadical.pinyin);
    const filePinyin = toFilePinyin(pinyin);

    if (radicalsAudio) {
        radicalsAudio.pause();
    }

    radicalsAudio = new Audio(`${AUDIO_BASE_URL}${filePinyin}${tone}.mp3`);
    radicalsAudio.play().catch(e => console.log('Radical audio failed:', e));
}

// Load new radical card
function loadNewRadicalCard() {
    radicalsAnswered = false;
    const radicalsNextBtn = document.getElementById('radicals-next');
    radicalsNextBtn.classList.remove('visible');

    // Select a random mode from enabled modes
    currentRadicalMode = radicalsModes[Math.floor(Math.random() * radicalsModes.length)];

    // Select a random radical
    currentRadical = RADICALS[Math.floor(Math.random() * RADICALS.length)];

    // Get distractors
    const distractors = getRadicalDistractors(currentRadical, 3);
    const allChoices = shuffleArray([currentRadical, ...distractors]);

    setupRadicalPrompt();
    setupRadicalChoices(allChoices);

    // Auto-play audio for audio modes
    if ((currentRadicalMode === 'audio-meaning' || currentRadicalMode === 'audio-radical') && userHasInteracted) {
        setTimeout(playRadicalAudio, 100);
    }
}

// Setup the radical prompt display
function setupRadicalPrompt() {
    const radicalsSpeaker = document.getElementById('radicals-speaker');
    const radicalsPrompt = document.getElementById('radicals-prompt');
    const radicalsPinyinHint = document.getElementById('radicals-pinyin-hint');

    const isAudioMode = currentRadicalMode === 'audio-meaning' || currentRadicalMode === 'audio-radical';
    const showRadical = currentRadicalMode === 'radical-meaning';
    const showMeaning = currentRadicalMode === 'meaning-radical';

    radicalsSpeaker.classList.toggle('hidden', !isAudioMode);

    if (isAudioMode) {
        radicalsPrompt.textContent = 'Listen & Choose';
        radicalsPrompt.className = 'radicals-prompt audio-mode';
    } else if (showRadical) {
        radicalsPrompt.textContent = currentRadical.radical;
        radicalsPrompt.className = 'radicals-prompt';
    } else if (showMeaning) {
        radicalsPrompt.textContent = currentRadical.english;
        radicalsPrompt.className = 'radicals-prompt meaning-mode';
    }

    if (showPinyinHints && showRadical) {
        radicalsPinyinHint.textContent = currentRadical.pinyin;
    } else {
        radicalsPinyinHint.textContent = '';
    }
}

// Setup radical choices
function setupRadicalChoices(choices) {
    const radicalsChoices = document.getElementById('radicals-choices');
    radicalsChoices.innerHTML = '';

    const showRadicalChoices = currentRadicalMode === 'audio-radical' || currentRadicalMode === 'meaning-radical';
    const showPinyinOnChoices = showPinyinHints && (currentRadicalMode === 'meaning-radical' || currentRadicalMode === 'audio-radical');

    choices.forEach(radical => {
        const btn = document.createElement('button');
        btn.className = 'radical-choice-btn';
        btn.dataset.id = radical.id;

        if (showRadicalChoices) {
            btn.innerHTML = `
                <span class="choice-main">${radical.radical}</span>
                ${showPinyinOnChoices ? `<span class="choice-hint">${radical.pinyin}</span>` : ''}
            `;
        } else {
            btn.innerHTML = `<span class="choice-main">${radical.english}</span>`;
        }

        btn.addEventListener('click', () => handleRadicalChoice(radical.id));
        radicalsChoices.appendChild(btn);
    });
}

// Handle radical choice selection
function handleRadicalChoice(selectedId) {
    if (radicalsAnswered) return;
    radicalsAnswered = true;

    const isCorrect = selectedId === currentRadical.id;
    const radicalKey = currentRadical.id;

    if (isCorrect) {
        radicalsCorrect++;
        radicalsStreak++;
        showStreakToast(radicalsStreak);
        if (strugglingRadicals[radicalKey]) {
            strugglingRadicals[radicalKey]--;
            if (strugglingRadicals[radicalKey] <= 0) {
                strugglingRadicals[radicalKey] = 0;
            }
        }
    } else {
        radicalsIncorrect++;
        radicalsStreak = 0;
        strugglingRadicals[radicalKey] = (strugglingRadicals[radicalKey] || 0) + 1;
    }

    updateRadicalsStats();
    updateRadicalsStrugglingIndicator();
    saveRadicalsProgress();

    const radicalsChoices = document.getElementById('radicals-choices');
    const radicalsNextBtn = document.getElementById('radicals-next');
    const radicalsSpeaker = document.getElementById('radicals-speaker');
    const radicalsPrompt = document.getElementById('radicals-prompt');
    const radicalsPinyinHint = document.getElementById('radicals-pinyin-hint');

    const buttons = radicalsChoices.querySelectorAll('.radical-choice-btn');
    buttons.forEach(btn => {
        const btnId = parseInt(btn.dataset.id);
        btn.disabled = true;
        if (btnId === currentRadical.id) {
            btn.classList.add('correct');
        } else if (btnId === selectedId && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Reveal answer
    if (currentRadicalMode === 'audio-meaning' || currentRadicalMode === 'audio-radical') {
        radicalsSpeaker.classList.add('hidden');
        radicalsPrompt.textContent = currentRadical.radical;
        radicalsPrompt.classList.remove('audio-mode');
        radicalsPrompt.classList.add('revealed');
        radicalsPinyinHint.textContent = `${currentRadical.pinyin} - ${currentRadical.english}`;
    } else {
        radicalsPrompt.classList.add('revealed');
    }

    radicalsNextBtn.classList.add('visible');
}
