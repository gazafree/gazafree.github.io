import {letters_map} from "./letters_tables.js";

function addNull(word){
    var newWord = "";
    var badChars = ['\u0001', '\u0002', '\u0003', '\u0004', '\u0005', '\u0006','\u0007', '\u0008']
    for(var i=0; i < word.length; i++){
        for(var j=0; j<Object.keys(letters_map).length ; j++){
                newWord += word[i];
                if( (['ا','أ','إ','آ','و','ر','ز','د','ذ'].indexOf(word[i]) == -1) &&
                    (['ء','.',',','،','!','?',':'].indexOf(word[i+1]) == -1) && 
                    i != (word.length-1)  && letters_map[word[j]])
                newWord += 'ـ'+badChars[Math.floor(Math.random() * badChars.length)]+'ـ';
                break;
        }
    }
    return newWord;
}
export {addNull};
