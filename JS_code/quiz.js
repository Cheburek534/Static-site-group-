const baseQuizDatabase = {
    mix: [
        { question: "Why did you enter KPI?", answers: ["I don't know", "Я не знаю", "Тому що це найкращий технічний університет України"], correct: 2 },
        { question: "Do you love to study in KPI?", answers: ["Yes", "Of course", "Nuhhhh"], correct: 0 },
        { question: "Do you love My Little Pony?", answers: ["Yes", "No", "Maybe"], correct: 0 },
        { question: "Who is your favourite teacher?", answers: ["Пономаренко", "Туганських", "Колосова"], correct: 0 },
        { question: "What is the capital of Ukraine?", answers: ["Kyiv", "Lviv", "Odesa"], correct: 0 },
        { question: "What color is the sky?", answers: ["Blue", "Green", "Red"], correct: 0 },
        { question: "How many days in a week?", answers: ["5", "7", "10"], correct: 1 },
        { question: "Which planet is closest to the Sun?", answers: ["Venus", "Mercury", "Mars"], correct: 1 }
    ],
    history: [
        { question: "У якому році проголошено незалежність України?", answers: ["1989", "1991", "1993"], correct: 1 },
        { question: "Хто був першим президентом України?", answers: ["Віктор Ющенко", "Леонід Кравчук", "Леонід Кучма"], correct: 1 },
        { question: "Яка держава була центром Київської Русі?", answers: ["Новгород", "Київ", "Чернігів"], correct: 1 },
        { question: "Хто очолював визвольну війну 1648–1657 рр.?", answers: ["Іван Мазепа", "Богдан Хмельницький", "Петро Дорошенко"], correct: 1 },
        { question: "Яка подія вважається початком Другої світової війни?", answers: ["Напад Німеччини на СРСР", "Напад Німеччини на Польщу", "Атака на Перл-Харбор"], correct: 1 },
        { question: "У якому столітті відбулася Французька революція?", answers: ["XVII", "XVIII", "XIX"], correct: 1 },
        { question: "Хто був першим імператором Риму?", answers: ["Юлій Цезар", "Октавіан Август", "Нерон"], correct: 1 },
        { question: "Яка битва відбулася у 1410 році?", answers: ["Куликовська", "Грюнвальдська", "Полтавська"], correct: 1 },
        { question: "Яка держава збудувала Колізей?", answers: ["Греція", "Римська імперія", "Єгипет"], correct: 1 },
        { question: "Хто відкрив Америку для європейців?", answers: ["Васко да Гама", "Христофор Колумб", "Фернан Магеллан"], correct: 1 },
        { question: "Яка цивілізація створила піраміди?", answers: ["Майя", "Єгиптяни", "Ассирійці"], correct: 1 },
        { question: "Який договір завершив Першу світову війну?", answers: ["Версальський", "Брестський", "Потсдамський"], correct: 0 },
        { question: "У якому році відбулася Чорнобильська катастрофа?", answers: ["1984", "1986", "1989"], correct: 1 },
        { question: "Хто був гетьманом під час Полтавської битви?", answers: ["Богдан Хмельницький", "Іван Мазепа", "Павло Скоропадський"], correct: 1 },
        { question: "Яка держава першою запустила людину в космос?", answers: ["США", "СРСР", "Китай"], correct: 1 }
    ],
    science: [
        { question: "Яка планета найближча до Сонця?", answers: ["Венера", "Меркурій", "Марс"], correct: 1 },
        { question: "Формула води:", answers: ["CO₂", "H₂O", "O₂"], correct: 1 },
        { question: "Яка одиниця вимірювання сили?", answers: ["Ват", "Ньютон", "Джоуль"], correct: 1 },
        { question: "Який газ необхідний для дихання людини?", answers: ["Азот", "Кисень", "Вуглекислий газ"], correct: 1 },
        { question: "Найбільший орган людини:", answers: ["Серце", "Печінка", "Шкіра"], correct: 2 },
        { question: "Яка тварина є ссавцем?", answers: ["Дельфін", "Акула", "Крокодил"], correct: 0 },
        { question: "Що вивчає біологія?", answers: ["Зорі", "Живі організми", "Речовини"], correct: 1 },
        { question: "Який метал є рідким за кімнатної температури?", answers: ["Олово", "Ртуть", "Алюміній"], correct: 1 },
        { question: "Яка частина клітини містить ДНК?", answers: ["Мітохондрія", "Ядро", "Рибосома"], correct: 1 },
        { question: "Швидкість світла приблизно дорівнює:", answers: ["300 тис. км/с", "150 тис. км/с", "1 млн км/с"], correct: 0 },
        { question: "Яка наука вивчає землетруси?", answers: ["Метеорологія", "Сейсмологія", "Географія"], correct: 1 },
        { question: "Яка планета має кільця?", answers: ["Марс", "Сатурн", "Меркурій"], correct: 1 },
        { question: "Який вітамін утворюється під дією сонця?", answers: ["A", "C", "D"], correct: 2 },
        { question: "Яка речовина має pH = 7?", answers: ["Кислота", "Нейтральна", "Лужна"], correct: 1 },
        { question: "Який орган відповідає за зір?", answers: ["Вухо", "Око", "Ніс"], correct: 1 }
    ],
    tech: [
        { question: "Що означає скорочення «ІТ»?", answers: ["Інтернет-технології", "Інформаційні технології", "Інтелектуальні технології"], correct: 1 },
        { question: "Хто заснував Microsoft?", answers: ["Стів Джобс", "Білл Гейтс", "Марк Цукерберг"], correct: 1 },
        { question: "Основний пристрій для введення тексту:", answers: ["Монітор", "Клавіатура", "Принтер"], correct: 1 },
        { question: "Що таке штучний інтелект?", answers: ["Людський розум", "Програма, що імітує мислення", "Робот"], correct: 1 },
        { question: "Яка мова програмування популярна для вебу?", answers: ["HTML", "Python", "Java"], correct: 1 },
        { question: "Що зберігає дані постійно?", answers: ["ОЗП", "Процесор", "Жорсткий диск"], correct: 2 },
        { question: "Що таке Інтернет?", answers: ["Програма", "Всесвітня мережа", "Сервер"], correct: 1 },
        { question: "Що означає «хмарне сховище»?", answers: ["Збереження на флешці", "Онлайн-зберігання", "Архівування"], correct: 1 },
        { question: "Яка соцмережа належить Meta?", answers: ["TikTok", "Instagram", "Telegram"], correct: 1 },
        { question: "Що таке QR-код?", answers: ["Графічний пароль", "Двовимірний код", "Вірус"], correct: 1 },
        { question: "Який пристрій вимірює кроки?", answers: ["Барометр", "Фітнес-трекер", "Термометр"], correct: 1 },
        { question: "Що таке кібербезпека?", answers: ["Захист даних", "Ремонт ПК", "Створення сайтів"], correct: 0 },
        { question: "Яка технологія використовується в безконтактній оплаті?", answers: ["NFC", "GPS", "Wi-Fi"], correct: 0 },
        { question: "Що таке браузер?", answers: ["Операційна система", "Програма для Інтернету", "Антивірус"], correct: 1 },
        { question: "Який формат файлу є зображенням?", answers: ["MP3", "JPG", "DOC"], correct: 1 }
    ],
    culture: [
        { question: "Хто написав «Кобзар»?", answers: ["Іван Франко", "Тарас Шевченко", "Леся Українка"], correct: 1 },
        { question: "Який інструмент має клавіші?", answers: ["Скрипка", "Піаніно", "Флейта"], correct: 1 },
        { question: "Що таке театр?", answers: ["Вид спорту", "Вид мистецтва", "Наука"], correct: 1 },
        { question: "Автор «Ромео і Джульєтти»:", answers: ["Данте", "Шекспір", "Мольєр"], correct: 1 },
        { question: "Який жанр належить до живопису?", answers: ["Пейзаж", "Сонет", "Симфонія"], correct: 0 },
        { question: "Національний символ України:", answers: ["Тризуб", "Лев", "Орел"], correct: 0 },
        { question: "Який танець є українським народним?", answers: ["Вальс", "Гопак", "Танго"], correct: 1 },
        { question: "Що таке скульптура?", answers: ["Малюнок", "Об’ємне мистецтво", "Вірш"], correct: 1 },
        { question: "Хто написав «Лісову пісню»?", answers: ["Ольга Кобилянська", "Леся Українка", "Марко Вовчок"], correct: 1 },
        { question: "Який жанр кіно має вигадані події?", answers: ["Документальний", "Художній", "Освітній"], correct: 1 },
        { question: "Що таке музей?", answers: ["Магазин", "Сховище мистецтва", "Театр"], correct: 1 },
        { question: "Який стиль мистецтва пов’язаний із античністю?", answers: ["Бароко", "Класицизм", "Модерн"], correct: 1 },
        { question: "Хто є автором Мони Лізи?", answers: ["Мікеланджело", "Леонардо да Вінчі", "Рафаель"], correct: 1 },
        { question: "Що таке симфонія?", answers: ["Картина", "Музичний твір", "Танок"], correct: 1 },
        { question: "Який колір відсутній у прапорі України?", answers: ["Синій", "Жовтий", "Червоний"], correct: 2 }
    ]
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let selectedQuestions = [];
let selectedQuestionCount = 0;
let startTime = 0;
let currentTopic = 'mix';
let currentQuizTitle = 'Квіз';

document.addEventListener('DOMContentLoaded', function() {
    
    currentTopic = sessionStorage.getItem('selectedTopic') || 'mix';

    let quizDatabase = { ...baseQuizDatabase };
    
    try {
        const customQuizzes = JSON.parse(localStorage.getItem('customQuizzes') || '[]');
        customQuizzes.forEach(cq => {
            quizDatabase[cq.id] = cq.data;
        });
    } catch (e) {
        console.error("Помилка завантаження кастомних квізів:", e);
    }

    let currentQuestions = quizDatabase[currentTopic];

    if (!currentQuestions) {
        console.warn(`Тема "${currentTopic}" не знайдена, перемикаємо на 'mix'`);
        currentQuestions = quizDatabase['mix'];
        currentTopic = 'mix';
    }

    const titles = {
        'history': 'Історія Світу та України',
        'science': 'Наука та Природа',
        'tech': 'Технології та IT',
        'culture': 'Культура та Мистецтво',
        'mix': 'Загальний мікс'
    };

    if (titles[currentTopic]) {
        currentQuizTitle = titles[currentTopic];
    } else {
        const customQuizzes = JSON.parse(localStorage.getItem('customQuizzes') || '[]');
        const foundCustom = customQuizzes.find(q => q.id === currentTopic);
        
        if (foundCustom) {
            currentQuizTitle = foundCustom.title;
        } else {
            currentQuizTitle = sessionStorage.getItem('customQuizTitle') || 'Квіз';
        }
    }

    const h1 = document.querySelector('h1');
    if (h1) h1.textContent = currentQuizTitle;
    
    const questionSelector = document.getElementById('questionSelector');
    const startQuizBtn = document.getElementById('startQuizBtn');
    const form = document.getElementById('quizForm');
    const nameInput = document.getElementById('playerName');
    
    const questionOptionsContainer = document.querySelector('.question-options');
    const questionOptions = document.querySelectorAll('.question-option');
    const optionsTitle = document.querySelector('#questionSelector h3');

    const isCustomQuiz = currentTopic.startsWith('custom_');

    if (isCustomQuiz) {
        
        questionOptionsContainer.style.display = 'none';
        
        if (optionsTitle) {
            optionsTitle.innerHTML = `📝 Цей квіз містить <strong>${currentQuestions.length}</strong> питань`;
            optionsTitle.style.marginBottom = '20px';
        }

        selectedQuestionCount = currentQuestions.length;
        
        startQuizBtn.disabled = false;

    } else {
        
        questionOptions.forEach(option => {
            const count = parseInt(option.dataset.count);
            if (currentQuestions.length < count) {
                option.style.display = 'none';
            }

            option.addEventListener('click', function() {
                questionOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                selectedQuestionCount = parseInt(this.dataset.count);
                startQuizBtn.disabled = false;
            });
        });

        if (currentQuestions.length < 3) {
            selectedQuestionCount = currentQuestions.length;
            startQuizBtn.disabled = false;
        }
    }

    startQuizBtn.addEventListener('click', function() {
        const playerName = nameInput.value.trim();
        if (playerName === '') {
            alert('⚠️ Будь ласка, введіть ваше ім\'я!');
            nameInput.focus();
            return;
        }

        if (selectedQuestionCount === 0) {
            alert('⚠️ Будь ласка, оберіть кількість питань!');
            return;
        }
        
        sessionStorage.setItem('quizPlayerName', playerName);

        questionSelector.classList.add('hidden');
        form.classList.remove('hidden');
        
       
        selectedQuestions = shuffle([...currentQuestions]).slice(0, selectedQuestionCount);
        
        startQuiz();
    });

    function startQuiz() {
        form.innerHTML = '';
        startTime = Date.now();
        
        const timerDiv = document.createElement('div');
        timerDiv.classList.add('quiz-timer');
        document.body.appendChild(timerDiv);
        
        const timerInterval = setInterval(function() {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            timerDiv.textContent = `⏱️ Час: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
        
        const progressDiv = document.createElement('div');
        progressDiv.classList.add('quiz-progress');
        form.appendChild(progressDiv);

        function updateProgress() {
            let answered = 0;
            for (let i = 0; i < selectedQuestions.length; i++) {
                if (form.querySelector(`input[name="q${i}"]:checked`)) {
                    answered++;
                }
            }
            progressDiv.textContent = `📝 Питання ${answered} з ${selectedQuestions.length}`;
        }
        
        selectedQuestions.forEach(function(q, i) {
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.textContent = `Питання ${i + 1}: ${q.question}`;
            div.appendChild(h3);
            
            q.answers.forEach(function(answer, j) {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `q${i}`;
                input.value = j;
                input.addEventListener('change', updateProgress);
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + answer));
                div.appendChild(label);
            });
            
            form.appendChild(div);
        });
        
        updateProgress();
        
        const finishBtn = document.createElement('button');
        finishBtn.type = 'button';
        finishBtn.textContent = 'Завершити тест';
        finishBtn.classList.add('quiz-finish-btn');

        finishBtn.onclick = function() {
            let answered = 0;
            let score = 0;
            
            for (let i = 0; i < selectedQuestions.length; i++) {
                const selected = form.querySelector(`input[name="q${i}"]:checked`);
                if (selected) {
                    answered++;
                    if (parseInt(selected.value) === selectedQuestions[i].correct) {
                        score++;
                    }
                }
            }
            
            if (answered < selectedQuestions.length) {
                alert('⚠️ Будь ласка, дайте відповідь на всі питання!');
                return;
            }
            
            clearInterval(timerInterval);
            if(document.body.contains(timerDiv)) {
                timerDiv.remove();
            }
            
            const timeSpentSeconds = Math.floor((Date.now() - startTime) / 1000);
            
            const currentResult = {
                quizTopic: currentTopic,
                quizTitle: currentQuizTitle,
                name: sessionStorage.getItem('quizPlayerName'),
                score: score,
                maxScore: selectedQuestions.length,
                timeSpent: timeSpentSeconds,
                date: new Date().toLocaleString('uk-UA')
            };

            sessionStorage.setItem('quizResults', JSON.stringify(currentResult));
            
            let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
            history.push(currentResult);
            localStorage.setItem('quizHistory', JSON.stringify(history));
            
            window.location.href = 'result.html'; 
        };
        
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('quiz-btn-container');
        btnContainer.appendChild(finishBtn);
        form.appendChild(btnContainer);
    }
});
