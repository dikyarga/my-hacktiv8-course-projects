class Rocket {
  constructor(name, version, astronauts) {
    this.name = name;
    this.version = version;
    if (astronauts == undefined) {
      this.astronauts = [];
    } else {
      this.astronauts = astronauts;
    }
  }
  setRocketName(rocketName){
    this.name = rocketName;
  }
  setRocketVersion(rocketVersion){
    this.version = rocketVersion;
  }
  addRocketCrew(astronautName){
    console.log(astronautName);
    this.astronauts.push(astronautName);
  }
  getAstronautsNames(){
    return this.astronauts.join(', ');
  }
  getRocketInfo(){
    return 'Rocket name : ' + this.name + ', Version : ' + this.version + ', Astronauts : ' + this.astronauts.length + ' person';
  }
}

const apolloEleven = new Rocket('Apollo Eleven', 11);
console.log(apolloEleven.getRocketInfo());

apolloEleven.setRocketName('Apollo Evelen Udpate X');

console.log(apolloEleven.getRocketInfo());

apolloEleven.addRocketCrew('Diky');
apolloEleven.addRocketCrew('Arga');

console.log(apolloEleven.getRocketInfo());

console.log(apolloEleven.getAstronautsNames());
