const input= document.getElementById("todoInput");
const list = document.getElementById("list");

function addtask(){
if(input.value===''){
    alert("enter madi saarr");
}
else{
    let li=document.createElement("li");
    li.innerHTML = input.value;
    listItems.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML="&#10006";
    li.appendChild(span);
    
}
input.value=''
savedata();
}

