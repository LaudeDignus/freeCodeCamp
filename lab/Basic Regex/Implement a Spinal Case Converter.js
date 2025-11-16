const spinalCase = (str) => {
  const regexSpaceUnderscore = /(?:\s|_)/g;
  const regexCamelCase = /(?<=[a-z]+)([A-Z])/g;
  if (regexSpaceUnderscore.test(str)) {
    str = str.replace(regexSpaceUnderscore, "-");
  }
  if (regexCamelCase.test(str)) {
    str = str.replace(regexCamelCase, "-$1");
  }
  return str.toLowerCase();
};
