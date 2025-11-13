document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('quizForm');
    const finishBtn = form.querySelector('button[type="button"]');
    const startTime = Date.now();
    
    // Додаємо таймер на сторінку
    const timerDiv = document.createElement('div');
    timerDiv.style.position = 'fixed';
    timerDiv.style.top = '10px';
    timerDiv.style.right = '10px';
    timerDiv.style.padding = '15px';
    timerDiv.style.background = 'rgba(154, 238, 232, 0.9)';
    timerDiv.style.borderRadius = '10px';
    timerDiv.style.fontSize = '18px';
    timerDiv.style.fontWeight = 'bold';
    document.body.appendChild(timerDiv);
    
    // Оновлюємо таймер кожну секунду
    setInterval(function() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timerDiv.textContent = `⏱️ Час: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
    
    // Додаємо прогрес на сторінку
    const progressDiv = document.createElement('div');
    progressDiv.style.textAlign = 'center';
    progressDiv.style.padding = '15px';
    progressDiv.style.background = '#f0f0f0';
    progressDiv.style.borderRadius = '10px';
    progressDiv.style.margin = '20px 0';
    progressDiv.style.fontSize = '18px';
    progressDiv.style.fontWeight = 'bold';
    form.insertBefore(progressDiv, form.firstChild);
    
    // Функція оновлення прогресу
    function updateProgress() {
        const q1 = form.querySelector('input[name="q1"]:checked');
        const q2 = form.querySelector('input[name="q2"]:checked');
        const q3 = form.querySelector('input[name="q3"]:checked');
        const q4 = form.querySelector('input[name="q4"]:checked');
        const q5 = form.querySelector('input[name="q5"]:checked');
        
        let answered = 0;
        if (q1) answered++;
        if (q2) answered++;
        if (q3) answered++;
        if (q4) answered++;
        if (q5) answered++;
        
        progressDiv.textContent = `📝 Відповіли на ${answered} з 5 питань`;
        progressDiv.style.color = answered === 5 ? 'green' : '#e74c3c';
    }
    
    updateProgress();
    
    // Відстежуємо зміни
    const radios = form.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
        radio.addEventListener('change', updateProgress);
    });
    
    // Обробка кнопки "Finish"
    finishBtn.onclick = function(e) {
        e.preventDefault();
        
        const q1 = form.querySelector('input[name="q1"]:checked');
        const q2 = form.querySelector('input[name="q2"]:checked');
        const q3 = form.querySelector('input[name="q3"]:checked');
        const q4 = form.querySelector('input[name="q4"]:checked');
        const q5 = form.querySelector('input[name="q5"]:checked');
        
        if (!q1 || !q2 || !q3 || !q4 || !q5) {
            alert('⚠️ Будь ласка, дайте відповідь на всі 5 питань!');
            return;
        }
        
        // Підрахунок балів
        let score = 0;
        if (q1.value === 'c') score++;
        if (q2.value === 'a' || q2.value === 'b') score++;
        score++; // q3
        score++; // q4
        if (q5.value === 'b') score++;
        
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        
        // Зберігаємо результати
        sessionStorage.setItem('quizResults', JSON.stringify({
            score: score,
            maxScore: 5,
            timeSpent: timeSpent
        }));
        
        // Перехід на result.html
        window.location.href = 'result.html';
    };
    
});

