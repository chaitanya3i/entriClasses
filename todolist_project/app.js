const task= document.getElementById("task")
const tasks=document.getElementById("tasks")
function add(){
    if(task.value===""){
        alert("you must write something")
    }else{
        let li=document.createElement("li");
        li.innerHTML= task.value;
        tasks.appendChild(li)
    }
    task.value="";
}