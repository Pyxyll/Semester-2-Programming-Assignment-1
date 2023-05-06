//monitors
let monitor1 = new Monitor(
  "LG",
  "ultragear 27gn800-b",
  "Display Port",
  "Output Device",
  "600",
  "Black & Red",
  "images/monitors/lg.jpg",
  "IPS",
  2560,
  1440,
  "144Hz",
  "1ms",
  "24 bit",
  "Yes"
);

let monitor2 = new Monitor(
  "Dell",
  "Alienware",
  "Display Port",
  "Output Device",
  "600",
  "Black & Grey",
  "images/monitors/dell.jpg",
  "QD-OLED",
  3440,
  1440,
  "175Hz",
  "1ms",
  "24 bit",
  "Yes"
);

let monitor3 = new Monitor(
  "Gigabyte",
  "M32U",
  "Display Port",
  "Output Device",
  "600",
  "Black & Grey",
  "images/monitors/gigabyte.jpg",
  "IPS",
  3840,
  2260,
  "144Hz",
  "1ms",
  "24 bit",
  "Yes"
);

let monitor4 = new Monitor(
  "ViewSonic",
  "XG2431",
  "Display Port",
  "Output Device",
  "600",
  "Black & Grey",
  "images/monitors/viewsonic.jpg",
  "IPS",
  1920,
  1080,
  "240Hz",
  "1ms",
  "24 bit",
  "Yes"
);

let monitor5 = new Monitor(
  "Acer",
  "Nitro XF243Y",
  "Display Port",
  "Output Device",
  "600",
  "Black & Grey",
  "images/monitors/acer.jpg",
  "IPS",
  1920,
  1080,
  "165Hz",
  "1ms",
  "24 bit",
  "Yes"
);

//keyboards

let keyboard1 = new Keyboard(
  "Keychron",
  "Q2",
  "USB Type-C & Bluetooth",
  "Input Device",
  179,
  "carbon black",
  "images/keyboards/keychronq2.jpg",
  "65%",
  "RGB",
  "Rotery Encoder, Switch Hotswap",
  "VIA/QMK",
  "Mechanical - Linear"
);

let keyboard2 = new Keyboard(
  "NuPhy",
  "Air75",
  "USB Type-C & Bluetooth",
  "Input Device",
  129.99,
  "Grey",
  "images/keyboards/nuphyair75.jpg",
  "75%",
  "White",
  "OS Switch",
  "VIA",
  "Low Profile, Mechanical - Linear"
);

let keyboard3 = new Keyboard(
  "Logitech",
  "G915",
  "USB Type-C & 2.4GHz",
  "Input Device",
  249,
  "Grey",
  "images/keyboards/g915.jpg",
  "TKL",
  "RGB",
  "Volume Wheel",
  "G HUB",
  "Low Profile, Mechanical - Tactile"
);

let keyboard4 = new Keyboard(
  "Glorious",
  "Gmmk Pro",
  "USB Type-C",
  "Input Device",
  148,
  "Grey",
  "images/keyboards/gmmkpro.jpg",
  "75%",
  "RGB",
  "Rotery Encoder, Switch Hot Swap",
  "Glorious Core",
  "Mechanical - Tactile"
);

let keyboard5 = new Keyboard(
  "Cannon Keys",
  "Bakaneko 65",
  "USB Type-C",
  "Input Device",
  250,
  "Gunmetal",
  "images/keyboards/bakaneko65.jpg",
  "65%",
  "White",
  "Gasket Mount PCB, Switch Hotswap, Switch Hot Swap",
  "VIA/QMK",
  "Mechanical - Tactile"
);

//mice

let mouse1 = new Mouse(
  "Logitech",
  "MX Master 2S",
  "USB Type-C, 2.4GHz & Bluetooth",
  "Input Device",
  77,
  "Black & Grey",
  "images/mice/mxmaster.jpg",
  "None",
  7,
  "Logi Options",
  "Laser",
  4000,
  149.8
);

let mouse2 = new Mouse(
  "Glorious",
  "Model O Wireless",
  "USB Type-C, 2.4GHz",
  "Input Device",
  89,
  "Black",
  "images/mice/modelo.jpg",
  "RGB",
  6,
  "Glorious Core",
  "Optical (LED)",
  19000,
  69.6
);

let mouse3 = new Mouse(
  "Logitech",
  "G Pro Wireless",
  "USB Type-C, 2.4GHz",
  "Input Device",
  120,
  "White",
  "images/mice/gpro.jpg",
  "White",
  6,
  "G HUB",
  "Optical (LED)",
  16000,
  61.1
);

let mouse4 = new Mouse(
  "Razer",
  "Viper V2 Pro",
  "USB Type-C, 2.4GHz",
  "Input Device",
  130,
  "Black",
  "images/mice/viper.jpg",
  "Green",
  5,
  "Razer Synapse 3",
  "Optical (LED)",
  16000,
  58.5
);

let mouse5 = new Mouse(
  "Steelseries",
  "Aerox 5",
  "USB Type-C, 2.4GHz",
  "Input Device",
  149.99,
  "Black",
  "images/mice/aerox.jpg",
  "RGB",
  9,
  "Steelseris Engine",
  "Optical (LED)",
  18000,
  74.9
);

//audio interfaces

let audio1 = new AudioInterface(
  "Rode",
  "AI-1",
  "USB Type-C",
  "Input/Output Device",
  164.99,
  "Black",
  "images/audio-interfaces/rode.jpg",
  "BUS 48V",
  "1x 3pin XLR",
  "1x 6.35mm",
  "2x 6.35mm Balanced Out",
  "2x Knobs 2x function buttons"
);

let audio2 = new AudioInterface(
  "Presonus",
  "Audiobox USB 96",
  "USB Type-B",
  "Input/Output Device",
  82,
  "Blue & Silver",
  "images/audio-interfaces/presonus.jpg",
  "BUS 48V",
  "2x 3pin XLR",
  "1x 6.35mm",
  "2x 6.35mm Balanced Out",
  "5x Knobs"
);

let audio3 = new AudioInterface(
  "Focusrite",
  "Scarlett Solo 3rd Gen",
  "USB Type-C",
  "Input/Output Device",
  111,
  "Red & Black",
  "images/audio-interfaces/solo.jpg",
  "BUS 48V",
  "1x 3pin XLR",
  "2x 6.35mm",
  "None",
  "3x Knobs"
);

let audio4 = new AudioInterface(
  "Audient",
  "Evo 4",
  "USB Type-C",
  "Input/Output Device",
  119,
  "Grey",
  "images/audio-interfaces/evo4.jpg",
  "BUS 48V",
  "2x 3pin XLR",
  "2x 6.35mm",
  "2x 6.35 Balanced Out",
  "1x Knob 6x function buttons"
);

let audio5 = new AudioInterface(
  "Universal Audio",
  "Apllo twin X",
  "USB Type-C",
  "Input/Output Device",
  1134.35,
  "Grey",
  "images/audio-interfaces/apollo.jpg",
  "BUS 48V",
  "2x 3pin XLR",
  "2x 6.35mm",
  "4x 6.35mm Balanced Out",
  "1x Knob 8x function buttons"
);

//gamepads

let gamepad1 = new Gamepad(
  "Microsoft",
  "Xbox One Controller",
  "Micro USB, 2.4GHz and Bluetooth",
  "Input",
  53.55,
  "White",
  "images/gamepads/xbone.jpg",
  "Variable Resistance",
  "Xinput",
  17,
  "Double A, Removable",
  "Analogue"
);

let gamepad2 = new Gamepad(
  "Sony",
  "DualSense",
  "USB Type-C and Bluetooth",
  "Input",
  67.27,
  "White",
  "images/gamepads/dualsense.jpg",
  "Variable Resistance",
  "Direct-input",
  "17 and Touchpad",
  "1560 mAh Built-in",
  "Analogue, Force Feedback"
);

let gamepad3 = new Gamepad(
  "GuliKit",
  "KingKong 2",
  "USB Type-C, 2.4GHz and Bluetooth",
  "Input",
  70.00,
  "Black",
  "images/gamepads/kk2.jpg",
  "Hall Effects",
  "Xinput, Direct-Input, DSUController",
  20,
  "700mAh Built-in",
  "Analogue"
);

let gamepad4 = new Gamepad(
  "Nintendo",
  "Switch Pro Controller",
  "USB Type-C and Bluetooth",
  "Input",
  71.00,
  "Black",
  "images/gamepads/switchpro.jpg",
  "Variable Resistance",
  "Direct-Input",
  17,
  "1300 mAh Built-in",
  "Analogue"
);

let gamepad5 = new Gamepad(
  "Microsoft",
  "Xbox Elite 2",
  "USB Type-C, 2.4GHz and Bluetooth",
  "Input",
  128.00,
  "White and Black",
  "images/gamepads/elite.jpg",
  "Variable Resistance",
  "Xinput",
  22,
  "Double A, Removable",
  "Analogue"
);