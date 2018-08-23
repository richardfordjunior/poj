'use strict';

module.exports = {
  findFirstDuplicate: (arrayToParse) => {
    for (var a = 0; a < arrayToParse.length; a++) {
      for (var b = a + 1; b < arrayToParse.length; b++) {
        if (arrayToParse[a] === arrayToParse[b]) {
          return arrayToParse[a];
        }
      }
    }
  }
}