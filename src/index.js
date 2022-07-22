const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newExpr = expr.split('');
    let morseArr = [];
    for (let i = 0; i < expr.length; i++) {
        morseArr.push(newExpr.splice(0, 10));
    }
    let newArr = [];
    morseArr.forEach((morseLetter) =>
    newArr.push(morseLetter.join('').replace(/^0+/, '')));

    let result = newArr.map((morseLetter) =>
    morseLetter.replace(/10/g, '.').replace(/11/g, '-')
  );
  return result
    .map((morseLetter) => (morseLetter === '**********' ? ' ' : MORSE_TABLE[morseLetter]))
    .join('');
}

module.exports = {
    decode
}