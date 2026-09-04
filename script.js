const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
// === این کد را به انتهای فایل script.js اضافه کنید ===
function showPage(pageId) {
    // پنهان کردن همه بخش‌ها
    document.getElementById('home-page').style.display = 'none';
    document.querySelector('.hero').style.display = 'none'; // کدهای ماشین حساب همکارتان
    document.getElementById('quote-page').style.display = 'none';
    
    // نشان دادن صفحه کلیک شده
    if(pageId === 'home') document.getElementById('home-page').style.display = 'flex';
    if(pageId === 'calc') document.querySelector('.hero').style.display = 'flex';
    if(pageId === 'quote') document.getElementById('quote-page').style.display = 'flex';
}