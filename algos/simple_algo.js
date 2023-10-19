const arabicReplacements={
    "ا":"ـ,a,ـ",
    "ب":"ـ,b,ـ",
    "ت":"ـ,t,ـ",
    "ث":"ـ,th,ـ",
    "ج":"ـ,g,ـ",
    "ح":"ـ,h,ـ",
    "خ":"ـ,kh,ـ",
    "د":"ـ,d,ـ",
    "ذ":"ـ,z,ـ",
    "ر":"ـ,r,ـ",
    "ز":"ـ,z,ـ",
    "س":"ـ,s,ـ",
    "ش":"ـ,sh,ـ",
    "ص":"ـ,s,ـ",
    "ض":"ـ,d,ـ",
    "ط":"ـ,t,ـ",
    "ظ":"ـ,z,ـ",
    "ع":"ـ,a,ـ",
    "غ":"ـ,gh,ـ",
    "ف":"ـ,f,ـ",
    "ق":"ـ,q,ـ",
    "ك":"ـ,k,ـ",
    "ل":"ـ,l,ـ",
    "م":"ـ,m,ـ",
    "ن":"ـ,n,ـ",
    "ه":"ـ,h,ـ",
    "و":"ـ,o,ـ",
    "ي":"ـ,e,ـ",
    "ى":"ـ,e,ـ",
    "ئ":"ـ,e,ـ",
    "ء":"ـ,a,ـ",
    "ؤ":"ـ,o,ـ",
    "إ":"ـ,i,ـ",
    "أ":"ـ,a,ـ",
    "آ":"ـ,a,ـ",
    "ة":"ـ,h,ـ",
    };
function modifyWord(word, position) {
let modifiedWord = word.split('');

switch(position) {
    case 'start':
    if (arabicReplacements[modifiedWord[0]]) {
        modifiedWord[0] = arabicReplacements[modifiedWord[0]];
    }
    break;
    case 'middle':
    let middleIndex = Math.floor(word.length / 2);
    if (arabicReplacements[modifiedWord[middleIndex]]) {
        modifiedWord[middleIndex] = arabicReplacements[modifiedWord[middleIndex]];
    }
    break;
    case 'end':
    if (arabicReplacements[modifiedWord[modifiedWord.length - 1]]) {
        modifiedWord[modifiedWord.length - 1] = arabicReplacements[modifiedWord[modifiedWord.length - 1]];
    }
    break;
    default:
    console.error("Invalid position specified");
}

return modifiedWord.join('');
}

function modifyWordStart(word) {
return modifyWord(word,'start');
}
function modifyWordMid(word) {
return modifyWord(word,'middle');
}
function modifyWordEnd(word) {
return modifyWord(word,'end');
}

export {modifyWordStart, modifyWordMid, modifyWordEnd};
