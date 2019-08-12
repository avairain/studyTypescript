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
  interface A {
    kind: 'a'
    a: string
  }
  interface B {
    kind: 'b'
    b: string
  }
  interface C {
    kind: 'c'
    c: string
  }
  type T = A | B | C
  function exm(a: T) {
    switch (a.kind) {
      case 'a': return a.a
      case 'b': return a.b
      case 'c': return a.c
    }
  }
  exm({kind: 'a', a: 'a'})
}

// 完整性检查
{
  interface A {
    kind: 'a'
    a: string
  }
  interface B {
    kind: 'b'
    b: string
  }
  interface C {
    kind: 'c'
    c: string
  }
  interface D {
    kind: 'd'
    d: string
  }
  type T = A | B | C | D
  function exm(a: T): string {
    switch (a.kind) {
      case 'a': return a.a
      case 'b': return a.b
      case 'c': return a.c
      default: return assertNever<D>(a)
    }
  }
  function assertNever<D>(x: D): never {
    throw new Error("Unexpected object: " + x);
  }
  exm({kind: 'a', a: 'a'})
}

// 多态的 this 类型
{
  class Target {
    constructor(protected n: number = 0) {}
    getN(): number {
      return this.n
    }
    add(n: number): this {
      this.n +=n
      return this
    }
    minus(n: number): this {
      this.n -= n
      return this
    }
  }
  class Exm extends Target {
    constructor(n: number = 0) {
      super(n)
    }
    multiply(n: number) {
      this.n *= n
      return this
    }
  }
  let ten = new Exm(10)
  ten = ten
    .add(1)
    .multiply(2)
    ten.getN()
}

// 索引类型
{
  function exm<T, K extends keyof T>(o: T, k: K[]): T[K][] {
    return k.map(v => o[v])
  }
  interface Target {
    a: string
    b: number
  }
  const target: Target = {
    a: 'string',
    b: 2
  }
  let EXM: string[] = exm<Target, 'a'>(target, ['a'])
  EXM[0]

  // 索引类型和字符串索引签名
  {
    interface Target<T> {
      [key: string]: T
    }
    type Str = keyof Target<number>
    type Num = Target<number>['a']
    let exm: Str | Num
    exm = '0'
    exm = 1
    exm
  }
}

// 映射类型 
{
  interface Exm {
    a: string
    b: number
  }

  // base
  {
    type Target<T> = {
      [p in keyof T]: T[p]
    }
    type TargetReadyonly<T> = {
      readonly [p in keyof T]: T[p]
    }
    type ExmTarget = Target<Exm>
    type ExmTargetReadyonly = TargetReadyonly<Exm>
    const exmTarget: ExmTarget = { a: 'exm', b: 1}
    const exmTargetReadyonly: ExmTargetReadyonly = { ... exmTarget }
    exmTargetReadyonly.a
  }

  // common
  {
    type Source<T> = {
      get(): T
      set(v: T): void
    }
    type Target<T> = {
      [P in keyof T]: Source<T[P]>
    }
    interface Exm {
      z: string
      // [propName: string]: string
    }
    function exm<T extends Object>(o: T): Target<T> {
      let obj = {} as Target<T>
      let _obj = {};
      // type K = (Extract<keyof T, string>)[]
      // let key: K = Object.keys(o) as K
      for (const key in o) {
        if (o.hasOwnProperty(key)) {
          let _v: T[Extract<keyof T, string>] = o[key]
          obj = Object.defineProperty(_obj, key, {
            get: function(): any {
              return _v
            },
            set: function(val: T[Extract<keyof T, string>]): void {
              _v = val
            }
          })
        }
      }
      return obj
    }
    const o = exm<Exm>({z: '12'})
    o.z
  }

  // 由映射类型进行推断
  {
    type Source<T> = {
      get(): T
      set(v: T): void
    }
    type Target<T> = {
      [P in keyof T]: Source<T[P]>
    }
    interface Exm {
        z: string
      // [propName: string]: string
    }
    function exm<T>(o: Target<T>): T {
      let obj = {} as T
      for (const key in o) {
        if (o.hasOwnProperty(key)) {
          obj[key] = o[key].get()
        }
      }
      return obj
    }
    const o = exm<Exm>(
      (() => {
        let _v = '1'
        return Object.defineProperty({}, 'z', {
          get: function(): any {
            return _v
          },
          set: function(val: string): void {
            _v = val
          }
        })
      })()
    )
    o.z
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
