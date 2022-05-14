/* 
* Задание 4
*/



function electricalDevices(name, power, brand, on){
    this.type = 'electrical';  
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.on = on; 
    }
    
    electricalDevices.prototype.getOn = function(){
         if (this.on === true) {
                 console.log(`${this.name} is on`)
             } else {
                 console.log(`${this.name} is off`)
             }
         }

    electricalDevices.prototype.getPower = function(){
            console.log(`Power of the ${this.name} is ${this.power} watts`)
       }
        
function electroLamp(name, power, brand, on, lightColor){
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.on = on; 
    this.lightColor = lightColor;  
  }
  
  electroLamp.prototype = new electricalDevices()
    
  electroLamp.prototype.getLightColor = function(){
    console.log(`${this.name} has "${this.lightColor}" light's color`)
  }
  
  let lamp = new electroLamp('LED lamp', 10, 'Philips', false, 'Warm White');
    
  function computer(name, power, brand, on, videoCard){
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.on = on; 
    this.videoCard = videoCard;
  }
  
  computer.prototype = new electricalDevices()
  
  computer.prototype.getVideoCard = function(){
    console.log(`${this.name} has "${this.videoCard}" videocard`)
  }
  
  let comp = new computer('Laptop', 50, 'Lenovo', true, 'Nvidia 3060RTX');
  
  comp.getVideoCard()
  lamp.getLightColor()
  comp.getPower()
  lamp.getPower()
  comp.getOn()
  lamp.getOn()