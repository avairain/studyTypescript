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
    function exm(a) {
        switch (a.kind) {
            case 'a': return a.a;
            case 'b': return a.b;
            case 'c': return a.c;
        }
    }
    exm({ kind: 'a', a: 'a' });
}
// 完整性检查
{
    function exm(a) {
        switch (a.kind) {
            case 'a': return a.a;
            case 'b': return a.b;
            case 'c': return a.c;
            default: return assertNever(a);
        }
    }
    function assertNever(x) {
        throw new Error("Unexpected object: " + x);
    }
    exm({ kind: 'a', a: 'a' });
}
// 多态的 this 类型
{
    class Target {
        constructor(n = 0) {
            this.n = n;
        }
        getN() {
            return this.n;
        }
        add(n) {
            this.n += n;
            return this;
        }
        minus(n) {
            this.n -= n;
            return this;
        }
    }
    class Exm extends Target {
        constructor(n = 0) {
            super(n);
        }
        multiply(n) {
            this.n *= n;
            return this;
        }
    }
    let ten = new Exm(10);
    ten = ten
        .add(1)
        .multiply(2);
    ten.getN();
}
// 索引类型
{
    function exm(o, k) {
        return k.map(v => o[v]);
    }
    const target = {
        a: 'string',
        b: 2
    };
    let EXM = exm(target, ['a']);
    EXM[0];
    // 索引类型和字符串索引签名
    {
        let exm;
        exm = '0';
        exm = 1;
        exm;
    }
}
// 映射类型 
{
    // base
    {
        const exmTarget = { a: 'exm', b: 1 };
        const exmTargetReadyonly = Object.assign({}, exmTarget);
        exmTargetReadyonly.a;
    }
    // common
    {
        function exm(o) {
            let obj = {};
            let _obj = {};
            // type K = (Extract<keyof T, string>)[]
            // let key: K = Object.keys(o) as K
            for (const key in o) {
                if (o.hasOwnProperty(key)) {
                    let _v = o[key];
                    obj = Object.defineProperty(_obj, key, {
                        get: function () {
                            return _v;
                        },
                        set: function (val) {
                            _v = val;
                        }
                    });
                }
            }
            return obj;
        }
        const o = exm({ z: '12' });
        o.z;
    }
    // 由映射类型进行推断
    {
        function exm(o) {
            let obj = {};
            for (const key in o) {
                if (o.hasOwnProperty(key)) {
                    obj[key] = o[key].get();
                }
            }
            return obj;
        }
        const o = exm((() => {
            let _v = '1';
            return Object.defineProperty({}, 'z', {
                get: function () {
                    return _v;
                },
                set: function (val) {
                    _v = val;
                }
            });
        })());
        o.z;
    }
}
// 预定义的有条件类型 ***
{
    // Exclude<T, U>  从T中剔除可以赋值给U的类型。
    // Extract<T, U> 提取T中可以赋值给U的类型。
    // NonNullable<T> 从T中剔除null和undefined。
    // InstanceType<T, U> 获取构造函数类型的实例类型。
    // Exclude<T, U>
    {
        /* type Exm = Exclude<'a' | 'b', string> // never
        type EXm = Exclude<'a' | 'b', 'a' | 'c'> // 'b'
        type X = 'a' | 'b'
        type M = 'a' | 'c'
        type EXM<X, M> = X extends M ? never: X
        type a = EXM<X, M> */
    }
    // Extract<T, U>
    {
        /* type Exm = Extract<'a' | 'b' | 1, string> // 'a' | 'b'
        type EXm = Extract<'a' | 'b', 'a' | 'c'> // 'a'
        type X = 'a' | 'b'
        type M = 'a' | 'c'
        type EXM<X, M> = X extends M ? X : never
        type a = EXM<X, M> */
    }
    // NonNullable<T>
    {
        /* type Exm = NonNullable<string | null | 1 | number>
        type X = string | null
        type EXM<T> = T extends null | undefined ? never : T
        type a = EXM<X>
        type X = string | null
        type M = number | null | '123'
        type EXMEX<T, U> = T extends null | undefined ? U extends null | undefined ? never : U : T
        type a = EXMEX<X, M> */
    }
    // ReturnType<T>
    {
        /* type Exm1 = ReturnType<() => string>
        type Exm2 = ReturnType<<T>() => T>
        type Exm3 = ReturnType<<T extends U, U extends number>() => T>
        type Exm4 = ReturnType<typeof f1>
        type Exm5 = ReturnType<any>
        type Exm6 = ReturnType<never>
        // type Exm7 = ReturnType<string> // error
        // type Exm8 = ReturnType<Function> // error
        type Exm9 = InstanceType<typeof C>
    
        function f1(s: string) {
          return { a: 1, b: s };
        }
        class C {
          x = 0;
          y = 0;
        } */
    }
    // InstanceType<T>
    {
        /* type Exm1 = InstanceType<typeof C>
        type Exm2 = InstanceType<any>
        type Exm3 = InstanceType<never>
        // type Exm4 = InstanceType<string>
        // type Exm5 = InstanceType<Function>
        class C {
          x = 0;
          y = 0;
        } */
    }
}
