import { auto } from './secondpage'; 
// var a = 10; 
// function run(){
//     // return 20;
// }
// console.log(run());

// Module / namespace 
//        |
//      Class --- interface 
//        |
//  contructor, fields ,properties

interface carEngine{
    engine:string,
    testRunEngine:() => void,
    engineType ?: string
    }
abstract class Engine implements carEngine {
    // engine: string;
    newProp:string;
    constructor(public engine, public auto) {
        // this.engine = engine;
        console.log(auto)
    }
    testRunEngine(){
        console.log(this.engine);
    }
}
class Car extends Engine{
    constructor(engine) {
        super(engine);
    }
    start() {
    console.log(`car started with engine named ${this.engine}`);
    };
    stop(){
        console.log('car is stoped');
    }

}
// var newEngine = new Engine('v6');
var num : number ;
var fullName : string;
var obj : {};
num = 10;
num = null;
fullName = undefined;
obj = null;
var testfunction: (a:number, b:number) => number = (a, b) => {
    console.log(this);
    return a * b;
};
var obj1 = {
    a:1,
    testFn : ()=>{
        console.log(this);
        function run(){console.log(this)}
        run();
    }
}
console.log(obj1.testFn());
console.log(testfunction(10, 20));


var testFn:() => number
testFn = function(){
    return 10;
}

// function start() {
//     console.log('car started');
// };
