const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function wordCounter(text) {
  const charCount = text.length;
  const wordCount = text.trim().split(/\s+/).length;
  const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

  return {
    Characters: charCount,
    Words: wordCount,
    Sentences: sentenceCount
  }
}

const text = "This is a sample text. It has multiple sentences. And some punctuation!";
console.log(text);
console.log(wordCounter(text));
console.log();

rl.question('Enter your text here: --> ', (answer) => {
  console.log();
  console.log("Your text breaks down like this: ")
  console.log(wordCounter(answer));
  console.log();
  rl.close()
});