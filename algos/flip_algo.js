import {alone_letters} from "./letters_tables.js";
import {skip_chars} from "./letters_tables.js";
import {letters_map} from "./letters_tables.js";

const flip = (word) => {
    const random_index = [];
    const iterations = Math.ceil(word.length / 2);

    for(let i = 0; i < iterations; i++) {
        let rand = -1;
        do {
            rand = Math.floor(Math.random() * word.length);   
        } while(random_index.includes(rand));
        random_index.push(rand);
    }

    let new_word = '';
    
    for(let i = 0; i < word.length; i++) {
        const conversion_array = letters_map[word[i]];
        
        new_word += (random_index.includes(i) && conversion_array) ?
            conversion_array[Math.floor(Math.random() * conversion_array.length)] : word[i];
        
        new_word += i != (word.length - 1) &&
            conversion_array &&
            !alone_letters.includes(word[i]) &&
            !skip_chars.includes(word[i]) &&
            !skip_chars.includes(word[i + 1]) ? 'ـ' : '';
    }
    return new_word;
}

export {flip};
