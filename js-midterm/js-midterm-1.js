const riddles = [
    { question: "What has to be broken before you can use it?", answer: "egg" },
    { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "candle" },
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "What has a neck but no head?", answer: "bottle" },
    { question: "What is full of holes but still holds water?", answer: "sponge" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
    { question: "The more of this there is, the less you see. What is it?", answer: "darkness" },
    { question: "What can travel around the world while staying in a corner?", answer: "stamp" },
    { question: "What has a thumb and four fingers but is not alive?", answer: "glove" },
    { question: "What can you catch but not throw?", answer: "cold" }
  ];
  let firstInteraction = true;
  let currentRiddleIndex = Math.floor(Math.random() * riddles.length);
  
  document.getElementById('volumeSlider').addEventListener('input', function() {
    if (firstInteraction) {
      this.value = 50;  
      showRiddle();
      firstInteraction = false; 
    } else {
      document.getElementById('volumeValue').textContent = this.value + '%';
    }
  });
  
  document.getElementById('answerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userAnswer = document.getElementById('riddleAnswer').value.toLowerCase().trim();
    if (userAnswer === riddles[currentRiddleIndex].answer) {
      showFeedback("Congratulations! You may now change the volume.", 3000, true);
    } else {
      showFeedback("Sorry, not today!", 5000, false);
    }
  });
  
  function showRiddle() {
    document.getElementById('riddleText').textContent = riddles[currentRiddleIndex].question;
    document.getElementById('riddlePopup').style.display = 'block';
  }
  
  function showFeedback(message, duration, correct) {
    document.getElementById('feedbackMessage').textContent = message;
    document.getElementById('feedbackScreen').style.display = 'block';
    setTimeout(() => {
      document.getElementById('feedbackScreen').style.display = 'none';
      if (correct) {
        document.getElementById('riddlePopup').style.display = 'none';
      } else {
        currentRiddleIndex = Math.floor(Math.random() * riddles.length);
        showRiddle();
      }
    }, duration);
  }
  