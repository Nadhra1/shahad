 const messages = [
       "أحجي الصدك?",
    "لا لا بدون شقة ??",
    "لتجذبين?",
    "متأكدة ... ؟",
    "فكري بعد شوية !",
    "ترة اذا تكولين لا  رح ازعل ؟...",
    "ترة ازعل من صدك ... ؟",
    "ترة كلش كلش رح ازعل ...",
    "عادي براحتج اصلا مراح اسألج ...",
    "بس كولي أي شبيج ترة مراح اعضج! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // تغيير نص زر الـ No
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // تكبير زر الـ Yes بطريقة متجاوبة وآمنة للشاشات
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`; // تكبير بنسبة 1.4 ليعطي فرصة أكبر لظهور النص
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
