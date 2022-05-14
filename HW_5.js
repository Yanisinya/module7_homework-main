/* 
* Задание 5
*/


class electricalDevices {
  constructor (name, power, brand, on) {
    this.type = 'electrical';  
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.on = on; 
    }
    
    getOn(){
         if (this.on === true) {
                 console.log(`${this.name} is on`)
             } else {
                 console.log(`${this.name} is off`)
             }
         }

    getPower(){
            console.log(`Power of the ${this.name} is ${this.power} watts`)
       }
}
        
class electroLamp extends electricalDevices {
  constructor (name, power, brand, on, lightColor) {
    super (name, power, brand, on);
    this.lightColor = lightColor;  
  }
     
 getLightColor(){
    console.log(`${this.name} has "${this.lightColor}" light's color`)
  }
}

  let lamp = new electroLamp('LED lamp', 10, 'Philips', false, 'Warm White');
    
  class computer extends electricalDevices {
    constructor (name, power, brand, on, videoCard) {
    super(name, power, brand, on);
    this.videoCard = videoCard;
  }
   
  getVideoCard(){
    console.log(`${this.name} has "${this.videoCard}" videocard`)
  }
}
  
  let comp = new computer('Laptop', 50, 'Lenovo', true, 'Nvidia 3060RTX');
  
  comp.getVideoCard()
  lamp.getLightColor()
  comp.getPower()
  lamp.getPower()
  comp.getOn()
  lamp.getOn()