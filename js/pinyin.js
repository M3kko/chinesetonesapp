// ==================== PINYIN PRACTICE ====================

// State
let currentPinyin = '';
let currentTone = 0;
let correctCount = 0;
let incorrectCount = 0;
let streak = 0;
let answered = false;
let audio = null;
let practiceMode = 'all'; // 'all' or 'mistakes'
let userHasInteracted = false;

// Spaced repetition tracking
let strugglingTones = {}; // { "ba1": wrongCount, ... }

// Load saved data
function loadProgress() {
    const saved = localStorage.getItem('chineseToneProgress');
    if (saved) {
        const data = JSON.parse(saved);
        correctCount = data.correctCount || 0;
        incorrectCount = data.incorrectCount || 0;
        strugglingTones = data.strugglingTones || {};
        updateStats();
        updateStrugglingIndicator();
    }
}

// Save progress
function saveProgress() {
    localStorage.setItem('chineseToneProgress', JSON.stringify({
        correctCount,
        incorrectCount,
        strugglingTones
    }));
}

// Reset progress
function resetProgress() {
    correctCount = 0;
    incorrectCount = 0;
    streak = 0;
    strugglingTones = {};
    localStorage.removeItem('chineseToneProgress');
    updateStats();
    updateStrugglingIndicator();
    updateModeCount();
    loadNewCard();
}

// Get struggling keys
function getStrugglingKeys() {
    return Object.keys(strugglingTones).filter(k => strugglingTones[k] >= 1);
}

// Get next card
function getNextCard() {
    const strugglingKeys = getStrugglingKeys();

    if (practiceMode === 'mistakes') {
        if (strugglingKeys.length === 0) {
            return null;
        }
        const key = strugglingKeys[Math.floor(Math.random() * strugglingKeys.length)];
        const tone = parseInt(key.slice(-1));
        const pinyin = key.slice(0, -1);
        return { pinyin, tone };
    }

    const combo = VALID_COMBOS[Math.floor(Math.random() * VALID_COMBOS.length)];
    return { pinyin: combo.pinyin, tone: combo.tone };
}

// Load new card
function loadNewCard() {
    answered = false;
    const card = getNextCard();

    const speakerBtn = document.getElementById('speaker-btn');
    const pinyinDisplay = document.getElementById('pinyin-display');
    const toneButtons = document.querySelectorAll('.tone-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!card) {
        pinyinDisplay.textContent = 'All done! No more mistakes.';
        pinyinDisplay.classList.add('revealed', 'empty-message');
        toneButtons.forEach(btn => btn.disabled = true);
        speakerBtn.style.display = 'none';
        nextBtn.classList.remove('visible');
        return;
    }

    speakerBtn.style.display = '';
    pinyinDisplay.classList.remove('empty-message');

    currentPinyin = card.pinyin;
    currentTone = card.tone;

    // Reset UI
    pinyinDisplay.textContent = 'Listen & Choose';
    pinyinDisplay.classList.remove('revealed');
    toneButtons.forEach(btn => {
        const tone = parseInt(btn.dataset.tone);
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
        const toneMarkEl = btn.querySelector('.tone-mark');
        toneMarkEl.textContent = addToneMark(currentPinyin, tone);
    });
    nextBtn.classList.remove('visible');

    updateModeCount();

    // Preload audio
    audio = new Audio(`${AUDIO_BASE_URL}${currentPinyin}${currentTone}.mp3`);
    audio.preload = 'auto';

    audio.addEventListener('canplaythrough', () => {
        if (!answered && userHasInteracted) playAudio();
    }, { once: true });

    audio.addEventListener('error', () => {
        console.log('Audio failed to load:', currentPinyin + currentTone);
    }, { once: true });

    audio.load();
}

// Play audio
function playAudio() {
    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch(e => {
        console.log('Audio play failed, retrying:', e);
        audio.load();
        audio.addEventListener('canplaythrough', () => {
            audio.play().catch(err => console.log('Audio retry failed:', err));
        }, { once: true });
    });
}

// Handle tone selection
function handleToneSelect(selectedTone) {
    if (answered) return;
    answered = true;

    const key = `${currentPinyin}${currentTone}`;
    const isCorrect = selectedTone === currentTone;

    if (isCorrect) {
        correctCount++;
        streak++;
        showStreakToast(streak);
        if (strugglingTones[key]) {
            strugglingTones[key]--;
            if (strugglingTones[key] <= 0) {
                delete strugglingTones[key];
            }
        }
    } else {
        incorrectCount++;
        streak = 0;
        strugglingTones[key] = (strugglingTones[key] || 0) + 1;
    }

    updateStats();
    updateStrugglingIndicator();
    updateModeCount();
    saveProgress();

    const toneButtons = document.querySelectorAll('.tone-btn');
    const pinyinDisplay = document.getElementById('pinyin-display');
    const nextBtn = document.getElementById('next-btn');

    toneButtons.forEach(btn => {
        const btnTone = parseInt(btn.dataset.tone);
        btn.disabled = true;
        if (btnTone === currentTone) {
            btn.classList.add('correct');
        } else if (btnTone === selectedTone && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    pinyinDisplay.textContent = addToneMark(currentPinyin, currentTone);
    pinyinDisplay.classList.add('revealed');
    nextBtn.classList.add('visible');
}

// Update stats display
function updateStats() {
    const correctCountEl = document.getElementById('correct-count');
    const incorrectCountEl = document.getElementById('incorrect-count');
    const streakCountEl = document.getElementById('streak-count');
    if (correctCountEl) correctCountEl.textContent = correctCount;
    if (incorrectCountEl) incorrectCountEl.textContent = incorrectCount;
    if (streakCountEl) streakCountEl.textContent = streak;
}

// Update struggling indicator
function updateStrugglingIndicator() {
    const strugglingIndicator = document.getElementById('struggling-indicator');
    const strugglingCountEl = document.getElementById('struggling-count');
    const count = getStrugglingKeys().length;
    if (strugglingCountEl) strugglingCountEl.textContent = count;
    if (strugglingIndicator) strugglingIndicator.classList.toggle('visible', count > 0);
}

// Update mode count (for review mode)
function updateModeCount() {
    if (practiceMode === 'mistakes') {
        const modeCount = document.getElementById('mode-count');
        const count = getStrugglingKeys().length;
        if (modeCount) modeCount.textContent = `${count} remaining`;
    }
}

// Set practice mode
function setPracticeMode(mode) {
    practiceMode = mode;
    switchPage('practice');

    const modeBanner = document.getElementById('mode-banner');
    const modeText = document.getElementById('mode-text');

    if (mode === 'mistakes') {
        modeBanner.classList.add('visible');
        modeText.textContent = 'Reviewing Mistakes';
        updateModeCount();
    } else {
        modeBanner.classList.remove('visible');
    }

    loadNewCard();
}
