
function monitorSelection() {
    let dropdown = document.getElementById("myDropdown");
    let selectedOption = dropdown.options[dropdown.selectedIndex].value;

    switch (selectedOption) {
        case "option0":
            clearSelection();
            break;
        case "option1":
            monitor1.displayData();
            monitor1.resolutionChecker();
            break;
        case "option2":
            monitor2.displayData();
            monitor2.resolutionChecker();
            break;
        case "option3":
            monitor3.displayData();
            monitor3.resolutionChecker();
            break;
        case "option4":
            monitor4.displayData();
            monitor4.resolutionChecker();
            break;
        case "option5":
            monitor5.displayData();
            monitor5.resolutionChecker();
            break;
        default:
            console.log("Invalid option selected");
            break;
    }
}

function keyboardSelection() {
    let dropdown = document.getElementById("keyboardDropdown");
    let selectedOption = dropdown.options[dropdown.selectedIndex].value;

    switch (selectedOption) {
        case "option0":
            clearSelection();
            break;
        case "option1":
            keyboard1.displayData();
            break;
        case "option2":
            keyboard2.displayData();
            break;
        case "option3":
            keyboard3.displayData();
            break;
        case "option4":
            keyboard4.displayData();
            break;
        case "option5":
            keyboard5.displayData();
            break;
        default:
            console.log("Invalid option selected");
            break;
    }
}

function mouseSelection() {
    let dropdown = document.getElementById("mouseDropdown");
    let selectedOption = dropdown.options[dropdown.selectedIndex].value;

    switch (selectedOption) {
        case "option0":
            clearSelection();
            break;
        case "option1":
            mouse1.displayData();
            break;
        case "option2":
            mouse2.displayData();
            break;
        case "option3":
            mouse3.displayData();
            break;
        case "option4":
            mouse4.displayData();
            break;
        case "option5":
            mouse5.displayData();
            break;
        default:
            console.log("Invalid option selected");
            break;
    }
}

function audioSelection() {
    let dropdown = document.getElementById("audioDropdown");
    let selectedOption = dropdown.options[dropdown.selectedIndex].value;

    switch (selectedOption) {
        case "option0":
            clearSelection();
            break;
        case "option1":
            audio1.displayData();
            break;
        case "option2":
            audio2.displayData();
            break;
        case "option3":
            audio3.displayData();
            break;
        case "option4":
            audio4.displayData();
            break;
        case "option5":
            audio5.displayData();
            break;
        default:
            console.log("Invalid option selected");
            break;
    }
}

function gamepadSelection() {
    let dropdown = document.getElementById("gamepadDropdown");
    let selectedOption = dropdown.options[dropdown.selectedIndex].value;

    switch (selectedOption) {
        case "option0":
            clearSelection();
            break;
        case "option1":
            gamepad1.displayData();
            break;
        case "option2":
            gamepad2.displayData();
            break;
        case "option3":
            gamepad3.displayData();
            break;
        case "option4":
            gamepad4.displayData();
            break;
        case "option5":
            gamepad5.displayData();
            break;
        default:
            console.log("Invalid option selected");
            break;
    }
}


function clearSelection() {
    let monitorRow = document.getElementById("monitorTable");
    monitorRow.innerHTML = `

        `;
    let descImage = document.getElementById("monitorImage");
    descImage.innerHTML = `<img class="monitorimg" src="images/monitors/placeholder.png" />`;
    document.getElementById("checkResolution").innerHTML = "";
    document.getElementById("monitor-title").innerHTML = `<span class="skeleton"></span>`;
}










