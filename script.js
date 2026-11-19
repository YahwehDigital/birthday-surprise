const pictures = [
    "pictures/1.jpeg",
    "pictures/2.jpeg",
    "pictures/3.jpeg"
];

let currentPicture = 0;

function startSurprise() {

    document.getElementById("welcome")
        .classList.add("hidden");

    document.getElementById("birthday")
        .classList.remove("hidden");

    const music = document.getElementById("music");

    music.volume = 0.7;
    music.play().catch(error => {
        console.log("Music playback needs user permission.");
    });

    createHearts();

    showSlides();
}

function showSlides() {

    if (currentPicture < pictures.length) {

        const slide = document.getElementById("slide");

        slide.src = pictures[currentPicture];

        slide.style.animation = "none";
        void slide.offsetWidth;
        slide.style.animation = "fade 4s ease";

        currentPicture++;

        setTimeout(showSlides, 4000);

    } else {

        // End of slideshow
        document.querySelector(".slideshow")
            .classList.add("hidden");

        document.querySelector(".subtitle")
            .classList.add("hidden");

        document.querySelector(".message")
            .classList.add("hidden");

        document.getElementById("finalMessage")
            .classList.remove("hidden");

        document.querySelector(".birthday-title")
            .classList.add("hidden");

    }
}

// Floating hearts animation

function createHearts() {

    const container = document.getElementById("hearts");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);

    }, 400);
}