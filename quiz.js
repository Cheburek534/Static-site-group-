document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('quizForm');
    const finishBtn = form.querySelector('button[type="button"]');
    const startTime = Date.now();
    
    // Кнопка "Finish"
    finishBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Отримуємо відповіді
        const q1 = form.querySelector('input[name="q1"]:checked');
        const q2 = form.querySelector('input[name="q2"]:checked');
        const q3 = form.querySelector('input[name="q3"]:checked');
        const q4 = form.querySelector('input[name="q4"]:checked');
        const q5 = form.querySelector('input[name="q5"]:checked');
        
        // Перевірка
        if (!q1 || !q2 || !q3 || !q4 || !q5) {
            alert('Please answer all questions!');
            return;
        }
        
        // Підрахунок балів
        let score = 0;
        if (q1.value === 'c') score++;
        if (q2.value === 'a' || q2.value === 'b') score++;
        score++; // q3 - всі правильні
        score++; // q4 - всі правильні
        if (q5.value === 'b') score++;
        
        // Час
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        
        // Зберігаємо
        sessionStorage.setItem('quizResults', JSON.stringify({
            score: score,
            maxScore: 5,
            timeSpent: timeSpent
        }));
        
        // Перехід
        window.location.href = 'result.html';
    });
    
});
