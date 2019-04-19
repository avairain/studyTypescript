// common
{
  let n = 3
  // n = 'string' // error
  console.log(n)
  let arr = [0, 1, null]
  arr.push(3)
  // arr.push('1') // error

  class Target {
    m: string
    constructor(m: string = 'Target') {
      this.m = m
    }
  }
  class Exm1 extends Target {
    e: number = 1
    constructor(m: string) {
      super(m)
    }
  }
  class Exm2 extends Target {
    x: string = 'exm2'
    constructor(m: string) {
      super(m)
    }
  }
  class Exm3 extends Target {
    b: boolean = false
    constructor(m: string) {
      super(m)
    }
  }
  let exm: Target[] = [new Exm1('exm1'), new Exm2(`exm2`), new Exm3('exm3')]
  exm[0].m // error
  // exm[0].e // error
}

// 上下文类型
{
  window.onmousedown = function (e) {
    console.log(e.button)
  }
}
