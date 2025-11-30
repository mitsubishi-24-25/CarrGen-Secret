const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser || currentUser.username !== "Chris") {
    window.location.href = "index.html";
}