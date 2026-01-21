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

    // Rules for tone mark placement:
    // 1. If there's an 'a' or 'e', it gets the mark
    // 2. If there's 'ou', the 'o' gets the mark
    // 3. Otherwise, the last vowel gets the mark

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

// State
let currentPinyin = '';
let currentTone = 0;
let correctCount = 0;
let incorrectCount = 0;
let streak = 0;
let answered = false;
let audio = null;

// Spaced repetition tracking
let strugglingTones = {}; // { "ba1": wrongCount, ... }
let reviewMode = false;

// DOM Elements
const speakerBtn = document.getElementById('speaker-btn');
const pinyinDisplay = document.getElementById('pinyin-display');
const toneButtons = document.querySelectorAll('.tone-btn');
const nextBtn = document.getElementById('next-btn');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const streakCountEl = document.getElementById('streak-count');
const reviewBanner = document.getElementById('review-banner');
const strugglingIndicator = document.getElementById('struggling-indicator');
const strugglingCountEl = document.getElementById('struggling-count');

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

// Get next card (prioritize struggling tones)
function getNextCard() {
    const strugglingKeys = Object.keys(strugglingTones).filter(k => strugglingTones[k] >= 2);

    // 40% chance to review struggling tones if there are any
    if (strugglingKeys.length > 0 && Math.random() < 0.4) {
        reviewMode = true;
        const key = strugglingKeys[Math.floor(Math.random() * strugglingKeys.length)];
        const tone = parseInt(key.slice(-1));
        const pinyin = key.slice(0, -1);
        return { pinyin, tone };
    }

    reviewMode = false;
    // Pick from validated combinations
    const combo = VALID_COMBOS[Math.floor(Math.random() * VALID_COMBOS.length)];
    return { pinyin: combo.pinyin, tone: combo.tone };
}

// Load new card
function loadNewCard() {
    answered = false;
    const card = getNextCard();
    currentPinyin = card.pinyin;
    currentTone = card.tone;

    // Reset UI
    pinyinDisplay.textContent = 'Listen & Choose';
    pinyinDisplay.classList.remove('revealed');
    toneButtons.forEach(btn => {
        const tone = parseInt(btn.dataset.tone);
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
        // Update the tone mark to show current pinyin with this tone
        const toneMarkEl = btn.querySelector('.tone-mark');
        toneMarkEl.textContent = addToneMark(currentPinyin, tone);
    });
    nextBtn.classList.remove('visible');
    reviewBanner.classList.toggle('visible', reviewMode);

    // Preload audio and wait for it to load
    audio = new Audio(`${AUDIO_BASE_URL}${currentPinyin}${currentTone}.mp3`);
    audio.preload = 'auto';

    // Auto-play once loaded
    audio.addEventListener('canplaythrough', () => {
        if (!answered) playAudio();
    }, { once: true });

    // Handle load errors
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
        // If not ready, wait for it
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

    // Update stats
    if (isCorrect) {
        correctCount++;
        streak++;
        // Reduce struggling count on correct answer
        if (strugglingTones[key]) {
            strugglingTones[key]--;
            if (strugglingTones[key] <= 0) {
                delete strugglingTones[key];
            }
        }
    } else {
        incorrectCount++;
        streak = 0;
        // Increase struggling count
        strugglingTones[key] = (strugglingTones[key] || 0) + 1;
    }

    updateStats();
    updateStrugglingIndicator();
    saveProgress();

    // Update button states
    toneButtons.forEach(btn => {
        const btnTone = parseInt(btn.dataset.tone);
        btn.disabled = true;
        if (btnTone === currentTone) {
            btn.classList.add('correct');
        } else if (btnTone === selectedTone && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Reveal pinyin with tone mark
    pinyinDisplay.textContent = addToneMark(currentPinyin, currentTone);
    pinyinDisplay.classList.add('revealed');

    // Show next button
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
    const count = Object.keys(strugglingTones).filter(k => strugglingTones[k] >= 2).length;
    strugglingCountEl.textContent = count;
    strugglingIndicator.classList.toggle('visible', count > 0);
}

// Event Listeners
speakerBtn.addEventListener('click', playAudio);

toneButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        handleToneSelect(parseInt(btn.dataset.tone));
    });
});

nextBtn.addEventListener('click', loadNewCard);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '4' && !answered) {
        handleToneSelect(parseInt(e.key));
    } else if ((e.key === ' ' || e.key === 'Enter') && answered) {
        loadNewCard();
    } else if (e.key === 'r' || e.key === 'R') {
        playAudio();
    }
});

// Initialize
loadProgress();
loadNewCard();
