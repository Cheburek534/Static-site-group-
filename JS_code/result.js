document.addEventListener('DOMContentLoaded', function() {
    
    // Отримуємо результати
    const resultsData = sessionStorage.getItem('quizResults');
    
    if (!resultsData) {
        alert('❌ Результати не знайдено! Спочатку пройдіть квіз.');
        return;
    }
    
    const results = JSON.parse(resultsData);
    
    // Підраховуємо відсоток
    const percentage = Math.round((results.score / results.maxScore) * 100);
    
    // Визначаємо оцінку
    let grade = '';
    let emoji = '';
    let message = '';
    
    if (percentage === 100) {
        grade = 'Відмінно!';
        emoji = '🏆';
        message = 'Ви відповіли на всі питання правильно!';
    } else if (percentage >= 75) {
        grade = 'Добре!';
        emoji = '🌟';
        message = 'Чудовий результат!';
    } else if (percentage >= 50) {
        grade = 'Непогано!';
        emoji = '👍';
        message = 'Є куди рости, але ви впорались!';
    } else {
        grade = 'Спробуйте ще!';
        emoji = '💪';
        message = 'Не засмучуйтесь, спробуйте ще раз!';
    }
    
    // Конвертуємо час
    const minutes = Math.floor(results.timeSpent / 60);
    const seconds = results.timeSpent % 60;
    const timeText = minutes > 0 ? `${minutes} хв ${seconds} сек` : `${seconds} сек`;
    
    // Створюємо блок з результатами
    const resultDiv = document.createElement('div');
    resultDiv.style.background = 'rgba(255, 255, 255, 0.8)';
    resultDiv.style.padding = '30px';
    resultDiv.style.borderRadius = '15px';
    resultDiv.style.margin = '30px auto';
    resultDiv.style.maxWidth = '600px';
    resultDiv.style.textAlign = 'center';
    resultDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    
    resultDiv.innerHTML = `
        <h2 style="font-size: 60px; margin: 20px 0;">${emoji}</h2>
        <h2 style="font-size: 32px; color: #2c3e50; margin: 15px 0;">${grade}</h2>
        <p style="font-size: 20px; color: #34495e; margin: 15px 0;">${message}</p>
        
        <div style="background: #ecf0f1; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="font-size: 28px; font-weight: bold; color: #e74c3c; margin: 10px 0;">
                ${results.score} з ${results.maxScore} балів
            </p>
            <p style="font-size: 20px; color: #7f8c8d; margin: 10px 0;">
                ${percentage}% правильних відповідей
            </p>
            <p style="font-size: 18px; color: #95a5a6; margin: 10px 0;">
                ⏱️ Витрачено часу: ${timeText}
            </p>
        </div>
    `;
    
    // Вставляємо після заголовка
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    
    h1.textContent = 'Ваші результати! 🎉';
    p.textContent = '';
    p.appendChild(resultDiv);
    
    // Додаємо кнопку "Пройти ще раз"
    const mainBtn = document.querySelector('.to_main-btn');
    const retryBtn = document.createElement('a');
    retryBtn.href = 'quiz.html';
    retryBtn.className = 'to_main-btn';
    retryBtn.textContent = '🔄 Пройти ще раз';
    retryBtn.style.marginRight = '15px';
    mainBtn.parentNode.insertBefore(retryBtn, mainBtn);
    
    // Очищаємо результати при поверненні
    mainBtn.addEventListener('click', function() {
        sessionStorage.removeItem('quizResults');
    });
    
});
