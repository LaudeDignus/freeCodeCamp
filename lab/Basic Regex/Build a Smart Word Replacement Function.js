const myReplace = (str, word, replacedWord) => {
  const pattern = new RegExp(word, "g");

  return str.replace(pattern, (match) => checkCapitalize(match, replacedWord));
};

const checkCapitalize = (word, replacedWord) => {
  const regexMaj = /^[A-Z]/;

  let newReplace = regexMaj.test(word)
    ? replacedWord[0].toUpperCase()
    : replacedWord[0].toLowerCase();

  newReplace += replacedWord.slice(1);
  return newReplace;
};
