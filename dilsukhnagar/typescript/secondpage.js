var auto;
(function (auto) {
    var Engine = /** @class */ (function () {
        function Engine(engine) {
            this.engine = engine;
        }
        return Engine;
    }());
    auto.Engine = Engine;
    var Car = /** @class */ (function () {
        function Car(parameters) {
        }
        return Car;
    }());
    var Truck = /** @class */ (function () {
        function Truck(parameters) {
        }
        return Truck;
    }());
})(auto || (auto = {}));
var engine1 = new auto.Engine('v8');
console.log(engine1.engine);
var fullname;
var list;
_a = ['ravi', 'srk', 'ramesh'], fullname = _a[0], list = _a.slice(1);
console.log(list);
var _a;
