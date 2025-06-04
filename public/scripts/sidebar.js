(function () {
  const sidebar = document.getElementById("sidebar");
  const path = window.location.pathname.substring("/app/".length);

  for (const item of sidebar.children) {
    const id = item.getAttribute("data-id");
    if (path == id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
})();
