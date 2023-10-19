function replaceMiddleLetter(word) {
    const mapping = {
        'ا': 'ⴶ',
        'ب': 'Ų',
        'ت': 'Ü',
        'ث': 'Û',
        'ج': "ζ",
        'ح': 'Շ',
        'خ': "ζ'",
        'د': 'כ',
        'ذ': "כ'",
        'ر': 'ノ',
        'ز': 'ژ',
        'س': 'ω',
        'ش': 'ฬ',
        'ص': 'ם',
        'ض': "'ם",
        'ط': 'あ',
        'ظ': 'お',
        'ع': 'દ',
        'غ': "'દ",
        'ف': 'פֿ',
        'ق': 'פֿ',
        'ك': 'ـگـ',
        'ل': 'ł',
        'م': 'ჲ',
        'ن': '๒',
        'ه': 'θ',
        'و': 'Ջ',
        'ؤ': "Ѯ",
        'ي': "'Ѧ",
        'ى': "'Ѧ",
        'ئ': 'ტ',
        'ء': 'ར'
    };

    if (word.length < 3) {
        return word;
    }

    const middleIndex = Math.floor(word.length / 2);
    const beforeMiddle = word.slice(0, middleIndex);
    const afterMiddle = word.slice(middleIndex + 1);

    let middleLetter;
    if (word[middleIndex] in mapping) {
        middleLetter = mapping[word[middleIndex]];
    } else {
        middleLetter = word[middleIndex];
    }

    const options = [",", ";", ":", "?", "^", '!', "#"];
    const selectedString1 = options[Math.floor(Math.random() * options.length)];
    const selectedString2 = options[Math.floor(Math.random() * options.length)];

    const modifiedMiddleLetter = Array.from(middleLetter).map(c => Math.random() < 0.5 ? ' ' + c : c).join('');
    const output = beforeMiddle + selectedString1 + modifiedMiddleLetter + selectedString2 + afterMiddle;
   
    const rtlOutput = '\u202E' + output + '\u202C';  // for RTL
    return rtlOutput;
}

export {replaceMiddleLetter};

// for testing:
// const modifiedWord = replaceMiddleLetter("حماس");
// console.log(modifiedWord);
