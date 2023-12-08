function newTodo() {
    var todo = prompt("Enter new todo");
    if (todo != null) {
        var div = document.createElement("div");
        div.innerHTML = todo;
        // div.setAttribute("onclick", "deleteTodo()");
        div.addEventListener("click", deleteTodo); // Use addEventListener
        document.getElementById("ft_list").prepend(div);
    }
    updateCookies();
}

function deleteTodo(event) {
    if (confirm("Are you sure you want to delete this todo?")) {
        event.currentTarget.remove()
        updateCookies();
    }
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookies() {
    let todos = getCookie("todos");
    if (todos !== "") {
        todos = JSON.parse(todos);
        for (let i = 0; i < todos.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = todos[i];
            div.addEventListener("click", deleteTodo); // Use addEventListener
            document.getElementById("ft_list").prepend(div);
        }
    }
}

function updateCookies() {
    let todos = [];
    let divs = document.getElementById("ft_list").children;
    for (let i = 0; i < divs.length; i++) {
        todos.push(divs[i].innerHTML);
    }
    setCookie("todos", JSON.stringify(todos), 1);
}