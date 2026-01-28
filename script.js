// ===== VARIABLES GLOBALES =====
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let startTime = new Date();
let timerInterval;
let currentQuestions = [...questions]; // Questions filtrées
let currentCategory = "all";

// Statistiques
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;

// Éléments DOM
const questionText = document.getElementById('questionText');
const questionImage = document.getElementById('questionImage');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackContainer = document.getElementById('feedbackContainer');
const feedbackText = document.getElementById('feedbackText');
const nextButton = document.getElementById('nextButton');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progressBar');
const currentQuestionElement = document.getElementById('currentQuestion');
const totalQuestionsElement = document.getElementById('totalQuestions');
const restartButton = document.getElementById('restartButton');
const timerElement = document.getElementById('timer');
const resultMessage = document.getElementById('resultMessage');
const resultsContainer = document.getElementById('resultsContainer');
const quizMain = document.querySelector('.quiz-main');
const categoryButtons = document.querySelectorAll('.category-btn');
const chapterIndicator = document.getElementById('chapterIndicator');
const chapterName = document.getElementById('chapterName');
const questionNumber = document.getElementById('questionNumber');
const hintButton = document.getElementById('hintButton');
const helpModal = document.getElementById('helpModal');
const closeModal = document.getElementById('closeModal');
const restartQuizButton = document.getElementById('restartQuizButton');
const showSummaryButton = document.getElementById('showSummaryButton');
const summaryContainer = document.getElementById('summaryContainer');
const summaryContent = document.getElementById('summaryContent');
const backToResults = document.getElementById('backToResults');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const finalScore = document.getElementById('finalScore');
const finalTime = document.getElementById('finalTime');
const percentageText = document.getElementById('percentageText');
const percentageCircle = document.querySelector('.circle-progress');
const quickCorrect = document.getElementById('quickCorrect');
const quickIncorrect = document.getElementById('quickIncorrect');

// ===== INITIALISATION =====
function initQuiz() {
    totalQuestionsElement.textContent = questions.length;
    organizeQuestionsByCategory();
    startTimer();
    loadQuestion();
    
    // Événements
    nextButton.addEventListener('click', nextQuestion);
    restartButton.addEventListener('click', restartQuiz);
    hintButton.addEventListener('click', showHelpModal);
    closeModal.addEventListener('click', closeHelpModal);
    restartQuizButton.addEventListener('click', restartQuiz);
    showSummaryButton.addEventListener('click', showSummary);
    backToResults.addEventListener('click', backToResultsHandler);
    
    // Catégories
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            selectCategory(category);
        });
    });
    
    // Clic en dehors du modal pour fermer
    window.addEventListener('click', (e) => {
        if (e.target === helpModal) {
            closeHelpModal();
        }
    });
    
    // Mettre à jour les statistiques rapides
    updateQuickStats();
}

// Organiser les questions par catégorie
function organizeQuestionsByCategory() {
    // Les questions sont déjà organisées par catégorie dans le tableau
    currentQuestions = [...questions];
}

// Sélectionner une catégorie
function selectCategory(category) {
    currentCategory = category;
    
    // Mettre à jour les boutons actifs
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Filtrer les questions
    if (category === 'all') {
        currentQuestions = [...questions];
    } else {
        currentQuestions = questions.filter(q => q.category === category);
    }
    
    // Redémarrer le quiz avec les nouvelles questions
    restartQuiz();
}

// ===== FONCTIONS PRINCIPALES =====

// Charger une question
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    
    // Mettre à jour l'indicateur de chapitre
    updateChapterIndicator(question.category);
    
    // Texte de la question
    questionText.textContent = question.question;
    questionNumber.textContent = currentQuestionIndex + 1;
    
    // Image (si existante)
    if (question.image) {
        questionImage.innerHTML = `<img src="${question.image}" alt="Illustration de la question">`;
    } else {
        questionImage.innerHTML = '';
    }
    
    // Options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index, optionElement));
        optionsContainer.appendChild(optionElement);
    });
    
    // Masquer le feedback
    feedbackContainer.style.display = 'none';
    
    // Mettre à jour la progression
    updateProgress();
}

// Mettre à jour l'indicateur de chapitre
function updateChapterIndicator(category) {
    const categoryNames = {
        "introduction": "Introduction et concepts de base",
        "localisation": "Localisation de l'information génétique",
        "mitose": "La mitose - Division cellulaire",
        "cycle_cellulaire": "Cycle cellulaire et interphase",
        "experiences": "Expériences historiques fondamentales",
        "structure_adn": "Structure de la molécule d'ADN",
        "chromosomes": "Chromosomes et organisation de la chromatine",
        "replication": "Réplication semi-conservative de l'ADN",
        "synthese": "Synthèse et applications"
    };
    
    chapterName.textContent = categoryNames[category] || "Génétique";
}

// Sélectionner une option
function selectOption(selectedIndex, element) {
    // Désactiver toutes les options
    document.querySelectorAll('.option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    // Marquer la sélection
    element.classList.add('selected');
    
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctAnswer;
    
    // Mettre à jour les statistiques
    if (isCorrect) {
        correctAnswersCount++;
        score += 10;
    } else {
        incorrectAnswersCount++;
    }
    
    // Enregistrer la réponse
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        selected: selectedIndex,
        selectedText: question.options[selectedIndex],
        correct: question.correctAnswer,
        correctText: question.options[question.correctAnswer],
        isCorrect: isCorrect,
        explanation: question.explanation,
        reference: question.reference
    };
    
    // Afficher la bonne réponse
    document.querySelectorAll('.option')[question.correctAnswer].classList.add('correct');
    
    if (!isCorrect) {
        element.classList.add('incorrect');
    }
    
    // Mettre à jour le score
    scoreElement.textContent = score;
    
    // Afficher le feedback
    feedbackText.textContent = question.explanation;
    document.getElementById('referenceText').textContent = question.reference;
    feedbackContainer.style.display = 'block';
    
    // Mettre à jour les statistiques rapides
    updateQuickStats();
    
    // Scroll vers le feedback
    feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Question suivante
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
        
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        endQuiz();
    }
}

// Mettre à jour la barre de progression
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = currentQuestions.length;
}

// Terminer le quiz
function endQuiz() {
    clearInterval(timerInterval);
    
    // Calculer le pourcentage
    const percentage = (correctAnswersCount / currentQuestions.length) * 100;
    const totalTime = Math.floor((new Date() - startTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    
    // Afficher les résultats
    quizMain.innerHTML = '';
    resultsContainer.style.display = 'block';
    
    // Mettre à jour les statistiques
    correctCount.textContent = correctAnswersCount;
    incorrectCount.textContent = incorrectAnswersCount;
    finalScore.textContent = score;
    finalTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    percentageText.textContent = `${percentage.toFixed(1)}%`;
    
    // Animer le cercle de pourcentage
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    percentageCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    percentageCircle.style.strokeDashoffset = offset;
    
    // Message de résultat
    let message = "";
    if (percentage >= 90) {
        message = "🎉 Excellent ! Vous maîtrisez parfaitement le cours de génétique. Vos connaissances sont solides et complètes.";
    } else if (percentage >= 75) {
        message = "👍 Très bon travail ! Vous avez de très bonnes connaissances en génétique. Quelques révisions pour perfectionner.";
    } else if (percentage >= 60) {
        message = "📚 Bon travail ! Vous avez compris les bases. Revoyez les chapitres où vous avez fait des erreurs.";
    } else if (percentage >= 50) {
        message = "📖 Assez bien ! Vous avez les notions de base. Il serait utile de réviser les chapitres difficiles.";
    } else if (percentage >= 30) {
        message = "💡 Des efforts sont nécessaires. Revoyez attentivement le cours PDF et refaites le quiz.";
    } else {
        message = "🔄 Il faut reprendre le cours depuis le début. Prenez le temps de bien comprendre chaque concept.";
    }
    
    resultMessage.textContent = message;
}

// Afficher le récapitulatif
function showSummary() {
    resultsContainer.style.display = 'none';
    summaryContainer.style.display = 'block';
    
    summaryContent.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const question = currentQuestions[index];
        const summaryItem = document.createElement('div');
        summaryItem.className = `summary-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        summaryItem.innerHTML = `
            <h4>Question ${index + 1} : ${question.question}</h4>
            <p><strong>Votre réponse :</strong> <span class="user-answer">${answer.selectedText}</span></p>
            <p><strong>Réponse correcte :</strong> <span class="correct-answer">${answer.correctText}</span></p>
            <p><strong>Explication :</strong> ${answer.explanation}</p>
            <p><strong>Référence :</strong> ${answer.reference}</p>
            <div class="result-indicator">
                ${answer.isCorrect ? 
                    '<span class="correct-indicator"><i class="fas fa-check"></i> Correct</span>' : 
                    '<span class="incorrect-indicator"><i class="fas fa-times"></i> Incorrect</span>'
                }
            </div>
        `;
        
        summaryContent.appendChild(summaryItem);
    });
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Retour aux résultats
function backToResultsHandler() {
    summaryContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
}

// Redémarrer le quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
    startTime = new Date();
    
    // Réinitialiser l'affichage
    scoreElement.textContent = '0';
    resultsContainer.style.display = 'none';
    summaryContainer.style.display = 'none';
    
    // Recréer le contenu principal du quiz
    const mainHTML = `
        <!-- Indicateur de chapitre -->
        <div class="chapter-indicator" id="chapterIndicator">
            <i class="fas fa-bookmark"></i> <span id="chapterName">Introduction</span>
        </div>

        <div class="question-container">
            <div class="question-number">
                <span class="number-circle" id="questionNumber">1</span>
                <div class="question-timer">
                    <i class="fas fa-clock"></i> <span id="timer">00:00</span>
                </div>
            </div>
            
            <h2 id="questionText">Chargement de la question...</h2>
            <div id="questionImage" class="question-image"></div>
        </div>

        <!-- Options de réponse -->
        <div class="options-container" id="optionsContainer">
            <!-- Les options seront générées par JavaScript -->
        </div>

        <!-- Feedback -->
        <div class="feedback-container" id="feedbackContainer">
            <div class="feedback-header">
                <i class="fas fa-lightbulb feedback-icon"></i>
                <h3>Explication</h3>
            </div>
            <p id="feedbackText"></p>
            <div class="feedback-footer">
                <div class="reference">
                    <i class="fas fa-file-pdf"></i>
                    <span id="referenceText">Référence au cours PDF</span>
                </div>
                <button id="nextButton" class="btn-next">
                    Question suivante <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    quizMain.innerHTML = mainHTML;
    
    // Réattacher les événements
    setTimeout(() => {
        // Réinitialiser les références DOM
        questionText = document.getElementById('questionText');
        questionImage = document.getElementById('questionImage');
        optionsContainer = document.getElementById('optionsContainer');
        feedbackContainer = document.getElementById('feedbackContainer');
        feedbackText = document.getElementById('feedbackText');
        nextButton = document.getElementById('nextButton');
        chapterIndicator = document.getElementById('chapterIndicator');
        chapterName = document.getElementById('chapterName');
        questionNumber = document.getElementById('questionNumber');
        timerElement = document.getElementById('timer');
        
        // Réattacher l'événement
        nextButton.addEventListener('click', nextQuestion);
        
        // Redémarrer le timer
        clearInterval(timerInterval);
        startTimer();
        
        // Charger la première question
        loadQuestion();
        
        // Mettre à jour les stats rapides
        updateQuickStats();
        
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

// ===== TIMER =====
function startTimer() {
    startTime = new Date();
    
    timerInterval = setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now - startTime) / 1000);
        
        const minutes = Math.floor(diff / 60);
        const seconds = diff % 60;
        
        if (timerElement) {
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// ===== MODAL D'AIDE =====
function showHelpModal() {
    helpModal.style.display = 'flex';
}

function closeHelpModal() {
    helpModal.style.display = 'none';
}

// ===== STATISTIQUES RAPIDES =====
function updateQuickStats() {
    quickCorrect.textContent = correctAnswersCount;
    quickIncorrect.textContent = incorrectAnswersCount;
}

// ===== INITIALISATION AU CHARGEMENT =====
document.addEventListener('DOMContentLoaded', initQuiz);