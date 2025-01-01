fetch("layouts/content.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("main").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error ", error);
  });
