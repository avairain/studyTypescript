"use strict";
// common
{
    function exm() { }
    console.log(exm);
}
// 函数类型
{
    // 定义类型
    { // 简
        function exm(a, b) {
            return a + b;
        }
        exm(1, 2);
    }
    { // 完整
        let exm = function (x, y) {
            return x + y;
        };
        exm(1, 2);
    }
    // 推断类型
    {
        let exm = function (x, y) {
            return x + y;
        };
        exm(1, 2);
    }
}
// 可以选参数和默认参数
{
    function exmForUndefined(a, b) {
        return b ? (a + b) : a;
    }
    exmForUndefined(1, 2);
    exmForUndefined(1);
    // exmForUndefined(1, 2, 3) // error
    function exmForDefaultValue(a, b = 0) {
        return a + b;
    }
    exmForDefaultValue(1, 2);
    exmForDefaultValue(1);
    // exmForDefaultValue(1, 2, 3) // error
    function exmMustInputUndefined(a = 0, b) {
        return a + b;
    }
    exmMustInputUndefined(2, 1);
    exmMustInputUndefined(undefined, 1);
    // exmMustInputUndefined(1) // error
}
// 剩余参数
{
    function exm(a, ...b) {
        return b.reduce((a, b) => a + b) + a;
    }
    exm(1, 2, 3);
    exm(1, 2);
    exm(1);
}
// this和箭头函数
{
    let exm;
    exm = {
        a: 'a',
        b() {
            /* return function () {
              return this.a // error
            } */
            return () => this.a;
        }
    };
    console.log(exm.b()());
}
// this 参数
{
    let exm = {
        a: 'str',
        b: 'ing',
        getAAndB() {
            return () => this.a + this.b;
        }
    };
    console.log(exm.getAAndB()());
}
// this 参数在回调函数里
{
    let target = {
        addClickListener() { }
    };
    class ExmWithVoidThis {
        constructor() {
            this.a = 'string';
        }
        handler(e) {
            // this.a = e.type // error
            console.log(e.type);
        }
    }
    class ExmWithTargetThis {
        constructor() {
            this.a = 'string';
        }
        handler(e) {
            this.a = e.type;
            console.log(e.type);
        }
    }
    class ExmWithVoidThisAndUse {
        constructor() {
            this.a = 'string';
            this.handler = (e) => {
                this.a = e.type;
                console.log(e.type);
            };
        }
    }
    let exmWithVoidThis = new ExmWithVoidThis();
    let exmWithTargetThis = new ExmWithTargetThis();
    let exmWithVoidThisAndUse = new ExmWithVoidThisAndUse();
    target.addClickListener(exmWithVoidThis.handler);
    target.addClickListener(exmWithVoidThisAndUse.handler);
    console.log(exmWithTargetThis);
    // target.addClickListener(exmWithTargetThis.handler) // error
}
// 重载
{
    function exm() {
        let a = arguments[0];
        return a.s || a;
    }
    exm('123');
    exm({ s: '456' });
}
