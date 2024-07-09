const addBtn = document.querySelector(".add");
const input = document.querySelector(".inp-group");


function removeInput(){
    this.parentElement.remove();
}

function addInput(){
    const name = document.createElement("input");
    name.type="text";
    name.placeholder = "Enter Reciver's Name";

    const address = document.createElement("input");
    address.type="text";
    address.placeholder = "Enter Full Address ";


    const btn=document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times";

    btn.addEventListener("click", removeInput);

    const flex=document.createElement("div");
    flex.className = "flex";
    
    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(address);
    flex.appendChild(btn);
}
addBtn.addEventListener("click", addInput);
