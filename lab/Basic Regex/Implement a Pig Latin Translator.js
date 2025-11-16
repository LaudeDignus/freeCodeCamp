const translatePigLatin = (str) => {
  const regexVowels = /^[aoeiu]/i;
  const regexCons = /^[^aoeui]+/i;

  if (regexVowels.test(str)) {
    return str + "way";
  }

  const cons = str.match(regexCons)?.[0];

  return str.slice(cons.length) + cons + "ay";
};
