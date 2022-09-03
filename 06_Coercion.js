// Coerción implícita
var a = 4 + "7"  // "47" : Concatena el valor, por el operador +
typeof a  // "string"
var b = 4 * "7"  // 28 : Convierte el valor a número, por el operador *.
typeof b  // "number"


// Coerción explícita
var c = 20
var d = c + ""
typeof d  // "string"
var e = String(c)  // Conversión adecuada de un number a un string.
typeof e  // "string"
var f = Number(e)  // Conversión adecuada de un string a un number.
typeof f  // "number"
