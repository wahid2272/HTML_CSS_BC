const backToButton = document.getElementById("back-to-top");

window.onscroll = () => scrollCheck();
window.onscroll = () => stickyMenu();

const scrollCheck = () =>
  (document.body.scrollTop > 200 ||
  (document.documentElement.scrollTop > 200 && !width.matches))
    ? (backToButton.style.display = "flex")
    : (backToButton.style.display = "none");

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};