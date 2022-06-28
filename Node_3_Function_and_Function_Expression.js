// Function
function func(val){
    val();
}
// func();

// Function Expression
let myFunc = function (){
    console.log("I am function Expression!!");
}
// myFunc();

func(myFunc);