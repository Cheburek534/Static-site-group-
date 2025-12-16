document.addEventListener('DOMContentLoaded', () => {
    // 1. Відображення поточного результату
    const resultData = JSON.parse(sessionStorage.getItem('quizResults'));

    if (resultData) {
        document.getElementById('playerName').textContent = resultData.name;
        document.getElementById('score').textContent = resultData.score;
        document.getElementById('total').textContent = resultData.maxScore;
        
        // Форматування часу (хх:хх)
        const mins = Math.floor(resultData.timeSpent / 60);
        const secs = resultData.timeSpent % 60;
        document.getElementById('timeSpent').textContent = `${mins}хв ${secs}с`;

        // Зміна повідомлення в залежності від відсотка правильних відповідей
        const percentage = (resultData.score / resultData.maxScore) * 100;
        const msgElement = document.getElementById('message');
        const greetingElement = document.getElementById('greeting');

        if (percentage === 100) {
            greetingElement.textContent = "Бездоганно! 🏆";
            msgElement.textContent = "Ви справжній експерт з теми '" + resultData.quizTitle + "'!";
        } else if (percentage >= 70) {
            greetingElement.textContent = "Чудовий результат! 👏";
            msgElement.textContent = "Ви добре знаєте тему '" + resultData.quizTitle + "'.";
        } else if (percentage >= 40) {
            greetingElement.textContent = "Непогано! 👍";
            msgElement.textContent = "Але є куди рости у темі '" + resultData.quizTitle + "'.";
        } else {
            greetingElement.textContent = "Спробуйте ще раз! 💪";
            msgElement.textContent = "Вам варто підтягнути знання з теми '" + resultData.quizTitle + "'.";
        }
    } else {
        // Якщо зайшли на сторінку без проходження тесту
        document.querySelector('.result-card').innerHTML = '<h2>Результати відсутні</h2><a href="index.html"><button>На головну</button></a>';
    }

    // 2. Відображення історії (з LocalStorage)
    const historyList = document.getElementById('historyList');
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');

    function renderHistory() {
        historyList.innerHTML = '';
        // Показуємо останні ігри зверху (reverse)
        const reversedHistory = [...history].reverse();

        if (reversedHistory.length === 0) {
            historyList.innerHTML = '<p style="text-align:center; color:#888;">Історія порожня</p>';
            return;
        }

        reversedHistory.forEach(item => {
            const div = document.createElement('div');
            div.className = 'history-item';
            div.innerHTML = `
                <div class="h-header">
                    <span>${item.name}</span>
                    <span class="h-score">${item.score}/${item.maxScore}</span>
                </div>
                <div class="h-quiz">Тема: ${item.quizTitle}</div>
                <div class="h-footer">
                    <span>${item.date}</span>
                    <span>${item.timeSpent}с</span>
                </div>
            `;
            historyList.appendChild(div);
        });
    }

    renderHistory();

    // 3. Очищення історії
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', () => {
        if(confirm('Ви впевнені, що хочете очистити всю історію ігор?')) {
            localStorage.removeItem('quizHistory');
            history.length = 0; // очищаємо поточний масив
            renderHistory();
        }
    });
});