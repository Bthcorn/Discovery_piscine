

// function newTodo() {
//     var todo = prompt("Enter new todo");
//     if (todo != null) {
//         var div = document.createElement("div");
//         div.innerHTML = todo;
//         // div.setAttribute("onclick", "deleteTodo()");
//         div.addEventListener("click", deleteTodo); // Use addEventListener
//         document.getElementById("ft_list").prepend(div);
//     }
//     updateCookies();
// }

// function deleteTodo(event) {
//     if (confirm("Are you sure you want to delete this todo?")) {
//         event.currentTarget.remove()
//         updateCookies();
//     }
// }


// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
// }

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function checkCookies() {
//     let todos = getCookie("todos");
//     if (todos !== "") {
//         todos = JSON.parse(todos);
//         for (let i = 0; i < todos.length; i++) {
//             var div = document.createElement("div");
//             div.innerHTML = todos[i];
//             div.addEventListener("click", deleteTodo); // Use addEventListener
//             document.getElementById("ft_list").prepend(div);
//         }
//     }
// }

// function updateCookies() {
//     let todos = [];
//     let divs = document.getElementById("ft_list").children;
//     for (let i = 0; i < divs.length; i++) {
    //         todos.push(divs[i].innerHTML);
    //     }
    //     setCookie("todos", JSON.stringify(todos), 1);
    // }

$(document).ready(function() {
    $("#btn").click(function() {
        var todo = prompt("Enter new todo");
        if (todo != null) {
            var div = $("<div></div>").text(todo);
            // set id to todo
            div.attr("id", todo);
            // div.click(deleteTodo);
            $("#ft_list").prepend(div);
            let todos = [];
            let divs = $("#ft_list").children();
            for (let i = 0; i < divs.length; i++) {
                todos.push(divs[i].innerHTML);
            }
            let json = JSON.stringify(todos);
            $.cookie("todos", json, {expires: 1 , path: '/'}); // Convert todos to JSON string
        }

    });

    $("#ft_list").on("click", "div", function() {
        if (confirm("Are you sure you want to delete this todo?")) {
            $(this).remove();
            let todos = [];
            let divs = $("#ft_list").children();
            for (let i = 0; i < divs.length; i++) {
                todos.push(divs[i].innerHTML);
            }
            let json = JSON.stringify(todos);
            $.cookie("todos", json, {expires: 1, path: '/'});
        }

    });

    $(window).on("load", function () {
        let todos = $.cookie("todos");
        if (todos != null) { // Use != instead of !==
            todos = JSON.parse(todos);
            for (let i = 0; i < todos.length; i++) {
                var div = $("<div></div>").text(todos[i]);
                div.attr("id", todos[i]);
                $("#ft_list").prepend(div);
            }
        }
    });

});