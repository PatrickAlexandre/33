document.addEventListener("DOMContentLoaded", function () {

    // Gestion des informations utilisateur
    document.getElementById("userIcon").addEventListener("click", function () {
        document.getElementById("userInfoModal").classList.toggle("show");
    });

    document.getElementById("saveUserInfo").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userBirthdate = document.getElementById("userBirthdate").value;

        localStorage.setItem("userName", userName);
        localStorage.setItem("userBirthdate", userBirthdate);

        document.getElementById("userInfoModal").classList.remove("show");

        alert("Informations sauvegardées !");
    });

    // Récupération des informations pour personnaliser l'affichage
    if (localStorage.getItem("userName")) {
        document.getElementById("characterName").innerText = localStorage.getItem("userName");
    }

    // Chargement des barres de progression depuis localStorage
    if (localStorage.getItem("health")) {
        document.getElementById("healthBar").style.width = localStorage.getItem("health") + "%";
    }

    if (localStorage.getItem("mana")) {
        document.getElementById("manaBar").style.width = localStorage.getItem("mana") + "%";
    }

    if (localStorage.getItem("experience")) {
        document.getElementById("xpBar").style.width = localStorage.getItem("experience") + "%";
    }

    // Charger les données de recherche depuis data.json
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let mainContent = document.getElementById("mainContent");
            mainContent.innerHTML = '';  // Clear existing content
            data.items.forEach(item => {
                let itemElement = `
                    <div class="col-md-4">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                `;
                mainContent.innerHTML += itemElement;
            });
        });
});
