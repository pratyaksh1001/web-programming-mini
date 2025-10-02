var addButton = document.getElementById("add-button");

var tasks = JSON.parse(localStorage.getItem("tasklist"));
console.log(tasks);

class Task {
    Task(title, content, date, deadline) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.done = false;
        this.deadline = deadline;
    }
}

addButton.addEventListener("click", () => {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var deadline = document.getElementById("deadline").value;
    console.log(deadline);
    console.log(content);
    console.log(title);
    console.log(localStorage.getItem("hello"));
    var newTask = new Task(title, content, new Date().getFullYear(), deadline);
    tasks.append(newTask);
    console.log(tasks);
    localStorage.setItem("tasklist", JSON.stringify(tasks));
});
