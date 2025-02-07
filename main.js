document.addEventListener('DOMContentLoaded', function () {
    const modeSelect = document.getElementById('mode');
    const question = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.syl');

    let currentMode = modeSelect.value;

    let correctAnswer = ''; // Define correct answer logic based on mode
    let userAnswer = ''; // Define user answer logic based on mode
    let syllable = ''; // Define syllable logic based on mode
    let number = 0; // Define number logic based on mode

    function updateQuestion() {
        if (currentMode === 'sino') {
            question.textContent = 'Enter the Sino-Korean number:';
        } else if (currentMode === 'pure') {
            question.textContent = 'Enter the Pure Korean number:';
        }
    }

    function insertAtCursor(inputElement, text) {
        const startPos = inputElement.selectionStart;
        const endPos = inputElement.selectionEnd;

        // Insert text at the current cursor position
        inputElement.value = inputElement.value.substring(0, startPos) + text + inputElement.value.substring(endPos);

        // Move the cursor after the inserted text
        inputElement.selectionStart = inputElement.selectionEnd = startPos + text.length;
        inputElement.focus();
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const syllable = button.getAttribute('data-value');
            insertAtCursor(answerInput, syllable);
        });
    });

    submitButton.addEventListener('click', function () {
        const userAnswer = answerInput.value.trim();
        let correctAnswer = ''; // Define correct answer logic based on mode

        if (currentMode === 'sino') {
            correctAnswer = '삼'; // Example Sino-Korean number for "3"
        } else if (currentMode === 'pure') {
            correctAnswer = '셋'; // Example Pure Korean number for "3"
        }

        if (userAnswer === correctAnswer) {
            feedback.textContent = 'Correct!';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = 'Incorrect, try again!';
            feedback.style.color = 'red';
        }
    });

    // Listen for changes in the select menu to update the mode
    modeSelect.addEventListener('change', function () {
        currentMode = modeSelect.value;
        updateQuestion();
    });

    // Initialize the question based on the default mode
    updateQuestion();
});
