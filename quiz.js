document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Quiz page loaded!');
    
    // Таймер початку квізу
    const startTime = Date.now();
    console.log('Quiz started at:', new Date().toLocaleTimeString('en-GB'));
    
    // Отримуємо форму
    const form = document.getElementById('quizForm');
    const finishBtn = form.querySelector('button[type="button"]');
    
    // ВАЖЛИВО: У вашому HTML є помилка - питання 3, 4, 5 мають однакове name="q3"
    // Потрібно виправити HTML: q3, q4, q5
    
    // Підрахунок відповідей
    const totalQuestions = 5;
    
    // Відстежуємо вибір відповідей
    const radioButtons = form.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            console.log('Selected:', this.name + ' = ' + this.value);
            
            // Перевіряємо скільки питань відповіли
            const q1 = form.querySelector('input[name="q1"]:checked');
            const q2 = form.querySelector('input[name="q2"]:checked');
            const q3 = form.querySelector('input[name="q3"]:checked');
            
            let answeredCount = 0;
            if (q1) answeredCount++;
            if (q2) answeredCount++;
            if (q3) answeredCount++;
            
            console.log('Answered questions:', answeredCount + '/' + totalQuestions);
        });
    });
    
    // Обробка кнопки "Finish"
    finishBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        console.log('Finish button clicked');
        
        // Перевіряємо чи всі питання відповіли
        const q1 = form.querySelector('input[name="q1"]:checked');
        const q2 = form.querySelector('input[name="q2"]:checked');
        const q3 = form.querySelector('input[name="q3"]:checked');
        
        if (!q1 || !q2 || !q3) {
            alert('Please answer all questions before finishing!');
            console.log('Not all questions answered');
            return;
        }
        
        // Підраховуємо бали
        let score = 0;
        
        // Question 1: правильна відповідь c
        if (q1 && q1.value === 'c') {
            score += 1;
            console.log('Question 1: CORRECT');
        } else {
            console.log('Question 1: WRONG');
        }
        
        // Question 2: правильні відповіді a і b
        if (q2 && (q2.value === 'a' || q2.value === 'b')) {
            score += 1;
            console.log('Question 2: CORRECT');
        } else {
            console.log('Question 2: WRONG');
        }
        
        // Question 3: про My Little Pony (на розсуд)
        if (q3) {
            score += 1; // всі відповіді правильні
            console.log('Question 3: CORRECT');
        }
        
        // Час виконання
        const endTime = Date.now();
        const timeSpent = Math.floor((endTime - startTime) / 1000);
        
        console.log('=== QUIZ COMPLETED ===');
        console.log('Total score:', score + '/3');
        console.log('Time spent:', timeSpent + ' seconds');
        
        // Зберігаємо результати
        const results = {
            score: score,
            maxScore: 3,
            timeSpent: timeSpent,
            answers: {
                q1: q1 ? q1.value : null,
                q2: q2 ? q2.value : null,
                q3: q3 ? q3.value : null
            }
        };
        
        sessionStorage.setItem('quizResults', JSON.stringify(results));
        console.log('Results saved to sessionStorage');
        
        // Перехід на сторінку результатів
        window.location.href = 'result.html';
    });
    
    console.log('WARNING: Questions 3, 4, 5 have the same name="q3" in HTML!');
    console.log('Please fix HTML to use name="q3", name="q4", name="q5"');
    
});