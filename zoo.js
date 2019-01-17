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