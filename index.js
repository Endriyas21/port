const lists = document.getElementById("list");
const listPage = document.getElementById("page");

lists.addEventListener("click", () => {
  listPage.classList.toggle("hidden");
});
