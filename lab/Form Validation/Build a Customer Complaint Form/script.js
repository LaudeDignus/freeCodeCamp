const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroupAll = document.querySelectorAll(
  '#complaints-group input[name="complaint"]'
);
const complaintsGroup = document.getElementById("complaints-group");
const complaintDesc = document.getElementById(
  "complaint-description-container"
);
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionsGroupAll = document.querySelectorAll(
  '#solutions-group input[name="solutions"]'
);
const solutionDescription = document.getElementById("solution-description");
const solutionDesc = document.getElementById("solution-description-container");
const otherSolution = document.getElementById("other-solution");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexOrderNo = /^(?:2024)\d{6}$/;
const regexProductCode =
  /^(?:[a-z]{2}\d{2})\-(?:[a-z]{1}\d{3})\-(?:[a-z]{2}\d{1})$/i;

otherComplaint.checked
  ? complaintDesc.classList.remove("hide")
  : complaintDesc.classList.add("hide");

otherSolution.checked
  ? solutionDesc.classList.remove("hide")
  : solutionDesc.classList.add("hide");

const validateForm = () => {
  return {
    "full-name": fullName.value.trim() !== "",
    email: regexEmail.test(email.value),
    "order-no": regexOrderNo.test(orderNo.value),
    "product-code": regexProductCode.test(productCode.value),
    quantity: quantity.value > 0,
    "complaints-group": Array.from(complaintsGroupAll).some(
      (box) => box.checked
    ),
    "complaint-description": otherComplaint.checked
      ? complaintDescription.value.length >= 20
      : true,
    "solutions-group": Array.from(solutionsGroupAll).some((box) => box.checked),
    "solution-description": otherSolution.checked
      ? solutionDescription.value.length >= 20
      : true,
  };
};

const isValid = (obj) => {
  return Object.values(obj).every(Boolean);
};

form.addEventListener("change", () => {
  changeColor(validateForm()["full-name"], fullName);
  changeColor(validateForm()["email"], email);
  changeColor(validateForm()["order-no"], orderNo);
  changeColor(validateForm()["product-code"], productCode);
  changeColor(validateForm()["quantity"], quantity);
  changeColor(validateForm()["complaints-group"], complaintsGroup);
  changeColor(validateForm()["complaint-description"], complaintDescription);
  changeColor(validateForm()["solutions-group"], solutionsGroup);
  changeColor(validateForm()["solution-description"], solutionDescription);
  otherComplaint.checked
    ? complaintDesc.classList.remove("hide")
    : complaintDesc.classList.add("hide");

  otherSolution.checked
    ? solutionDesc.classList.remove("hide")
    : solutionDesc.classList.add("hide");
});

const changeColor = (el, value) => {
  el ? (value.style.borderColor = "green") : (value.style.borderColor = "red");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValid(validateForm());
});
