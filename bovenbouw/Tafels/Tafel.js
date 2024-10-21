var multiply = document.getElementById("multiply");
var multiply2 = document.getElementById("multiply2");
var multiply3 = document.getElementById("multiply3");
var multiply4 = document.getElementById("multiply4");
var arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < arrayEen.length; i++) {
    var keer = arrayEen[i] * 2;
    multiply.append(arrayEen[i] + " * " + "2" + " = " + keer.toString());
    multiply.append(document.createElement('br')); 
    
    var keer = arrayEen[i] * 4;
    multiply2.append(arrayEen[i] + " * " + "4" + " = " + keer.toString());
    multiply2.append(document.createElement('br')); 
    
    var keer = arrayEen[i] * 6;
    multiply3.append(arrayEen[i] + " * " + "6" + " = " + keer.toString());
    multiply3.append(document.createElement('br')); 
    
    var keer = arrayEen[i] * 8;
    multiply4.append(arrayEen[i] + " * " + "8" + " = " + keer.toString());
    multiply4.append(document.createElement('br')); 
}