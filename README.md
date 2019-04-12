# Emoji to short-name 🎉😊
> Encode/Decode emojis 📝 inside a string to/from his :short-name:

## Why?
Sometimes it's safer to store and transfer `emojis` under an ASCII safe format to prevent the information to get messy or have her integrity violated. So, this package intention is to provide an easy way to:

`Encode message -> delivery/store -> Decode message to present`.

## How it works 🚀

Input string: `We are meshing 📝 language with 👀 language to communicate ideas and feelings.`

#### Encoding
`emojiSn.encode(input);`
Encoded string: `We are meshing :memo: language with :eyes: language to communicate ideas and feelings.`

#### Decoding
`emojiSn.decode(encoded);`
Decoded string: `We are meshing 📝 language with 👀 language to communicate ideas and feelings.`

## Installing
### 📲 Downloading
- Using `npm` or `yarn`

  ```sh
    # Using npm
    npm install emoji-to-short-name --save

    # Using yarn
    yarn add emoji-to-short-name
  ```

## 👀 Example/Using

```js
const emojiSn = require('emoji-to-short-name');

const input = "We are meshing 📝 language with 👀 language to communicate ideas and feelings.";
const encoded = emojiSn.encode(text);
console.log(encoded);
// => We are meshing :memo: language with :eyes: language to communicate ideas and feelings.

const decoded = emojiSn.decode(encoded);
console.log(decoded);
// => We are meshing 📝 language with 👀 language to communicate ideas and feelings.

```

## 📋 Docs
| Method | Attributes | Output |
|---------------------------|-------------|--------------------|
| *`encode(input)`* | `input` the input string to be encoded | Same `input` string but with emojis being replaced by their equivalent :short-name: |
| *`decode(input)`* | `input` the input string to be decoded | Same `input` string but with valid :short-name:'s being replaced by their equivalent emojis |


## License
Go on, just do it.
