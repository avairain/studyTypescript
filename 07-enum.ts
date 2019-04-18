// common
{
  enum Exm {
    a,
    b,
    c
  }
  console.log(Exm)
}

// 数字
{
  enum Exm {
    a = 2,
    b,
    c = 1,
    d
  }
  console.log(Exm)
}

// 字符串枚举
{
  enum Exm {
    a = 'A',
    b = 'B',
    // c  // error
  }
  console.log(Exm)
}

// 异构枚举
{
  enum Exm {
    a,
    b = 'B'
  }
  console.log(Exm)
}

// 计算的和常量成员
{
  enum Exm {
    a,
    b    = 1 << 1,
    c   = 1 << 2,
    d  = b | c,
    e = "123".length
  }
  console.log(Exm)
}

// 联合枚举与枚举成员的类型
{
  enum Exm {
    Target1,
    Target2
  }
  interface Target1 {
    a: Exm.Target1
    b: number
  }
  interface Target2 {
    x: Exm.Target2
    y: string
  }
  let exm1: Target1
  let exm2: Target2
  exm1 = {
    a: Exm.Target1,
    b: 5
  }
  exm2 = {
    x: Exm.Target2,
    y: 'y'
  }
  console.log(exm1, exm2)

  function f(x: Exm):void {
    /* if(x !== Exm.Target1 || x !== Exm.Target2) {
    } */ // error
    console.log(x)
  }
  f(4)
}

// 运行时的枚举
{
  enum Exm {
    x, y, z
  }
  function f(o: { x: number }): number {
    return o.x
  }
  f(Exm)
}

// 反向映射
{
  enum Exm {
    a
  }
  let a: Exm.a = 1
  console.log(Exm[a])
}

// const 枚举
{
  const enum Exm {
    a = 1,
    b = a * 2,
    c
  }
  console.log([Exm.a, Exm.b, Exm.c])
}

// 外部枚举
declare enum Exm {
  a = 1,
  b,
  c = 4
}
