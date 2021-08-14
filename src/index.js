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
    let bin = '';
    let morse = [];
    let letter = '';
    let word = '';
for(let j = 0; j < expr.length; j = j + 10) {
    for(let a = j; a < j + 10; a = a + 2) {
        
        bin = expr[a] + expr[a + 1]
     switch(bin) {
         case '10':
            letter = '.'
         break;
         case '11':
            letter = '-'
        break;
        case '00':
            letter = ''
        break;
        case '**':
            letter = ' '
        break;
        }
        word += letter
     }
     morse.push(word)
     word = '';
    }
let arr =[];
  for(let i = 0; i < morse.length; i++) {
        for(let key in MORSE_TABLE) {
            if(morse[i] === key) {
             arr.push(MORSE_TABLE[key])
            }
            else if(morse[i] === '     ') {
                arr.push(' ');
                break; 
            }
        }
    }
    return arr.join('');
    // write your solution here
}
//console.log(decode('00000011110000000010**********00000011110000000010'))
module.exports = {
   decode
}



