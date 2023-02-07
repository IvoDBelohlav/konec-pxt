const PERIODA = 20;
const LIGHT_LIMIT = 50;

let start_time = 0;
let avg = 0;

function prumer(x: number) {
    const VAHA = 3;

    avg -= avg / VAHA;
    avg += x;

    return (avg / VAHA);
}

function main() {
    radio.setGroup(1)
    radio.setFrequencyBand(20)
    radio.setTransmitPower(5)
    console.logValue("light level", input.lightLevel())
    console.log("\n\r")
    while (true) {
        basic.pause(PERIODA); //aby bylo definovany, jak rychle to bezi
        let light = prumer(input.lightLevel());

        if (light > LIGHT_LIMIT)
            continue;

        if (start_time == 0)
            continue;

        let stop_time = control.millis();
        console.log("cas " + (stop_time - start_time) / 1000 + " sekund");
        start_time = 0;
    }
}

basic.forever(function () {
    main();
})

radio.onReceivedValue(function (name: string, value: number) {
    if (value === 1) {
        start_time = control.millis();
    }
})

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    


})