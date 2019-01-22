function sleep(name){
    console.log(name + " sleeps for 8 hours");

}

var favoriteFood = "bacon";

function eat(name, food){
    console.log(name + " eats " + food);
    if(food == favoriteFood){
        console.log("YUM!!! " + name + " wants more " + food);
    }else{
        sleep(name);
    }
}



function run(){
    sleep("Tigger");
    eat("Tigger", "meat");
    eat("Tigger", "bacon");

}

class Polygon {

    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }

    //method #1
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    //method #2
    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

}



class Tiger {

    constructor(name, favoriteFood) {
        // put your constructor content here
        this.name = "Tiger";
        this.favoriteFood =
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat() {
        // complete your eat function here!

    }
}


