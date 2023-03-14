// Function to generate a random hexadecimal color code
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Get all elements with the "card" class
var cards = document.getElementsByClassName("card");

// Loop through all the cards and add mouseover and mouseout event listeners
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = getRandomColor();
  });
  cards[i].addEventListener("mouseout", function () {
    this.style.backgroundColor = "#fff";
  });
}
