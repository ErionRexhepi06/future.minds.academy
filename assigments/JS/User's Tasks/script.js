function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let task = taskInput.value.trim();
  
    if (task !== "") {
      let listItem = document.createElement("li");
      listItem.textContent = task;
  
      taskList.appendChild(listItem);
  
      taskInput.value = "";
  
      setTimeout(addTask, 0);
    }
  }
  function displayDate() {
    let dateElement = document.getElementById("date");
    let currentDate = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = currentDate.toLocaleDateString('en-US', options);
    dateElement.textContent = "Date: " + formattedDate;
  }
  
  window.onload = function() {
    displayDate();
  };
  