(function () {
  "use strict";
    angular.module('talkDemo')

    .filter('ionLetterDividers', ['$parse', function($parse) {
      // Reuse letter objects for angular digest, so it can assign an id
      // to each letter object.
      var letters = {}
      var l;
      for (var i = 'A'.charCodeAt(), ii = 'Z'.charCodeAt(); i <= ii; i++) {
        l = String.fromCharCode(i);
        letters[l] = {
          $$ionLetter: l
        };
      }
      return function(input, wordKey) {
        if (!input || !input.length) return;
    
        var getWord = wordKey ? function(item) { return item[wordKey]; } : angular.identity;
        var output = [];
        var currentLetter;
        var word;
        var letter;
        var item;
        for (var i = 0, ii = input.length; i < ii && (item = input[i]); i++) {
          word = getWord(item);
          letter = word && word.charAt && word.charAt(0).toUpperCase();
          if (letter && currentLetter !== letter) {
            output.push(letters[letter]);
            currentLetter = letter;
          }
          output.push(item);
        }
        return output;
      }
    }]);
}());    