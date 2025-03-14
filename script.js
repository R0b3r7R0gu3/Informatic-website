document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
    showPage("home"); // Mostra la home all'avvio
});

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

function handleLogin(event) {
    event.preventDefault();
    document.getElementById("loginResponse").classList.remove("hidden");
    setTimeout(() => {
        showPage("home");
    }, 1000);
}

function submitContact(event) {
    event.preventDefault();
    document.getElementById("contactResponse").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("contactResponse").classList.add("hidden");
    }, 3000);
}

function submitForumMessage() {
    let input = document.getElementById("forumInput");
    let forumMessages = document.getElementById("forumMessages");
    if (input.value.trim() !== "") {
        let message = document.createElement("p");
        message.textContent = input.value;
        forumMessages.appendChild(message);
        input.value = "";
    }
}
