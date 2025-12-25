const tree = document.getElementById("tree");

const STAR_COUNT = 220;

// ปรับขนาดต้นไม้ตามขนาดหน้าจอ (responsive)
const SIZE = Math.min(window.innerWidth, window.innerHeight);

const HEIGHT = SIZE * 0.48;      // ความสูงต้น
const BASE_RADIUS = SIZE * 0.24; // ความกว้างฐาน

// สร้างดาวรอบต้นไม้
for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const t = i / STAR_COUNT;   // 0 → 1
    const y = -t * HEIGHT;      // ล่าง → บน
    const radius = (1 - t) * BASE_RADIUS;
    const angle = t * 18 * Math.PI;

    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    star.style.transform =
        `translate3d(${x}px, ${y}px, ${z}px)`;

    tree.appendChild(star);
}

// ⭐ จับดาวยอดแล้ววางบนยอดต้นไม้พอดี
const starTop = document.querySelector(".star-top");
starTop.style.transform =
    `translate(-50%, -100%) translateY(${-HEIGHT}px)`;