
const kelvin = 294;
const Celcius = Kelvin - 273;
let fahrenheit = Celcius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is ${fahrenheit}  degrees fahrenheit");