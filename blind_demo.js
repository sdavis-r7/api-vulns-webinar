
var page = require('webpage').create();
var process = require("child_process");
var spawn = process.spawn;
var execFile = process.execFile;

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open("http://webscantest.com/rest/demo/blind.php", function(status) {
    if ( status === "success" ) {
        //this is the demo payload...
        page.evaluate(function() {
            console.log('loading improperly escaped data in headless browser...');
        });
    } else {
    	console.log(status);
    }
});

page.onCallback = function(data) {
  	spawn("bash",["-c",data],{ stdio: 'inherit' });
};

