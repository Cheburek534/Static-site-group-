document.addEventListener('DOMContentLoaded', function() {
    
    // Привітання залежно від часу
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Доброго ранку!';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Доброго дня!';
    } else if (hour >= 17 && hour < 22) {
        greeting = 'Доброго вечора!';
    } else {
        greeting = 'Доброї ночі!';
    }
    
    // Виводимо привітання в консоль
    console.log(greeting);
    
    // Виводимо повідомлення при кліку на кнопку
    const startBtn = document.querySelector('.start-btn');
    
    startBtn.addEventListener('click', function() {
        console.log('Користувач натиснув кнопку "Start first quiz"');
    });
    
    // Лічильник відвідувань
    let visits = sessionStorage.getItem('visits') || 0;
    visits++;
    sessionStorage.setItem('visits', visits);
    
    console.log('Кількість відвідувань сторінки:', visits);
    
    // Показуємо дату
    const today = new Date();
    console.log('Сьогодні:', today.toLocaleDateString('uk-UA'));
});