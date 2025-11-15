const spinalCase = (str) => {
  const regex = /(?:\s|_)/g;
  const otherRegex = /(?<=[a-z]+)([A-Z])/g;
  if (regex.test(str)) {
    str = str.replace(regex, "-");
  }
  if (otherRegex.test(str)) {
    str = str.replace(otherRegex, "-$1");
  }
  return str.toLowerCase();
};
