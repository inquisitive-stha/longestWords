var longestLength = 0;

  function longer(longest, currentWord) {
    let currentWordLength = currentWord.length;

    if (currentWordLength > longestLength) {
      longestLength = currentWordLength;
      return currentWord;
    }
    if (currentWordLength === longestLength) {
      return countVowel(currentWord) > countVowel(longest)
        ? currentWord
        : longest;
    }
    return longest;
  }

  function longestWord(str) {
    var words = str.split(/[ ,]+/);
    return words.reduce(longer);
  }

  function countVowel(str) {
    //find the count of vowels
    const count = str.match(/[aeiou]/gi).length;
    return count;
  }

  console.log(
    longestWord(
      "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
    )
  );