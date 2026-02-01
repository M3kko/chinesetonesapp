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

// Parse pinyin with tone mark to base pinyin + tone number
function parsePinyinWithTone(pinyin) {
    let base = '';
    let tone = 5; // neutral/no tone

    for (const char of pinyin) {
        if (TONE_MARK_TO_BASE[char]) {
            const [vowel, t] = TONE_MARK_TO_BASE[char];
            base += vowel;
            tone = t;
        } else {
            base += char;
        }
    }

    return { pinyin: base, tone };
}

// Convert display pinyin to file format (ü -> uu)
function toFilePinyin(pinyin) {
    return pinyin.replace('ü', 'uu');
}

// Convert file pinyin to display format (uu -> ü)
function toDisplayPinyin(pinyin) {
    return pinyin.replace('uu', 'ü');
}

// Shuffle array (Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Streak toast
let toastTimeout = null;

function showStreakToast(count) {
    if (!STREAK_MESSAGES[count]) return;

    const streakToast = document.getElementById('streak-toast');
    const streakToastCount = document.getElementById('streak-toast-count');
    const streakToastMessage = document.getElementById('streak-toast-message');

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
