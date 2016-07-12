// Event handling
function sayHello () {
  //Get value of the text input box from #name
  var name = document.getElementById("name").value;
  
  //Make a output message in html
  var message = "<h2>Hello " + name + "!</h2>";

  //Put the message at #content
  document.getElementById("content").innerHTML = message;
}