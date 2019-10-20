class Airport {
  constructor() {
    this.runways = [];
  }

  newRunway(length, magHeading, designation) {
    this.runways.push(new Runway(length, magHeading, designation));
  }
}