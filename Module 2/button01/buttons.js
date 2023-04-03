function handel_button(event){
    let waarde = event.target.innerHTML;
    waarde++;
    console.log(waarde);
    event.target.innerHTML = waarde.toString();

}

function imagechange1(event){
    var img = document.getElementById('image');
    var img2 = document.getElementById('image2')
    img.src = "/Module 2/wihn-template/buttons-template/images/bg1.jpg";
    img2.src = "/Module 2/wihn-template/buttons-template/images/1.jpg"
    
    handel_button(event)
}
function imagechange2(event){
    img = document.getElementById('image');
    img2 = document.getElementById('image2')
    img.src = "/Module 2/wihn-template/buttons-template/images/bg2.jpg";
    img2.src = "/Module 2/wihn-template/buttons-template/images/2.jpg"
    handel_button(event)
}
function imagechange3(event){
    img = document.getElementById('image');
    img2 = document.getElementById('image2')
    img.src = "/Module 2/wihn-template/buttons-template/images/bg3.jpg";
    img2.src = "/Module 2/wihn-template/buttons-template/images/3.jpg"
    handel_button(event)
}

first.onclick = imagechange1
second.onclick = imagechange2
third.onclick = imagechange3