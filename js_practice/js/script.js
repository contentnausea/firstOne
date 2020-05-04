console.log("Hello, world.");
//Single line comment

/*
Multi-line comment
12345
6789
*/

var newLink = document.createElement("a");
var allParagraphs = document.getElementsByTagName("p");
var firstParagraph = allParagraphs[0];

function toggleCopy(e) {
  var allParagraphs = document.getElementsByTagName("p");

  for (var i = 0; i < allParagraphs.length; i++) {
    if (i === 0) {
      continue;
    }
    allParagraphs[i].style.display = "block";
  }

  if (this === newLink) {
    this.remove();
  }

  if (e !== undefined && e.preventDefault !== undefined) {
    e.preventDefault();
  }
}

newLink.setAttribute("href", "#");
newLink.setAttribute("class", "more-link");
newLink.innerHTML = "Read more";

newLink.addEventListener("click", toggleCopy);

for (var i = 0; i < allParagraphs.length; i++) {
  if (i === 0) {
    continue;
  }
  allParagraphs[i].style.display = "none";
}

toggleCopy();

firstParagraph.appendChild(newLink);