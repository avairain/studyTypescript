"use strict";
// common
{
    class Exm {
        constructor() {
            this.a = '123';
        }
    }
    let exm;
    exm = new Exm();
    exm.a;
}
// 关于可靠性的注意事项
{
    // 开始
    { // 对象 属性多的 可以赋值给 属性少的
        // interface Target {
        //   a: string
        // }
        let x = { a: 'st' }; // x: Target
        let y = { a: 'st', b: 1 };
        x = y;
        // y = x // error
        x.a;
    }
    // 函数
    {
        // arguments
        {
            { // 函数 对象参数属性少的 参数少的 可以赋值给 参数多的
                let a = (x) => {
                    console.log(x);
                };
                let b = (x, y) => {
                    console.log(x, y);
                };
                b = a;
                b('1', 2);
                // a = b // error
            }
        }
        // argumentsWithObject
        {
            {
                let a = (o) => {
                    console.log(o);
                };
                let b = (o) => {
                    console.log(o);
                };
                b = a;
                b({ x: '1', y: 3 });
                // a = b // error
            }
        }
        // returns
        { // 函数 返回值为对象 属性多的 可以赋值给 属性少的
            // 类型系统强制 源函数(右侧) 的返回值类型必须是 目标函数(左侧) 返回值类型的子类型
            let a = () => ({ a: 'string' });
            let b = () => ({ a: 'string', b: 'string' });
            a = b;
            a();
            // b = a // error
        }
    }
}
// 函数参数双向协变
{
    function exm(fn) {
        console.log(fn);
    }
    console.log(exm);
    // exm((x: Target) => {console.log(x.x, x.y)})  // strictFunctionTypes 未开启下 目标函数 的参数必须是 源函数 的子类型  开启将无法赋值 ==> 不建议
    exm((x) => { console.log(x.x); });
    exm(((e) => { console.log(e.x); }));
}
// 可选参数和剩余参数
{
    function exm(...a) {
        console.log(a);
    }
    exm(1, 2);
}
// 类
{
    class Target {
        constructor() {
            this.a = 'target';
        }
    }
    class Exm {
        constructor() {
            this.a = 'emx';
        }
    }
    let target = new Target();
    let exm = new Exm();
    target = exm;
    exm = target;
}
// 类的私有成员和受保护成员
{
    // 泛型
    {
        {
            /* interface Exm<T> { }
            let exm1: Exm<number>
            let exm2: Exm<string> = {}
            exm1 = exm2 */
        }
        {
            /* interface Exm<T> {
              a: T
            }
            let exm1: Exm<number> = { a: 1 }
            let exm2: Exm<string> = { a: 'string' } */
            // exm1 = exm2 // error
        }
    }
}
// 对象 属性多的 可以赋值给 属性少的
// 函数 对象参数属性少的 参数少的 可以赋值给 参数多的
// 函数 返回值为对象 属性多的 可以赋值给 属性少的 
// => 类型系统强制 源函数(右侧) 的返回值类型必须是 目标函数(左侧) 返回值类型的子类型
// strictFunctionTypes 未开启下 目标函数 的参数必须是 源函数 的子类型  开启将无法赋值 ==> 不建议
