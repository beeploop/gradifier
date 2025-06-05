(function () {
  const sidebarItems = document.querySelectorAll("[data-sidebar]");
  const path = window.location.pathname.substring("/app/".length);

  for (const item of sidebarItems) {
    const sidebarID = item.getAttribute("data-sidebar");
    if (path.startsWith(sidebarID)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
})();
