"use strict";
// common
{
    let n = 3;
    // n = 'string' // error
    console.log(n);
    let arr = [0, 1, null];
    arr.push(3);
    // arr.push('1') // error
    class Target {
        constructor(m = 'Target') {
            this.m = m;
        }
    }
    class Exm1 extends Target {
        constructor(m) {
            super(m);
            this.e = 1;
        }
    }
    class Exm2 extends Target {
        constructor(m) {
            super(m);
            this.x = 'exm2';
        }
    }
    class Exm3 extends Target {
        constructor(m) {
            super(m);
            this.b = false;
        }
    }
    let exm = [new Exm1('exm1'), new Exm2(`exm2`), new Exm3('exm3')];
    exm[0].m; // error
    // exm[0].e // error
}
// 上下文类型
{
    window.onmousedown = function (e) {
        console.log(e.button);
    };
}
