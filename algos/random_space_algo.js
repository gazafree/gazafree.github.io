function getSortedRandomIntArray(n, max){
    return Array.from({length: n}, () => Math.floor(Math.random() * max)).sort();
}

function addRandSpaces(word){
    /*
    Adds random spaces surrounded by a Kashida to a given word
    
    Example: 
    >> console.log(addRandSpaces("فلسطين"));
    >> 'فلسـ ـطـ ـين'
    */
    var n_spaces = Math.max(Math.round(Math.random() * word.length / 2), 1);
    var rand_positions = getSortedRandomIntArray(n_spaces, word.length - 1);
    
    var newWord = word;
    for (var i=0; i<rand_positions.length; i++){
        newWord = newWord.slice(0, rand_positions[i] + 1 + (i*3)) + "ـ ـ" + newWord.slice(rand_positions[i] + 1 + (i*3));
    }
    return newWord;
}

export {addRandSpaces};