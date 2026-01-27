// 214 Kangxi Radicals data (from branneman's JSON)
const RADICALS = [
    { id: 1, radical: "一", pinyin: "yī", english: "one", strokeCount: 1 },
    { id: 2, radical: "丨", pinyin: "gǔn", english: "line", strokeCount: 1 },
    { id: 3, radical: "丶", pinyin: "zhǔ", english: "dot", strokeCount: 1 },
    { id: 4, radical: "丿", pinyin: "piě", english: "slash", strokeCount: 1 },
    { id: 5, radical: "乙", pinyin: "yǐ", english: "second", strokeCount: 1 },
    { id: 6, radical: "亅", pinyin: "jué", english: "hook", strokeCount: 1 },
    { id: 7, radical: "二", pinyin: "èr", english: "two", strokeCount: 2 },
    { id: 8, radical: "亠", pinyin: "tóu", english: "lid", strokeCount: 2 },
    { id: 9, radical: "人", pinyin: "rén", english: "man", strokeCount: 2 },
    { id: 10, radical: "儿", pinyin: "ér", english: "legs", strokeCount: 2 },
    { id: 11, radical: "入", pinyin: "rù", english: "enter", strokeCount: 2 },
    { id: 12, radical: "八", pinyin: "bā", english: "eight", strokeCount: 2 },
    { id: 13, radical: "冂", pinyin: "jiōng", english: "down box", strokeCount: 2 },
    { id: 14, radical: "冖", pinyin: "mì", english: "cover", strokeCount: 2 },
    { id: 15, radical: "冫", pinyin: "bīng", english: "ice", strokeCount: 2 },
    { id: 16, radical: "几", pinyin: "jī", english: "table", strokeCount: 2 },
    { id: 17, radical: "凵", pinyin: "qiǎn", english: "open box", strokeCount: 2 },
    { id: 18, radical: "刀", pinyin: "dāo", english: "knife", strokeCount: 2 },
    { id: 19, radical: "力", pinyin: "lì", english: "power", strokeCount: 2 },
    { id: 20, radical: "勹", pinyin: "bāo", english: "wrap", strokeCount: 2 },
    { id: 21, radical: "匕", pinyin: "bǐ", english: "spoon", strokeCount: 2 },
    { id: 22, radical: "匚", pinyin: "fāng", english: "box", strokeCount: 2 },
    { id: 23, radical: "匸", pinyin: "xǐ", english: "hiding", strokeCount: 2 },
    { id: 24, radical: "十", pinyin: "shí", english: "ten", strokeCount: 2 },
    { id: 25, radical: "卜", pinyin: "bǔ", english: "divination", strokeCount: 2 },
    { id: 26, radical: "卩", pinyin: "jié", english: "seal", strokeCount: 2 },
    { id: 27, radical: "厂", pinyin: "hàn", english: "cliff", strokeCount: 2 },
    { id: 28, radical: "厶", pinyin: "sī", english: "private", strokeCount: 2 },
    { id: 29, radical: "又", pinyin: "yòu", english: "again", strokeCount: 2 },
    { id: 30, radical: "口", pinyin: "kǒu", english: "mouth", strokeCount: 3 },
    { id: 31, radical: "囗", pinyin: "wéi", english: "enclosure", strokeCount: 3 },
    { id: 32, radical: "土", pinyin: "tǔ", english: "earth", strokeCount: 3 },
    { id: 33, radical: "士", pinyin: "shì", english: "scholar", strokeCount: 3 },
    { id: 34, radical: "夂", pinyin: "zhǐ", english: "go", strokeCount: 3 },
    { id: 35, radical: "夊", pinyin: "suī", english: "go slowly", strokeCount: 3 },
    { id: 36, radical: "夕", pinyin: "xī", english: "evening", strokeCount: 3 },
    { id: 37, radical: "大", pinyin: "dà", english: "big", strokeCount: 3 },
    { id: 38, radical: "女", pinyin: "nǚ", english: "woman", strokeCount: 3 },
    { id: 39, radical: "子", pinyin: "zǐ", english: "child", strokeCount: 3 },
    { id: 40, radical: "宀", pinyin: "mián", english: "roof", strokeCount: 3 },
    { id: 41, radical: "寸", pinyin: "cùn", english: "inch", strokeCount: 3 },
    { id: 42, radical: "小", pinyin: "xiǎo", english: "small", strokeCount: 3 },
    { id: 43, radical: "尢", pinyin: "wāng", english: "lame", strokeCount: 3 },
    { id: 44, radical: "尸", pinyin: "shī", english: "corpse", strokeCount: 3 },
    { id: 45, radical: "屮", pinyin: "chè", english: "sprout", strokeCount: 3 },
    { id: 46, radical: "山", pinyin: "shān", english: "mountain", strokeCount: 3 },
    { id: 47, radical: "巛", pinyin: "chuān", english: "river", strokeCount: 3 },
    { id: 48, radical: "工", pinyin: "gōng", english: "work", strokeCount: 3 },
    { id: 49, radical: "己", pinyin: "jǐ", english: "oneself", strokeCount: 3 },
    { id: 50, radical: "巾", pinyin: "jīn", english: "turban", strokeCount: 3 },
    { id: 51, radical: "干", pinyin: "gān", english: "dry", strokeCount: 3 },
    { id: 52, radical: "幺", pinyin: "yāo", english: "short thread", strokeCount: 3 },
    { id: 53, radical: "广", pinyin: "guǎng", english: "dotted cliff", strokeCount: 3 },
    { id: 54, radical: "廴", pinyin: "yǐn", english: "long stride", strokeCount: 3 },
    { id: 55, radical: "廾", pinyin: "gǒng", english: "two hands", strokeCount: 3 },
    { id: 56, radical: "弋", pinyin: "yì", english: "shoot", strokeCount: 3 },
    { id: 57, radical: "弓", pinyin: "gōng", english: "bow", strokeCount: 3 },
    { id: 58, radical: "彐", pinyin: "jì", english: "snout", strokeCount: 3 },
    { id: 59, radical: "彡", pinyin: "shān", english: "bristle", strokeCount: 3 },
    { id: 60, radical: "彳", pinyin: "chì", english: "step", strokeCount: 3 },
    { id: 61, radical: "心", pinyin: "xīn", english: "heart", strokeCount: 4 },
    { id: 62, radical: "戈", pinyin: "gē", english: "halberd", strokeCount: 4 },
    { id: 63, radical: "戶", pinyin: "hù", english: "door", strokeCount: 4 },
    { id: 64, radical: "手", pinyin: "shǒu", english: "hand", strokeCount: 4 },
    { id: 65, radical: "支", pinyin: "zhī", english: "branch", strokeCount: 4 },
    { id: 66, radical: "攴", pinyin: "pū", english: "rap", strokeCount: 4 },
    { id: 67, radical: "文", pinyin: "wén", english: "script", strokeCount: 4 },
    { id: 68, radical: "斗", pinyin: "dǒu", english: "dipper", strokeCount: 4 },
    { id: 69, radical: "斤", pinyin: "jīn", english: "axe", strokeCount: 4 },
    { id: 70, radical: "方", pinyin: "fāng", english: "square", strokeCount: 4 },
    { id: 71, radical: "无", pinyin: "wú", english: "not", strokeCount: 4 },
    { id: 72, radical: "日", pinyin: "rì", english: "sun", strokeCount: 4 },
    { id: 73, radical: "曰", pinyin: "yuē", english: "say", strokeCount: 4 },
    { id: 74, radical: "月", pinyin: "yuè", english: "moon", strokeCount: 4 },
    { id: 75, radical: "木", pinyin: "mù", english: "tree", strokeCount: 4 },
    { id: 76, radical: "欠", pinyin: "qiàn", english: "lack", strokeCount: 4 },
    { id: 77, radical: "止", pinyin: "zhǐ", english: "stop", strokeCount: 4 },
    { id: 78, radical: "歹", pinyin: "dǎi", english: "death", strokeCount: 4 },
    { id: 79, radical: "殳", pinyin: "shū", english: "weapon", strokeCount: 4 },
    { id: 80, radical: "毋", pinyin: "wú", english: "do not", strokeCount: 4 },
    { id: 81, radical: "比", pinyin: "bǐ", english: "compare", strokeCount: 4 },
    { id: 82, radical: "毛", pinyin: "máo", english: "fur", strokeCount: 4 },
    { id: 83, radical: "氏", pinyin: "shì", english: "clan", strokeCount: 4 },
    { id: 84, radical: "气", pinyin: "qì", english: "steam", strokeCount: 4 },
    { id: 85, radical: "水", pinyin: "shuǐ", english: "water", strokeCount: 4 },
    { id: 86, radical: "火", pinyin: "huǒ", english: "fire", strokeCount: 4 },
    { id: 87, radical: "爪", pinyin: "zhǎo", english: "claw", strokeCount: 4 },
    { id: 88, radical: "父", pinyin: "fù", english: "father", strokeCount: 4 },
    { id: 89, radical: "爻", pinyin: "yáo", english: "trigrams", strokeCount: 4 },
    { id: 90, radical: "爿", pinyin: "pán", english: "split wood", strokeCount: 4 },
    { id: 91, radical: "片", pinyin: "piàn", english: "slice", strokeCount: 4 },
    { id: 92, radical: "牙", pinyin: "yá", english: "fang", strokeCount: 4 },
    { id: 93, radical: "牛", pinyin: "niú", english: "cow", strokeCount: 4 },
    { id: 94, radical: "犬", pinyin: "quǎn", english: "dog", strokeCount: 4 },
    { id: 95, radical: "玄", pinyin: "xuán", english: "profound", strokeCount: 5 },
    { id: 96, radical: "玉", pinyin: "yù", english: "jade", strokeCount: 5 },
    { id: 97, radical: "瓜", pinyin: "guā", english: "melon", strokeCount: 5 },
    { id: 98, radical: "瓦", pinyin: "wǎ", english: "tile", strokeCount: 5 },
    { id: 99, radical: "甘", pinyin: "gān", english: "sweet", strokeCount: 5 },
    { id: 100, radical: "生", pinyin: "shēng", english: "life", strokeCount: 5 },
    { id: 101, radical: "用", pinyin: "yòng", english: "use", strokeCount: 5 },
    { id: 102, radical: "田", pinyin: "tián", english: "field", strokeCount: 5 },
    { id: 103, radical: "疋", pinyin: "pǐ", english: "bolt of cloth", strokeCount: 5 },
    { id: 104, radical: "疒", pinyin: "nè", english: "sickness", strokeCount: 5 },
    { id: 105, radical: "癶", pinyin: "bō", english: "footsteps", strokeCount: 5 },
    { id: 106, radical: "白", pinyin: "bái", english: "white", strokeCount: 5 },
    { id: 107, radical: "皮", pinyin: "pí", english: "skin", strokeCount: 5 },
    { id: 108, radical: "皿", pinyin: "mǐn", english: "dish", strokeCount: 5 },
    { id: 109, radical: "目", pinyin: "mù", english: "eye", strokeCount: 5 },
    { id: 110, radical: "矛", pinyin: "máo", english: "spear", strokeCount: 5 },
    { id: 111, radical: "矢", pinyin: "shǐ", english: "arrow", strokeCount: 5 },
    { id: 112, radical: "石", pinyin: "shí", english: "stone", strokeCount: 5 },
    { id: 113, radical: "示", pinyin: "shì", english: "spirit", strokeCount: 5 },
    { id: 114, radical: "禸", pinyin: "róu", english: "track", strokeCount: 5 },
    { id: 115, radical: "禾", pinyin: "hé", english: "grain", strokeCount: 5 },
    { id: 116, radical: "穴", pinyin: "xué", english: "cave", strokeCount: 5 },
    { id: 117, radical: "立", pinyin: "lì", english: "stand", strokeCount: 5 },
    { id: 118, radical: "竹", pinyin: "zhú", english: "bamboo", strokeCount: 6 },
    { id: 119, radical: "米", pinyin: "mǐ", english: "rice", strokeCount: 6 },
    { id: 120, radical: "糸", pinyin: "mì", english: "silk", strokeCount: 6 },
    { id: 121, radical: "缶", pinyin: "fǒu", english: "jar", strokeCount: 6 },
    { id: 122, radical: "网", pinyin: "wǎng", english: "net", strokeCount: 6 },
    { id: 123, radical: "羊", pinyin: "yáng", english: "sheep", strokeCount: 6 },
    { id: 124, radical: "羽", pinyin: "yǔ", english: "feather", strokeCount: 6 },
    { id: 125, radical: "老", pinyin: "lǎo", english: "old", strokeCount: 6 },
    { id: 126, radical: "而", pinyin: "ér", english: "and", strokeCount: 6 },
    { id: 127, radical: "耒", pinyin: "lěi", english: "plow", strokeCount: 6 },
    { id: 128, radical: "耳", pinyin: "ěr", english: "ear", strokeCount: 6 },
    { id: 129, radical: "聿", pinyin: "yù", english: "brush", strokeCount: 6 },
    { id: 130, radical: "肉", pinyin: "ròu", english: "meat", strokeCount: 6 },
    { id: 131, radical: "臣", pinyin: "chén", english: "minister", strokeCount: 6 },
    { id: 132, radical: "自", pinyin: "zì", english: "self", strokeCount: 6 },
    { id: 133, radical: "至", pinyin: "zhì", english: "arrive", strokeCount: 6 },
    { id: 134, radical: "臼", pinyin: "jiù", english: "mortar", strokeCount: 6 },
    { id: 135, radical: "舌", pinyin: "shé", english: "tongue", strokeCount: 6 },
    { id: 136, radical: "舛", pinyin: "chuǎn", english: "oppose", strokeCount: 6 },
    { id: 137, radical: "舟", pinyin: "zhōu", english: "boat", strokeCount: 6 },
    { id: 138, radical: "艮", pinyin: "gèn", english: "stopping", strokeCount: 6 },
    { id: 139, radical: "色", pinyin: "sè", english: "color", strokeCount: 6 },
    { id: 140, radical: "艸", pinyin: "cǎo", english: "grass", strokeCount: 6 },
    { id: 141, radical: "虍", pinyin: "hū", english: "tiger", strokeCount: 6 },
    { id: 142, radical: "虫", pinyin: "chóng", english: "insect", strokeCount: 6 },
    { id: 143, radical: "血", pinyin: "xuè", english: "blood", strokeCount: 6 },
    { id: 144, radical: "行", pinyin: "xíng", english: "walk", strokeCount: 6 },
    { id: 145, radical: "衣", pinyin: "yī", english: "clothes", strokeCount: 6 },
    { id: 146, radical: "襾", pinyin: "yà", english: "west", strokeCount: 6 },
    { id: 147, radical: "見", pinyin: "jiàn", english: "see", strokeCount: 7 },
    { id: 148, radical: "角", pinyin: "jiǎo", english: "horn", strokeCount: 7 },
    { id: 149, radical: "言", pinyin: "yán", english: "speech", strokeCount: 7 },
    { id: 150, radical: "谷", pinyin: "gǔ", english: "valley", strokeCount: 7 },
    { id: 151, radical: "豆", pinyin: "dòu", english: "bean", strokeCount: 7 },
    { id: 152, radical: "豕", pinyin: "shǐ", english: "pig", strokeCount: 7 },
    { id: 153, radical: "豸", pinyin: "zhì", english: "badger", strokeCount: 7 },
    { id: 154, radical: "貝", pinyin: "bèi", english: "shell", strokeCount: 7 },
    { id: 155, radical: "赤", pinyin: "chì", english: "red", strokeCount: 7 },
    { id: 156, radical: "走", pinyin: "zǒu", english: "run", strokeCount: 7 },
    { id: 157, radical: "足", pinyin: "zú", english: "foot", strokeCount: 7 },
    { id: 158, radical: "身", pinyin: "shēn", english: "body", strokeCount: 7 },
    { id: 159, radical: "車", pinyin: "chē", english: "cart", strokeCount: 7 },
    { id: 160, radical: "辛", pinyin: "xīn", english: "bitter", strokeCount: 7 },
    { id: 161, radical: "辰", pinyin: "chén", english: "morning", strokeCount: 7 },
    { id: 162, radical: "辵", pinyin: "chuò", english: "walk", strokeCount: 7 },
    { id: 163, radical: "邑", pinyin: "yì", english: "city", strokeCount: 7 },
    { id: 164, radical: "酉", pinyin: "yǒu", english: "wine", strokeCount: 7 },
    { id: 165, radical: "釆", pinyin: "biàn", english: "distinguish", strokeCount: 7 },
    { id: 166, radical: "里", pinyin: "lǐ", english: "village", strokeCount: 7 },
    { id: 167, radical: "金", pinyin: "jīn", english: "gold", strokeCount: 8 },
    { id: 168, radical: "長", pinyin: "cháng", english: "long", strokeCount: 8 },
    { id: 169, radical: "門", pinyin: "mén", english: "gate", strokeCount: 8 },
    { id: 170, radical: "阜", pinyin: "fù", english: "mound", strokeCount: 8 },
    { id: 171, radical: "隶", pinyin: "lì", english: "slave", strokeCount: 8 },
    { id: 172, radical: "隹", pinyin: "zhuī", english: "short-tailed bird", strokeCount: 8 },
    { id: 173, radical: "雨", pinyin: "yǔ", english: "rain", strokeCount: 8 },
    { id: 174, radical: "靑", pinyin: "qīng", english: "blue", strokeCount: 8 },
    { id: 175, radical: "非", pinyin: "fēi", english: "wrong", strokeCount: 8 },
    { id: 176, radical: "面", pinyin: "miàn", english: "face", strokeCount: 9 },
    { id: 177, radical: "革", pinyin: "gé", english: "leather", strokeCount: 9 },
    { id: 178, radical: "韋", pinyin: "wéi", english: "tanned leather", strokeCount: 9 },
    { id: 179, radical: "韭", pinyin: "jiǔ", english: "leek", strokeCount: 9 },
    { id: 180, radical: "音", pinyin: "yīn", english: "sound", strokeCount: 9 },
    { id: 181, radical: "頁", pinyin: "yè", english: "leaf", strokeCount: 9 },
    { id: 182, radical: "風", pinyin: "fēng", english: "wind", strokeCount: 9 },
    { id: 183, radical: "飛", pinyin: "fēi", english: "fly", strokeCount: 9 },
    { id: 184, radical: "食", pinyin: "shí", english: "eat", strokeCount: 9 },
    { id: 185, radical: "首", pinyin: "shǒu", english: "head", strokeCount: 9 },
    { id: 186, radical: "香", pinyin: "xiāng", english: "fragrant", strokeCount: 9 },
    { id: 187, radical: "馬", pinyin: "mǎ", english: "horse", strokeCount: 10 },
    { id: 188, radical: "骨", pinyin: "gǔ", english: "bone", strokeCount: 10 },
    { id: 189, radical: "高", pinyin: "gāo", english: "tall", strokeCount: 10 },
    { id: 190, radical: "髟", pinyin: "biāo", english: "hair", strokeCount: 10 },
    { id: 191, radical: "鬥", pinyin: "dòu", english: "fight", strokeCount: 10 },
    { id: 192, radical: "鬯", pinyin: "chàng", english: "sacrificial wine", strokeCount: 10 },
    { id: 193, radical: "鬲", pinyin: "lì", english: "cauldron", strokeCount: 10 },
    { id: 194, radical: "鬼", pinyin: "guǐ", english: "ghost", strokeCount: 10 },
    { id: 195, radical: "魚", pinyin: "yú", english: "fish", strokeCount: 11 },
    { id: 196, radical: "鳥", pinyin: "niǎo", english: "bird", strokeCount: 11 },
    { id: 197, radical: "鹵", pinyin: "lǔ", english: "salt", strokeCount: 11 },
    { id: 198, radical: "鹿", pinyin: "lù", english: "deer", strokeCount: 11 },
    { id: 199, radical: "麥", pinyin: "mài", english: "wheat", strokeCount: 11 },
    { id: 200, radical: "麻", pinyin: "má", english: "hemp", strokeCount: 11 },
    { id: 201, radical: "黃", pinyin: "huáng", english: "yellow", strokeCount: 12 },
    { id: 202, radical: "黍", pinyin: "shǔ", english: "millet", strokeCount: 12 },
    { id: 203, radical: "黑", pinyin: "hēi", english: "black", strokeCount: 12 },
    { id: 204, radical: "黹", pinyin: "zhǐ", english: "embroidery", strokeCount: 12 },
    { id: 205, radical: "黽", pinyin: "mǐn", english: "frog", strokeCount: 13 },
    { id: 206, radical: "鼎", pinyin: "dǐng", english: "tripod", strokeCount: 13 },
    { id: 207, radical: "鼓", pinyin: "gǔ", english: "drum", strokeCount: 13 },
    { id: 208, radical: "鼠", pinyin: "shǔ", english: "rat", strokeCount: 13 },
    { id: 209, radical: "鼻", pinyin: "bí", english: "nose", strokeCount: 14 },
    { id: 210, radical: "齊", pinyin: "qí", english: "even", strokeCount: 14 },
    { id: 211, radical: "齒", pinyin: "chǐ", english: "tooth", strokeCount: 15 },
    { id: 212, radical: "龍", pinyin: "lóng", english: "dragon", strokeCount: 16 },
    { id: 213, radical: "龜", pinyin: "guī", english: "turtle", strokeCount: 16 },
    { id: 214, radical: "龠", pinyin: "yuè", english: "flute", strokeCount: 17 }
];

// Tone mark to base vowel + tone number mapping
const TONE_MARK_TO_BASE = {
    'ā': ['a', 1], 'á': ['a', 2], 'ǎ': ['a', 3], 'à': ['a', 4],
    'ē': ['e', 1], 'é': ['e', 2], 'ě': ['e', 3], 'è': ['e', 4],
    'ī': ['i', 1], 'í': ['i', 2], 'ǐ': ['i', 3], 'ì': ['i', 4],
    'ō': ['o', 1], 'ó': ['o', 2], 'ǒ': ['o', 3], 'ò': ['o', 4],
    'ū': ['u', 1], 'ú': ['u', 2], 'ǔ': ['u', 3], 'ù': ['u', 4],
    'ǖ': ['ü', 1], 'ǘ': ['ü', 2], 'ǚ': ['ü', 3], 'ǜ': ['ü', 4],
};

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
let currentPage = 'landing'; // 'landing', 'selection', 'practice', 'explore', or 'radicals'
let userHasInteracted = false; // Track if user has interacted (for autoplay)

// Spaced repetition tracking
let strugglingTones = {}; // { "ba1": wrongCount, ... }

// Radicals state
let radicalsModes = ['audio-meaning', 'audio-radical', 'radical-meaning', 'meaning-radical']; // Selected modes for practice
let currentRadicalMode = null; // Current mode being used for this card
let currentRadical = null;
let radicalsCorrect = 0;
let radicalsIncorrect = 0;
let radicalsStreak = 0;
let radicalsAnswered = false;
let radicalsAudio = null;
let showPinyinHints = true;
let strugglingRadicals = {}; // { radicalId: wrongCount, ... }

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

// Landing and Selection page elements
const landingPage = document.getElementById('landing-page');
const selectionPage = document.getElementById('selection-page');
const appContainer = document.getElementById('app-container');
const landingSignin = document.getElementById('landing-signin');
const landingCreate = document.getElementById('landing-create');
const landingGuest = document.getElementById('landing-guest');
const selectPinyin = document.getElementById('select-pinyin');
const selectRadicals = document.getElementById('select-radicals');
const selectionBack = document.getElementById('selection-back');

// Modal elements
const settingsModal = document.getElementById('settings-modal');
const settingsBtn = document.getElementById('settings-btn');
const settingsClose = document.getElementById('settings-close');
const resetBtn = document.getElementById('reset-btn');

// Radicals mode modal elements
const radicalsModeModal = document.getElementById('radicals-mode-modal');
const radicalsModeClose = document.getElementById('radicals-mode-close');
const startRadicalsBtn = document.getElementById('start-radicals-btn');
const modalPinyinToggle = document.getElementById('modal-pinyin-toggle');
const modeToggles = document.querySelectorAll('input[name="radical-mode"]');

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

// Navigation elements
const pinyinBackBtn = document.getElementById('pinyin-back-btn');
const mistakesBtn = document.getElementById('mistakes-btn');
const exploreBtn = document.getElementById('explore-btn');
const backBtn = document.getElementById('back-btn');

// Radicals page elements
const radicalsPage = document.getElementById('radicals-page');
const radicalsPractice = document.getElementById('radicals-practice');
const radicalsPracticeBack = document.getElementById('radicals-practice-back');
const radicalsModeIndicator = document.getElementById('radicals-mode-indicator');
const radicalsPrompt = document.getElementById('radicals-prompt');
const radicalsPinyinHint = document.getElementById('radicals-pinyin-hint');
const radicalsSpeaker = document.getElementById('radicals-speaker');
const radicalsChoices = document.getElementById('radicals-choices');
const radicalsNextBtn = document.getElementById('radicals-next');
const radicalsCorrectEl = document.getElementById('radicals-correct');
const radicalsIncorrectEl = document.getElementById('radicals-incorrect');
const radicalsStreakEl = document.getElementById('radicals-streak');
const radicalsStrugglingIndicator = document.getElementById('radicals-struggling-indicator');
const radicalsStrugglingCount = document.getElementById('radicals-struggling-count');

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
        if (!answered && userHasInteracted) playAudio();
    }, { once: true });

    audio.addEventListener('error', () => {
        console.log('Audio failed to load:', currentPinyin + currentTone);
    }, { once: true });

    // Start loading immediately
    audio.load();
}

// Play audio
function playAudio() {
    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch(e => {
        console.log('Audio play failed, retrying:', e);
        // If play fails, try loading and playing again
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

    // Hide all pages
    landingPage.classList.toggle('hidden', page !== 'landing');
    selectionPage.classList.toggle('hidden', page !== 'selection');
    appContainer.classList.toggle('hidden', !['practice', 'explore', 'radicals'].includes(page));
    practicePage.classList.toggle('hidden', page !== 'practice');
    explorePage.classList.toggle('hidden', page !== 'explore');
    radicalsPage.classList.toggle('hidden', page !== 'radicals');

    if (page === 'explore') {
        buildPinyinChart();
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

// ==================== RADICALS PRACTICE ====================

// Load radicals progress from localStorage
function loadRadicalsProgress() {
    const saved = localStorage.getItem('radicalsProgress');
    if (saved) {
        const data = JSON.parse(saved);
        radicalsCorrect = data.correct || 0;
        radicalsIncorrect = data.incorrect || 0;
        strugglingRadicals = data.struggling || {};
        showPinyinHints = data.showPinyin !== false;
        showPinyinToggle.checked = showPinyinHints;
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
    radicalsCorrectEl.textContent = radicalsCorrect;
    radicalsIncorrectEl.textContent = radicalsIncorrect;
    radicalsStreakEl.textContent = radicalsStreak;
}

// Update radicals struggling indicator
function updateRadicalsStrugglingIndicator() {
    const count = getStrugglingRadicalIds().length;
    radicalsStrugglingCount.textContent = count;
    radicalsStrugglingIndicator.classList.toggle('visible', count > 0);
}

// Update the stats summary on mode selection screen
function updateRadicalsStatsSummary() {
    const strugglingIds = getStrugglingRadicalIds();
    const masteredCount = Object.keys(strugglingRadicals).filter(id => strugglingRadicals[id] === 0).length;
    const learningCount = strugglingIds.length;
    const newCount = 214 - masteredCount - learningCount;

    radicalsMasteredEl.textContent = masteredCount;
    radicalsLearningEl.textContent = learningCount;
    radicalsNewEl.textContent = Math.max(0, newCount);
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

// Shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Update start button state based on selected modes
function updateStartButtonState() {
    const anySelected = Array.from(modeToggles).some(toggle => toggle.checked);
    startRadicalsBtn.disabled = !anySelected;
}

// Show radicals mode selection modal
function showRadicalsModeModal() {
    // Load saved pinyin preference
    modalPinyinToggle.checked = showPinyinHints;
    updateStartButtonState();
    radicalsModeModal.classList.add('visible');
}

// Hide radicals mode modal
function hideRadicalsModeModal() {
    radicalsModeModal.classList.remove('visible');
}

// Start radicals practice with selected modes
function startRadicalsPractice() {
    // Get selected modes from checkboxes
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

    // Update mode indicator text
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
    radicalsNextBtn.classList.remove('visible');

    // Select a random mode from enabled modes
    currentRadicalMode = radicalsModes[Math.floor(Math.random() * radicalsModes.length)];

    // Select a random radical
    currentRadical = RADICALS[Math.floor(Math.random() * RADICALS.length)];

    // Get distractors
    const distractors = getRadicalDistractors(currentRadical, 3);
    const allChoices = shuffleArray([currentRadical, ...distractors]);

    // Setup the prompt based on mode
    setupRadicalPrompt();

    // Setup the choices based on mode
    setupRadicalChoices(allChoices);

    // Auto-play audio for audio modes
    if ((currentRadicalMode === 'audio-meaning' || currentRadicalMode === 'audio-radical') && userHasInteracted) {
        setTimeout(playRadicalAudio, 100);
    }
}

// Setup the radical prompt display
function setupRadicalPrompt() {
    const isAudioMode = currentRadicalMode === 'audio-meaning' || currentRadicalMode === 'audio-radical';
    const showRadical = currentRadicalMode === 'radical-meaning';
    const showMeaning = currentRadicalMode === 'meaning-radical';

    // Show/hide speaker button
    radicalsSpeaker.classList.toggle('hidden', !isAudioMode);

    // Setup prompt content
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

    // Setup pinyin hint below prompt
    // Only show on radical-meaning mode (character shown, picking English)
    // Never show on audio modes (audio IS the pinyin) or meaning-radical (would give away answer)
    if (showPinyinHints && showRadical) {
        radicalsPinyinHint.textContent = currentRadical.pinyin;
    } else {
        radicalsPinyinHint.textContent = '';
    }
}

// Setup radical choices
function setupRadicalChoices(choices) {
    radicalsChoices.innerHTML = '';

    const showRadicalChoices = currentRadicalMode === 'audio-radical' || currentRadicalMode === 'meaning-radical';

    // Show pinyin hints on choices for meaning-radical and audio-radical modes
    // (audio-radical with pinyin is easier/beginner mode - user can toggle off for harder practice)
    const showPinyinOnChoices = showPinyinHints && (currentRadicalMode === 'meaning-radical' || currentRadicalMode === 'audio-radical');

    choices.forEach(radical => {
        const btn = document.createElement('button');
        btn.className = 'radical-choice-btn';
        btn.dataset.id = radical.id;

        if (showRadicalChoices) {
            // Show radical character as choice
            btn.innerHTML = `
                <span class="choice-main">${radical.radical}</span>
                ${showPinyinOnChoices ? `<span class="choice-hint">${radical.pinyin}</span>` : ''}
            `;
        } else {
            // Show meaning as choice
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
                strugglingRadicals[radicalKey] = 0; // Keep at 0 to track mastery
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

    // Update button states
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

    // Update prompt to show full info (reveal answer)
    if (currentRadicalMode === 'audio-meaning' || currentRadicalMode === 'audio-radical') {
        radicalsPrompt.textContent = currentRadical.radical;
        radicalsPrompt.classList.remove('audio-mode');
        radicalsPrompt.classList.add('revealed');
        radicalsPinyinHint.textContent = `${currentRadical.pinyin} - ${currentRadical.english}`;
    } else {
        radicalsPrompt.classList.add('revealed');
    }

    radicalsNextBtn.classList.add('visible');
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

// Landing page
landingSignin.addEventListener('click', () => {
    // TODO: Implement sign in
    alert('Sign in coming soon! Continuing as guest...');
    continueToSelection();
});

landingCreate.addEventListener('click', () => {
    // TODO: Implement account creation
    alert('Account creation coming soon! Continuing as guest...');
    continueToSelection();
});

landingGuest.addEventListener('click', () => {
    continueToSelection();
});

// Selection page
selectPinyin.addEventListener('click', () => {
    userHasInteracted = true;
    switchPage('practice');
    setPracticeMode('all');
});

selectRadicals.addEventListener('click', () => {
    userHasInteracted = true;
    showRadicalsModeModal();
});

selectionBack.addEventListener('click', () => {
    switchPage('landing');
});

// Radicals mode modal
radicalsModeClose.addEventListener('click', hideRadicalsModeModal);

radicalsModeModal.addEventListener('click', (e) => {
    if (e.target === radicalsModeModal) hideRadicalsModeModal();
});

startRadicalsBtn.addEventListener('click', startRadicalsPractice);

// Update button state when mode toggles change
modeToggles.forEach(toggle => {
    toggle.addEventListener('change', updateStartButtonState);
});

// Pinyin practice
speakerBtn.addEventListener('click', () => {
    userHasInteracted = true;
    playAudio();
});

toneButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        handleToneSelect(parseInt(btn.dataset.tone));
    });
});

nextBtn.addEventListener('click', loadNewCard);

pinyinBackBtn.addEventListener('click', () => {
    switchPage('selection');
});

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

settingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('visible');
});

// Radicals page event listeners
radicalsPracticeBack.addEventListener('click', () => {
    exitRadicalsPractice();
});

radicalsSpeaker.addEventListener('click', () => {
    userHasInteracted = true;
    playRadicalAudio();
});

radicalsNextBtn.addEventListener('click', loadNewRadicalCard);

// Back button (explore page)
backBtn.addEventListener('click', () => {
    switchPage('practice');
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
    // Handle radicals mode modal
    if (radicalsModeModal.classList.contains('visible')) {
        if (e.key === 'Escape') {
            hideRadicalsModeModal();
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

    // Radicals mode shortcuts
    if (currentPage === 'radicals' && currentRadicalMode) {
        if (e.key >= '1' && e.key <= '4' && !radicalsAnswered) {
            const buttons = radicalsChoices.querySelectorAll('.radical-choice-btn');
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
});

// Initialize
loadProgress();
loadRadicalsProgress();
checkFirstVisit();
