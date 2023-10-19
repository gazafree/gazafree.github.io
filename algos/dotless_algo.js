import {alone_letters, skip_chars, letters_map} from "./letters_tables.js";
import {addNull} from './add_null_algo.js';


let Arabic_dotless = {
    ا: "ا",
    أ: "ا",
    إ: "ا",
    آ: "ا",
    ء: "",
    ب: "ٮ",
    پ: "ٮ",
    ت: "ٮ",
    ث: "ٮ",
    ج: "ح",
    چ: "ح",
    خ: "ح",
    ح: "ح",
    د: "د",
    ذ: "د",
    ر: "ر",
    ز: "ر",
    ژ: "ر",
    س: "س",
    ش: "س",
    ص: "ص",
    ض: "ص",
    ط: "ط",
    ظ: "ط",
    ع: "ع",
    غ: "ع",
    ف: "ڡ",
    ق: "ٯ",
    ك: "ک",
    گ: "ک",
    ل: "ل",
    م: "م",
    ن: "ں",
    ه: "ه",
    و: "و",
    ؤ: "و",
    ة: "ه",
    ى: "ى",
    ي: "ى",
    ئ: "ى",
  };

const dotless = (word) => {
    let new_word = '';
    
    for(let i = 0; i < word.length; i++) {
        const conversion_array = letters_map[word[i]];
        
        new_word += Arabic_dotless[word[i]];
        
        new_word += i != (word.length - 1) &&
            conversion_array &&
            !alone_letters.includes(word[i]) &&
            !skip_chars.includes(word[i]) &&
            !skip_chars.includes(word[i + 1]) ? 'ـ' : '';
    }

    return addNull(new_word);
}

export { dotless};
