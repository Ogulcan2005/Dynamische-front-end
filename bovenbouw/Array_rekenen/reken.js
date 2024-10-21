var arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var optellen = document.getElementById("optellen");
var aftrekken = document.getElementById("aftrekken");
var multiply = document.getElementById("multiply");
var delen = document.getElementById("delen");

for (let i = 0; i < arrayEen.length; i++) {
    var plus = arrayEen[i] + arrayTwee[i];
    optellen.append(arrayEen[i] + " + " + arrayTwee[i] + " = " + plus.toString());
    optellen.append(document.createElement('br'));

    var min = arrayTwee[i] - arrayEen[i];
    aftrekken.append(arrayTwee[i] + " - " + arrayEen[i] + " = " + min.toString());
    aftrekken.append(document.createElement('br'));    

    var keer = arrayEen[i] * arrayTwee[i];
    multiply.append(arrayEen[i] + " * " + arrayTwee[i] + " = " + keer.toString());
    multiply.append(document.createElement('br')); 

    var deel = arrayTwee[i] / arrayEen[i];
    delen.append(arrayTwee[i] + " : " + arrayEen[i] + " = " + deel.toString());
    delen.append(document.createElement('br')); 
}
