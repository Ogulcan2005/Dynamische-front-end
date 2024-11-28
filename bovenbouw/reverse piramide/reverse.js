// var cijfers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var oplopen = document.getElementById("piramide");

// for(let i = cijfers.length - 1; i >= 0; i--){
//     oplopen.append(document.createElement('br'));
//     for(let x = 0; x <= i; x++){
//         oplopen.append(cijfers[x]);
//     }
// }


//andere versie van mijn code

var cijfers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var oplopen = document.getElementById("piramide");

for(let i = cijfers.length; i > 0; i--){
    oplopen.append(document.createElement('br'));
    oplopen.append(cijfers.slice(0, i).join(''));
}