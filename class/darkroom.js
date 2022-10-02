const {Room} = require('./room');

class Darkroom extends Room {
  constructor(name, description) {
    super(name, description)
    this.light = false;
  }
  printRoom(){
    if (this.light) super.printRoom()
    else console.log('You cannot see anything');
  };
};
/*
const darkroom = new Darkroom('nam', 'descr')
console.log(darkroom);
darkroom.printRoom()
darkroom.light = true;
darkroom.printRoom()
*/
module.exports = {
  Darkroom,
};