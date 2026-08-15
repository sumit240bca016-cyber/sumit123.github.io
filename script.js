const noButton =
    document.getElementById("noButton");
const successScreen =
    document.getElementById("successScreen");
/* NO BUTTON */
function moveNoButton() {
    const x =
        Math.random() * 220 - 110;
    const y =
        Math.random() * 180 - 90;
    noButton.style.transform =
        `translate(${x}px, ${y}px)`;
}
/* Desktop */
noButton.addEventListener(
    "mouseenter",
    moveNoButton
);
/* Mobile */
noButton.addEventListener(
    "touchstart",
    function(event) {
        event.preventDefault();
        moveNoButton();
    }
);
/* If somehow clicked */
noButton.addEventListener(
    "click",
    moveNoButton
);
/* YES BUTTON */
function sayYes() {
    successScreen.style.display = "flex";
    createHearts();
}
/* BACK BUTTON */
function closeSuccess() {
    successScreen.style.display = "none";
}
/* HEART ANIMATION */
function createHearts() {
    for (
        let i = 0;
        i < 35;
        i++
    ) {
        const heart =
            document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position =
            "fixed";
        heart.style.left =
            Math.random() * 100 + "vw";
        heart.style.top =
            "100vh";
        heart.style.fontSize =
            (15 + Math.random() * 25)
            + "px";
        heart.style.transition =
            "transform 3s ease, top 3s ease";
        heart.style.zIndex =
            "200";
        document.body.appendChild(
            heart
        );
        setTimeout(() => {
            heart.style.top =
                "-10vh";
            heart.style.transform =
                `rotate(
                    ${Math.random() * 360}deg
                )`;
        }, 50);
        setTimeout(() => {
            heart.remove();
        }, 3500);
    }
}
