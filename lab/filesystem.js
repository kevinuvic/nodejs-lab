module.exports = {
  entry: function () {
//--------------

var fs = require("fs");

// Asynchronous read
fs.readFile(__dirname + "/" + 'angular-02.html', function (err, data) {
   if (err) {
      return console.error(err);
   }
   //console.log("Asynchronous read: " + data.toString());

   load_to_server(data)
});

function load_to_server(data) {
	var http = require('http'); 
	  
	// Create a server object: 
	http.createServer(function (req, res) { 
	  
	    // Write a response to the client 
	    //res.write('GeeksForGeeks');  
	    res.write(data);  
	  
	    // End the response   
	    res.end();  
	  
	// The server object listens on port 8080 
	}).listen(8080);  

	console.log('Server running at http://127.0.0.1:8080/');
}

//--------------
  }
};