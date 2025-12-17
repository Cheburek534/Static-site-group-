document.addEventListener('DOMContentLoaded', () => {
    const topicsGrid = document.querySelector('.topics-grid');

    const customQuizzes = JSON.parse(localStorage.getItem('customQuizzes') || '[]');

    customQuizzes.forEach(quiz => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.dataset.topic = quiz.id; 

        card.innerHTML = `
            <div class="icon">${quiz.icon}</div>
            <h3>${quiz.title}</h3>
            <p>${quiz.description}</p>
            <button class="delete-quiz-btn" style="margin-top:10px; padding:5px 10px; background:#ff7675; border:none; border-radius:5px; color:white; cursor:pointer; font-size:0.8em; opacity:0.8;">Видалити</button>
        `;

        const deleteBtn = card.querySelector('.delete-quiz-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if(confirm('Видалити цей квіз?')) {
                const updatedQuizzes = customQuizzes.filter(q => q.id !== quiz.id);
                localStorage.setItem('customQuizzes', JSON.stringify(updatedQuizzes));
                card.remove();
            }
        });

        topicsGrid.appendChild(card);
    });

    
    const cards = document.querySelectorAll('.topic-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const topic = this.dataset.topic;
            
           
            const h3 = this.querySelector('h3').innerText;
            sessionStorage.setItem('customQuizTitle', h3);

            sessionStorage.setItem('selectedTopic', topic);
            window.location.href = 'quiz.html';
        });
    });
});
