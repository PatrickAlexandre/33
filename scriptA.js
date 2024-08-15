
// JavaScript de base pour charger le nom et les ressources du personnage depuis le fichier JSON

document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("characterName").innerText = data.name;
            document.getElementById("resourcesText").innerText = data.resourcesText;

            let progressBars = '';
            data.resources.forEach(resource => {
                progressBars += `
                    <div class="progress my-3">
                        <div class="progress-bar" style="width:${resource.percentage}%; background-color: ${resource.color};">
                            ${resource.name}
                        </div>
                    </div>
                `;
            });
            document.getElementById("progressBars").innerHTML = progressBars;
        });
});
