document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questionsContainer');
    const addQuestionBtn = document.getElementById('addQuestionBtn');
    const saveQuizBtn = document.getElementById('saveQuizBtn');
    const quizTitleInput = document.getElementById('quizTitle');

    // Функція створення HTML для одного питання
    function createQuestionBlock(index) {
        const div = document.createElement('div');
        div.className = 'question-block';
        div.dataset.index = index;

        div.innerHTML = `
            <div class="question-header">
                <h3>Питання #${index + 1}</h3>
                <button class="remove-btn" onclick="removeQuestion(this)">×</button>
            </div>
            
            <div class="form-group">
                <input type="text" class="question-text" placeholder="Введіть запитання..." required>
            </div>

            <div class="answers-container">
                ${[0, 1, 2].map(i => `
                    <div class="answer-group">
                        <input type="radio" name="correct_${index}" value="${i}" class="radio-select">
                        <input type="text" class="answer-text" placeholder="Варіант відповіді ${i + 1}" required>
                    </div>
                `).join('')}
            </div>
        `;
        return div;
    }

    // Додавання нового питання
    addQuestionBtn.addEventListener('click', () => {
        const currentCount = questionsContainer.children.length;
        const newBlock = createQuestionBlock(currentCount);
        questionsContainer.appendChild(newBlock);
    });

    // Видалення питання (глобальна функція, щоб була доступна з HTML)
    window.removeQuestion = function(btn) {
        const block = btn.closest('.question-block');
        block.remove();
        // Перенумерація питань (візуально)
        Array.from(questionsContainer.children).forEach((child, idx) => {
            child.querySelector('h3').textContent = `Питання #${idx + 1}`;
            // Оновлюємо імена радіокнопок, щоб вони залишалися унікальними для групи
            const radios = child.querySelectorAll('input[type="radio"]');
            radios.forEach(r => r.name = `correct_${idx}`);
        });
    };

    // Збереження квізу
    saveQuizBtn.addEventListener('click', () => {
        const title = quizTitleInput.value.trim();
        const questionBlocks = document.querySelectorAll('.question-block');

        if (!title) {
            alert("⚠️ Будь ласка, введіть назву квізу!");
            return;
        }

        if (questionBlocks.length === 0) {
            alert("⚠️ Додайте хоча б одне питання!");
            return;
        }

        const questions = [];
        let isValid = true;

        questionBlocks.forEach((block, index) => {
            const qText = block.querySelector('.question-text').value.trim();
            const aInputs = block.querySelectorAll('.answer-text');
            const correctRadio = block.querySelector(`input[name="correct_${index}"]:checked`);

            // Перевірка на заповненість
            if (!qText) isValid = false;
            const answers = [];
            aInputs.forEach(inp => {
                if (!inp.value.trim()) isValid = false;
                answers.push(inp.value.trim());
            });

            if (!correctRadio) {
                alert(`⚠️ Оберіть правильну відповідь у питанні #${index + 1}!`);
                isValid = false;
                return; // вихід з forEach (не зупиняє функцію повністю, але прапорець ставимо)
            }

            if (isValid) {
                questions.push({
                    question: qText,
                    answers: answers,
                    correct: parseInt(correctRadio.value)
                });
            }
        });

        if (!isValid && questions.length !== questionBlocks.length) {
            alert("⚠️ Будь ласка, заповніть всі текстові поля!");
            return;
        }

        // Формуємо об'єкт квізу
        const newQuiz = {
            id: 'custom_' + Date.now(), // Унікальний ID
            title: title,
            icon: '✨', // Іконка для кастомних квізів
            description: `Кількість питань: ${questions.length}`,
            data: questions
        };

        // Зберігаємо в LocalStorage
        const existingQuizzes = JSON.parse(localStorage.getItem('customQuizzes') || '[]');
        existingQuizzes.push(newQuiz);
        localStorage.setItem('customQuizzes', JSON.stringify(existingQuizzes));

        alert('✅ Квіз успішно створено!');
        window.location.href = 'index.html';
    });

    // Додаємо перше питання при завантаженні
    addQuestionBtn.click();
});