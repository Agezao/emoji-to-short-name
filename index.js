"use strict";

const emojiDict = require("emoji-dictionary");
const emojiRegex = require("emoji-regex");

const getFromBetween = {
  results: [],
  string: "",
  getFromBetween: function(sub1, sub2) {
    if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0)
      return false;
    var SP = this.string.indexOf(sub1) + sub1.length;
    var string1 = this.string.substr(0, SP);
    var string2 = this.string.substr(SP);
    var TP = string1.length + string2.indexOf(sub2);
    var response = this.string.substring(SP, TP);
    this.string = this.string.substr(TP);
    return response;
  },
  removeFromBetween: function(sub1, sub2) {
    if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0)
      return false;
    var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
    this.string = this.string.replace(removal, "");
  },
  getAllResults: function(sub1, sub2) {
    // first check to see if we do have both substrings
    if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;

    // find one result
    var result = this.getFromBetween(sub1, sub2);

    if(result.indexOf(' ') < 0) {
      // push it to the results array
      this.results.push(result);
    }

    // if there's more substrings
    if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1 && ((this.string.split(sub1).length - 1) > 1)) {
      this.getAllResults(sub1, sub2);
    } else return;
  },
  get: function(string, sub1, sub2) {
    if((string.split(sub1).length - 1) <= 1)
      return [];

    this.results = [];
    this.string = string;
    this.getAllResults(sub1, sub2);
    return this.results;
  }
};

const encode = input => {
  const regex = emojiRegex();
  let output = input.toString();

  let match;
  while ((match = regex.exec(output))) {
    let emoji = match[0];
    let emojiName = emojiDict.getName(emoji);

    let a = output.substr(0, match.index);
    let b = output.substr(match.index + emoji.length);
    output = a + ":" + emojiName + ":" + b;
  }

  return output;
};

const decode = input => {
  let output = input.toString();

  var result = getFromBetween.get(input, ":", ":");
  result.forEach(textEmoji => {
    let emojiEquivalent = emojiDict.getUnicode(textEmoji);
    if (emojiEquivalent)
      output = output.replace(`:${textEmoji}:`, emojiEquivalent);
  });

  return output;
};

const emojiParser = {
  decode: decode,
  encode: encode
};

module.exports = emojiParser;
