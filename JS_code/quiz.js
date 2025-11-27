const allQuestions = [
    {
        question: "Why did you enter KPI?",
        answers: ["I don't know", "Я не знаю", "Тому що це найкращий технічний університет України"],
        correct: 2
    },
    {
        question: "Do you love to study in KPI?",
        answers: ["Yes", "Of course", "Nuhhhh"],
        correct: 0
    },
    {
        question: "Do you love My Little Pony?",
        answers: ["Yes", "No", "Maybe"],
        correct: 0
    },
    {
        question: "Who is your favourite teacher?",
        answers: ["Пономаренко", "Туганських", "Колосова"],
        correct: 0
    },
    {
        question: "When Second World War was?",
        answers: ["1914-1918", "1939-1945", "988-1014"],
        correct: 1
    },
    {
        question: "What is the capital of Ukraine?",
        answers: ["Kyiv", "Lviv", "Odesa"],
        correct: 0
    },
    {
        question: "How many days in a week?",
        answers: ["5", "7", "10"],
        correct: 1
    },
    {
        question: "What color is the sky?",
        answers: ["Blue", "Green", "Red"],
        correct: 0
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: ["Venus", "Mercury", "Mars"],
        correct: 1
    },
    {
        question: "How many continents are there?",
        answers: ["5", "6", "7"],
        correct: 2
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//Select 5 random questions
let selectedQuestions = shuffle([...allQuestions]).slice(0, 5);

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('quizForm');
    form.innerHTML = '';
    
    const startTime = Date.now();
    
    const timerDiv = document.createElement('div');
    timerDiv.style.position = 'fixed';
    timerDiv.style.top = '10px';
    timerDiv.style.right = '10px';
    timerDiv.style.padding = '15px';
    timerDiv.style.background = 'rgba(154, 238, 232, 0.9)';
    timerDiv.style.borderRadius = '10px';
    timerDiv.style.fontSize = '18px';
    timerDiv.style.fontWeight = 'bold';
    timerDiv.style.zIndex = '1000';
    document.body.appendChild(timerDiv);
    
    setInterval(function() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timerDiv.textContent = `⏱️ Час: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
    
    const progressDiv = document.createElement('div');
    progressDiv.style.textAlign = 'center';
    progressDiv.style.padding = '15px';
    progressDiv.style.background = '#f0f0f0';
    progressDiv.style.borderRadius = '10px';
    progressDiv.style.margin = '20px 0';
    progressDiv.style.fontSize = '18px';
    progressDiv.style.fontWeight = 'bold';
    form.appendChild(progressDiv);
    
    function updateProgress() {
        let answered = 0;
        for (let i = 0; i < selectedQuestions.length; i++) {
            if (form.querySelector(`input[name="q${i}"]:checked`)) {
                answered++;
            }
        }
        progressDiv.textContent = `📝 Відповіли на ${answered} з ${selectedQuestions.length} питань`;
        progressDiv.style.color = answered === selectedQuestions.length ? 'green' : '#e74c3c';
    }
    
    //Create question
    selectedQuestions.forEach(function(q, i) {
        
        const div = document.createElement('div');
        
        const h3 = document.createElement('h3');
        h3.textContent = `Question ${i + 1}: ${q.question}`;
        div.appendChild(h3);
        
    //Answers
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
            div.appendChild(document.createElement('br'));
        });
        
        form.appendChild(div);
        
        if (i < selectedQuestions.length - 1) {
            form.appendChild(document.createElement('hr'));
        }
    });
    
    updateProgress();
    
    //End button
    const finishBtn = document.createElement('button');
    finishBtn.type = 'button';
    finishBtn.textContent = 'Finish and see a right answer!';
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
        
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        
        sessionStorage.setItem('quizResults', JSON.stringify({
            score: score,
            maxScore: selectedQuestions.length,
            timeSpent: timeSpent
        }));
        
        window.location.href = 'result.html';
    };
    
    const btnContainer = document.createElement('div');
    btnContainer.style.textAlign = 'center';
    btnContainer.style.marginTop = '30px';
    
    const btnLink = document.createElement('a');
    btnLink.appendChild(finishBtn);
    btnContainer.appendChild(btnLink);
    
    form.appendChild(btnContainer);
    
});
