// ==================== EXPLORE / PINYIN CHART ====================

let activeChartCell = null;
let exploreAudio = null;

// Build pinyin chart with labeled rows and columns
function buildPinyinChart(filter = '') {
    const pinyinChart = document.getElementById('pinyin-chart');
    pinyinChart.innerHTML = '';

    let visibleFinals = FINALS;
    let visibleInitials = INITIALS;

    if (filter) {
        const lowerFilter = filter.toLowerCase();
        const matchingSyllables = Object.keys(SYLLABLE_TONES).filter(s =>
            toDisplayPinyin(s).includes(lowerFilter)
        );

        if (matchingSyllables.length === 0) {
            pinyinChart.innerHTML = '<div class="empty-state">No matches found</div>';
            return;
        }
    }

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
        const rowHeader = document.createElement('div');
        rowHeader.className = 'chart-cell row-header';
        rowHeader.textContent = initial || '-';
        pinyinChart.appendChild(rowHeader);

        visibleFinals.forEach(final => {
            const cell = document.createElement('div');
            cell.className = 'chart-cell';

            let syllable = initial + final;

            // Handle special cases
            if (['j', 'q', 'x'].includes(initial) && final.startsWith('ü')) {
                syllable = initial + final.replace('ü', 'u');
            }
            if (initial === 'y') {
                if (final === 'i') syllable = 'yi';
                else if (final === 'in') syllable = 'yin';
                else if (final === 'ing') syllable = 'ying';
                else if (final === 'u' || final === 'ü') syllable = 'yu';
                else if (final.startsWith('ü')) syllable = 'y' + final.replace('ü', 'u');
                else syllable = 'y' + final;
            }
            if (initial === 'w' && final === 'u') syllable = 'wu';

            const lookupSyllable = toFilePinyin(syllable);

            if (SYLLABLE_TONES[lookupSyllable]) {
                const displaySyllable = toDisplayPinyin(lookupSyllable);
                cell.className = 'chart-cell clickable';
                cell.textContent = displaySyllable;

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
    const tonePickerOverlay = document.getElementById('tone-picker-overlay');
    const tonePickerButtons = document.getElementById('tone-picker-buttons');
    const tonePicker = document.querySelector('.tone-picker');

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

    let left = rect.left + (rect.width / 2) - (pickerWidth / 2);

    const padding = 8;
    if (left < padding) left = padding;
    if (left + pickerWidth > window.innerWidth - padding) {
        left = window.innerWidth - pickerWidth - padding;
    }

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
    const tonePickerOverlay = document.getElementById('tone-picker-overlay');
    const tonePicker = document.querySelector('.tone-picker');

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
