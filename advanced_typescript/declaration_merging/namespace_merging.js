"use strict";
var MathUtil;
(function (MathUtil) {
    MathUtil.PI = 3.14;
})(MathUtil || (MathUtil = {}));
(function (MathUtil) {
    function square(x) {
        return x * x;
    }
    MathUtil.square = square;
})(MathUtil || (MathUtil = {}));
console.log(MathUtil.PI);
console.log(MathUtil.square(5));
