
module auto{
    export class Engine {
        constructor(public engine) {
            
        }
    }
    class Car  {
        constructor(parameters) {
            
        }
    }
    class Truck {
        constructor(parameters) {
            
        }
    }
}
var engine1 = new auto.Engine('v8');
console.log(engine1.engine);
var fullname: string;
var list: string[];
[fullname, ...list] = ['ravi', 'srk', 'ramesh']
console.log(list);