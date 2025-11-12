const menuItem = document.querySelectorAll('[role="menuitem"]');
const body = document.querySelector("body");
const msg = document.querySelector("p[aria-live]");
const themeSwitcher = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themes = [
  {
    name: "black",
    message: "Black Theme",
  },
  {
    name: "red",
    message: "Red Theme",
  },
];

menuItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    themes.forEach((theme) => {
      if (e.target.id.split("-")[1] === theme.name) {
        msg.textContent = theme.message;
        body.className = "";
        msg.hidden = false;
        body.classList.add(`theme-${theme.name}`);
        themeDropdown.hidden = true;
        themeSwitcher.setAttribute("aria-expanded", "false");
      }
    });
  });
});

themeSwitcher.addEventListener("click", () => {
  let expanded = themeSwitcher.getAttribute("aria-expanded") === "true";
  themeSwitcher.setAttribute("aria-expanded", String(!expanded));
  themeDropdown.hidden = expanded;
});
