// Complete pinyin+tone combinations from GitHub repo (1,622 total)
const SYLLABLE_TONES = {
    'a': '1234', 'ai': '1234', 'an': '1234', 'ang': '1234', 'ao': '1234',
    'ba': '1234', 'bai': '1234', 'ban': '1234', 'bang': '1234', 'bao': '1234',
    'bei': '1234', 'ben': '1234', 'beng': '1234', 'bi': '1234', 'bian': '1234',
    'biao': '234', 'bie': '1234', 'bin': '1234', 'bing': '1234', 'bo': '1234', 'bu': '1234',
    'ca': '1234', 'cai': '1234', 'can': '1234', 'cang': '1234', 'cao': '1234',
    'ce': '1234', 'cen': '1234', 'ceng': '1234', 'cha': '1234', 'chai': '1234',
    'chan': '1234', 'chang': '1234', 'chao': '1234', 'che': '1234', 'chen': '1234',
    'cheng': '1234', 'chi': '1234', 'chong': '1234', 'chou': '1234', 'chu': '1234',
    'chua': '1234', 'chuai': '1234', 'chuan': '1234', 'chuang': '1234', 'chui': '1234',
    'chun': '1234', 'chuo': '1234', 'ci': '1234', 'cong': '1234', 'cou': '1234',
    'cu': '1234', 'cuan': '1234', 'cui': '1234', 'cun': '1234', 'cuo': '134',
    'da': '1234', 'dai': '1234', 'dan': '1234', 'dang': '1234', 'dao': '1234',
    'de': '1234', 'dei': '1234', 'den': '1234', 'deng': '1234', 'di': '1234',
    'dian': '1234', 'diang': '234', 'diao': '234', 'die': '1234', 'ding': '1234',
    'diu': '1234', 'dong': '1234', 'dou': '1234', 'du': '1234', 'duan': '1234',
    'dui': '1234', 'dun': '1234', 'duo': '1234',
    'e': '1234', 'ei': '1234', 'en': '1234', 'er': '1234',
    'fa': '1234', 'fan': '1234', 'fang': '1234', 'fei': '1234', 'fen': '1234',
    'feng': '1234', 'fo': '1234', 'fou': '1234', 'fu': '1234',
    'ga': '1234', 'gai': '1234', 'gan': '1234', 'gang': '1234', 'gao': '1234',
    'ge': '1234', 'gei': '1234', 'gen': '1234', 'geng': '1234', 'gong': '1234',
    'gou': '1234', 'gu': '1234', 'gua': '1234', 'guai': '1234', 'guan': '1234',
    'guang': '1234', 'gui': '1234', 'gun': '1234', 'guo': '1234',
    'ha': '1234', 'hai': '1234', 'han': '1234', 'hang': '1234', 'hao': '1234',
    'he': '1234', 'hei': '1234', 'hen': '1234', 'heng': '1234', 'hong': '1234',
    'hou': '1234', 'hu': '1234', 'hua': '1234', 'huai': '1234', 'huan': '1234',
    'huang': '1234', 'hui': '1234', 'hun': '1234', 'huo': '1234',
    'ji': '1234', 'jia': '1234', 'jian': '1234', 'jiang': '1234', 'jiao': '1234',
    'jie': '1234', 'jin': '1234', 'jing': '134', 'jiong': '1234', 'jiu': '1234',
    'ju': '1234', 'juan': '1234', 'jue': '1234', 'jun': '1234',
    'ka': '1234', 'kai': '1234', 'kan': '1234', 'kang': '124', 'kao': '1234',
    'ke': '1234', 'ken': '1234', 'keng': '1234', 'kong': '1234', 'kou': '1234',
    'ku': '1234', 'kua': '1234', 'kuai': '1234', 'kuan': '1234', 'kuang': '1234',
    'kui': '1234', 'kun': '1234', 'kuo': '1234',
    'la': '1234', 'lai': '1234', 'lan': '1234', 'lang': '1234', 'lao': '1234',
    'le': '1234', 'lei': '1234', 'leng': '1234', 'li': '1234', 'lia': '1234',
    'lian': '1234', 'liang': '1234', 'liao': '1234', 'lie': '1234', 'lin': '234',
    'ling': '1234', 'liu': '1234', 'lo': '1234', 'long': '1234', 'lou': '1234',
    'lu': '1234', 'luan': '1234', 'lun': '234', 'luo': '1234',
    'luu': '1234', 'luue': '1234', 'luun': '234',
    'ma': '1234', 'mai': '1234', 'man': '1234', 'mang': '1234', 'mao': '1234',
    'me': '1234', 'mei': '1234', 'men': '1234', 'meng': '1234', 'mi': '1234',
    'mian': '1234', 'miao': '1234', 'mie': '1234', 'min': '1234', 'ming': '1234',
    'miu': '1234', 'mo': '1234', 'mou': '124', 'mu': '1234', 'muo': '3',
    'na': '1234', 'nai': '1234', 'nan': '1234', 'nang': '1234', 'nao': '1234',
    'ne': '1234', 'nei': '1234', 'nen': '1234', 'neng': '1234', 'ni': '1234',
    'nia': '1234', 'nian': '1234', 'niang': '234', 'niao': '1234', 'nie': '1234',
    'nin': '1234', 'ning': '1234', 'niu': '1234', 'nong': '1234', 'nou': '1234',
    'nu': '1234', 'nuan': '1234', 'nue': '1', 'nun': '1234', 'nuo': '234',
    'nuu': '1234', 'nuue': '234',
    'ou': '1234',
    'pa': '1234', 'pai': '1234', 'pan': '1234', 'pang': '1234', 'pao': '1234',
    'pei': '1234', 'pen': '1234', 'peng': '1234', 'pi': '1234', 'pian': '1234',
    'piao': '1234', 'pie': '1234', 'pin': '1234', 'ping': '1234', 'po': '1234',
    'pou': '1234', 'pu': '1234',
    'qi': '1234', 'qia': '1234', 'qian': '1234', 'qiang': '1234', 'qiao': '1234',
    'qie': '1234', 'qin': '1234', 'qing': '1234', 'qiong': '1234', 'qiu': '1234',
    'qu': '1234', 'quan': '1234', 'que': '1234', 'qun': '1234',
    'ran': '1234', 'rang': '1234', 'rao': '1234', 're': '1234', 'rei': '1',
    'ren': '1234', 'reng': '1234', 'ri': '1234', 'rong': '1234', 'rou': '1234',
    'ru': '1234', 'ruan': '1234', 'rui': '234', 'run': '1234', 'ruo': '1234',
    'sa': '1234', 'sai': '1234', 'san': '1234', 'sang': '124', 'sao': '1234',
    'se': '1234', 'sei': '1234', 'sen': '1234', 'seng': '1234', 'sha': '1234',
    'shai': '1234', 'shan': '1234', 'shang': '1234', 'shao': '1234', 'she': '1234',
    'shei': '1234', 'shen': '1234', 'sheng': '1234', 'shi': '1234', 'shong': '1234',
    'shou': '1234', 'shu': '1234', 'shua': '1234', 'shuai': '1234', 'shuan': '1234',
    'shuang': '1234', 'shui': '1234', 'shun': '1234', 'shuo': '1234', 'si': '1234',
    'song': '1234', 'sou': '1234', 'su': '1234', 'suan': '1234', 'sui': '1234',
    'sun': '1234', 'suo': '1234',
    'ta': '1234', 'tai': '1234', 'tan': '1234', 'tang': '1234', 'tao': '1234',
    'te': '1234', 'teng': '1234', 'ti': '1234', 'tian': '1234', 'tiao': '1234',
    'tie': '1234', 'ting': '1234', 'tong': '1234', 'tou': '1234', 'tu': '1234',
    'tuan': '1234', 'tui': '1234', 'tun': '1234', 'tuo': '1234',
    'wa': '1234', 'wai': '1234', 'wan': '1234', 'wang': '1234', 'wei': '1234',
    'wen': '1234', 'weng': '1234', 'wo': '1234', 'wu': '1234',
    'xi': '1234', 'xia': '1234', 'xian': '1234', 'xiang': '134', 'xiao': '1234',
    'xie': '1234', 'xin': '124', 'xing': '1234', 'xiong': '1234', 'xiu': '234',
    'xu': '1234', 'xuan': '1234', 'xue': '1234', 'xun': '1234',
    'ya': '1234', 'yan': '1234', 'yang': '1234', 'yao': '1234', 'ye': '1234',
    'yi': '1234', 'yin': '1234', 'ying': '1234', 'yong': '1234', 'you': '1234',
    'yu': '1234', 'yuan': '1234', 'yue': '1234', 'yun': '1234',
    'za': '1234', 'zai': '134', 'zan': '1234', 'zang': '1234', 'zao': '1234',
    'ze': '1234', 'zei': '1234', 'zen': '1234', 'zeng': '1234', 'zha': '1234',
    'zhai': '123', 'zhan': '234', 'zhang': '1234', 'zhao': '1234', 'zhe': '1234',
    'zhei': '1234', 'zhen': '1234', 'zheng': '1234', 'zhi': '1234', 'zhong': '1234',
    'zhou': '1234', 'zhu': '1234', 'zhua': '1234', 'zhuai': '1234', 'zhuan': '1234',
    'zhuang': '1234', 'zhui': '1234', 'zhun': '1234', 'zhuo': '1234', 'zi': '1234',
    'zong': '1234', 'zou': '1234', 'zu': '1234', 'zuan': '1234', 'zui': '1234',
    'zun': '1234', 'zuo': '1234'
};

// Build flat list of valid pinyin+tone combos
const VALID_COMBOS = [];
for (const [pinyin, tones] of Object.entries(SYLLABLE_TONES)) {
    for (const tone of tones) {
        VALID_COMBOS.push({ pinyin, tone: parseInt(tone) });
    }
}

const AUDIO_BASE_URL = 'https://raw.githubusercontent.com/davinfifield/mp3-chinese-pinyin-sound/master/mp3/';

// Pinyin chart structure - initials and finals
const INITIALS = ['', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w'];
const FINALS = ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ao', 'ou', 'an', 'en', 'ang', 'eng', 'ong', 'er',
    'ia', 'ie', 'iao', 'iu', 'ian', 'in', 'iang', 'ing', 'iong',
    'ua', 'uo', 'uai', 'ui', 'uan', 'un', 'uang', 'ueng',
    'üe', 'üan', 'ün'];

// Tone marks for each vowel
const TONE_MARKS = {
    'a': ['ā', 'á', 'ǎ', 'à'],
    'e': ['ē', 'é', 'ě', 'è'],
    'i': ['ī', 'í', 'ǐ', 'ì'],
    'o': ['ō', 'ó', 'ǒ', 'ò'],
    'u': ['ū', 'ú', 'ǔ', 'ù'],
    'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
};

// Convert pinyin + tone number to pinyin with tone mark
function addToneMark(pinyin, tone) {
    if (tone < 1 || tone > 4) return pinyin;

    const toneIndex = tone - 1;
    let result = pinyin.toLowerCase();

    // Handle 'uu' which represents 'ü' in the audio files
    if (result.includes('uu')) {
        result = result.replace('uu', 'ü');
    }

    // Rules for tone mark placement
    if (result.includes('a')) {
        return result.replace('a', TONE_MARKS['a'][toneIndex]);
    }
    if (result.includes('e')) {
        return result.replace('e', TONE_MARKS['e'][toneIndex]);
    }
    if (result.includes('ü')) {
        return result.replace('ü', TONE_MARKS['ü'][toneIndex]);
    }
    if (result.includes('ou')) {
        return result.replace('o', TONE_MARKS['o'][toneIndex]);
    }

    // Find the last vowel
    const vowels = ['i', 'o', 'u', 'v'];
    for (let i = result.length - 1; i >= 0; i--) {
        const char = result[i];
        if (vowels.includes(char)) {
            return result.slice(0, i) + TONE_MARKS[char][toneIndex] + result.slice(i + 1);
        }
    }

    return pinyin;
}

// Convert display pinyin to file format (ü -> uu)
function toFilePinyin(pinyin) {
    return pinyin.replace('ü', 'uu');
}

// Convert file pinyin to display format (uu -> ü)
function toDisplayPinyin(pinyin) {
    return pinyin.replace('uu', 'ü');
}

// State
let currentPinyin = '';
let currentTone = 0;
let correctCount = 0;
let incorrectCount = 0;
let streak = 0;
let answered = false;
let audio = null;
let practiceMode = 'all'; // 'all' or 'mistakes'
let currentPage = 'practice'; // 'practice' or 'explore'

// Spaced repetition tracking
let strugglingTones = {}; // { "ba1": wrongCount, ... }

// DOM Elements
const speakerBtn = document.getElementById('speaker-btn');
const pinyinDisplay = document.getElementById('pinyin-display');
const toneButtons = document.querySelectorAll('.tone-btn');
const nextBtn = document.getElementById('next-btn');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const streakCountEl = document.getElementById('streak-count');
const strugglingIndicator = document.getElementById('struggling-indicator');
const strugglingCountEl = document.getElementById('struggling-count');
const streakToast = document.getElementById('streak-toast');
const streakToastCount = document.getElementById('streak-toast-count');
const streakToastMessage = document.getElementById('streak-toast-message');

// Modal elements
const settingsModal = document.getElementById('settings-modal');
const settingsBtn = document.getElementById('settings-btn');
const settingsClose = document.getElementById('settings-close');
const resetBtn = document.getElementById('reset-btn');

// Page elements
const practicePage = document.getElementById('practice-page');
const explorePage = document.getElementById('explore-page');
const pinyinChart = document.getElementById('pinyin-chart');
const exploreSearch = document.getElementById('explore-search');

// Tone picker elements
const tonePickerOverlay = document.getElementById('tone-picker-overlay');
const tonePickerButtons = document.getElementById('tone-picker-buttons');
const tonePicker = document.querySelector('.tone-picker');

// Mode elements
const modeBanner = document.getElementById('mode-banner');
const modeText = document.getElementById('mode-text');
const modeCount = document.getElementById('mode-count');
const modeExit = document.getElementById('mode-exit');

// Navigation elements (desktop widgets)
const mistakesBtn = document.getElementById('mistakes-btn');
const exploreBtn = document.getElementById('explore-btn');
const settingsBtnWidget = document.getElementById('settings-btn');
const backBtn = document.getElementById('back-btn');

// Mobile menu elements
const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');
const menuPractice = document.getElementById('menu-practice');
const menuMistakes = document.getElementById('menu-mistakes');
const menuExplore = document.getElementById('menu-explore');
const menuSettings = document.getElementById('menu-settings');

// Streak milestones and messages
const STREAK_MESSAGES = {
    3: "Good start!",
    5: "Nice streak!",
    10: "You're on fire!",
    15: "Unstoppable!",
    20: "Tone master!",
    25: "Incredible!",
    30: "Legendary!",
    50: "Absolutely insane!",
    75: "Are you even human?!",
    100: "Tone god achieved!"
};

let toastTimeout = null;

function showStreakToast(count) {
    if (!STREAK_MESSAGES[count]) return;

    if (toastTimeout) {
        clearTimeout(toastTimeout);
        streakToast.classList.remove('visible');
    }

    streakToastCount.textContent = count;
    streakToastMessage.textContent = STREAK_MESSAGES[count];

    setTimeout(() => {
        streakToast.classList.add('visible');
    }, 50);

    toastTimeout = setTimeout(() => {
        streakToast.classList.remove('visible');
    }, 2000);
}

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

    // If in mistakes mode, only show struggling tones
    if (practiceMode === 'mistakes') {
        if (strugglingKeys.length === 0) {
            return null; // No mistakes to practice
        }
        const key = strugglingKeys[Math.floor(Math.random() * strugglingKeys.length)];
        const tone = parseInt(key.slice(-1));
        const pinyin = key.slice(0, -1);
        return { pinyin, tone };
    }

    // Normal mode: just random cards (no auto-review)
    const combo = VALID_COMBOS[Math.floor(Math.random() * VALID_COMBOS.length)];
    return { pinyin: combo.pinyin, tone: combo.tone };
}

// Load new card
function loadNewCard() {
    answered = false;
    const card = getNextCard();

    if (!card) {
        // No cards available (mistakes mode with no mistakes)
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

    // Update mode count
    updateModeCount();

    // Preload audio
    audio = new Audio(`${AUDIO_BASE_URL}${currentPinyin}${currentTone}.mp3`);
    audio.preload = 'auto';

    audio.addEventListener('canplaythrough', () => {
        if (!answered) playAudio();
    }, { once: true });

    audio.addEventListener('error', () => {
        console.log('Audio failed to load:', currentPinyin + currentTone);
    }, { once: true });
}

// Play audio
function playAudio() {
    if (audio && audio.readyState >= 2) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log('Audio play failed:', e));
    } else if (audio) {
        audio.addEventListener('canplaythrough', () => {
            audio.play().catch(e => console.log('Audio play failed:', e));
        }, { once: true });
    }
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
    correctCountEl.textContent = correctCount;
    incorrectCountEl.textContent = incorrectCount;
    streakCountEl.textContent = streak;
}

// Update struggling indicator
function updateStrugglingIndicator() {
    const count = getStrugglingKeys().length;
    strugglingCountEl.textContent = count;
    strugglingIndicator.classList.toggle('visible', count > 0);
}

// Update mode count (for review mode)
function updateModeCount() {
    if (practiceMode === 'mistakes') {
        const count = getStrugglingKeys().length;
        modeCount.textContent = `${count} remaining`;
    }
}

// Switch page
function switchPage(page) {
    currentPage = page;

    practicePage.classList.toggle('hidden', page !== 'practice');
    explorePage.classList.toggle('hidden', page !== 'explore');

    if (page === 'explore') {
        buildPinyinChart();
    }
}

// Set practice mode
function setPracticeMode(mode) {
    practiceMode = mode;
    switchPage('practice');

    // Update mode banner
    if (mode === 'mistakes') {
        modeBanner.classList.add('visible');
        modeText.textContent = 'Reviewing Mistakes';
        updateModeCount();
    } else {
        modeBanner.classList.remove('visible');
    }

    loadNewCard();
}

// Build pinyin chart with labeled rows and columns
function buildPinyinChart(filter = '') {
    pinyinChart.innerHTML = '';

    // Determine which finals to show based on filter
    let visibleFinals = FINALS;
    let visibleInitials = INITIALS;

    if (filter) {
        const lowerFilter = filter.toLowerCase();
        // Find all syllables that match the filter
        const matchingSyllables = Object.keys(SYLLABLE_TONES).filter(s =>
            toDisplayPinyin(s).includes(lowerFilter)
        );

        if (matchingSyllables.length === 0) {
            pinyinChart.innerHTML = '<div class="empty-state">No matches found</div>';
            return;
        }
    }

    // Set grid columns
    const numCols = visibleFinals.length + 1;
    pinyinChart.style.gridTemplateColumns = `48px repeat(${visibleFinals.length}, minmax(44px, 1fr))`;

    // Header row
    const cornerCell = document.createElement('div');
    cornerCell.className = 'chart-cell corner';
    cornerCell.textContent = '';
    pinyinChart.appendChild(cornerCell);

    visibleFinals.forEach(final => {
        const headerCell = document.createElement('div');
        headerCell.className = 'chart-cell header';
        headerCell.textContent = final;
        pinyinChart.appendChild(headerCell);
    });

    // Data rows
    visibleInitials.forEach(initial => {
        // Row header
        const rowHeader = document.createElement('div');
        rowHeader.className = 'chart-cell row-header';
        rowHeader.textContent = initial || '-';
        pinyinChart.appendChild(rowHeader);

        // Cells for each final
        visibleFinals.forEach(final => {
            const cell = document.createElement('div');
            cell.className = 'chart-cell';

            // Build the syllable
            let syllable = initial + final;

            // Handle special cases
            // j, q, x + ü -> ju, qu, xu (written without umlaut in standard pinyin)
            if (['j', 'q', 'x'].includes(initial) && final.startsWith('ü')) {
                syllable = initial + final.replace('ü', 'u');
            }
            // y + i/in/ing -> yi/yin/ying, y + u -> yu, y + ü -> yu
            if (initial === 'y') {
                if (final === 'i') syllable = 'yi';
                else if (final === 'in') syllable = 'yin';
                else if (final === 'ing') syllable = 'ying';
                else if (final === 'u' || final === 'ü') syllable = 'yu';
                else if (final.startsWith('ü')) syllable = 'y' + final.replace('ü', 'u');
                else syllable = 'y' + final;
            }
            // w + u -> wu
            if (initial === 'w' && final === 'u') syllable = 'wu';

            // Convert ü to uu for lookup
            const lookupSyllable = toFilePinyin(syllable);

            // Check if this syllable exists
            if (SYLLABLE_TONES[lookupSyllable]) {
                const displaySyllable = toDisplayPinyin(lookupSyllable);
                cell.className = 'chart-cell clickable';
                cell.textContent = displaySyllable;

                // Highlight if matches filter
                if (filter && displaySyllable.includes(filter.toLowerCase())) {
                    cell.classList.add('highlight');
                }

                cell.addEventListener('click', (e) => {
                    showTonePicker(lookupSyllable, e.currentTarget);
                });
            } else {
                cell.classList.add('empty');
                cell.textContent = '·';
            }

            pinyinChart.appendChild(cell);
        });
    });
}

let activeChartCell = null;
let exploreAudio = null;

// Play audio in explore mode
function playExploreAudio(pinyin, tone, btn) {
    if (exploreAudio) {
        exploreAudio.pause();
    }

    document.querySelectorAll('.tone-picker-btn.playing').forEach(b => b.classList.remove('playing'));

    exploreAudio = new Audio(`${AUDIO_BASE_URL}${pinyin}${tone}.mp3`);
    if (btn) btn.classList.add('playing');
    exploreAudio.play().catch(e => console.log('Audio play failed:', e));
    exploreAudio.onended = () => {
        if (btn) btn.classList.remove('playing');
    };
}

// Show tone picker popup positioned near the clicked cell
function showTonePicker(pinyin, cellElement) {
    // Remove active state from previous cell
    if (activeChartCell) {
        activeChartCell.classList.remove('active');
    }
    activeChartCell = cellElement;
    cellElement.classList.add('active');

    tonePickerButtons.innerHTML = '';
    const tones = SYLLABLE_TONES[pinyin];

    for (const tone of tones) {
        const btn = document.createElement('button');
        btn.className = 'tone-picker-btn';
        btn.innerHTML = `
            <span class="tone-picker-mark">${addToneMark(pinyin, parseInt(tone))}</span>
            <span class="tone-picker-num">${tone}</span>
        `;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            playExploreAudio(pinyin, tone, btn);
        });
        tonePickerButtons.appendChild(btn);
    }

    // Position the picker near the cell
    const rect = cellElement.getBoundingClientRect();
    const pickerWidth = tones.length * 52 + (tones.length - 1) * 4 + 12;
    const pickerHeight = 60;

    // Calculate left position (centered under cell)
    let left = rect.left + (rect.width / 2) - (pickerWidth / 2);

    // Keep within viewport horizontally
    const padding = 8;
    if (left < padding) left = padding;
    if (left + pickerWidth > window.innerWidth - padding) {
        left = window.innerWidth - pickerWidth - padding;
    }

    // Position below or above based on available space
    const spaceBelow = window.innerHeight - rect.bottom;
    const positionAbove = spaceBelow < pickerHeight + 20;

    tonePicker.style.left = `${left}px`;
    tonePicker.classList.toggle('above', positionAbove);

    if (positionAbove) {
        tonePicker.style.top = `${rect.top - pickerHeight - 8}px`;
    } else {
        tonePicker.style.top = `${rect.bottom + 8}px`;
    }

    tonePickerOverlay.classList.add('visible');
}

// Hide tone picker
function hideTonePicker() {
    tonePickerOverlay.classList.remove('visible');
    tonePicker.classList.remove('above');
    if (activeChartCell) {
        activeChartCell.classList.remove('active');
        activeChartCell = null;
    }
    if (exploreAudio) {
        exploreAudio.pause();
    }
}

// Event Listeners
speakerBtn.addEventListener('click', playAudio);

toneButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        handleToneSelect(parseInt(btn.dataset.tone));
    });
});

nextBtn.addEventListener('click', loadNewCard);

// Close mobile menu
function closeMenu() {
    menuOverlay.classList.remove('visible');
}

// Mobile menu button
menuBtn.addEventListener('click', () => {
    menuOverlay.classList.toggle('visible');
});

menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) closeMenu();
});

// Mobile menu items
menuPractice.addEventListener('click', () => {
    closeMenu();
    setPracticeMode('all');
});

menuMistakes.addEventListener('click', () => {
    closeMenu();
    if (getStrugglingKeys().length === 0) {
        alert('No mistakes to review yet! Make some mistakes first.');
        return;
    }
    setPracticeMode('mistakes');
});

menuExplore.addEventListener('click', () => {
    closeMenu();
    switchPage('explore');
});

menuSettings.addEventListener('click', () => {
    closeMenu();
    settingsModal.classList.add('visible');
});

// Desktop widget buttons
mistakesBtn.addEventListener('click', () => {
    if (getStrugglingKeys().length === 0) {
        alert('No mistakes to review yet! Make some mistakes first.');
        return;
    }
    setPracticeMode('mistakes');
});

exploreBtn.addEventListener('click', () => {
    switchPage('explore');
    hideTonePicker();
});

settingsBtnWidget.addEventListener('click', () => {
    settingsModal.classList.add('visible');
});

// Back button (explore page)
backBtn.addEventListener('click', () => {
    setPracticeMode('all');
});

// Mode exit
modeExit.addEventListener('click', () => setPracticeMode('all'));

// Settings modal
settingsClose.addEventListener('click', () => settingsModal.classList.remove('visible'));
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) settingsModal.classList.remove('visible');
});
resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all progress?')) {
        resetProgress();
        settingsModal.classList.remove('visible');
    }
});

// Explore search
exploreSearch.addEventListener('input', (e) => {
    hideTonePicker();
    buildPinyinChart(e.target.value);
});

// Tone picker
tonePickerOverlay.addEventListener('click', (e) => {
    if (e.target === tonePickerOverlay) {
        hideTonePicker();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Handle mobile menu
    if (menuOverlay.classList.contains('visible')) {
        if (e.key === 'Escape') {
            closeMenu();
        }
        return;
    }

    // Handle tone picker
    if (tonePickerOverlay.classList.contains('visible')) {
        if (e.key === 'Escape') {
            hideTonePicker();
        }
        return;
    }

    // Don't trigger if modal is open
    if (settingsModal.classList.contains('visible')) {
        if (e.key === 'Escape') {
            settingsModal.classList.remove('visible');
        }
        return;
    }

    // Don't trigger if typing in search
    if (document.activeElement === exploreSearch) {
        if (e.key === 'Escape') {
            exploreSearch.blur();
        }
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
});

// Initialize
loadProgress();
setPracticeMode('all');
