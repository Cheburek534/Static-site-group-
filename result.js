document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Result page loaded!');
    
    // Отримуємо результати з sessionStorage
    const resultsData = sessionStorage.getItem('quizResults');
    
    if (!resultsData) {
        console.log('ERROR: No quiz results found!');
        alert('No results found! Please take the quiz first.');
        return;
    }
    
    // Парсимо результати
    const results = JSON.parse(resultsData);
    
    console.log('=== QUIZ RESULTS ===');
    console.log('Score:', results.score + '/' + results.maxScore);
    console.log('Time spent:', results.timeSpent + ' seconds');
    console.log('Answers:', results.answers);
    
    // Підраховуємо відсоток
    const percentage = Math.round((results.score / results.maxScore) * 100);
    console.log('Percentage:', percentage + '%');
    
    // Визначаємо оцінку
    let grade = '';
    let message = '';
    
    if (percentage === 100) {
        grade = 'Excellent!';
        message = 'Perfect score! You answered all questions correctly!';
    } else if (percentage >= 75) {
        grade = 'Good!';
        message = 'Great job! You did very well!';
    } else if (percentage >= 50) {
        grade = 'Not bad!';
        message = 'You passed, but there is room for improvement!';
    } else {
        grade = 'Try again!';
        message = 'You can do better! Try the quiz again!';
    }
    
    console.log('Grade:', grade);
    console.log('Message:', message);
    
    // Конвертуємо час
    const minutes = Math.floor(results.timeSpent / 60);
    const seconds = results.timeSpent % 60;
    const timeText = minutes > 0 ? minutes + ' min ' + seconds + ' sec' : seconds + ' sec';
    
    console.log('Time formatted:', timeText);
    
    // Виводимо детальну інформацію про відповіді
    console.log('=== DETAILED ANSWERS ===');
    console.log('Question 1 (Why did you enter KPI?):', results.answers.q1);
    console.log('Question 2 (Do you love to study in KPI?):', results.answers.q2);
    console.log('Question 3 (Do you love My Little Pony?):', results.answers.q3);
    
    // Показуємо фінальне повідомлення
    console.log('===================');
    console.log('Final grade:', grade);
    console.log('Your score: ' + results.score + '/' + results.maxScore + ' (' + percentage + '%)');
    console.log('Time: ' + timeText);
    console.log(message);
    console.log('===================');
    
    // Кнопка повернення на головну
    const mainBtn = document.querySelector('.to_main-btn');
    if (mainBtn) {
        mainBtn.addEventListener('click', function() {
            console.log('Returning to main page...');
            sessionStorage.removeItem('quizResults');
        });
    }
    
});