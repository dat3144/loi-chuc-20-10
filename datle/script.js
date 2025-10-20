const inputTitle = document.getElementById("inputTitle");
const inputMessage = document.getElementById("inputMessage");
const inputFrom = document.getElementById("inputFrom");
const inputCount = document.getElementById("inputCount");
const applyBtn = document.getElementById("applyBtn");
const burstBtn = document.getElementById("burstBtn");

const titleEl = document.getElementById("title");
const messageEl = document.getElementById("message");
const fromEl = document.getElementById("fromText");
const heartsContainer = document.getElementById("heartsContainer");

// tạo danh sách số lượng trái tim
for (let i = 1; i <= 30; i++) {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent = i;
  if (i === 8) opt.selected = true;
  inputCount.appendChild(opt);
}

// Áp dụng thay đổi lời chúc
applyBtn.addEventListener("click", () => {
  titleEl.textContent = inputTitle.value;
  messageEl.textContent = inputMessage.value;
  fromEl.textContent = inputFrom.value;
});

// tạo trái tim bay
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  const emojis = ["💖", "💕", "💗", "💞", "❤️‍🔥", "💓"];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  const left = 20 + Math.random() * 60;
  heart.style.left = left + "%";
  heart.style.fontSize = 18 + Math.random() * 24 + "px";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

// tự động bay trái tim
setInterval(() => createHeart(), 600);

// burst nút gửi
burstBtn.addEventListener("click", () => {
  const count = parseInt(inputCount.value, 10);
  for (let i = 0; i < count; i++) createHeart();
});
