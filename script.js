// Global variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let quizTimer = 0;
let timerInterval;

// Constants
const CATEGORIES = {
    'sorting': 'Sorting Algorithms',
    'searching': 'Searching Algorithms',
    'complexity': 'Time & Space Complexity',
    'datastructures': 'Data Structures'
};

// Error handling function
function showError(message) {
    console.log('Error: ' + message);
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
        setTimeout(() => {
            errorDiv.classList.remove('show');
        }, 10000);
    }
}

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Quiz initialized');
    
    // Check if questions data is available
    if (typeof questionsData === 'undefined') {
        showError('حدث خطأ في تحميل الأسئلة. برجاء تحديث الصفحة');
        return;
    }
    
    console.log('Questions data loaded successfully');
    console.log(`MCQ Questions: ${questionsData.mcqQuestions.length}`);
    console.log(`True/False Questions: ${questionsData.trueFalseQuestions.length}`);

    // Add event listeners
    const selects = ['questionCount', 'questionType', 'difficultyLevel'];
    selects.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', validateSetup);
        }
    });

    const prepareButton = document.getElementById('prepare-button');
    if (prepareButton) {
        prepareButton.addEventListener('click', function(e) {
            e.preventDefault();
            prepareQuiz();
        });
    }

    const startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.addEventListener('click', function(e) {
            e.preventDefault();
            startQuiz();
        });
    }

    // Initialize the quiz
    initializeSetup();
});

// Initialize setup
function initializeSetup() {
    try {
        console.log('Initializing setup');
        
        const setupContainer = document.getElementById('setup-container');
        if (!setupContainer) {
            throw new Error('Setup container not found');
        }
        
        // Reset all states
        currentQuestions = [];
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizTimer = 0;
        if (timerInterval) clearInterval(timerInterval);
        
        // Reset UI
        const prepareButton = document.getElementById('prepare-button');
        prepareButton.classList.add('disabled');
        prepareButton.disabled = true;
        
        const startButton = document.getElementById('start-button');
        startButton.classList.add('hidden');
        startButton.disabled = true;
        
        // Reset form values
        document.getElementById('questionCount').value = '';
        document.getElementById('questionType').value = '';
        document.getElementById('difficultyLevel').value = '';
        
        // Reset timer display
        document.getElementById('timer').textContent = '00:00';
        
        // Show setup container, hide others
        setupContainer.classList.remove('hidden');
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('results').classList.add('hidden');
        document.getElementById('answers-review').classList.add('hidden');
        
        // Set initial step
        document.getElementById('step1').classList.add('active');
        document.getElementById('step2').classList.remove('active');
        document.getElementById('step3').classList.remove('active');
        
        console.log('Setup initialized successfully');
    } catch (error) {
        console.log('Setup initialization error: ' + error.message);
        showError('Failed to initialize quiz: ' + error.message);
    }
}

// Validate setup
function validateSetup() {
    try {
        console.log('Validating setup');
        
    const questionCount = document.getElementById('questionCount').value;
    const questionType = document.getElementById('questionType').value;
        const difficultyLevel = document.getElementById('difficultyLevel').value;
    const prepareButton = document.getElementById('prepare-button');
    
        console.log(`Values - Count: ${questionCount}, Type: ${questionType}, Difficulty: ${difficultyLevel}`);
        
        if (questionCount && questionType && difficultyLevel) {
            console.log('All fields are filled - enabling prepare button');
        prepareButton.classList.remove('disabled');
        prepareButton.disabled = false;
    } else {
            console.log('Some fields are missing - disabling prepare button');
        prepareButton.classList.add('disabled');
        prepareButton.disabled = true;
        }
    } catch (error) {
        console.log('Validation error: ' + error.message);
        showError('Error validating setup: ' + error.message);
    }
}

// Select questions
function selectQuestions() {
    try {
        const questionCountValue = document.getElementById('questionCount').value;
    const questionType = document.getElementById('questionType').value;
        const difficultyLevel = document.getElementById('difficultyLevel').value;
        
        let selectedQuestions = [];
        
        if (questionType === 'mcq') {
            selectedQuestions = [...questionsData.mcqQuestions];
        } else if (questionType === 'tf') {
            selectedQuestions = [...questionsData.trueFalseQuestions];
        } else {
            selectedQuestions = [
                ...questionsData.mcqQuestions,
                ...questionsData.trueFalseQuestions
            ];
        }
        
        // Filter by difficulty if specified
        if (difficultyLevel && difficultyLevel !== 'all') {
            selectedQuestions = selectedQuestions.filter(q => q.difficulty === difficultyLevel);
        }
        
        const questionCount = questionCountValue === 'all' ? 
            selectedQuestions.length : parseInt(questionCountValue);
        
        if (selectedQuestions.length < questionCount) {
            throw new Error(`Not enough questions available (${selectedQuestions.length} available, ${questionCount} requested)`);
        }
        
        // Take first N questions without shuffling
        return selectedQuestions
            .slice(0, questionCount)
            .map(q => ({
                ...q,
                // Keep options in original order
                options: [...q.options]
            }));
    } catch (error) {
        console.log('Error selecting questions: ' + error.message);
        showError(error.message);
        return [];
    }
}

// Show question
function showQuestion() {
    try {
    const question = currentQuestions[currentQuestionIndex];
        if (!question) {
            throw new Error('Question not found');
        }
        
    const container = document.querySelector('.question-container');
        if (!container) {
            throw new Error('Question container not found');
        }
    
    container.innerHTML = `
        <div class="question-header">
            <div class="question-info">
                    <span class="question-number">
                        Question ${currentQuestionIndex + 1} of ${currentQuestions.length}
                </span>
                    <span class="difficulty-badge ${question.difficulty}">
                        ${question.difficulty.toUpperCase()}
                    </span>
            </div>
            <h2 class="question-text">${question.question}</h2>
        </div>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option" onclick="selectAnswer(${index})" data-index="${index}">
                        <span class="option-letter code-font">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text ${option.includes('O(') ? 'code-font' : ''}">${option}</span>
                </button>
                `).join('')}
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: ${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%"></div>
        </div>
    `;
    
        // Add click event listeners to options
        const options = container.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                selectAnswer(index);
            });
        });
    } catch (error) {
        console.log('Error showing question: ' + error.message);
        showError('Error showing question: ' + error.message);
    }
}

// Start quiz
function startQuiz() {
    try {
        console.log('Starting quiz');
        
        if (!currentQuestions || currentQuestions.length === 0) {
            throw new Error('No questions available to start the quiz');
        }
        
        console.log('Updating UI elements');
        document.getElementById('step2').classList.remove('active');
        document.getElementById('step3').classList.add('active');
        
        document.getElementById('setup-container').classList.add('hidden');
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.classList.remove('hidden');
        
        console.log('UI updated successfully');
        
        score = 0;
        currentQuestionIndex = 0;
        userAnswers = [];
        
        console.log('Quiz state reset');
        console.log('Starting timer and showing first question');
        
        startTimer();
        showQuestion();
        
        console.log('Quiz started successfully');
    } catch (error) {
        console.log('Error starting quiz: ' + error.message);
        showError('Error starting quiz: ' + error.message);
    }
}

// Prepare quiz
function prepareQuiz() {
    try {
        console.log('Preparing quiz');
        
        const questionCount = document.getElementById('questionCount').value;
        const questionType = document.getElementById('questionType').value;
        const difficultyLevel = document.getElementById('difficultyLevel').value;
        
        console.log(`Selected options - Count: ${questionCount}, Type: ${questionType}, Difficulty: ${difficultyLevel}`);
        
        if (!questionCount || !questionType || !difficultyLevel) {
            throw new Error('Please select all options before preparing the quiz');
        }
        
        document.getElementById('step1').classList.remove('active');
        document.getElementById('step2').classList.add('active');
        
        console.log('Steps updated - Step 1 deactivated, Step 2 activated');
        
        const prepareButton = document.getElementById('prepare-button');
        prepareButton.style.display = 'none';
        console.log('Prepare button hidden');
        
        const startButton = document.getElementById('start-button');
        startButton.classList.remove('hidden');
        startButton.classList.remove('disabled');
        startButton.disabled = false;
        console.log('Start button enabled and shown');
        
        currentQuestions = selectQuestions();
        console.log(`Selected ${currentQuestions.length} questions`);
        
        if (currentQuestions.length === 0) {
            throw new Error('No questions selected');
        }
        
        console.log('Quiz prepared successfully');
    } catch (error) {
        console.log('Error preparing quiz: ' + error.message);
        showError('Error preparing quiz: ' + error.message);
        // Reset UI on error
        document.getElementById('step1').classList.add('active');
        document.getElementById('step2').classList.remove('active');
        document.getElementById('prepare-button').style.display = 'block';
        document.getElementById('start-button').classList.add('hidden');
    }
}

// Select answer
function selectAnswer(index) {
    try {
        const question = currentQuestions[currentQuestionIndex];
        const selectedOption = question.options[index];
        const isCorrect = selectedOption === question.answer;
        
        // Disable all options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.disabled = true;
            option.style.pointerEvents = 'none';
            if (option.textContent.includes(question.answer)) {
                option.classList.add('correct');
            }
        });
        
        // Highlight selected option
        options[index].classList.add(isCorrect ? 'correct' : 'incorrect');
        
        // Show feedback
        showAnswerFeedback(isCorrect, selectedOption, question.answer);
        
        // Update score
        if (isCorrect) {
            score++;
        }
        
        // Save answer
        userAnswers.push({
            question: question.question,
            userAnswer: selectedOption,
            correctAnswer: question.answer,
            isCorrect: isCorrect
        });
        
        // Wait for feedback animation before moving to next question
        setTimeout(() => {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                showResults();
            }
        }, 2000);
    } catch (error) {
        showError('Error processing answer: ' + error.message);
    }
}

// Helper functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleOptions(question) {
    if (!question.options) return question;
    
    const correctAnswer = question.answer;
    const shuffledOptions = shuffleArray([...question.options]);
    
    return {
        ...question,
        options: shuffledOptions,
        answer: correctAnswer
    };
}

// Timer functions
function startTimer() {
    quizTimer = 0;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        quizTimer++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(quizTimer / 60);
    const seconds = quizTimer % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Results functions
function showResults() {
    try {
        stopTimer();
        const percentage = calculateScore();
    const resultsContainer = document.getElementById('results');
    
    resultsContainer.innerHTML = `
        <div class="results-container">
            <div class="results-header">
                <div class="trophy-animation">
                        ${percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : '📚'}
                </div>
                    <h2>Quiz Results</h2>
            </div>
            
                <div class="score-circle">
                    <div class="score-number">${percentage.toFixed(1)}%</div>
                    <div class="score-label">${getScoreMessage(percentage)}</div>
            </div>

            <div class="stats-grid">
                <div class="stat-card correct">
                    <i class="fas fa-check-circle"></i>
                    <div class="stat-number">${score}</div>
                        <div class="stat-label">Correct Answers</div>
                </div>
                <div class="stat-card incorrect">
                    <i class="fas fa-times-circle"></i>
                    <div class="stat-number">${currentQuestions.length - score}</div>
                        <div class="stat-label">Incorrect Answers</div>
                </div>
            </div>

            <div class="action-buttons">
                <button class="button primary-button" onclick="showAnswersReview()">
                    <i class="fas fa-list"></i>
                        Review Answers
                </button>
                <button class="button secondary-button" onclick="restartQuiz()">
            <i class="fas fa-redo"></i>
                        Restart Quiz
        </button>
        </div>
        </div>
    `;
    
    document.getElementById('quiz-container').classList.add('hidden');
        resultsContainer.classList.remove('hidden');
    } catch (error) {
        showError('Error showing results: ' + error.message);
    }
}

function calculateScore() {
    return (score / currentQuestions.length) * 100;
}

function getScoreMessage(percentage) {
    if (percentage >= 90) return 'Expert Level!';
    if (percentage >= 80) return 'Advanced!';
    if (percentage >= 70) return 'Intermediate!';
    if (percentage >= 60) return 'Basic Level';
    return 'Keep Learning';
}

// Feedback functions
function showAnswerFeedback(isCorrect, selectedOption, correctAnswer) {
    try {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `feedback-popup ${isCorrect ? 'correct' : 'incorrect'}`;
        
        feedbackDiv.innerHTML = `
            <div class="feedback-content">
                <div class="feedback-icon">
                    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        </div>
                <div class="feedback-text">
                    <h3>${isCorrect ? 'Excellent!' : 'Not Quite Right'}</h3>
                    <p>${isCorrect ? 
                        'Great job! Keep going!' : 
                        `The correct answer is: ${correctAnswer}`}</p>
        </div>
        </div>
    `;
    
        document.body.appendChild(feedbackDiv);
        
        setTimeout(() => {
            feedbackDiv.classList.add('show');
        }, 10);
        
    if (isCorrect) {
            createConfetti();
        }
        
        setTimeout(() => {
            feedbackDiv.classList.remove('show');
            setTimeout(() => {
                feedbackDiv.remove();
            }, 300);
        }, 2000);
    } catch (error) {
        showError('Error showing feedback: ' + error.message);
    }
}

function createConfetti() {
    try {
        const colors = ['#2ecc71', '#3498db', '#e74c3c', '#f1c40f', '#9b59b6'];
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.opacity = Math.random();
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }
    } catch (error) {
        console.error('Error creating confetti:', error);
    }
}

// Show answers review
function showAnswersReview() {
    const reviewContainer = document.getElementById('answers-review');
    
    reviewContainer.innerHTML = `
        <div class="review-container">
            <h2>Answers Review</h2>
            <div class="review-list">
                ${userAnswers.map((answer, index) => `
        <div class="review-item ${answer.isCorrect ? 'correct' : 'incorrect'}">
                        <div class="question-number">Question ${index + 1}</div>
                        <div class="question-text">${answer.question}</div>
                        <div class="answer-details">
                <div class="user-answer">
                                Your answer: ${answer.userAnswer}
                                <i class="fas ${answer.isCorrect ? 'fa-check' : 'fa-times'}"></i>
                </div>
                ${!answer.isCorrect ? `
                    <div class="correct-answer">
                                    Correct answer: ${answer.correctAnswer}
                    </div>
                ` : ''}
            </div>
        </div>
                `).join('')}
            </div>
            <button class="button secondary-button" onclick="hideAnswersReview()">
                <i class="fas fa-times"></i>
                Close Review
            </button>
        </div>
    `;
    
    document.getElementById('results').classList.add('hidden');
    reviewContainer.classList.remove('hidden');
}

// Hide answers review
function hideAnswersReview() {
    document.getElementById('answers-review').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
}

// Restart quiz
function restartQuiz() {
    document.getElementById('results').classList.add('hidden');
    document.getElementById('answers-review').classList.add('hidden');
    document.getElementById('setup-container').classList.remove('hidden');
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
    
    initializeSetup();
}

// Add styles for feedback and animations
const style = document.createElement('style');
style.textContent = `
    .feedback-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
    background: white;
        padding: 20px;
    border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .feedback-popup.show {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    
    .feedback-content {
    display: flex;
    align-items: center;
        gap: 15px;
    }
    
    .feedback-icon {
        font-size: 2rem;
    }
    
    .feedback-popup.correct .feedback-icon {
        color: #4CAF50;
    }
    
    .feedback-popup.incorrect .feedback-icon {
        color: #f44336;
    }
    
    .confetti {
        position: fixed;
        top: -10px;
        width: 10px;
        height: 10px;
        animation: fall linear forwards;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    .difficulty-badge {
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
    font-weight: bold;
    }
    
    .difficulty-badge.easy {
        background: #4CAF50;
        color: white;
    }
    
    .difficulty-badge.medium {
        background: #FF9800;
        color: white;
    }
    
    .difficulty-badge.hard {
        background: #f44336;
        color: white;
    }
    
    .progress-bar {
        width: 100%;
        height: 6px;
        background: #e0e0e0;
        border-radius: 3px;
        margin-top: 20px;
    }
    
    .progress {
        height: 100%;
        background: var(--primary-gradient);
        border-radius: 3px;
        transition: width 0.3s ease;
    }
    
    .option {
        position: relative;
        overflow: hidden;
    }
    
    .option::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
        transform: translateX(-100%);
    }
    
    .option:hover::after {
        transform: translateX(100%);
        transition: transform 0.5s ease;
    }
`;

document.head.appendChild(style);

// Add visualization functions
function visualizeArray(array, container) {
    container.innerHTML = '';
    array.forEach((value, index) => {
        const node = document.createElement('div');
        node.className = 'node';
        node.textContent = value;
        container.appendChild(node);
    });
}

function visualizeComplexity(type, container) {
    container.innerHTML = '';
    const graph = document.createElement('div');
    graph.className = 'complexity-graph';
    
    const line = document.createElement('div');
    line.className = 'complexity-line';
    
    switch(type) {
        case 'O(1)':
            line.style.height = '20px';
            break;
        case 'O(log n)':
            line.style.height = '40%';
            line.style.transform = 'scale(1, 0.6)';
            break;
        case 'O(n)':
            line.style.height = '60%';
            line.style.transform = 'rotate(45deg)';
            break;
        case 'O(n log n)':
            line.style.height = '75%';
            line.style.transform = 'scale(1, 0.8)';
            break;
        case 'O(n²)':
            line.style.height = '100%';
            line.style.transform = 'scale(1, 1)';
            break;
    }
    
    graph.appendChild(line);
    container.appendChild(graph);
}

// Helper function to get category icon
function getCategoryIcon(category) {
    switch(category) {
        case 'sorting':
            return 'fa-sort';
        case 'searching':
            return 'fa-search';
        case 'complexity':
            return 'fa-chart-line';
        case 'datastructures':
            return 'fa-project-diagram';
        default:
            return 'fa-code';
    }
}

// Helper function for data structure visualization
function getDataStructureVisualization(type) {
    switch(type) {
        case 'array':
            return Array(5).fill(0).map((_, i) => `
                <div class="node">${i}</div>
            `).join('');
        case 'linkedlist':
            return Array(3).fill(0).map((_, i) => `
                <div class="node">${i}</div>
            `).join('');
        case 'tree':
            return `
                <div class="node">1</div>
                <div class="node">2</div>
                <div class="node">3</div>
            `;
        default:
            return '<div class="node">?</div>';
    }
}
