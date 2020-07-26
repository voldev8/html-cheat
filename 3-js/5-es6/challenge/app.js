class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }
  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per sq km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, len, size = 3) {
    super(name, buildYear);
    this.len = len;
    this.size = size;
  }
  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 0.4, 949)
];
const allStreets = [
  new Street('Ocean Ave', 1999, 1.1, 4),
  new Street('Evergreen St', 2008, 2.7, 2),
  new Street('4th St', 2015, 0.8),
  new Street('Sunset Blvd', 1982, 2.5, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0); //adds all numbers in array
  return [sum, sum / arr.length];
}
function reportParks(p) {
  console.log(`----Parks Report----`);
  //density
  p.forEach(el => el.treeDensity());
  //average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average ${avgAge} years.`);
  //which park has more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(
    `${p[i].name} has more than 1000 trees with ${p[i].numTrees} trees.`
  );
}
function reportStreets(s) {
  console.log(`----Streets Report----`);
  //total and average length of towns streets
  const [totalLen, avgLen] = calc(s.map(el => el.len));
  console.log(
    `Our ${s.length} streets have a total length of ${totalLen.toFixed(
      2
    )} km, with an average of ${avgLen.toFixed(2)} km.`
  );
  //classify sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
