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
  
  export {modifyWordRandom};
