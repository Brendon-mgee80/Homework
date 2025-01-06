document.addEventListener("DOMContentLoaded", function() {
  // Highlight list items on hover
  var listItems = document.querySelectorAll("li");

  listItems.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
      item.style.backgroundColor = "pink";
      item.style.color = "white";
    });

    item.addEventListener("mouseleave", function() {
      item.style.backgroundColor = "";
      item.style.color = "";
    });
  });
});
