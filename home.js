var addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var deadline = document.getElementById("deadline").value;
    console.log(deadline);
    console.log(content);
    console.log(title);
    console.log(localStorage.getItem("hello"));
});
