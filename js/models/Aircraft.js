class Aircraft {
  constructor(type = "cessna") {
    switch (type) {
      case "cessna":
        this.makeCessna();
        break;
    }
  }

  makeCessna() {
    this.altitude = 5000; // ft
    this.airspeed = 85; // kts
    this.heading = 270; // deg
    this.vertSpeed = 0; // ft/min
    this.turnSpeed = 0; // deg/sec

    // Changeable values for current flight
    this.targetAltitude = 5000; // ft
    this.targetSpeed = 100; // kts
    this.targetHeading = 300; // deg

    this.netWeight = 1400; // pounds
    this.fuelCapacity = 34; // gal usable
    this.fuelRemaining = 10; // gal
    this.fuelBurnPerHour = 7.8; // gal/hr
  }

  // Convert necessary vars to seconds
  tick(elapsedTime) {
    this.altitude += (elapsedTime * this.vertSpeed) / 60;
    this.heading += elapsedTime * this.turnSpeed;
  }

  // Commands to make plane do things. Never change values directly.
  changeAltitude(targetAltitude) {
    this.targetAltitude = targetAltitude;

    if (this.targetAltitude < this.altitude) this.vertSpeed = -1000;

    if (this.targetAltitude > this.altitude) {
      this.vertSpeed = 1000;
    }
  }

  flyHeading(targetHeading) {
    this.targetHeading = targetHeading;

    

    let turnRight = Math.abs(targetHeading - this.heading) >= 180;

    console.log(
      `Hdg: ${this.heading} | Turning to: ${targetHeading} | Deciding to turn ${
        turnRight ? "right" : "left"
      }`
    );
  }

  getFuelPercentage() {
    return 100 * Math.round(this.fuelRemaining / this.fuelCapacity);
  }
}
