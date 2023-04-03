function handel_button(event){
    let waarde = event.target.innerHTML;
    waarde++;
    console.log(waarde);
    event.target.innerHTML = waarde.toString();
}




first.onclick = handel_button
second.onclick = handel_button
third.onclick = handel_button