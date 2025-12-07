const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById(
  "add-bookmark-button-form"
);
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryButton = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    const allvalid = bookmarks.every(
      (bookmark) =>
        bookmark &&
        bookmark.hasOwnProperty("name") &&
        bookmark.hasOwnProperty("category") &&
        bookmark.hasOwnProperty("url")
    );
    return allvalid ? bookmarks : [];
  } catch {
    return [];
  }
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

addBookmarkButton.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkButtonForm.addEventListener("click", () => {
  const name = document.getElementById("name");
  const category = categoryDropdown.value;
  const url = document.getElementById("url");
  const bookmarks = getBookmarks();
  bookmarks.push({ name: name.value, category: category, url: url.value });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  name.value = "";
  url.value = "";
  displayOrCloseForm();
});

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

viewCategoryButton.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  updateCategoryList(bookmarks);
  displayOrHideCategory();
});

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
  categoryList.innerHTML = "";
});

deleteBookmarkButton.addEventListener("click", () => {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  const checked = categoryList.querySelector('input[type="radio"]:checked');

  bookmarks = bookmarks.filter(
    (n) => !(n.name === checked.id && n.category === categoryDropdown.value)
  );

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  updateCategoryList(bookmarks);
});

const updateCategoryList = (bookmarks) => {
  const selectedCategory = bookmarks?.filter(
    (b) => b.category === categoryDropdown.value
  );
  categoryList.innerHTML = "";

  if (!bookmarks || selectedCategory.length === 0) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
    return;
  }
  selectedCategory.forEach(
    (b) =>
      (categoryList.innerHTML += `<div>
<input type="radio" id="${b.name}"name="${b.category}" value="${b.name}">
<label for="${b.name}"><a href="${b.url}">${b.name}</a></label>
</div>`)
  );
};
