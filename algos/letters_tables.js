
var alone_letters = ['ا','أ','إ','آ','ؤ','و','ر','ز','د','ذ'];
var skip_chars = ['ء','.',',','،','!','?','؟',':','#','_'];


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
  };
  
  export {alone_letters, skip_chars, letters_map};