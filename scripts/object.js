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
    checkResolution() {
        let resCheck = "Null"

        if (screen.width * screen.height < this.horiResolution * this.vertResolution) {
            resCheck = "Lesser"
        } else if (screen.width * screen.height > this.horiResolution * this.vertResolution) {
            resCheck = "Greater"
        } else {
            resCheck = "Equal to"
        }

        document.getElementById("checkResolution").innerHTML = resCheck

    }
    display() {
        document.getElementById("monitor-title").innerHTML = this.manufacturer + " " + this.model;
        let monitorRow = document.getElementById("monitorRow");
        monitorRow.innerHTML = `
          <td>${this.manufacturer}</td>
          <td>${this.model}</td>
          <td>${this.connectionType}</td>
          <td>${this.type}</td>
          <td>${this.price}</td>
          <td>${this.colour}</td>
          <td>${this.displayTech}</td>
          <td>${this.horiResolution} " x " ${this.vertResolution}</td>
          <td>${this.refreshRate}</td>
          <td>${this.responseTime}</td>
          <td>${this.colourDepth}</td>
          <td>${this.vesa}</td>
        `;
        let descImage = document.getElementById("monitorImage");
        descImage.innerHTML = `<img class="monitorimg" src=${this.productImage} />`
    }
    get displayData() {
        return this.display;
    }

    get resolutionChecker() {
        return this.checkResolution();
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


// let Phone1 = new MobilePhone("samsung", "S20", 128, "Vodafone");
// let Tablet1 = new Tablet("LG", "2012", 64, 1080);
// Phone1.display();
// Tablet1.display();
