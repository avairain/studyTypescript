// common
{
  class Exm {
    a: string
    constructor(s: string) {
      this.a = s
    }
    b(): void { }
  }
  console.log(Exm)
}

// 继承
{
  class Target {
    a: string
    constructor(s: string) {
      this.a = s
    }
    b(): void { }
  }
  class Exm extends Target {
    constructor(s: string) {
      super(s)
    }
  }
  let exm = new Exm('a')
  exm.b()
}

// 公共，私有与受保护的修饰符
{
  // public  default 自由访问
  {
    class Exm {
      public a: string
      constructor(s: string) {
        this.a = s
      }
    }
    new Exm('exm').a
  }
  // private 不能在类外边访问
  {
    class Exm {
      private a: string
      constructor(s: string) {
        this.a = s
      }
      getA(): string {
        return this.a
      }
    }
    let exm = new Exm('exm')
    // exm.a // error
    exm.getA()
  }
  // protected  可以在派生类访问
  {
    class Target {
      protected a: string
      private _a: string
      protected constructor(s: string) {
        this._a = `_${s}`
        this.a = s
      }
      get_a(): string {
        return this._a
      }
    }
    class Exm extends Target {
      constructor(s: string) {
        super(s)
      }
      getA(): string {
        // this._a // error
        return this.a
      }
    }
    new Exm('exm')
    // new Target('exm') // error
  }
}

// readonly
{
  class Exm {
    readonly a: string
    constructor(s: string) {
      this.a = s
    }
  }
  let exm = new Exm(`exm`)
  // exm.a = '123' // error
  console.log(exm)
}

// 参数属性
{
  // interface o {
  //   a: string
  //   b: number
  // }
  class Exm {
    readonly a: string = 'a'
    constructor(readonly o: string) { }
  }
  let exm = new Exm('exm')
  console.log(exm)
  // exm.o = '232' //error
}

// 存取器
{
  class Exm {
    private _a: string = 'a'
    get a(): string {
      return this._a
    }
    set a(s: string) {
      this._a = s
    }
  }
  new Exm()
}

// 静态属性
{
  class Exm {
    static a: string = 'a'
  }
  new Exm()
}

// 抽象类
{
  abstract class Target {
    protected a:string
    protected constructor (s: string) {
      this.a = s
    }
  }
  class Exm extends Target {
    constructor(s: string) {
      super(s)
    }
    getA(): string {
      return this.a
    }
  }
  let exm = new Exm('exm')
  exm.getA()
  // new Target() // error
}

// 构造函数
{
  class Target {
    static a: string = 'str'
    public s: string
    constructor(s: string) {
      this.s = s
    }
  }
  let target: Target
  target = new Target('s')
  console.log(target.s)
  let Exm: typeof Target = Target
  Exm.a = 'ing'
  let exm: Target = new Exm('exm')
  console.log(exm.s, Exm.a)
}

// 把类当做接口
{
  class Target {
    a: string = 'a'
    b: string = 'b'
  }
  interface Exm extends Target {
    c: number
  }
  let exm: Exm = { a: 'A', b: 'B', c: 3}
  console.log(exm)
}
