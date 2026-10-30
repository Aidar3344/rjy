const API = "https://jsonplaceholder.typicode.com/users";

const usersList = document.getElementById("usersList");
const loadBtn = document.getElementById("loadBtn");
const message = document.getElementById("message");

async function loadUsers() {
    loadBtn.disabled = true;
    message.textContent = "Загрузка...";
    message.className = "";
    usersList.innerHTML = "";

    try {
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error("Ошибка загрузки");
        }

        const users = await response.json();

        users.forEach(user => {
            const card = document.createElement("div");
            card.className = "user-card";

            const avatar = document.createElement("div");
            avatar.className = "avatar";
            avatar.textContent = user.name
                .split(" ")
                .map(word => word[0])
                .slice(0, 2)
                .join("");

            const info = document.createElement("div");
            info.className = "user-info";

            const name = document.createElement("h3");
            name.textContent = user.name;

            const email = document.createElement("p");
            email.append("Email: ");

            const link = document.createElement("a");
            link.href = "mailto:" + user.email;
            link.textContent = user.email;
            email.append(link);

            const phone = document.createElement("p");
            phone.textContent = "Phone: " + user.phone;

            const company = document.createElement("p");
            company.textContent =
                "Company: " + user.company.name;

            info.append(name, email, phone, company);
            card.append(avatar, info);

            usersList.appendChild(card);
        });

        message.textContent =
            "Успешно загружено пользователей: " + users.length;

        message.className = "success";

    } catch (error) {
        message.textContent = "Ошибка: " + error.message;
        message.className = "error";

    } finally {
        loadBtn.disabled = false;
    }
}

loadBtn.addEventListener("click", loadUsers);



fetch(API)
    .then(response => response.json())
    .then(users => {
        console.log("Все 10 пользователей:", users);
    })
    .catch(error => {
        console.log("Ошибка:", error);
    });


loadUsers();
const userImages = {
    1: "user1.jpeg",
    2: "images/user1.jpeg",
    3: "images/user1.jpeg",
    4: "images/user1.jpeg",
    5: "images/user1.jpeg",
    6: "images/user1.jpeg",
    7: "images/user1.jpeg",
    8: "images/user1.jpeg",
    9: "images/user1.jpeg",
    10: "images/user1.jpeg"
};