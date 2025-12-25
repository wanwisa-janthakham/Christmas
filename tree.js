const tree = document.getElementById("tree");

const STAR_COUNT = 220;    // จำนวนดาว
const HEIGHT = 340;       // ความสูงต้น
const BASE_RADIUS = 150;  // ความกว้างฐาน

for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const t = i / STAR_COUNT;          // 0 → 1
    const y = -t * HEIGHT;             // ล่าง → บน
    const radius = (1 - t) * BASE_RADIUS;
    const angle = t * 18 * Math.PI;

    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    star.style.transform =
        `translate3d(${x}px, ${y}px, ${z}px)`;

    tree.appendChild(star);
}
