const emojiSn = require('./index');

// Texts from https://www.digitalamerica.org/the-word-on-the-street-is-not-a-word-its-an-grace-obrien/
let texts = [
  `Hello World! 🌎`, 
  "We are meshing 📝 language with 👀 language to communicate ideas and feelings.",
  `Switching from 📳 and 👫 communications to primarily 📄, we have lost out on the feelings that can only be conveyed in inflection and 😊 😝`,
  `I can convey my bad mood about having to work on Sunday with just a 😡 or my excitement for my sister’s landing a new job with not one 😍 but 😍`
]

texts.forEach(text => {
  console.log('------------------------------------------');
  console.log('Input:');
  console.log(text);
  console.log('-------');

  const encoded = emojiSn.encode(text);
  console.log('Encoded:');
  console.log(encoded);
  console.log('-------');

  const decoded = emojiSn.decode(encoded);
  console.log('Decoded:');
  console.log(decoded);
  console.log('-------');
});