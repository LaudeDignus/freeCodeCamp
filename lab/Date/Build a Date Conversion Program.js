const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

const formatDateMMDDYYYY = (date) => {
  const newDate = new Date(date);
  return `Formatted Date (MM/DD/YYYY): ${
    newDate.getMonth() + 1
  }/${newDate.getDate()}/${newDate.getFullYear()}`;
};

const formatDateLong = (date) => {
  const options = {
    month: "long",
    year: "numeric",
    day: "numeric",
  };
  const newDate = new Date(date).toLocaleDateString("en-US", options);
  return `Formatted Date (Month Day, Year): ${newDate}`;
};
