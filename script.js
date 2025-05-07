// 切換「眼睛」圖示
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        // 切換 input 類型
        if (target.type === 'password') {
            target.type = 'text';
            btn.classList.add('visible');   // 顯示時用「open eye」
        } else {
            target.type = 'password';
            btn.classList.remove('visible'); // 隱藏時用「closed eye」
        }
    });
});

// 其餘程式保持不變
function genCaptcha() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
const captchaCodeEl = document.getElementById('captcha-code');
document.getElementById('refresh-captcha').addEventListener('click', () => {
    captchaCodeEl.textContent = genCaptcha();
});
document.querySelector('.login-card form').addEventListener('submit', e => {
    e.preventDefault();
    alert('你被釣魚了.');
});
