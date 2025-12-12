const generateBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");

const generateElement = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const generateArray = () => {
  return Array.from({ length: 5 }, generateElement);
};

const generateContainer = () => {
  return document.createElement("div");
};

const fillArrContainer = (container, arr) => {
  container.innerHTML = "";
  arr.forEach(
    (i) => (container.innerHTML += `<span class='number-${i}'>${i}</span>`)
  );
};

const isOrdered = (a, b) => {
  return a <= b;
};

const swapElements = (arr, index) => {
  if (!isOrdered(arr[index], arr[index + 1])) {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
  }
};
const highlightCurrentEls = (container, index) => {
  const children = Array.from(container.querySelectorAll("span"));
  if (index < 0 || index >= children.length - 1) return;
  children[index].style.border = "3px dashed red";
  children[index + 1].style.border = "3px dashed red";
};

generateBtn.addEventListener("click", () => {
  removeChildContainer(arrayContainer);
  fillArrContainer(startingArray, generateArray());
  sortBtn.style.display = "block";
});

sortBtn.addEventListener("click", () => {
  removeChildContainer(arrayContainer);
  const arr = Array.from(startingArray.querySelectorAll("span")).map((n) =>
    Number(n.innerText)
  );
  highlightCurrentEls(startingArray, 0);
  swapElements(arr, 0);
  const stepDiv0 = generateContainer();
  fillArrContainer(stepDiv0, arr);
  arrayContainer.appendChild(stepDiv0);
  highlightCurrentEls(stepDiv0, 1);
  console.log(arr);
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (i === 0 && j === 0) continue;
      swapElements(arr, j);
      const stepDiv = generateContainer();
      fillArrContainer(stepDiv, arr);
      arrayContainer.appendChild(stepDiv);
      i === 0
        ? highlightCurrentEls(stepDiv, j + 1)
        : highlightCurrentEls(stepDiv, j);
    }

    const checkSorted = arr.every((value, index) => {
      if (index === arr.length - 1) return true;
      return value <= arr[index + 1];
    });
    if (checkSorted) {
      if (count === 1) {
        break;
      }
      count++;
    }
  }
  const sortedDiv = arrayContainer.lastChild;
  sortedDiv.style.border = "4px solid green";

  sortBtn.style.display = "none";
});

const removeChildContainer = (container) => {
  Array.from(container.children).forEach((child) => {
    if (child !== startingArray) {
      container.removeChild(child);
    }
  });
};
