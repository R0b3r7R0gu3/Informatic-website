document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("commentForm");
    const commentSection = document.getElementById("commentSection");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let comment = document.getElementById("comment").value;

        if (username && comment) {
            let commentHTML = `<p><strong>${username}:</strong> ${comment}</p>`;
            commentSection.innerHTML += commentHTML;

            // Salva i commenti nel LocalStorage
            let comments = JSON.parse(localStorage.getItem("comments")) || [];
            comments.push({ username, comment });
            localStorage.setItem("comments", JSON.stringify(comments));

            // Pulisce il form
            form.reset();
        }
    });

    // Carica i commenti salvati
    let savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.forEach(c => {
        commentSection.innerHTML += `<p><strong>${c.username}:</strong> ${c.comment}</p>`;
    });
});
