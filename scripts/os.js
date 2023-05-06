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

function getUserIp() {
    userIp = fetch('https://api.ipify.org')
        .then((res) => res.text())
        .then(ip => document.getElementById("userIP").innerHTML = "Your Public IPV4 is: " + ip)
        .catch(err => console.log(err))
}

document.getElementById("viewport").innerHTML = innerWidth + " x " + innerHeight;
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("viewport").innerHTML = width + " x " + height;
});