var alone_letters = ['ا','أ','إ','آ','ؤ','و','ر','ز','د','ذ'];
var skip_chars = ['ء','.',',','،','!','?','؟',':','#','_'];

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
const letters_map = {
    'ا': [ '౹', 'l' ],
    'أ': [ '౹', 'l' ],
    'إ': [ '౹', 'l' ],
    'آ': [ '౹', 'l' ],
    'ب': [ 'ٮ', 'ụ' ],
    'ت': [ 'ٮ', 'ü' ],
    'ث': [ 'ٮ', 'û', 'ΰ' ],
    'ج': [ 'چ', 'ڇ', 'ڃ', 'ڄ' ],
    'ح': [ 'ב' ],
    'خ': [ 'څ', 'ڂ' ],
    'د': [ 'ڊ', 'כ' ],
    'ذ': [ 'ڌ' ],
    'ر': [ 'ȷ', 'ɹ' ],
    'ز': [ 'ʝ', 'j' ],
    'س': [ 'ٮٮٮ' ],
    'ش': [ 'ڜ' ],
    'ص': [ 'ڝ' ],
    'ض': [ 'ڞ' ],
    'ط': [ 'ط' ],
    'ظ': [ 'ڟ' ],
    'ع': [ '۶' ],
    'غ': [ 'ڠ' ],
    'ف': [ 'ȯ', 'ڢ', 'ܦ' ],
    'ق': [ 'ö', '૭', 'ۊ' ],
    'ك': [ 'ګ' ],
    'ل': [ 'ڶ', 'ڷ' ],
    'م': [ 'ܩ', 'oـ' ],
    'ن': [ 'ں', 'ů', 'ၑ' ],
    'ه': [ 'ھ' ],
    'و': [ 'ވ', '𐤁' ],
    'ي': [ 'ې' ],
    'ة': [ '⍥', 'ö', 'ۂ' ]
  }

 /*-----------------------------------*/
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

/*-----------------------------------*/
function getRandomCharacterSet() {
    const characterSets = ["+++++++++++++", "+_+_+_+_+_+_+", "+٠+٠+٠+٠+٠+٠++" , "+ء+ء+ء+ء+ء+ء"];
    const randomIndex = Math.floor(Math.random() * characterSets.length);
    return characterSets[randomIndex];
  }
  
  function generateRandomString(length, charset) {
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset.charAt(randomIndex);
    }
  
    return randomString;
  }
  
  function modifyWordRandom(word) {
    let charset = getRandomCharacterSet();
    // Check if the word has less than 3 characters; if so, no modification is needed
    if (word.length < 3) {
      return word;
    }
  
    // Extract the first and last characters
    const firstChar = word.charAt(0);
    const lastChar = word.charAt(word.length - 1);
  
    // Modify characters in the middle by appending random strings
    let middleChars = '';
  
    for (let i = 1; i < word.length - 1; i++) {
      const originalChar = word.charAt(i);
      const randomLength = (Math.floor(Math.random() * 5) + 1)%4; // Generate a random length (1 to 5 characters)
      const randomString = "ــ"+generateRandomString(randomLength, charset)+"ـ";
      middleChars += originalChar + randomString;
    }
  
    // Combine the first, modified middle, and last characters
    const encodedWord = firstChar + middleChars + lastChar;
  
    return encodedWord;
  }
  
/*-----------------------------------*/
var wordsDict = {};
let original_text = '';

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  };

function formatWords (){
    var userText = document.getElementById('userText').value.trim();
    original_text = userText;

    const stripped_text = userText.replace(/\s+/g,' ');
    if (stripped_text.length === 0) {
        return;
    }
    
    const word_choice_container = document.getElementById('word-choice-container');
    const wordsBox = document.getElementById('wordsBox');

    wordsBox.innerHTML = ""
    wordsDict = {};
    
    const wordsList = stripped_text.split(/\s/);
    for (var word of wordsList){
        wordsDict[word] = 0;
        wordsBox.innerHTML += `<button type="button" class="btn wordbtn btn-secondary m-1" id="word-btn" onclick="selectWord(this)">${word}</button>`;
    }

    word_choice_container.style.display = "grid";
    document.getElementById('modify-section').style.display = "block";
    document.getElementById('modify-section').scrollIntoView();
}

function selectWord(btn){
    btns = document.querySelectorAll('.wordbtn')
    console.log("selectWord: ", btn.innerHTML)
    if(btn.classList.contains("btn-dark")){
        wordsDict[btn.innerHTML] = 0;
        for(var button of btns){
            if(button.innerHTML == btn.innerHTML){
                localStorage[btn.innerHTML] = 'false'
                button.classList.remove("btn-dark")
            }
        }
    }else{
        wordsDict[btn.innerHTML] = 1;
        for(var button of btns){
            if(button.innerHTML == btn.innerHTML){
                localStorage[btn.innerHTML] = 'true'
                button.classList.add("btn-dark")
            }
        }
    }
}

function convertText(){
    if(Object.values(wordsDict).indexOf(1) > -1){
        var newTextBox = document.getElementById('newTextBox');
        newTextBox.innerHTML = "";
        
        let text_to_alter = original_text.replace(/\n/g, ' <br/> ').split(/\s/);

        const encodings = [flip, addNull, dotless, modifyWordStart, modifyWordMid, modifyWordEnd, modifyWordRandom];
        for (let encoding of encodings) {
            let newWords = [];
            for (word of text_to_alter) {
                if (word.length > 1 && wordsDict[word]){
                    newWords.push(encoding(word));
                } else {
                    newWords.push(word);
                }
            }

            newTextBox.innerHTML += "<div class=\"decoratedText\" dir=\"rtl\" onClick=\"copyDecoration(this)\">" + newWords.join(" ") + "</div>";
        }

        newTextBox.style.display = "block";
        document.getElementById('result-section').style.display = "grid";
        document.getElementById('result-section').scrollIntoView();
    } else {
        swal({
            title: "خطأ",
            text: "لم تقم بإختيار أى كلمة للتشفير",
            icon: "error",
            button: "تم",
          });
    }
}


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

function selectKeywords(){
    var btns = document.querySelectorAll('.wordbtn')
    
    for(var btn of btns){
        if(keywords.includes(btn.innerHTML) || localStorage[btn.innerHTML] == 'true'){
            console.log("__key__",btn.innerHTML ,keywords.includes(btn.innerHTML),  localStorage[btn.innerHTML])
            btn.classList.add("btn-dark")
            wordsDict[btn.innerHTML] = 1;
        }
    }
}

function selectAll(){
    var btns = document.querySelectorAll('.wordbtn');
    for(let btn of btns){
        console.log("__all__", btn.innerHTML , localStorage[btn.innerHTML])
        wordsDict[btn.innerHTML] = 1
        btn.classList.add("btn-dark")
        localStorage[btn.innerHTML] = 'true'
    }
}
function deselectAll(){
    var btns = document.querySelectorAll('.wordbtn');
    for(let btn of btns){
        wordsDict[btn.innerHTML] = 0
        btn.classList.remove("btn-dark")
        localStorage[btn.innerHTML] = 'false'
    }
}

function copyDecoration(box){
    var range = document.createRange();
    range.selectNode(box);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    
    swal({
        title: "تم نسخ النص",
        text: "لقد قمت بنسخ النص بنجاح",
        icon: "success",
        button: "تم",
      });
}

/*
window.onload = (event) => {
    var span = document.createElement("span")
    span.innerHTML = `بإمكانك الأن إضافة موقعنا إلي شاشة هاتفك الرئيسية<br> من خلال الضغط علي لائحة الإعدادات في أعلي يمين الشاشة و إختيار <br> "أضف إلي الشاشة الرئيسية" / "Add to Home Screen"`
    swal({
        title: "أضف الموقع الي هاتفك",
        icon: "/images/instruction.gif",
        button: "تم",
      });
  };
  */
