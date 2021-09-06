class Flashlamp {
    constructor(battery) {
        this.battery = battery;
    }

    getBartteryinfor() {
        return this.battery.getEnergy();
    }

    getStatusbattery() {
        this.status = true;
    }

    getLight() {
        if (this.status) {
            alert('lighting');
        } else {
            alert('Not lighting');
        }
    }
    getOnoff() {
        this.status = !this.status;
    }
}