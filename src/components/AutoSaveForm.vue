<script setup>
document.addEventListener("DOMContentLoaded", () => {
    const SAVING_MESSAGE = "Saving...";
    const SAVED_MESSAGE = "All changes saved.";

    document
        .querySelectorAll(".autosave-message")
        .forEach((el) => (el.textContent = SAVED_MESSAGE));

    document.querySelectorAll("[data-autosave-url]").forEach((inputField) => {
        inputField.addEventListener("change", async () => {
            const name = inputField.getAttribute("name");
            const value = inputField.value;
            const url = inputField.dataset.autosaveUrl;
            const autosaveMessageEl = inputField
                .closest(".container")
                .querySelector(".autosave-message");
            const formData = new FormData();

            formData.append(name, value);
            autosaveMessageEl.classList.add("autosave-message--saving");
            autosaveMessageEl.textContent = SAVING_MESSAGE;

            const response = await fetch(url, {
                method: "POST",
                body: formData
            });

            autosaveMessageEl.classList.remove("autosave-message--saving");
            autosaveMessageEl.textContent = SAVED_MESSAGE;
        });
    });
});
</script>

<template>
    <div class="container">
        <h1>Edit Profile</h1>
        <p>
            On this page you can customize your profile. Please remember any changes can take up to 2 hours to update
            publicly.
        </p>
        <label for="username">Username</label>
        <input type="text" name="username" id="username" value="dcode71" autofocus
            data-autosave-url="http://localhost:3000/save-profile">
        <label for="biography">Your Bio</label>
        <textarea name="biography" id="biography"
            data-autosave-url="http://localhost:3000/save-profile">I make web development videos on YouTube, and I think pure JavaScript is the best way to learn.</textarea>
        <div class="autosave-message"></div>
    </div>
</template>

<style>
body {
    background: #222222;
    margin: 0;
    padding: 24px;
}

.container {
    width: 500px;
    padding: 24px;
    background: #333333;
    border: 2px solid #444444;
    border-radius: 4px;
    font-family: "Readex Pro", sans-serif;
    font-weight: 300;
    color: #cccccc;
}

h1 {
    margin-top: 0;
    color: #ffffff;
}

p {
    line-height: 1.4;
    font-size: 14px;
}

label {
    font-weight: 500;
    color: #ffffff;
    display: block;
    margin-bottom: 14px;
}

input,
textarea {
    margin-bottom: 21px;
    width: 250px;
    padding: 16px;
    background: #444444;
    color: #ffffff;
    border-radius: 4px;
    border: 2px solid transparent;
    font-family: "Readex Pro", sans-serif;
    font-size: 16px;
    font-weight: 300;
    transition: background 0.25s, border 0.25s;
    outline: none;
}

textarea {
    width: 350px;
    height: 100px;
    resize: none;
}

input:hover,
textarea:hover {
    background: #555555;
}

input:focus,
textarea:focus {
    border-color: #009578;
    background: #555555;
}

.autosave-message {
    text-align: right;
    color: greenyellow;
}

.autosave-message--saving {
    color: #999999;
}
</style>