const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const getFlags = () => {
  let flags = "";
  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }
  if (globalFlag.checked) {
    flags += "g";
  }
  return flags;
};

testButton.addEventListener("click", () => {
  const regex = new RegExp(regexPattern.value, getFlags());
  stringToTest.innerHTML = stringToTest.textContent.replace(regex, (match) => {
    return `<span class="highlight">${match}</span>`;
  });
  let matches = [];
  const matchResult = stringToTest.textContent.match(regex);
  if (globalFlag.checked) {
    matches = matchResult ? matchResult : [];
  } else {
    matches = matchResult ? [matchResult[0]] : [];
  }
  testResult.innerHTML = matches.length !== 0 ? matches.join(", ") : "no match";
});
