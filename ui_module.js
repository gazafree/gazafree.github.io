import { flip } from './algos/flip_algo.js';
import {addNull} from './algos/add_null_algo.js';
import {dotless} from './algos/dotless_algo.js';
import {modifyWordStart, modifyWordMid, modifyWordEnd} from './algos/simple_algo.js';
import {modifyWordRandom} from './algos/random_algo.js';
import {modifyEnglishWord} from './algos/english_algo.js';
import {replaceMiddleLetter} from './algos/advanced_algo.js'; // new

var wordsDict = {};
let original_text = '';

function selectWord(btn){
    var btns = document.querySelectorAll('.wordbtn')
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
    
    // Create buttons for each word
    const fragment = document.createDocumentFragment();
    for (var word of wordsList) {
        wordsDict[word] = 0;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn wordbtn btn-secondary m-1';
        button.textContent = word;
        button.addEventListener('click', function() {
            selectWord(button);
        });

        fragment.appendChild(button);
    }
    wordsBox.appendChild(fragment);

    word_choice_container.style.display = "grid";
    document.getElementById('modify-section').style.display = "block";
    document.getElementById('modify-section').scrollIntoView();
}
function isPotentialEnglishWord(word) {
    return /^[a-zA-Z]+$/.test(word);
}
function convertText(){
    if(Object.values(wordsDict).indexOf(1) > -1){
        var newTextBox = document.getElementById('newTextBox');
        newTextBox.innerHTML = "";
        
        let text_to_alter = original_text.replace(/\n/g, ' <br/> ').split(/\s/);

        const encodings = [flip, addNull, dotless, modifyWordStart, modifyWordMid, modifyWordEnd, modifyWordRandom, replaceMiddleLetter];
        for (let encoding of encodings) {
            let newWords = [];
            for (var word of text_to_alter) {
                if (word.length > 1 && wordsDict[word]){
                    if (isPotentialEnglishWord(word)) {
                        //The only supported english mode is modifyEnglishWord
                        newWords.push(modifyEnglishWord(word));
                    }else{
                        newWords.push(encoding(word));
                    }
                } else {
                    newWords.push(word);
                }
            }

            //newTextBox.innerHTML += "<div class=\"decoratedText\" dir=\"rtl\" onClick=\"copyDecoration(this)\">" + newWords.join(" ") + "</div>";
            console.log("-----check replacement------");
            const newDiv = document.createElement('div');
            newDiv.textContent = newWords.join(" ");
            newDiv.dir = 'rtl';
            newDiv.className = 'decoratedText';
            newDiv.addEventListener('click', function() {
                copyDecoration(newDiv);
            });
            newTextBox.appendChild(newDiv);
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

export {formatWords ,convertText, selectKeywords, selectAll, deselectAll};
