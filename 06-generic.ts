// common
{
  function exm<T>(a: T): T {
    return a
  }
  exm<string>('123')
  exm<number>(123)
}

// 使用泛型变量
{
  function exm<T>(a: T[]): T[] {
    console.log(a.length)
    return a
  }
  exm<string>(['123'])
  exm<number>([123])
  exm<number[]>([[1]])
}

// 泛型类型
{
  interface Target {
    <T>(a: T): T
  }
  let exm: <T>(a: T) => T
  exm = <T>(a: T):T => {
    return a  
  }
  let exmForInterface: Target = exm
  exm<string>('123')
  exm<number>(123)
  exm<string[]>(['123'])
  exmForInterface<string>('123')
  exmForInterface<number>(123)
  exmForInterface<string[]>(['123'])
}

// 泛型类
{
  class Exm<T> {
    a: T
    constructor({a ,...b}: {a: T, [propName: string]: T}) {
      console.log(b)
      this.a = a
    }
    b:(x: T, y: T) => T = (x, y) => {
      return x || y
    }
  }
  let exm = new Exm<string>({a: 'string'})
  exm.b('1', 'c')
}

// 泛型约束
{
  interface Target {
    a: string
  }
  function exm<T extends Target>(o: T): T {
    console.log(o.a)
    o.a = 'str'
    return o
  }
  exm({a: 'string'})
}

// 在泛型约束中使用类型参数
{
  interface Exm {
    a: number
    b: number
  }
  type Key = keyof Exm
  function getProperty<T extends Exm, K extends Key>(obj: T, key: K): any {
    return obj[key]
  }
  let x: Exm = { a: 1, b: 2 }
  getProperty<Exm, Key>(x, 'a'); // okay
  // getProperty(x, 2);
}

// 在泛型中使用类类型
{
  class Target {
    a: string = 'Target'
  }
  class Tar extends Target {
    constructor() {
      super()
      this.a = 'Tar'
    }
    b: () => Tar = () => {
      console.log(this.a)
      return this
    }
  }
  function exm<T extends Target>(c: new() => T): T  {
    return new c()
  }
  exm(Tar).b().a
}
