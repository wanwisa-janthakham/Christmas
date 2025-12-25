const tree = document.getElementById("tree");

const STAR_COUNT = 220;
const HEIGHT = 340;
const BASE_RADIUS = 150;

const topStar = document.querySelector(".star-top");

// สร้างดวงไฟรอบต้นไม้
for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const t = i / STAR_COUNT;
    const y = -t * HEIGHT;
    const radius = (1 - t) * BASE_RADIUS;
    const angle = t * 18 * Math.PI;

    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    star.style.transform =
        `translate3d(${x}px, ${y}px, ${z}px)`;

    tree.appendChild(star);
}

// ⭐ วางดาวบนยอด (ไม่ชน transform)
topStar.style.top = `${-HEIGHT - 20}px`;
