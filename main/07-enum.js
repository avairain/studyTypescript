"use strict";
// common
{
    let Exm;
    (function (Exm) {
        Exm[Exm["a"] = 0] = "a";
        Exm[Exm["b"] = 1] = "b";
        Exm[Exm["c"] = 2] = "c";
    })(Exm || (Exm = {}));
    console.log(Exm);
}
// 数字
{
    let Exm;
    (function (Exm) {
        Exm[Exm["a"] = 2] = "a";
        Exm[Exm["b"] = 3] = "b";
        Exm[Exm["c"] = 1] = "c";
        Exm[Exm["d"] = 2] = "d";
    })(Exm || (Exm = {}));
    console.log(Exm);
}
// 字符串枚举
{
    let Exm;
    (function (Exm) {
        Exm["a"] = "A";
        Exm["b"] = "B";
        // c  // error
    })(Exm || (Exm = {}));
    console.log(Exm);
}
// 异构枚举
{
    let Exm;
    (function (Exm) {
        Exm[Exm["a"] = 0] = "a";
        Exm["b"] = "B";
    })(Exm || (Exm = {}));
    console.log(Exm);
}
// 计算的和常量成员
{
    let Exm;
    (function (Exm) {
        Exm[Exm["a"] = 0] = "a";
        Exm[Exm["b"] = 2] = "b";
        Exm[Exm["c"] = 4] = "c";
        Exm[Exm["d"] = 6] = "d";
        Exm[Exm["e"] = "123".length] = "e";
    })(Exm || (Exm = {}));
    console.log(Exm);
}
// 联合枚举与枚举成员的类型
{
    let Exm;
    (function (Exm) {
        Exm[Exm["Target1"] = 0] = "Target1";
        Exm[Exm["Target2"] = 1] = "Target2";
    })(Exm || (Exm = {}));
    let exm1;
    let exm2;
    exm1 = {
        a: Exm.Target1,
        b: 5
    };
    exm2 = {
        x: Exm.Target2,
        y: 'y'
    };
    console.log(exm1, exm2);
    function f(x) {
        /* if(x !== Exm.Target1 || x !== Exm.Target2) {
        } */ // error
        console.log(x);
    }
    f(4);
}
// 运行时的枚举
{
    let Exm;
    (function (Exm) {
        Exm[Exm["x"] = 0] = "x";
        Exm[Exm["y"] = 1] = "y";
        Exm[Exm["z"] = 2] = "z";
    })(Exm || (Exm = {}));
    function f(o) {
        return o.x;
    }
    f(Exm);
}
// 反向映射
{
    let Exm;
    (function (Exm) {
        Exm[Exm["a"] = 0] = "a";
    })(Exm || (Exm = {}));
    let a = 1;
    console.log(Exm[a]);
}
// const 枚举
{
    console.log([1 /* a */, 2 /* b */, 3 /* c */]);
}
