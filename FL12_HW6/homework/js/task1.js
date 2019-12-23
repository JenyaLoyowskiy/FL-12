// Your code goes here

let
  a = parseFloat(prompt('enter a')),
  b = parseFloat(prompt('enter b')),
  c = parseFloat(prompt('enter c'));

if (isNaN(a)||isNaN(b)||isNaN(c)||a==0) {
  console.log('Invalid input data');
}else {
  let d = Math.pow(b,2) - 4*a*c;
  if (d < 0) {
    console.log('There is no solution');
  }else {
      let x1 = (-b + Math.sqrt(d))/(2*a),
          x2 = (-b - Math.sqrt(d))/(2*a);
      x1 == x2 ? console.log('x = ' + x1) : console.log('x1 = ' + x1 + ', x2 = ' + x2);
  }
}
