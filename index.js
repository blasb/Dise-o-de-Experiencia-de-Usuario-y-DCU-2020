function toggleMainMenu() {
    var x = document.getElementById("main-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function toggleUserMenu() {
    var x = document.getElementById("user-menu");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }