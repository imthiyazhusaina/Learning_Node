const add = (x,y) => x+y;
const sub = (x,y) => x-y;
const mul = (x,y) => x*y;
const div = (x,y) => x/y;
const mod = (x,y) => x%y;
const PI = 3.14;
const square = (x) => x*x;
const qube = (x) => x*x*x;

//exports.
//type 1:
module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
module.exports.mod = mod;
module.exports.PI = PI;
module.exports.squ = square;
module.exports.qube = qube;

//type 2:
const math = {
    add:add,
    sub:sub,
    mul:mul,
    div:div,
    mod:mod,
    PI:PI,
    square:square,
    qube:qube
}
module.exports = math;

//type 3:
module.exports.areaOfSquare = (x) => 4*x;