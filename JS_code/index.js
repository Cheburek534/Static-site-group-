document.addEventListener('DOMContentLoaded', () => {
    const topicsGrid = document.querySelector('.topics-grid');

    // 1. Завантаження кастомних квізів з LocalStorage
    const customQuizzes = JSON.parse(localStorage.getItem('customQuizzes') || '[]');

    customQuizzes.forEach(quiz => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.dataset.topic = quiz.id; // Наприклад: custom_170123456789

        card.innerHTML = `
            <div class="icon">${quiz.icon}</div>
            <h3>${quiz.title}</h3>
            <p>${quiz.description}</p>
            <button class="delete-quiz-btn" style="margin-top:10px; padding:5px 10px; background:#ff7675; border:none; border-radius:5px; color:white; cursor:pointer; font-size:0.8em; opacity:0.8;">Видалити</button>
        `;

        // Додаємо кнопку видалення
        const deleteBtn = card.querySelector('.delete-quiz-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Щоб не спрацював клік по картці
            if(confirm('Видалити цей квіз?')) {
                const updatedQuizzes = customQuizzes.filter(q => q.id !== quiz.id);
                localStorage.setItem('customQuizzes', JSON.stringify(updatedQuizzes));
                card.remove();
            }
        });

        topicsGrid.appendChild(card);
    });

    // 2. Обробка кліків по картках (і стандартних, і кастомних)
    const cards = document.querySelectorAll('.topic-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const topic = this.dataset.topic;
            
            // Якщо це кастомний квіз, зберігаємо його назву окремо, щоб quiz.js міг її підхопити
            const h3 = this.querySelector('h3').innerText;
            sessionStorage.setItem('customQuizTitle', h3);

            sessionStorage.setItem('selectedTopic', topic);
            window.location.href = 'quiz.html';
        });
    });
});