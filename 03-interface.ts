// common
{
  interface Common {
    a: string
  }
  let exm: Common
  exm = { a: 'string' }
  console.log(exm)
}

// 可选属性
{
  interface OptionalAttribute {
    a: string
    b?: number
    c?: boolean
  }
  let exmA: OptionalAttribute = { a: 'string' }
  console.log(exmA)
}

// 只读属性
{
  interface ReadonlyAttributte {
    readonly a: string
    b: string
  }
  let exm: ReadonlyAttributte = { a: 'readonly', b: 'str'}
  exm.b += 'ing'
  console.log(exm)
}

// 额外的属性检查
{
  interface OtherAttributte {
    a: string
    [propName: number]: any
    // [propName: string]: any
  }
  let exm: OtherAttributte
  exm = { a: 'string' , 2: false}
  console.log(exm)
}

// 函数类型
{
  interface FunctionInterface {
    (a: number, b: number): void
  }
  let exm: FunctionInterface
  exm = (x, y) => {
    console.log(x + y)
  }
  exm(1, 2)
}

// 可索引的类型
{
  interface IndexInterface {
    [index: number]: string
  }
  let exmArr: IndexInterface
  exmArr = ['str']
  exmArr[1] = '213'
  let exmString: IndexInterface
  exmString = exmArr[0]
  console.log(exmString[2])
}

// 类类型
{
  // common
  {
    interface ClassInterface {
      a: string
      fn(): void
    }
    class exm implements ClassInterface {
      public a = 'str'
      constructor () {}
      fn () {}
    }
    new exm()
  }

  // 类静态部分与实例部分的区别
  {
    // 不会检测类的静态部分
    /* interface ClockConstructor {
      new (hour: number, minute: number): ClockInterface;
    }
    class Clock implements ClockConstructor {
      constructor(h: number, m: number) {
        console.log(h + m)
      }
    }
    new Clock(1, 2) */ // error
    interface ClockInterface {
      tick(): void;
    }
    interface ClockConstructor {
      new (hour: number, minute: number): ClockInterface;
    }
    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    }
    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) {
          console.log(h + m)
        }
        tick() {
          console.log("beep beep");
        }
    }
    class AnalogClock implements ClockInterface {
        constructor(h: number, m: number) {
          console.log(h + m)
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
  interface ExtendsInterface {
    a: string
  }
  interface Extender extends ExtendsInterface {
    b: string
  }
  let exm: Extender
  exm = { a: 'str', b: 'ing'}
  let exmOther = <Extender>{}
  exmOther = { a: 'str', b: 'ing'}
  console.log(exm)
  console.log(exmOther)
}

// 混合类型
{
  interface MixinsInterface {
    (n: number): void
    a: string
    fn(): void
  }
  function Exm(): MixinsInterface {
    const fn: MixinsInterface = (n) => {
      console.log(n)
    }
    fn.a = 'str'
    fn.fn = ():void => {}
    return fn
  }
  let t = Exm()
  t(1)
}

// 接口继承类
{
  class Target {
    a: string = '123'
  }
  interface InterfaceExtendsClass extends Target {
    b: string
  }
  class ExmExtendsInterface implements InterfaceExtendsClass {
    a = '456'
    b = 'b'
  }
  class ExmExtendsClassAndInterface extends Target implements InterfaceExtendsClass {
    b = 'ExmExtendsClass'
  }
  class ExmExtendsClass extends Target {
    c: string = '789'
  }
  class ExmExtendsInterface1 extends ExmExtendsInterface {

  }
  console.log(ExmExtendsClassAndInterface, ExmExtendsClass, ExmExtendsInterface1)
}
