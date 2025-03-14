document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

function handleLogin(event) {
    event.preventDefault();
    document.getElementById("loginResponse").classList.remove("hidden");
    showPage("home");
}

function submitContact(event) {
    event.preventDefault();
    document.getElementById("contactResponse").classList.remove("hidden");
}

function submitForumMessage() {
    let input = document.getElementById("forumInput");
    if (input.value.trim() !== "") {
        let message = document.createElement("p");
        message.textContent = input.value;
        document.getElementById("forumMessages").appendChild(message);
        input.value = "";
    }
}
