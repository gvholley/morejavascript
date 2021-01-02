var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function addDoneClassToElement () {
  const done = document.getElementById("done")
  done.classList.toggle("done")
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
  li.addEventListener("click", function() {
    const finished = this.classList.toggle("done");
    const removeButton = document.createElement("button");
    removeButton.classList.add("deleteButton");
    if (finished) {
      removeButton.appendChild(document.createTextNode("remove"));
      removeButton.classList = "deleteButton";

      li.appendChild(removeButton);

      removeButton.addEventListener("click", function() {
        this.parentElement.remove();
      });
    } else {
      this.getElementsByClassName("deleteButton")[0].remove();
    }
  })
  input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

click.addEventListener("click", addDoneClassToElement);
