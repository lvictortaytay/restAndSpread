
class Vehicle{

    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        console.log("beep")
    }
    toString(){
        console.log(`the vehicle is a ${this.make} ${this.model} , ${this.year}`);
    }
}

const mazda = new Vehicle("mazda" , "3" , 2020)


class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year); // this copies what is inside the constructor
        this.numWheels = 4;
    }
}

const camaro = new Car("chevy" , "camaro" , 2020)

//create a class for MotorCycle , it should inherit from vehicle
// each Motorcycle instance should have a property called numWheels and its value set to two
class MotorCycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels = 2;
    }
    revEngine(){
        console.log("vrooooooooooeeeeeoeoeoeoemmmemememeemememe")
    }
}

const bike = new MotorCycle("bmw" , "ad" , 2020)

//create a class for garage 
//it should have a property called vehicals that can store an array of vehicles
//if you try to add anything that is not a vehicle it should prevent it
//if the garage is full it should prevent from adding vehicles

class Garage{
    constructor(capacity){
        this.Vehicles = [];
        this.capacity = this.capacity
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return("sorry , registered vehicles only");
        }
        if(this.Vehicles.length >= this.capacity){
            return("sorry we are full !")
        }
        this.Vehicles.push(newVehicle);
        return ("vehicle added!")
    }
}

const myGarage = new Garage();