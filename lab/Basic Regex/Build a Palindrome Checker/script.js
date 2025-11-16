const btn = document.getElementById("check-btn");
const getWord = document.getElementById("text-input");
const result = document.getElementById("result");

const checkIsPalindrome = (word) => {
  if (!word) {
    alert("Please input a value");
    return;
  }

  const regex = /[^a-z0-9]/gi;
  const transformedWord = word.toLowerCase().replace(regex, "");
  const reversedWord = [...transformedWord].reverse().join("");

  result.innerHTML = `<p><span id="word-checked">${word}</span> is ${
    transformedWord === reversedWord ? "" : "not"
  } a palindrome</p>`;

  result.style.display = "block";
};

btn.addEventListener("click", () => {
  checkIsPalindrome(getWord.value);
});
