document.addEventListener('DOMContentLoaded', function () {
  const resultsData = sessionStorage.getItem('quizResults');
  if (!resultsData) {
    window.location.href = 'quiz.html';
    return;
  }

  const results = JSON.parse(resultsData);

  // ✅ Назва квізу (щоб старі результати не ламались)
  const currentQuizTitle = results.quizTitle || 'Квіз';

  // ✅ Показуємо який квіз пройшли
  document.getElementById('greeting').textContent =
    `Вітаємо, ${results.name}! Квіз: «${currentQuizTitle}»`;

  document.getElementById('playerName').textContent = results.name;
  document.getElementById('score').textContent = results.score;
  document.getElementById('total').textContent = results.maxScore;

  const minutes = Math.floor(results.timeSpent / 60);
  const seconds = results.timeSpent % 60;
  document.getElementById('timeSpent').textContent = `${minutes} хв ${seconds} сек`;

  const percentage = Math.round((results.score / results.maxScore) * 100);
  const msgElement = document.getElementById('message');

  if (percentage === 100) msgElement.textContent = "🥇 Неймовірно! Ви геній!";
  else if (percentage >= 75) msgElement.textContent = "🌟 Чудовий результат!";
  else if (percentage >= 50) msgElement.textContent = "👍 Непогано! Є куди рости.";
  else msgElement.textContent = "📚 Спробуйте ще раз — все вийде!";

  const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
  const listContainer = document.getElementById('historyList');
  listContainer.innerHTML = '';

  if (history.length === 0) {
    listContainer.innerHTML =
      '<p style="text-align:center; opacity:0.6; padding-top:20px;">Поки немає записів</p>';
  } else {
    history.slice().reverse().forEach((game) => {
      // ✅ НЕ div, щоб не підхоплював глобальні стилі div з first_quiz_style.css
      const item = document.createElement('section');
      item.className = 'history-item';

      const m = Math.floor(game.timeSpent / 60);
      const s = game.timeSpent % 60;
      const timeStr = m > 0 ? `${m}хв ${s}с` : `${s}сек`;

      const quizTitle = game.quizTitle || 'Квіз';

      // ✅ Всередині теж НЕ div
      item.innerHTML = `
        <section class="h-header">
          <span class="h-name">${game.name}</span>
          <span class="h-score">${game.score}/${game.maxScore}</span>
        </section>

        <section class="h-quiz">
          🧩 ${quizTitle}
        </section>

        <section class="h-footer">
          <span>⏱️ ${timeStr}</span>
          <span style="font-size: 0.8em; opacity: 0.7;">${game.date || ''}</span>
        </section>
      `;

      listContainer.appendChild(item);
    });
  }

  const clearBtn = document.querySelector('.clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearHistory);
  }
});

function clearHistory() {
  if (confirm('Видалити всю історію ігор?')) {
    localStorage.removeItem('quizHistory');
    location.reload();
  }
}
