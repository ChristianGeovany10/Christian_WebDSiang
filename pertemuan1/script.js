document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;

  
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        modeToggle.textContent = "☀️ Mode Terang";
    }

    
    modeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            modeToggle.textContent = "☀️ Mode Terang";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            modeToggle.textContent = "🌙 Mode Gelap";
        }
    });
});
