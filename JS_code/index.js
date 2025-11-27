document.addEventListener('DOMContentLoaded', function() {
    
    // Привітання залежно від часу
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
    
    // Додаємо привітання на сторінку
    const h1 = document.querySelector('h1');
    const greetingP = document.createElement('p');
    greetingP.textContent = greeting;
    greetingP.style.textAlign = 'center';
    greetingP.style.fontSize = '24px';
    greetingP.style.color = '#e74c3c';
    greetingP.style.marginBottom = '20px';
    h1.after(greetingP);
    
    // Лічильник відвідувань
    let visits = sessionStorage.getItem('visits') || 0;
    visits++;
    sessionStorage.setItem('visits', visits);
    
    // Показуємо лічильник на сторінці
    const mainText = document.querySelector('.main-text');
    const visitP = document.createElement('p');
    visitP.textContent = `📊 Ви відвідали цю сторінку ${visits} раз(ів)`;
    visitP.style.fontSize = '16px';
    visitP.style.color = '#7f8c8d';
    visitP.style.marginTop = '15px';
    mainText.appendChild(visitP);
    
    // Показуємо дату
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
    dateP.style.color = '#95a5a6';
    dateP.style.marginTop = '10px';
    greetingP.after(dateP);
    
});
