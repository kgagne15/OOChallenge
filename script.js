class Vehicle{
    constructor(make, model, year){
        this.make = make; 
        this.model = model; 
        this.year = year; 
    }
    honk(){
        return 'Beep';
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}



class Car extends Vehicle{
    constructor(make, model, year, numWheels = 4){
        super(make, model, year);
        this.numWheels = numWheels; 
    }
}


class Motorcycle extends Vehicle{
    constructor(make, model, year, numWheels = 2) {
        super(make, model, year);
        this.numWheels = numWheels; 
    }
    revEngine(){
        return 'VROOM!!!';
    }
}

//referred to solution for parts

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity; 
    }
    add(v){
        if (!(v instanceof Vehicle)) {
            return 'Only vehicles allowed here'; 
        }
        if(this.vehicles.length < this.capacity){
            return this.vehicles.push(v) 
        } else {
            return 'Sorry we\'re full';
        }
    }
}

