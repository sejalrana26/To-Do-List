 const inputBox = document.getElementById("input-box");
 const listContainer = document.getElementById("list-container");

 function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li"); //creating html tag li
        li.innerHTML = inputBox.value; //adding input value in li
        listContainer.appendChild(li); //appending li in list-container
        let span = document.createElement("span"); //adding x(span) to delete the task
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //removing text from inputBox after adding in li
    saveData();
 }

 listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 },false);

 function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
 }

 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();