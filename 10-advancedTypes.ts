// 交叉类型 &
{
  function exmFn<A, B> (a: A, b: B): A & B {
    let result = <A & B>{ ...a, ...b }
    return result
  }
  class Exm1 {
    a: string = 'string'
  }
  interface Target {
    b(): void
  }
  class Exm2 implements Target {
    b () {}
  }
  let exm = exmFn<Exm1, Exm2>(new Exm1(), new Exm2())
  exm.b()
}

// 联合类型 |
{
  function exm(a: string | number): void {
    console.log(a)
  }
  exm(1)

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
  function exm(a: string, b: string | number): string {
    if (typeof b === 'string') return a + b
    if (typeof b === 'number') return Array(b + 1).join('>') + a
    throw new Error(`Expected string or number, got '${b}'.`)
  }
  exm('exm', 1)
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
    type A = string
    type AA = () => string
    type B = A | AA
    function exm(a: B): A {
      return  typeof a === 'string' ? a : a()
    }
    exm('a')
  }
  // 泛型
  {
    type A<T> = {
      a: T
    }
    let exm: A<string>
    exm = { a: 'exm'}
    exm.a


    /* type Recursive<T> = T & { next: Recursive<T> }
    interface P {
      name: string
    }
    let exm1: Recursive<P> // 定义使用
    exm1.next.next.next.name */
  }
}

// 接口 & 类型别名
// 在编译器中将鼠标悬停在 interfaced上，显示它返回的是 Interface，但悬停在 b 上时，显示的却是对象字面量类型
/* { */
type A = { num: number }
interface Inter {
  num: number
}
declare function A(a: A): A;
declare function Inter(inter: Inter): Inter;
/* } */

// 字符串字面量类型
{
  type Target = 'a' | 'b' | 'c'
  function exm(a: Target): string {
    return a + 6
  }
  exm('a')
  // exm(5) // error
  /* function createElement1(tagName: "img"): HTMLImageElement;
  function createElement1(tagName: "input"): HTMLInputElement;
  // ... more overloads ...
  function createElement1(tagName: string): HTMLImageElement | HTMLInputElement { // must return something
  } */
}

// 数字字面量类型
{
  type Target = 1 | 2| 3
  function exm(a: Target): string {
    return a + '6'
  }
  /* 
  function exm(a: 1 | 2 | 3): string {
    return a + '6'
  }
  */
  exm(1)
}

// 枚举成员类型

// 可辨识联合
{
  
}
