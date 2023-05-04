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
    }

    checkResolution() {
        let resCheck = null

        if (screen.width * screen.height < this.horiResolution * this.vertResolution) {
            resCheck = "Your Screen Resolution is Less than the " + this.model
        } else if (screen.width * screen.height > this.horiResolution * this.vertResolution) {
            resCheck = "Your screen resolution is higher than the " + this.model
        } else {
            resCheck = "Your screen resolution is the same as the " + this.model
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
    constructor(manufacturer, model, connectionType, type, price, colour, keyboardType, lighting, specialFunction, programSupport, switchType) {
        super(manufacturer, model, connectionType, type, price, colour);
        this.keyboardType = keyboardType;
        this.lighting = lighting;
        this.specialFunction = specialFunction;
        this.programSupport = programSupport
        this.switchType = switchType;
    }
    display() {
        document.getElementById("data").innerHTML = this.manufacturer + this.model + this.connectionType + this.type + this.price + this.colour + this.resolution + this.resolution + this.refreshRate + this.responseTime + this.colourDepth + this.vesa

    }
}
class Mouse extends ComputerPeripherals {
    constructor(manufacturer, model, connectionType, type, price, colour, lighting, buttonNumber, programSupport, sensorType, dpi) {
        super(manufacturer, model, connectionType, type, price, colour);
        this.lighting = lighting;
        this.buttonNumber = buttonNumber;
        this.programSupport = programSupport
        this.sensorType = sensorType;
        this.dpi = dpi;
    }
    display() {
        document.getElementById("data").innerHTML = this.manufacturer + this.model + this.connectionType + this.type + this.price + this.colour + this.resolution + this.resolution + this.refreshRate + this.responseTime + this.colourDepth + this.vesa

    }
}
class AudioInterface extends ComputerPeripherals {
    constructor(manufacturer, model, connectionType, type, price, colour, phantomPower, microphoneInput, headphoneOutput, speakerOutput, controls) {
        super(manufacturer, model, connectionType, type, price, colour);
        this.phantomPower = phantomPower;
        this.microphoneInput = microphoneInput;
        this.headphoneOutput = headphoneOutput;
        this.speakerOutput = speakerOutput;
        this.controls = controls
    }
    display() {
        document.getElementById("data").innerHTML = this.manufacturer + this.model + this.connectionType + this.type + this.price + this.colour + this.resolution + this.resolution + this.refreshRate + this.responseTime + this.colourDepth + this.vesa

    }
}
class GamePad extends ComputerPeripherals {
    constructor(manufacturer, model, connectionType, type, price, colour, stickType, inputAPI, buttonNumber, batteryType, triggerType) {
        super(manufacturer, model, connectionType, type, price, colour);
        this.stickType = stickType
        this.inputAPI = inputAPI;
        this.buttonNumber = buttonNumber;
        this.batteryType = batteryType;
        this.triggerType = triggerType
    }
    display() {
        document.getElementById("data").innerHTML = this.manufacturer + this.model + this.connectionType + this.type + this.price + this.colour + this.resolution + this.resolution + this.refreshRate + this.responseTime + this.colourDepth + this.vesa

    }
}


