(function () {
  const file = document.getElementById("file");
  const preview = document.getElementById("preview");

  file.addEventListener("change", () => {
    if (file.files.length > 0) {
      preview.src = URL.createObjectURL(file.files[0]);
    } else {
      preview.src = "";
    }
  });
})();
