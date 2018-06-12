"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = this;
exports.__esModule = true;
var Engine = /** @class */ (function () {
    function Engine(engine, auto) {
        this.engine = engine;
        this.auto = auto;
        // this.engine = engine;
        console.log(auto);
    }
    Engine.prototype.testRunEngine = function () {
        console.log(this.engine);
    };
    return Engine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(engine) {
        return _super.call(this, engine) || this;
    }
    Car.prototype.start = function () {
        console.log("car started with engine named " + this.engine);
    };
    ;
    Car.prototype.stop = function () {
        console.log('car is stoped');
    };
    return Car;
}(Engine));
// var newEngine = new Engine('v6');
var num;
var fullName;
var obj;
num = 10;
num = null;
fullName = undefined;
obj = null;
var testfunction = function (a, b) {
    console.log(_this);
    return a * b;
};
var obj1 = {
    a: 1,
    testFn: function () {
        console.log(_this);
        function run() { console.log(this); }
        run();
    }
};
console.log(obj1.testFn());
console.log(testfunction(10, 20));
var testFn;
testFn = function () {
    return 10;
};
// function start() {
//     console.log('car started');
// };
var fullname;
var list;
_a = ['ravi', 'srk', 'ramesh'], fullname = _a[0], list = _a.slice(1);
console.log(list);
var _a;
