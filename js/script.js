console.log('linked');

var url ='';

// what to do when we recieve the request
var responseHandler = function() {
  console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);

  var response = JSON.parse( this.responseText );
  console.log( response );
};

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);
request.addEventListener("error", responseHandler);

// ready the system by calling open, and specifying the url
request.open("GET", url);

// send the request
request.send();
