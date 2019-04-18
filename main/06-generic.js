"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// common
{
    function exm(a) {
        return a;
    }
    exm('123');
    exm(123);
}
// 使用泛型变量
{
    function exm(a) {
        console.log(a.length);
        return a;
    }
    exm(['123']);
    exm([123]);
    exm([[1]]);
}
// 泛型类型
{
    let exm;
    exm = (a) => {
        return a;
    };
    let exmForInterface = exm;
    exm('123');
    exm(123);
    exm(['123']);
    exmForInterface('123');
    exmForInterface(123);
    exmForInterface(['123']);
}
// 泛型类
{
    class Exm {
        constructor(_a) {
            var { a } = _a, b = __rest(_a, ["a"]);
            this.b = (x, y) => {
                return x || y;
            };
            console.log(b);
            this.a = a;
        }
    }
    let exm = new Exm({ a: 'string' });
    exm.b('1', 'c');
}
// 泛型约束
{
    function exm(o) {
        console.log(o.a);
        o.a = 'str';
        return o;
    }
    exm({ a: 'string' });
}
// 在泛型约束中使用类型参数
{
    function getProperty(obj, key) {
        return obj[key];
    }
    let x = { a: 1, b: 2 };
    getProperty(x, 'a'); // okay
    // getProperty(x, 2);
}
// 在泛型中使用类类型
{
    class Target {
        constructor() {
            this.a = 'Target';
        }
    }
    class Tar extends Target {
        constructor() {
            super();
            this.b = () => {
                console.log(this.a);
                return this;
            };
            this.a = 'Tar';
        }
    }
    function exm(c) {
        return new c();
    }
    exm(Tar).b().a;
}
