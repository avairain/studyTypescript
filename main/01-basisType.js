"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string
let str = 'string';
// number
let num = 123;
// boolean
let bool = false;
// array
let numArr = [1, 2];
let strArr = ['s', 't'];
let stringArr = ['s', 't'];
// ...
// tuple
let tupleArr;
tupleArr = ['2', 1];
// tupleArr[2] = 2 // 非严格模式
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
// any
let anyType;
anyType = 1;
anyType = 'str';
// ...
// void
let voidType;
voidType = undefined;
// voidType = null // 非严格模式
// null & undefined
let u = undefined;
let n = null;
// never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
// object
{
    let objectType;
    objectType = { o: '1' };
    console.log(objectType);
}
// 修饰符
{
    function ExmDecorators(Target) {
        Target.a = '123';
        return Target;
    }
    let Exm = class Exm {
        constructor() { }
    };
    Exm = __decorate([
        ExmDecorators
    ], Exm);
}
