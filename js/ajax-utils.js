(function (global) {

// Set up a namespace for this utility
var ajaxUtils = {};


// (Private) Returns an HTTP request object
function getRequestObject() {
  if (window.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (window.ActiveXObject) {  // For old IE browsers
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// (Private) Call the responseHandler
function handleResponse(request, responseHandler) {
  if ((request.readyState == 4)&&(request.status == 200)) {
    responseHandler(request);
  }
}


// (Public) Makes an Ajax GET request to 'requestUrl' 
ajaxUtils.sendGetRequest = function(requestUrl, responseHandler) {

    //Get HTTP request object
    var request = getRequestObject();

    //Register the responseHandler
    request.onreadystatechange = function() {
        handleResponse(request, responseHandler); 
      };
      
    //Open the channel
    request.open("GET", requestUrl, true);

    //Send the request. The argument - the body of the message 
    request.send(null); // for POST only
  };


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;

})(window);
