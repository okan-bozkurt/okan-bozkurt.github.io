const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    // Sayfa yüklendiğinde kayıtlı temayı kontrol et
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Tercihi kaydet
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

function formGonder(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engelle

    // Form verilerini al (İsterseniz burada doğrulama yapabilirsiniz)
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basit bir kontrol
    if (name && email && message) {
        alert("Mesajınız başarıyla gönderildi! (Bu bir demosu)");
        // Formu temizle
        event.target.reset();
    } else {
        alert("Lütfen tüm alanları doldurunuz.");
    }
}
