'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let arg = word.trim().toLowerCase().split('');
  for (let i = 0; i < arg.length; i++) {
// if word starts with a vowel
    if (vowels.indexOf(word[i]) !== -1 && word[i] === word[0]) {
      return arg.concat('yay').join('');
// if word starts with a consonant
    } else if (vowels.indexOf(word[i]) >= 0 ) {
      const firstLetters = arg.slice(0, i);
      const middleLetters = arg.slice(i, arg.length);
      return middleLetters.concat(firstLetters, 'ay').join('');
    }
  }

}



function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
