var nodelist = document.getElementsByTagName("LI");
var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

function InputLength(){
  return input.value.length;
}

function createNewList(){
  var newlist = document.createElement("li");
  newlist.appendChild(document.createTextNode(input.value))
  ul.appendChild(newlist);
  input.value = "";
}

function createCloseButton(){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodelist[i].appendChild(span);
}

function hideCloseButton(){
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div =this.parentElement;
    div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
var i;
for (i = 0; i < nodelist.length; i++) {
  createCloseButton();
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
hideCloseButton();


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);

button.addEventListener("click", function(){
  if (InputLength() > 0){
  createNewList();
  createCloseButton();
  hideCloseButton();  
  }
})

input.addEventListener("keypress", function(event){
  if (InputLength() > 0 && event.keyCode===13){
    createNewList();
    createCloseButton();
    hideCloseButton();
  }
})
