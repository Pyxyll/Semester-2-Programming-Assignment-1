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

function clearSelection() {
    let monitorRow = document.getElementById("monitorRow");
    monitorRow.innerHTML = `
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        `;
    let descImage = document.getElementById("monitorImage");
    descImage.innerHTML = `<img class="monitorimg" />`
    document.getElementById("checkResolution").innerHTML = "";
    document.getElementById("monitor-title").innerHTML = "";
}

document.getElementById("resolution").innerHTML = screen.width + " x " + screen.height;





document.getElementById("viewport").innerHTML = innerWidth + " x " + innerHeight;
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("viewport").innerHTML = width + " x " + height;
});