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
    { // 接口 属性多的 可以赋值给 属性少的
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
            { // 函数 参数少的 可以赋值给 参数多的
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
            { // 函数 对象参数 属性少的 可以赋值给 属性多的
                let a = (o) => {
                    console.log(o);
                };
                let b = (o) => {
                    console.log(o);
                };
                b = a;
                b({ x: '1', y: 3 });
                a = b; // error
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
