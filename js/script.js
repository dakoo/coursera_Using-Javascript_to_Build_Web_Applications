document.addEventListener("DOMContentLoaded",
  function (event) {

//Button click event handler
function sayHello (event) {
  //this == button object
  this.textContent = "Said it!";
  //Get value of the text input box from #name
  var name = document.getElementById("name").value;

  //Make a output message in html
  var message = "<h2>Hello " + name + "!</h2>";

  //Put the message at #content
  document.getElementById("content").innerHTML = message;

    //In case of "student" text input, change the value of #title
  if (name === "student") {
    //Get the current text of #title
    var title = document.querySelector("#title").textContent;
    //Make a output message in html
    title += " & Lovin' it!";
    //Put the message at h1 
    document.querySelector("h1").textContent = title;
  }
}

// Unobtrusive event binding
document.getElementById("hello-btn").addEventListener("click", sayHello);


// Movemove event handler
document.querySelector("body").addEventListener("mousemove",
  function (event) {
    if (event.shiftKey === true) {
      console.log("x: " + event.clientX);
      console.log("y: " + event.clientY);
    }
  }
);

  }
);
