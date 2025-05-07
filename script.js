// 切換使用者代號 & 密碼 顯示 / 隱藏
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);
        if (input.type === 'password') {
            input.type = 'text';
            btn.classList.add('visible');
        } else {
            input.type = 'password';
            btn.classList.remove('visible');
        }
    });
});

// 重新產生 6 位數驗證碼
function genCaptcha() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
const captchaCodeEl = document.getElementById('captcha-code');
document.getElementById('refresh-captcha').addEventListener('click', () => {
    captchaCodeEl.textContent = genCaptcha();
});

// 表單送出驗證
const form = document.querySelector('.login-card form');
form.addEventListener('submit', e => {
    e.preventDefault();

    // 欄位定義
    const fields = [
        { id: 'id-number', label: '身分證字號' },
        { id: 'user-id', label: '使用者代號' },
        { id: 'password', label: '網路銀行密碼' },
        { id: 'captcha-input', label: '圖形驗證碼' }
    ];

    // 檢查空值
    for (const field of fields) {
        const el = document.getElementById(field.id);
        if (!el.value.trim()) {
            alert(`「${field.label}」必填欄位，請輸入值！`);
            el.focus();
            return;
        }
    }

    // 驗證圖形驗證碼
    const inputCaptcha = document.getElementById('captcha-input').value.trim();
    const correctCaptcha = captchaCodeEl.textContent.trim();
    if (inputCaptcha !== correctCaptcha) {
        alert('圖形辨識碼驗證失敗');
        document.getElementById('refresh-captcha').click();
        return;
    }

    // 通過所有驗證後的邏輯
    alert('驗證通過，進行登入…');
    // 這裡可以放實際送出或後續處理
});
