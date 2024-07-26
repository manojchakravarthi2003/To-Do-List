const input = document.getElementById("todoInput");
const listItems = document.getElementById("list");

function addtask(){
    if (input.value ===''){
        alert("enadru enter mado gubal");
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

listItems.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data",listItems.innerHTML);
}

function showlist(){
    listItems.innerHTML=localStorage.getItem("data");
}
showlist();