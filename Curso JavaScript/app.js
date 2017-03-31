var s = "audacity";
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    return s;
};
//Como a audácia tem mais de Udacity nela, podemos usar .slice () para copiar a parte que precisamos.
// Did your code work? The line below will tell you!
console.log(udacityizer(s));
29 03 2017 18:26:36.370:
 with unlimited concurrency
 29 03 2017 18:26:36.612:
LOG: 'audacity'

/*O objetivo deste código, é retornar o seguinte erro:
31 03 2017 20:03:35.092:
with unlimited concurrency
31 03 2017 20:03:35.334:
ERROR
SyntaxError: Unexpected number '03'
at app.js:14
*/