

// // /////////////////  HOME WORK   //////

// // //// masala 1


// var a = 8;
// var p = 4 * a;
// console.log(p)


// ////// masala 2

// var a = 7;
// var s = a ** 2;
// console.log(s)

// /////// masala 3 

// var a = 4;
// var b = 6;
// var s = a * b;
// var p = 2 * (a + b);
// console.log(s)
// console.log(p)

// ////////// masala 4 

// var d = 4;
// var p = 3.14;
// var l = p * 4;
// console.log(l)

// //////  masala 5

// var a = 3;
// var v = a ** 3;
// var s = 6 * a ** 2;
// console.log(v)
// console.log(s)

// /////// masala 6

// var a = 6;
// var b = 12;
// var c = 18;
// var v = a * b * c;
// var s = 2 * (a * b + b * c + a * c);
// console.log(v)
// console.log(s)

// //////// masala 7

// var p = 3.14;
// var r = 4;
// var l = 2 * p * r;
// var s = p * r ** 2;
// console.log(l)
// console.log(s)

// /////// masala 8 

// var a = 4;
// var b = 8;
// var c = (a + b) / 2;
// console.log(c)

// ////// masala 9 

// var a = 6;
// var b = 10;
// var og = (a + b) ** 0.5;
// console.log(og)

// /////// masala 10

// var a = 4;
// var b = 7;
// var p = a + b;
// var k = a * b;
// var kv = (a + b) ** 2;
// console.log(p)
// console.log(k)
// console.log(kv)

// /////// masala 11






// //////////// masala 12

// var a = 4;
// var b = 3;
// var c = (a ** 2 + b ** 2) ** 0.5;
// var P = a + b + c;
// console.log(P);

// ////// masala 13

// var r1 = 25;
// var r2 = 20;
// var p = 3.14;
// var s1 = p * r1;
// var s2 = p * r2;
// var s3 = p * (r1 - r2);
// console.log(s1)
// console.log(s2)
// console.log(s3)

// ////////////// masala 14

// var p = 3.14;
// var r = 7;
// var l = 2 * p * r;
// var s = p * (r ** 2);
// console.log(l)
// console.log(s)

// /////// masala 15 

// var p = 3.14;
// var r = 8;
// var l = 2 * p * r;
// var s = p * r ** 2;
// console.log(l)
// console.log(s)

// ///////// masala 16  

// var x1 = 40;
// var x2 = 70;
// var m = x2 - x1;
// console.log(m) 

// /////// masala 17

// var a = 13;
// var b = 26;
// var c = 34;
// var ac = c - a;
// var bc = c - b;
// var j = ac + bc;
// console.log(j) 

// //////// masala 18

// var a = 9;
// var b = 17;
// var c = 26;
// var ac = c - a;
// var bc = c - b;
// var k = ac * bc;
// console.log(k)

// /////////// masala 19 

// var a = 13;
// var b = 23;
// var p = 2 * (a + b);
// var s = a * b;
// console.log(p)
// console.log(s)

// ///////// masala 20 

// var x1 = 16;
// var x2 = 23;
// var y1 = 17;
// var y2 = 25;
// var m = ((x2 - x1) + (y2 - y1) ** 0.5);
// console.log(m)

// ///// masala 21

// var a = 8;
// var b = 13;
// var c = 11;
// var p = (a + b + c) / 2;
// var s = ((p * (p - a) * (p - b) * (p - c)) ** 0.5);
// console.log(s);

// //////// masala 22

// var a = 15;
// var b = 30;
// var c = a;
// var a = b;
// var b = c;
// console.log(a)
// console.log(b)



/////////// HOME WORK 2////////////


// Function for Method pow

function pow(a, b) {
    return a ** b;
}

console.log(pow(8, 4));

// Function for Method sqrt

function sqrt(a) {
    return a ** 0.5;
}

console.log(sqrt(41));

// Function for Method cbrt

function cbrt(a) {
  return (a ** (3/6));
}

 console.log(cbrt(17));

// Function for Method abs

function abs(a) {
    a >= 0 && console.log(a);
    
    a < 0 && console.log(-a);
}

abs(-321)

// Function for Method round

function round(a) {
   return (a).toFixed(0);

}
console.log(round(3.5))

// Function for Method floor 

function floor(a) {
    return parseInt(a);
}
console.log(floor(4.9))

// Function for Method floor2 

function floor(a) {
  return (a - 0.5).toFixed(0);
}
console.log(floor(4.001));



// Function for Method ceil

function ceil(a) {
    return (a + 0.5).toFixed(0);
}
console.log(ceil(2.001));