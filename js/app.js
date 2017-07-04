const board = document.getElementById("board");
const body = board.parentElement;
const button = document.querySelector(".button");
const boardHTML = "html_snippets/board.txt";	
const startHTML = "html_snippets/start.txt";

//load html snippets
function loadDoc(htmlSnippet) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     body.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", htmlSnippet , true);
  xhttp.send();
}

//on page load show startup screen
window.onload = loadDoc(startHTML);

//when start button is clicked hide startup screen and show board
//button.onclick = console.log('click');