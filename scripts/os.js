/*UserAgent Operating system detection using a switch case.
this Switch case will look at the data within navigator.userAgent and if it sees certain index it will change the output to the HTML.*/
let OSName;
const userAgent = navigator.userAgent;
switch (true) {
    case userAgent.indexOf("Windows NT 10.0") !== -1:
        OSName = "Windows 10/11";
        document.getElementById("operatingSystemImage").innerHTML = `<img class="boicon" src=./images/os/windows.png>`
        break;
    case userAgent.indexOf("Windows NT 6.3") !== -1:
        OSName = "Windows 8.1";
        document.getElementById("operatingSystemImage").innerHTML = `<img class="boicon" src=./images/os/windows.png>`
        break;
    case userAgent.indexOf("Windows NT 6.2") !== -1:
        OSName = "Windows 8";
        document.getElementById("operatingSystemImage").innerHTML = `<img class="boicon" src=./images/os/windows.png>`
        break;
    case userAgent.indexOf("iOS") !== -1:
        OSName = "iOS";
        document.getElementById("operatingSystemImage").innerHTML = `<img class="boicon" src=./images/os/ios.png>`
        break;
    case userAgent.indexOf("Mac") !== -1:
        OSName = "Macintosh";
        document.getElementById("operatingSystemImage").innerHTML = `<img class="boicon" src=./images/os/macos.png>`
        break;
    case userAgent.indexOf("Android") !== -1:
        OSName = "Android";
        document.getElementById("operatingSystemImage").innerHTML = `<img class="boicon" src=./images/os/android.png>`
        break;
    case userAgent.indexOf("Linux") !== -1:
        OSName = "Linux";
        document.getElementById("operatingSystemImage").innerHTML = `<imgclass="boicon" src=./images/os/linux.png>`
        break;
    default:
        OSName = "Unknown OS";
}
document.getElementById("osName").innerHTML = OSName;
console.log("Operating System: " + OSName);



/*UserAgent Browser detection using a switch case. As some browsers use the same rendering engine and edge is based on chromium, some extra logic was needed for some to detect properly. this Switch case will look at the data within navigator.userAgent and if it sees certain index it will change the output to the HTML.*/
let browserName;
const browserAgent = navigator.userAgent;
const isEdge = userAgent.indexOf("Edg") !== -1;

switch (true) {
    case userAgent.indexOf("Opera") !== -1 || userAgent.indexOf('OPR') !== -1:
        browserName = "Opera";
        document.getElementById("browserImage").innerHTML = `<img class="boicon" src=./images/browser/opera.png>`
        break;
    case isEdge:
        browserName = "Microsoft Edge";
        document.getElementById("browserImage").innerHTML = `<img class="boicon" src=./images/browser/edge.png>`
        break;
    case userAgent.indexOf("Chrome") !== -1 && !isEdge:
        browserName = "Google Chrome";
        document.getElementById("browserImage").innerHTML = `<img class="boicon" src=./images/browser/chrome.png>`
        break;
    case userAgent.indexOf("Safari") !== -1 && !isEdge:
        browserName = "Safari";
        document.getElementById("browserImage").innerHTML = `<img class="boicon" src=./images/browser/safari.png>`
        break;
    case userAgent.indexOf("Firefox") !== -1:
        browserName = "Firefox";
        document.getElementById("browserImage").innerHTML = `<img class="boicon" src=./images/browser/firefox.png>`
        break;
    case userAgent.indexOf("MSIE") !== -1 || !!document.documentMode:
        browserName = "Internet Explorer";
        document.getElementById("browserImage").innerHTML = `<img class="boicon" src=./images/browser/ie.png>`
        break;
    default:
        browserName = "Unknown Browser";
}
document.getElementById("browserName").innerHTML = browserName;
console.log("Browser: " + browserName);

/*This function uses the ipify public api to display the users public IPV4 address.
The the fetch() function is used to send a GET request to the "https://api.ipify.org" API.

The fetch() function returns a Promise that resolves to the response of the request.
The first .then() method is chained to the Promise returned by fetch(). It takes the response (res) and calls the text() method on it. This converts the response to text format.

The second .then() method is chained to the previous one. It takes the IP address (ip) obtained from the response and updates the HTML content of an element with the id "userIP" to display the IP address. The IP address is interpolated into a string using template literals (${ip}).*/

function getUserIp() {
    userIp = fetch('https://api.ipify.org')
        .then((res) => res.text())
        .then(ip => document.getElementById("userIP").innerHTML = `Your Public IPV4 is: ${ip} `)
}

/*The window.addEventListener("resize", () => { ... }) part adds an event listener to the window object that listens for the "resize" event.
This event is triggered when the browser window is resized.

When the "resize" event occurs, the arrow function () => { ... } is executed.
Inside the arrow function, window.innerWidth retrieves the current width of the browser window, and window.innerHeight retrieves the current height of the browser window.
The content of the "viewport" element is updated again to display the updated dimensions of the browser window.*/
document.getElementById("viewport").innerHTML = innerWidth + " x " + innerHeight;
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("viewport").innerHTML = width + " x " + height;
});

/*this function is to display the time in a 24hr format, the seconds will update every second. As it will display 1, 2, 3 etc instead of 01, 02, 03 etc, and if else is used to check if the seconds vvalue is less than 10 and add a 0 before the read seconds value.*/
function updateTime() {
    var date = new Date();
    if (date.getSeconds() < 10) {
        var current_time = date.getHours() + ":" + date.getMinutes() + ":" + "0" + date.getSeconds();
    } else {
        var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    document.getElementById("time").innerHTML = current_time;
}
updateTime();
setInterval(updateTime, 1000);
