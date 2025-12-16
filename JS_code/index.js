document.addEventListener('DOMContentLoaded', function() {
    
    // Привітання (залиш без змін)
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
        greeting = '🌅 Доброго ранку!';
    } else if (hour >= 12 && hour < 17) {
        greeting = '☀️ Доброго дня!';
    } else if (hour >= 17 && hour < 22) {
        greeting = '🌆 Доброго вечора!';
    } else {
        greeting = '🌙 Доброї ночі!';
    }
    
    const h1 = document.querySelector('h1');
    const greetingP = document.createElement('p');
    greetingP.textContent = greeting;
    greetingP.style.textAlign = 'center';
    greetingP.style.fontSize = '24px';
    greetingP.style.color = 'white'; // Змінив на white, бо на фоні краще видно
    greetingP.style.textShadow = '1px 1px 2px rgba(0,0,0,0.3)';
    greetingP.style.marginBottom = '20px';
    h1.after(greetingP);
    
    // Лічильник відвідувань (залиш без змін)
    let visits = sessionStorage.getItem('visits') || 0;
    visits++;
    sessionStorage.setItem('visits', visits);
    
    const mainText = document.querySelector('.main-text');
    const visitP = document.createElement('p');
    visitP.textContent = `📊 Ви відвідали цю сторінку ${visits} раз(ів)`;
    visitP.style.fontSize = '16px';
    visitP.style.color = '#7f8c8d';
    visitP.style.marginTop = '15px';
    mainText.appendChild(visitP);
    
    // Дата (залиш без змін)
    const today = new Date();
    const dateP = document.createElement('p');
    dateP.textContent = `📅 Сьогодні: ${today.toLocaleDateString('uk-UA', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    })}`;
    dateP.style.textAlign = 'center';
    dateP.style.fontSize = '16px';
    dateP.style.color = '#eee'; // Теж світліше для фону
    dateP.style.marginTop = '10px';
    greetingP.after(dateP);

    // --- НОВА ЛОГІКА ДЛЯ КАРТОК ТЕМ ---
    const topicCards = document.querySelectorAll('.topic-card');

    topicCards.forEach(card => {
        card.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            // Зберігаємо вибір користувача
            sessionStorage.setItem('selectedTopic', topic);
            // Переходимо на сторінку квізу
            window.location.href = '../html_code/quiz.html';
        });
    });
});