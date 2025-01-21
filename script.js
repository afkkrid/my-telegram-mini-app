// Открытие модального окна с QR-кодом
function openModal(plan, amount, currency) {
    const walletAddress = '0xТВОЙ_АДРЕС_КОШЕЛЬКА'; // Замени на свой адрес
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${walletAddress}`;

    document.getElementById('walletAddress').textContent = walletAddress;
    document.getElementById('qrCode').src = qrCodeUrl;
    document.getElementById('paymentModal').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Подтверждение оплаты
function confirmPayment() {
    alert("Спасибо! Мы проверим оплату и активируем вашу подписку.");
    closeModal();
}

// Обработка кнопки "Купить"
function buySubscription(plan, amount, currency) {
    openModal(plan, amount, currency);
}

// Раскрытие/скрытие описания
function toggleDescription(id) {
    const description = document.getElementById(id);
    if (description.style.maxHeight) {
        description.style.maxHeight = null; // Скрыть описание
    } else {
        description.style.maxHeight = description.scrollHeight + "px"; // Показать описание
    }
}