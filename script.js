const startBtn = document.getElementById("startBtn");
const status = document.getElementById("status");

startBtn.addEventListener("click", () => {
    status.textContent = "🚀 Hệ thống đang khởi động...";

    setTimeout(() => {
        status.textContent = "✅ NXTFIX MAP TIMEMARK đã sẵn sàng!";
    }, 2000);
});
