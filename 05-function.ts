
// common
{
  function exm () {}
  console.log(exm)
}

// 函数类型
{
  type N = number
  // 定义类型
  { // 简
    function exm(a: N, b: N): N {
      return a + b
    }
    exm(1, 2)
  }
  { // 完整
    let exm: (x: N, y: N) => N
      = function (x: N, y: N): N {
        return x + y
      }
    exm(1, 2)
  }

  // 推断类型
  {
    let exm: (a: N, b: N) => N = function (x, y): N {
      return x + y
    }
    exm(1, 2)
  }
}

// 可以选参数和默认参数
{
  type N = number
  function exmForUndefined(a: N, b?: N): N {
    return b ? (a + b) : a
  }
  exmForUndefined(1, 2)
  exmForUndefined(1)
  // exmForUndefined(1, 2, 3) // error
  function exmForDefaultValue(a: N, b: N = 0): N {
    return a + b
  }
  exmForDefaultValue(1, 2)
  exmForDefaultValue(1)
  // exmForDefaultValue(1, 2, 3) // error
  function exmMustInputUndefined(a: N = 0, b: N): N {
    return a + b
  }
  exmMustInputUndefined(2, 1)
  exmMustInputUndefined(undefined, 1)
  // exmMustInputUndefined(1) // error
}

// 剩余参数
{
  type N = number
  function exm(a: N, ...b: N[]): N {
    return b.reduce((a: N, b: N): N => a + b) + a
  }
  exm(1, 2, 3)
  exm(1, 2)
  exm(1)
}

// this和箭头函数
{
  let exm: {a: string, b: () => () => string}
  exm = {
    a: 'a',
    b() {
      /* return function () {
        return this.a // error
      } */
      return () => this.a
    }
  }
  console.log(exm.b()())
}

// this 参数
{
  interface Exm {
    a: string
    b: string
    getAAndB(this: Exm): () => string
  }
  let exm: Exm = {
    a: 'str',
    b: 'ing',
    getAAndB(this: Exm) {
      return () => this.a + this.b
    }
  }
  console.log(exm.getAAndB()())
}

// this 参数在回调函数里
{
  interface Target {
      addClickListener(onclick: (this: void, e: Event) => void): void;
  }
  interface Result{
    a: string
    handler(e: Event): void
  }
  let target: Target = {
    addClickListener () {}
  }
  class ExmWithVoidThis implements Result {
    a = 'string'
    handler(this: void, e: Event) {
      // this.a = e.type // error
      console.log(e.type)
    }
  }
  class ExmWithTargetThis implements Result {
    a = 'string'
    handler(this: ExmWithTargetThis, e: Event) {
      this.a = e.type
      console.log(e.type)
    }
  }
  class ExmWithVoidThisAndUse implements Result {
    a = 'string'
    handler = (e: Event) => {
      this.a = e.type
      console.log(e.type)
    }
  }
  let exmWithVoidThis = new ExmWithVoidThis()
  let exmWithTargetThis = new ExmWithTargetThis()
  let exmWithVoidThisAndUse = new ExmWithVoidThisAndUse()
  target.addClickListener(exmWithVoidThis.handler)
  target.addClickListener(exmWithVoidThisAndUse.handler)
  console.log(exmWithTargetThis)
  // target.addClickListener(exmWithTargetThis.handler) // error
}

// 重载
{
  function exm(s: string): string
  function exm(o: {s: string}): string
  function exm(): string {
    let a = arguments[0]
    return a.s || a
  }
  exm('123')
  exm({s: '456'})
}
