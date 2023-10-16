function encode(mail) {
    var key = Math.floor(Math.random()*256);
    var result = ('0' + key.toString(16)).slice(-2);
    for(var position = 0; position < mail.length; position++) {
        var byte = mail.charCodeAt(position) ^ key;
        result += ('0' + byte.toString(16)).slice(-2);
    }
    return result;
}
console.log("hello##", encode("freegaza2023@gmail.com"));