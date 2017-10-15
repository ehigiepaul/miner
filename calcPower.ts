enum powerLoc {
  Enugu,
  Kano,
  Yola,
  Jos,
  Kaduna,
  Abuja,
  Port_Harcourt,
  Benin,
  Ikeja,
  Ibadan,
  Eko
}

interface powerClass {
  residential;
  commercial;
  industrial;
  special;
  street_light;
}

export class powerCalc {
  [x: string]: any;
  constructor(unit) {
    this.unit = unit;
    console.log(this.cost());
  }
  cost() {
    return `N${this.unit * 24.75}`;
  }
}

let start = new powerCalc(266);
