"use strict";
// common
{
    class Exm {
        constructor(s) {
            this.a = s;
        }
        b() { }
    }
    console.log(Exm);
}
// 继承
{
    class Target {
        constructor(s) {
            this.a = s;
        }
        b() { }
    }
    class Exm extends Target {
        constructor(s) {
            super(s);
        }
    }
    let exm = new Exm('a');
    exm.b();
}
// 公共，私有与受保护的修饰符
{
    // public  default 自由访问
    {
        class Exm {
            constructor(s) {
                this.a = s;
            }
        }
        new Exm('exm').a;
    }
    // private 不能在类外边访问
    {
        class Exm {
            constructor(s) {
                this.a = s;
            }
            getA() {
                return this.a;
            }
        }
        let exm = new Exm('exm');
        // exm.a // error
        exm.getA();
    }
    // protected  可以在派生类访问
    {
        class Target {
            constructor(s) {
                this._a = `_${s}`;
                this.a = s;
            }
            get_a() {
                return this._a;
            }
        }
        class Exm extends Target {
            constructor(s) {
                super(s);
            }
            getA() {
                // this._a // error
                return this.a;
            }
        }
        new Exm('exm');
        // new Target('exm') // error
    }
}
// readonly
{
    class Exm {
        constructor(s) {
            this.a = s;
        }
    }
    let exm = new Exm(`exm`);
    // exm.a = '123' // error
    console.log(exm);
}
// 参数属性
{
    // interface o {
    //   a: string
    //   b: number
    // }
    class Exm {
        constructor(o) {
            this.o = o;
            this.a = 'a';
        }
    }
    let exm = new Exm('exm');
    console.log(exm);
    // exm.o = '232' //error
}
// 存取器
{
    class Exm {
        constructor() {
            this._a = 'a';
        }
        get a() {
            return this._a;
        }
        set a(s) {
            this._a = s;
        }
    }
    new Exm();
}
// 静态属性
{
    class Exm {
    }
    Exm.a = 'a';
    new Exm();
}
// 抽象类
{
    class Target {
        constructor(s) {
            this.a = s;
        }
    }
    class Exm extends Target {
        constructor(s) {
            super(s);
        }
        getA() {
            return this.a;
        }
    }
    let exm = new Exm('exm');
    exm.getA();
    // new Target() // error
}
// 构造函数
{
    class Target {
        constructor(s) {
            this.s = s;
        }
    }
    Target.a = 'str';
    let target;
    target = new Target('s');
    console.log(target.s);
    let Exm = Target;
    Exm.a = 'ing';
    let exm = new Exm('exm');
    console.log(exm.s, Exm.a);
}
// 把类当做接口
{
    class Target {
        constructor() {
            this.a = 'a';
            this.b = 'b';
        }
    }
    let exm = { a: 'A', b: 'B', c: 3 };
    console.log(exm);
}
