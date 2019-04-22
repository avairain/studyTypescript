"use strict";
// 交叉类型 &
{
    function exmFn(a, b) {
        let result = Object.assign({}, a, b);
        return result;
    }
    class Exm1 {
        constructor() {
            this.a = 'string';
        }
    }
    class Exm2 {
        b() { }
    }
    let exm = exmFn(new Exm1(), new Exm2());
    exm.b();
}
// 联合类型 |
{
    function exm(a) {
        console.log(a);
    }
    exm(1);
    //
    {
        /* interface A {
          a: number
          b: number
        }
        interface B {
          x(): () => void
          y(): () => void
        }
        function Exm(): A | B {} // mast have returns
        function Exm1<T extends A | B>(): T {} // mast have returns
        let exm = <A>Exm()
        exm.a
        let exm1 = Exm1<B>()
        exm1.x() */
    }
}
// 类型保护与区分类型
{
    /* interface A {
      a: number
      b: number
    }
    interface B {
      x(): () => void
      y(): () => void
    }
    function Exm(): A | B {} // mast have returns
    let exm = Exm();
    (<A>exm).a;
    (<B>exm).y() */
}
// 自定义的类型保护
{
    /* interface A {
      a: number
      b: number
    }
    interface B {
      x(): () => void
      y(): () => void
    }
    function bool(a: A | B): a is A {
      return (<A>a).a !== undefined
    }
    function Exm(): A | B {} // mast have returns
    let exm = Exm()
    bool(exm) ? exm.a : exm.y() */
}
// typeof类型保护
{
    function exm(a, b) {
        if (typeof b === 'string')
            return a + b;
        if (typeof b === 'number')
            return Array(b + 1).join('>') + a;
        throw new Error(`Expected string or number, got '${b}'.`);
    }
    exm('exm', 1);
}
// instanceof类型保护
{
    // 类似 typeof
    /* function exm(): object | number{}
    if (exm instanceof Object) {
      exm
    }
    if (exm instanceof Number) {
      exm
    } */
}
// 类型别名
{
    // common
    {
        function exm(a) {
            return typeof a === 'string' ? a : a();
        }
        exm('a');
    }
    // 泛型
    {
        let exm;
        exm = { a: 'exm' };
        exm.a;
        /* type Recursive<T> = T & { next: Recursive<T> }
        interface P {
          name: string
        }
        let exm1: Recursive<P> // 定义使用
        exm1.next.next.next.name */
    }
}
/* } */
// 字符串字面量类型
{
    function exm(a) {
        return a + 6;
    }
    exm('a');
    // exm(5) // error
    /* function createElement1(tagName: "img"): HTMLImageElement;
    function createElement1(tagName: "input"): HTMLInputElement;
    // ... more overloads ...
    function createElement1(tagName: string): HTMLImageElement | HTMLInputElement { // must return something
    } */
}
// 数字字面量类型
{
    function exm(a) {
        return a + '6';
    }
    /*
    function exm(a: 1 | 2 | 3): string {
      return a + '6'
    }
    */
    exm(1);
}
// 枚举成员类型
// 可辨识联合
{
}
