class ComputerPeripherals {
    constructor(manufacturer, model, connectionType, type, price, colour, productImage) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.connectionType = connectionType;
        this.type = type
        this.price = price;
        this.colour = colour
        this.productImage = productImage;
    }
}
class Monitor extends ComputerPeripherals {
    constructor(manufacturer, model, connectionType, type, price, colour, productImage, displayTech, horiResolution, vertResolution, refreshRate, responseTime, colourDepth, vesa) {
        super(manufacturer, model, connectionType, type, price, colour, productImage);
        this.displayTech = displayTech;
        this.horiResolution = horiResolution;
        this.vertResolution = vertResolution;
        this.refreshRate = refreshRate;
        this.responseTime = responseTime;
        this.colourDepth = colourDepth;
        this.vesa = vesa;

    }
    display() {
        document.getElementById("monitor-title").innerHTML = this.manufacturer + " " + this.model;
        let monitorRow = document.getElementById("monitorTable");
        monitorRow.innerHTML = `
        <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Manufacturer</td>
            <td>${this.manufacturer}</td>
        </tr>
        <tr>
            <td>Model</td>
            <td>${this.model}</td>
        </tr>
        <tr>
            <td>Connection Type</td>
            <td>${this.connectionType}</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>${this.type}</td>
        </tr>
        <tr>
            <td>Price</td>
            <td>${this.price}</td>
        </tr>
        <tr>
            <td>Colour</td>
            <td>${this.colour}</td>
        </tr>
        <tr>
            <td>Display Type</td>
            <td>${this.displayTech}</td>
        </tr>
        <tr>
            <td>Resolution</td>
            <td>${this.horiResolution} x ${this.vertResolution}</td>
        </tr>
        <tr>
            <td>Refresh Rate</td>
            <td>${this.refreshRate}</td>
        </tr>
        <tr>
            <td>Response Time</td>
            <td>${this.responseTime}</td>
        </tr>
        <tr>
            <td>Colour Depth</td>
            <td>${this.colourDepth}</td>
        </tr>
        <tr>
            <td>VESA Compatible</td>
            <td>${this.vesa}</td>
        </tr>
    </tbody>
        `;
        let descImage = document.getElementById("monitorImage");
        descImage.innerHTML = `<img class="monitorimg" src=${this.productImage} />`
        let img = descImage.querySelector(".monitorimg");
        img.style.opacity = 0; // set the opacity to 0
        img.addEventListener("load", () => {
            img.style.opacity = 1; // set the opacity back to 1 when the new image has loaded
        });
    }

    checkResolution() {
        let resCheck = null

        if (screen.width * screen.height < this.horiResolution * this.vertResolution) {
            resCheck = "Your screen of resolution " + screen.width + " x " + screen.height + " is less than the " + this.model
        } else if (screen.width * screen.height > this.horiResolution * this.vertResolution) {
            resCheck = "Your screen of resolution " + screen.width + " x " + screen.height + " is higher than the " + this.model
        } else {
            resCheck = "Your screen of resolution " + screen.width + " x " + screen.height + " is the same as the " + this.model
        }

        document.getElementById("checkResolution").innerHTML = resCheck

    }

    get displayData() {
        return this.display;
    }

    get resolutionChecker() {
        return this.checkResolution;
    }

}
class Keyboard extends ComputerPeripherals {
    constructor(manufacturer, model, connectionType, type, price, colour, productImage, keyboardType, lighting, specialFunction, programSupport, switchType) {
        super(manufacturer, model, connectionType, type, price, colour, productImage);
        this.keyboardType = keyboardType;
        this.lighting = lighting;
        this.specialFunction = specialFunction;
        this.programSupport = programSupport
        this.switchType = switchType;
    }
    display() {
        document.getElementById("monitor-title").innerHTML = this.manufacturer + " " + this.model;
        let monitorRow = document.getElementById("monitorTable");
        monitorRow.innerHTML = `
        <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Manufacturer</td>
            <td>${this.manufacturer}</td>
        </tr>
        <tr>
            <td>Model</td>
            <td>${this.model}</td>
        </tr>
        <tr>
            <td>Connection Type</td>
            <td>${this.connectionType}</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>${this.type}</td>
        </tr>
        <tr>
            <td>Price</td>
            <td>${this.price}</td>
        </tr>
        <tr>
            <td>Colour</td>
            <td>${this.colour}</td>
        </tr>
        <tr>
            <td>Keyboard Type</td>
            <td>${this.keyboardType}</td>
        </tr>
        <tr>
            <td>Lighting</td>
            <td>${this.lighting}</td>
        </tr>
        <tr>
            <td>Function</td>
            <td>${this.specialFunction}</td>
        </tr>
        <tr>
            <td>Software</td>
            <td>${this.programSupport}</td>
        </tr>
        <tr>
            <td>Key Switch Type</td>
            <td>${this.switchType}</td>
        </tr>
    </tbody>
        `;
        let descImage = document.getElementById("monitorImage");
        descImage.innerHTML = `<img class="monitorimg" src=${this.productImage} />`
        let img = descImage.querySelector(".monitorimg");
        img.style.opacity = 0; // set the opacity to 0
        img.addEventListener("load", () => {
            img.style.opacity = 1; // set the opacity back to 1 when the new image has loaded
        });

    }
    get displayData() {
        return this.display;
    }
}
class Mouse extends ComputerPeripherals {
    constructor(manufacturer, model, connectionType, type, price, colour, productImage, lighting, buttonNumber, programSupport, sensorType, dpi, weight) {
        super(manufacturer, model, connectionType, type, price, colour, productImage);
        this.lighting = lighting;
        this.buttonNumber = buttonNumber;
        this.programSupport = programSupport
        this.sensorType = sensorType;
        this.dpi = dpi;
        this.weight = weight;
    }
    display() {
        document.getElementById("monitor-title").innerHTML = this.manufacturer + " " + this.model;
        let monitorRow = document.getElementById("monitorTable");
        monitorRow.innerHTML = `
        <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
        </thead>
    <tbody>
        <tr>
            <td>Manufacturer</td>
            <td>${this.manufacturer}</td>
        </tr>
        <tr>
            <td>Model</td>
            <td>${this.model}</td>
        </tr>
        <tr>
            <td>Connection Type</td>
            <td>${this.connectionType}</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>${this.type}</td>
        </tr>
        <tr>
            <td>Price</td>
            <td>€${this.price}</td>
        </tr>
        <tr>
            <td>Colour</td>
            <td>${this.colour}</td>
        </tr>
        <tr>
            <td>Mouse Lighting</td>
            <td>${this.lighting}</td>
        </tr>
        <tr>
            <td>Button Number</td>
            <td>${this.buttonNumber}</td>
        </tr>
        <tr>
            <td>Software</td>
            <td>${this.programSupport}</td>
        </tr>
        <tr>
            <td>Sensor Type</td>
            <td>${this.sensorType}</td>
        </tr>
        <tr>
            <td>Sensor DPI</td>
            <td>${this.dpi}</td>
        </tr>
        <tr>
        <td>Weight</td>
        <td>${this.weight}g</td>
    </tr>
    </tbody>
        `;
        let descImage = document.getElementById("monitorImage");
        descImage.innerHTML = `<img class="monitorimg" src=${this.productImage} />`
        let img = descImage.querySelector(".monitorimg");
        img.style.opacity = 0; // set the opacity to 0
        img.addEventListener("load", () => {
            img.style.opacity = 1; // set the opacity back to 1 when the new image has loaded
        });

    }
    get displayData() {
        return this.display;
    }
}
class AudioInterface extends ComputerPeripherals {
    constructor(manufacturer, model, connectionType, type, price, colour, productImage, phantomPower, microphoneInput, headphoneOutput, speakerOutput, controls) {
        super(manufacturer, model, connectionType, type, price, colour, productImage);
        this.phantomPower = phantomPower;
        this.microphoneInput = microphoneInput;
        this.headphoneOutput = headphoneOutput;
        this.speakerOutput = speakerOutput;
        this.controls = controls
    }
    display() {
        document.getElementById("monitor-title").innerHTML = this.manufacturer + " " + this.model;
        let monitorRow = document.getElementById("monitorTable");
        monitorRow.innerHTML = `
        <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
        </thead>
    <tbody>
        <tr>
            <td>Manufacturer</td>
            <td>${this.manufacturer}</td>
        </tr>
        <tr>
            <td>Model</td>
            <td>${this.model}</td>
        </tr>
        <tr>
            <td>Connection Type</td>
            <td>${this.connectionType}</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>${this.type}</td>
        </tr>
        <tr>
            <td>Price</td>
            <td>€${this.price}</td>
        </tr>
        <tr>
            <td>Colour</td>
            <td>${this.colour}</td>
        </tr>
        <tr>
            <td>Mouse Lighting</td>
            <td>${this.phantomPower}</td>
        </tr>
        <tr>
            <td>Button Number</td>
            <td>${this.microphoneInput}</td>
        </tr>
        <tr>
            <td>Software</td>
            <td>${this.headphoneOutput}</td>
        </tr>
        <tr>
            <td>Sensor Type</td>
            <td>${this.speakerOutput}</td>
        </tr>
        <tr>
            <td>Sensor DPI</td>
            <td>${this.controls}</td>
        </tr>
    </tbody>
        `;
        let descImage = document.getElementById("monitorImage");
        descImage.innerHTML = `<img class="monitorimg" src=${this.productImage} />`
        let img = descImage.querySelector(".monitorimg");
        img.style.opacity = 0; // set the opacity to 0
        img.addEventListener("load", () => {
            img.style.opacity = 1; // set the opacity back to 1 when the new image has loaded
        });

    }
    get displayData() {
        return this.display;
    }
}
class Gamepad extends ComputerPeripherals {
    constructor(manufacturer, model, connectionType, type, price, colour, productImage, stickType, inputAPI, buttonNumber, batteryType, triggerType) {
        super(manufacturer, model, connectionType, type, price, colour, productImage);
        this.stickType = stickType
        this.inputAPI = inputAPI;
        this.buttonNumber = buttonNumber;
        this.batteryType = batteryType;
        this.triggerType = triggerType
    }
    display() {
        document.getElementById("monitor-title").innerHTML = this.manufacturer + " " + this.model;
        let monitorRow = document.getElementById("monitorTable");
        monitorRow.innerHTML = `
        <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
        </thead>
    <tbody>
        <tr>
            <td>Manufacturer</td>
            <td>${this.manufacturer}</td>
        </tr>
        <tr>
            <td>Model</td>
            <td>${this.model}</td>
        </tr>
        <tr>
            <td>Connection Type</td>
            <td>${this.connectionType}</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>${this.type}</td>
        </tr>
        <tr>
            <td>Price</td>
            <td>€${this.price}</td>
        </tr>
        <tr>
            <td>Colour</td>
            <td>${this.colour}</td>
        </tr>
        <tr>
            <td>Mouse Lighting</td>
            <td>${this.stickType}</td>
        </tr>
        <tr>
            <td>Button Number</td>
            <td>${this.inputAPI}</td>
        </tr>
        <tr>
            <td>Software</td>
            <td>${this.buttonNumber}</td>
        </tr>
        <tr>
            <td>Sensor Type</td>
            <td>${this.batteryType}</td>
        </tr>
        <tr>
            <td>Sensor DPI</td>
            <td>${this.triggerType}</td>
        </tr>
    </tbody>
        `;
        let descImage = document.getElementById("monitorImage");
        descImage.innerHTML = `<img class="monitorimg" src=${this.productImage} />`
        let img = descImage.querySelector(".monitorimg");
        img.style.opacity = 0; // set the opacity to 0
        img.addEventListener("load", () => {
            img.style.opacity = 1; // set the opacity back to 1 when the new image has loaded
        });

    }
    get displayData() {
        return this.display;
    }
}


