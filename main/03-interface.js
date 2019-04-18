"use strict";
// common
{
    let exm;
    exm = { a: 'string' };
    console.log(exm);
}
// 可选属性
{
    let exmA = { a: 'string' };
    console.log(exmA);
}
// 只读属性
{
    let exm = { a: 'readonly', b: 'str' };
    exm.b += 'ing';
    console.log(exm);
}
// 额外的属性检查
{
    let exm;
    exm = { a: 'string', 2: false };
    console.log(exm);
}
// 函数类型
{
    let exm;
    exm = (x, y) => {
        console.log(x + y);
    };
    exm(1, 2);
}
// 可索引的类型
{
    let exmArr;
    exmArr = ['str'];
    exmArr[1] = '213';
    let exmString;
    exmString = exmArr[0];
    console.log(exmString[2]);
}
// 类类型
{
    // common
    {
        class exm {
            constructor() {
                this.a = 'str';
            }
            fn() { }
        }
        new exm();
    }
    // 类静态部分与实例部分的区别
    {
        function createClock(ctor, hour, minute) {
            return new ctor(hour, minute);
        }
        class DigitalClock {
            constructor(h, m) {
                console.log(h + m);
            }
            tick() {
                console.log("beep beep");
            }
        }
        class AnalogClock {
            constructor(h, m) {
                console.log(h + m);
            }
            tick() {
                console.log("tick tock");
            }
        }
        createClock(DigitalClock, 12, 17);
        createClock(AnalogClock, 7, 32);
    }
}
// 继承接口
{
    let exm;
    exm = { a: 'str', b: 'ing' };
    let exmOther = {};
    exmOther = { a: 'str', b: 'ing' };
    console.log(exm);
    console.log(exmOther);
}
// 混合类型
{
    function Exm() {
        const fn = (n) => {
            console.log(n);
        };
        fn.a = 'str';
        fn.fn = () => { };
        return fn;
    }
    let t = Exm();
    t(1);
}
// 接口继承类
{
    class Target {
        constructor() {
            this.a = '123';
        }
    }
    class ExmExtendsInterface {
        constructor() {
            this.a = '456';
            this.b = 'b';
        }
    }
    class ExmExtendsClassAndInterface extends Target {
        constructor() {
            super(...arguments);
            this.b = 'ExmExtendsClass';
        }
    }
    class ExmExtendsClass extends Target {
        constructor() {
            super(...arguments);
            this.c = '789';
        }
    }
    class ExmExtendsInterface1 extends ExmExtendsInterface {
    }
    console.log(ExmExtendsClassAndInterface, ExmExtendsClass, ExmExtendsInterface1);
}
