// ============================================
// IGCSE English 0500 Learning App
// Main Application Logic
// ============================================

// Global State
const userData = {
  xp: 0,
  level: 1,
  badges: [],
  topicProgress: {},
  questionAttempts: {},
  questionFailures: {},
  streak: 0,
  lastPracticeDate: null,
  mode: 'practice', // 'practice' or 'test'
  timeSpent: {},
  sessionHistory: []
};

let currentTopic = null;
let currentQuestionIndex = 0;
let hintIndex = 0;
let questionsToday = 0;
let sessionStartTime = null;
let questionStartTime = null;
let timerInterval = null;

// Badge Definitions
const badges = [
  { id: 'first_steps', name: 'First Steps', icon: '🎯', req: 'Complete first question' },
  { id: 'paper1_master', name: 'Paper 1 Master', icon: '📖', req: 'Master all Paper 1 topics' },
  { id: 'paper2_master', name: 'Paper 2 Master', icon: '✍️', req: 'Master all Paper 2 topics' },
  { id: 'level_5', name: 'Level 5', icon: '⭐', req: 'Reach Level 5' },
  { id: 'level_10', name: 'Level 10', icon: '🌟', req: 'Reach Level 10' },
  { id: 'level_20', name: 'Level 20', icon: '💫', req: 'Reach Level 20' },
  { id: 'perfectionist', name: 'Perfectionist', icon: '💯', req: 'Score 100% on any topic' },
  { id: 'scholar', name: 'Scholar', icon: '🎓', req: 'Reach 80% overall mastery' },
  { id: 'streak_7', name: 'Week Warrior', icon: '🔥', req: '7 day streak' },
  { id: 'streak_30', name: 'Month Master', icon: '💪', req: '30 day streak' },
  { id: 'speed_demon', name: 'Speed Demon', icon: '⚡', req: 'Complete 10 questions in one day' },
  { id: 'grammar_guru', name: 'Grammar Guru', icon: '📝', req: 'Get 100% grammar score 5 times' },
  { id: 'night_owl', name: 'Night Owl', icon: '🦉', req: 'Practice after 10 PM' },
  { id: 'early_bird', name: 'Early Bird', icon: '🐦', req: 'Practice before 6 AM' },
  { id: 'marathon', name: 'Marathon', icon: '🏃', req: 'Spend 2+ hours in one session' }
];

// Synonym Map for flexible answer matching
const synonymMap = {
  'struggling': ['fighting', 'battling', 'straining', 'struggling', 'having difficulty', 'finding it hard', 'challenged'],
  'heavy': ['weighty', 'massive', 'hefty', 'heavy', 'ponderous', 'substantial', 'burdensome'],
  'weight': ['mass', 'load', 'burden', 'weight', 'heaviness', 'pressure', 'force'],
  'overloaded': ['overburdened', 'overwhelmed', 'overloaded', 'excessive', 'too much', 'loaded'],
  'strain': ['stress', 'pressure', 'tension', 'strain', 'difficulty', 'exertion'],
  'burden': ['load', 'weight', 'responsibility', 'burden', 'encumbrance', 'obligation'],
  'pressure': ['force', 'stress', 'strain', 'pressure', 'compression', 'tension'],
  'nervous': ['anxious', 'worried', 'uneasy', 'nervous', 'tense', 'on edge', 'jittery'],
  'anxious': ['worried', 'concerned', 'nervous', 'anxious', 'apprehensive', 'fearful', 'troubled'],
  'afraid': ['scared', 'frightened', 'fearful', 'afraid', 'terrified', 'alarmed'],
  'scared': ['frightened', 'afraid', 'scared', 'terrified', 'alarmed', 'panicked'],
  'worried': ['concerned', 'anxious', 'troubled', 'worried', 'uneasy', 'disturbed'],
  'apprehensive': ['anxious', 'nervous', 'worried', 'apprehensive', 'concerned', 'fearful'],
  'fearful': ['afraid', 'scared', 'frightened', 'fearful', 'anxious', 'terrified'],
  'uncertain': ['unsure', 'doubtful', 'hesitant', 'uncertain', 'undecided', 'unclear'],
  'sweet': ['sugary', 'pleasant', 'nice', 'sweet', 'charming', 'agreeable'],
  'flattering': ['complimentary', 'praising', 'flattering', 'admiring', 'laudatory'],
  'insincere': ['false', 'fake', 'dishonest', 'insincere', 'phony', 'artificial', 'hypocritical'],
  'manipulative': ['controlling', 'scheming', 'manipulative', 'deceptive', 'calculating'],
  'persuasive': ['convincing', 'compelling', 'persuasive', 'influential', 'forceful'],
  'false': ['untrue', 'fake', 'dishonest', 'false', 'misleading', 'deceptive'],
  'charming': ['appealing', 'attractive', 'charming', 'pleasant', 'delightful'],
  'deceptive': ['misleading', 'dishonest', 'deceptive', 'false', 'tricky'],
  'determined': ['resolute', 'firm', 'determined', 'decided', 'resolved', 'committed'],
  'strong': ['powerful', 'robust', 'sturdy', 'strong', 'solid', 'mighty'],
  'resilient': ['tough', 'hardy', 'resilient', 'durable', 'strong', 'flexible'],
  'surviving': ['enduring', 'lasting', 'surviving', 'persisting', 'remaining'],
  'persistence': ['perseverance', 'determination', 'persistence', 'tenacity', 'resolve'],
  'fight': ['struggle', 'battle', 'combat', 'fight', 'resistance', 'conflict'],
  'courage': ['bravery', 'valor', 'courage', 'fortitude', 'guts', 'nerve']
};

// ============================================
// INITIALIZATION
// ============================================

function init() {
  loadProgress();
  updateStats();
  renderPaper1Topics();
  renderPaper2Topics();
  renderBadges();
  updateHomeScreen();
  checkStreak();
  setupEventListeners();
  sessionStartTime = Date.now();
}

function setupEventListeners() {
  // Navigation tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const tabName = e.target.getAttribute('data-tab');
      switchTab(tabName);
    });
  });

  // Topic cards
  document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const paper = e.currentTarget.getAttribute('data-paper');
      switchTab(paper);
    });
  });

  // Back button
  document.getElementById('backButton')?.addEventListener('click', returnToTopics);

  // TTS button
  document.getElementById('ttsButton')?.addEventListener('click', readQuestionAloud);

  // Difficulty selector
  document.getElementById('difficultySelect')?.addEventListener('change', (e) => {
    // Filter questions based on difficulty
    console.log('Difficulty changed to:', e.target.value);
  });

  // Progress buttons
  document.getElementById('downloadReport')?.addEventListener('click', generateReport);
  document.getElementById('exportProgress')?.addEventListener('click', exportProgress);
  document.getElementById('importProgress')?.addEventListener('click', () => {
    document.getElementById('importFile').click();
  });
  document.getElementById('importFile')?.addEventListener('change', importProgress);
  document.getElementById('resetProgress')?.addEventListener('click', resetProgress);
}

// ============================================
// STORAGE MANAGEMENT
// ============================================

function loadProgress() {
  const saved = localStorage.getItem('igcseProgress');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      Object.assign(userData, data);
      const today = new Date().toDateString();
      if (userData.lastPracticeDate === today) {
        questionsToday = userData.questionsToday || 0;
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  }
}

function saveProgress() {
  const today = new Date().toDateString();
  userData.lastPracticeDate = today;
  userData.questionsToday = questionsToday;
  localStorage.setItem('igcseProgress', JSON.stringify(userData));
}

// ============================================
// UI UPDATE FUNCTIONS
// ============================================

function updateStats() {
  document.getElementById('levelDisplay').textContent = userData.level;
  document.getElementById('xpDisplay').textContent = userData.xp;
  document.getElementById('badgesDisplay').textContent = userData.badges.length;
  document.getElementById('streakDisplay').textContent = userData.streak || 0;
  
  const mastery = calculateOverallMastery();
  document.getElementById('masteryDisplay').textContent = mastery + '%';
  document.getElementById('overallProgress').style.width = mastery + '%';
  
  saveProgress();
}

function calculateOverallMastery() {
  let totalTopics = 0;
  let masteredTopics = 0;
  
  ['paper1', 'paper2'].forEach(paper => {
    if (window.topics && window.topics[paper]) {
      window.topics[paper].forEach(topic => {
        totalTopics++;
        const progress = userData.topicProgress[topic.id];
        if (progress && progress.mastery >= 80) {
          masteredTopics++;
        }
      });
    }
  });
  
  return totalTopics > 0 ? Math.round((masteredTopics / totalTopics) * 100) : 0;
}

function checkStreak() {
  const today = new Date().toDateString();
  const last = userData.lastPracticeDate;
  
  if (!last) {
    userData.streak = 0;
  } else if (last === today) {
    return; // Already practiced today
  } else {
    const lastDate = new Date(last);
    const todayDate = new Date(today);
    const diff = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
    
    if (diff === 1) {
      userData.streak = (userData.streak || 0) + 1;
      showXPPopup(`🔥 ${userData.streak} Day Streak!`);
    } else if (diff > 1) {
      userData.streak = 0;
    }
  }
  
  saveProgress();
}

function switchTab(tabName) {
  // Update active tab
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('data-tab') === tabName) {
      tab.classList.add('active');
    }
  });
  
  // Update active section
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  const sectionMap = {
    'home': 'homeSection',
    'paper1': 'paper1Section',
    'paper2': 'paper2Section',
    'practice': 'practiceSection',
    'analytics': 'analyticsSection',
    'badges': 'badgesSection',
    'progress': 'progressSection',
    'help': 'helpSection'
  };
  
  const sectionId = sectionMap[tabName];
  if (sectionId) {
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Load specific content
  if (tabName === 'progress') {
    renderProgressDetails();
  } else if (tabName === 'analytics') {
    renderAnalytics();
  }
}

// ============================================
// MODE MANAGEMENT
// ============================================

function setMode(mode) {
  userData.mode = mode;
  saveProgress();
  
  if (mode === 'test') {
    alert('Test Mode: Timer activated, no hints available. Good luck!');
  } else {
    alert('Practice Mode: Take your time, hints available!');
  }
}

// ============================================
// TOPIC RENDERING
// ============================================

function renderPaper1Topics() {
  const container = document.getElementById('paper1Topics');
  if (!container || !window.topics) return;
  
  container.innerHTML = '<h2 class="section-title">Paper 1: Reading</h2>';
  
  const topicList = document.createElement('div');
  topicList.className = 'topic-list';
  
  window.topics.paper1.forEach(topic => {
    const progress = userData.topicProgress[topic.id] || {
      completed: 0,
      total: topic.questions.length,
      mastery: 0
    };
    const card = createTopicCard(topic, progress);
    topicList.appendChild(card);
  });
  
  container.appendChild(topicList);
}

function renderPaper2Topics() {
  const container = document.getElementById('paper2Topics');
  if (!container || !window.topics) return;
  
  container.innerHTML = '<h2 class="section-title">Paper 2: Writing</h2>';
  
  const topicList = document.createElement('div');
  topicList.className = 'topic-list';
  
  window.topics.paper2.forEach(topic => {
    const progress = userData.topicProgress[topic.id] || {
      completed: 0,
      total: topic.questions.length,
      mastery: 0
    };
    const card = createTopicCard(topic, progress);
    topicList.appendChild(card);
  });
  
  container.appendChild(topicList);
}

function createTopicCard(topic, progress) {
  const card = document.createElement('div');
  card.className = 'topic-card';
  
  if (progress.mastery >= 80) {
    card.classList.add('completed');
  } else if (progress.completed > 0) {
    card.classList.add('in-progress');
  }
  
  const badge = progress.mastery >= 80 ? 'badge-mastered' : 
                progress.completed > 0 ? 'badge-progress' : 'badge-new';
  const badgeText = progress.mastery >= 80 ? 'Mastered' : 
                    progress.completed > 0 ? 'In Progress' : 'New';
  
  card.innerHTML = `
    <div class="topic-header">
      <div class="topic-title">${topic.title}</div>
      <div class="topic-badge ${badge}">${badgeText}</div>
    </div>
    <div class="topic-description">${topic.description}</div>
    <div class="topic-progress">${progress.mastery}% Mastery (${progress.completed}/${progress.total} questions)</div>
  `;
  
  card.onclick = () => startTopic(topic);
  
  return card;
}

// ============================================
// QUESTION MANAGEMENT
// ============================================

function startTopic(topic) {
  currentTopic = topic;
  currentQuestionIndex = 0;
  
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('practiceSection').classList.add('active');
  
  showQuestion();
}

function returnToTopics() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  currentTopic = null;
  currentQuestionIndex = 0;
  
  document.getElementById('practiceSection').classList.remove('active');
  document.getElementById('homeSection').classList.add('active');
  
  renderPaper1Topics();
  renderPaper2Topics();
  updateHomeScreen();
}

function showQuestion() {
  if (!currentTopic) return;
  
  const question = currentTopic.questions[currentQuestionIndex];
  const container = document.getElementById('practiceContent');
  
  questionStartTime = Date.now();
  
  let html = `
    <div class="question-container">
      <div class="question-number">Question ${currentQuestionIndex + 1} of ${currentTopic.questions.length}</div>
      <div class="question-text">${question.text}</div>
  `;
  
  // Add image if present
  if (question.image) {
    html += `<img src="${question.image}" alt="Question image" class="question-image">`;
  }
  
  // Add input
  if (question.type === 'short') {
    html += '<input type="text" class="answer-input" id="answerInput" placeholder="Type your answer...">';
  } else {
    html += '<textarea class="answer-input" id="answerInput" placeholder="Type your answer..." rows="10"></textarea>';
  }
  
  // Add word count if needed
  if (question.wordLimit) {
    html += `<div style="color:#718096;font-size:13px;margin-top:5px">
      Word limit: ${question.wordLimit} | Current: <span id="wordCount">0</span> words
    </div>`;
  }
  
  // Add buttons
  html += '<div class="button-group">';
  html += '<button class="btn btn-primary" onclick="submitAnswer()">Submit Answer</button>';
  
  if (userData.mode === 'practice') {
    html += '<button class="btn btn-secondary" onclick="showHint()">💡 Show Hint</button>';
  }
  
  html += '</div></div><div id="feedbackContainer"></div>';
  
  container.innerHTML = html;
  
  // Setup word counter
  if (question.wordLimit) {
    document.getElementById('answerInput').addEventListener('input', updateWordCount);
  }
  
  // Start timer in test mode
  if (userData.mode === 'test' && question.timeLimit) {
    startTimer(question.timeLimit);
  }
}

function updateWordCount() {
  const text = document.getElementById('answerInput').value.trim();
  const words = text.length > 0 ? text.split(/\s+/).length : 0;
  document.getElementById('wordCount').textContent = words;
}

function startTimer(seconds) {
  let timeLeft = seconds;
  const timerDisplay = document.getElementById('timerDisplay');
  timerDisplay.style.display = 'block';
  
  timerInterval = setInterval(() => {
    timeLeft--;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerDisplay.textContent = `⏱️ Time: ${mins}:${secs.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('Time\'s up!');
      submitAnswer();
    }
  }, 1000);
}

// ============================================
// ANSWER ASSESSMENT
// ============================================

function submitAnswer() {
  const answer = document.getElementById('answerInput').value.trim();
  const question = currentTopic.questions[currentQuestionIndex];
  
  if (!answer) {
    alert('Please provide an answer before submitting.');
    return;
  }
  
  // Stop timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  // Track time spent
  const timeSpent = Date.now() - questionStartTime;
  trackTimeSpent(currentTopic.id, timeSpent);
  
  // Disable submit button
  const submitBtn = event.target;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Checking...';
  
  // Assess answer
  const feedback = question.type === 'short' ? 
    assessShortAnswer(answer, question) : 
    assessLongAnswer(answer, question);
  
  // Track failures
  const qKey = currentTopic.id + '_' + currentQuestionIndex;
  if (!feedback.correct) {
    if (!userData.questionFailures[qKey]) userData.questionFailures[qKey] = 0;
    userData.questionFailures[qKey]++;
  }
  
  displayFeedback(feedback);
  
  // Award XP if correct
  if (feedback.correct) {
    questionsToday++;
    const xp = question.type === 'short' ? 20 : 50;
    awardXP(xp);
    updateTopicProgress(true);
    launchConfetti();
    showXPPopup(`+${xp} XP`);
    userData.questionFailures[qKey] = 0;
  } else {
    updateTopicProgress(false);
  }
  
  // Re-enable button
  submitBtn.disabled = false;
  submitBtn.textContent = 'Submit';
}

function findSynonyms(word) {
  const lower = word.toLowerCase();
  if (synonymMap[lower]) return synonymMap[lower];
  return [lower];
}

function assessShortAnswer(userAnswer, question) {
  const normalized = userAnswer.toLowerCase().trim();
  const spelling = checkSpelling(userAnswer);
  const grammar = checkGrammar(userAnswer);
  
  const keyWords = question.keyWords || [];
  let keyWordScore = 0;
  let foundKeys = [];
  let matchedConcepts = [];
  
  if (keyWords.length > 0) {
    keyWords.forEach(kw => {
      const syns = question.synonyms ? findSynonyms(kw) : [kw.toLowerCase()];
      const found = syns.some(syn => normalized.includes(syn));
      if (found) {
        keyWordScore++;
        foundKeys.push(kw);
        matchedConcepts.push(kw);
      }
    });
    keyWordScore = (keyWordScore / keyWords.length) * 100;
  } else {
    // Fallback if no keyWords defined
    const expected = question.answer.toLowerCase().trim();
    const expWords = expected.split(/\s+/).filter(w => w.length > 3);
    const matchedWords = expWords.filter(w => normalized.includes(w));
    keyWordScore = (matchedWords.length / expWords.length) * 100;
  }
  
  const spellingScore = Math.max(0, 100 - (spelling.length * 15));
  const grammarScore = Math.max(0, 100 - (grammar.length * 15));
  const hasMinLength = userAnswer.split(/\s+/).length >= 3;
  
  let suggestions = [];
  let detailedFeedback = '';
  
  if (keyWordScore < 70) {
    const missing = keyWords.filter(k => !foundKeys.includes(k));
    suggestions.push(`You need to include these key concepts: ${missing.join(', ')}`);
    detailedFeedback += `\n\n📝 WHAT'S MISSING:\nYour answer should discuss: ${missing.join(', ')}. `;
    
    if (matchedConcepts.length > 0) {
      detailedFeedback += `You mentioned ${matchedConcepts.join(', ')} which is good, but you need ALL the key concepts. `;
    }
    
    detailedFeedback += `\n\n💡 TIP: Try using synonyms like:\n`;
    missing.forEach(m => {
      const syns = findSynonyms(m);
      detailedFeedback += `• Instead of "${m}", you could say: ${syns.slice(0, 4).join(', ')}\n`;
    });
  }
  
  if (spelling.length > 0) {
    suggestions.push('Spelling errors: ' + spelling.join(', '));
    detailedFeedback += `\n\n✏️ SPELLING: Fix these errors: ${spelling.join(', ')}`;
  }
  
  if (grammar.length > 0) {
    suggestions.push('Grammar issues: ' + grammar.join('; '));
    detailedFeedback += `\n\n📖 GRAMMAR: ${grammar.join('; ')}`;
  }
  
  if (!hasMinLength) {
    suggestions.push('Provide a more complete answer');
    detailedFeedback += `\n\n📏 LENGTH: Write at least one complete sentence with proper detail.`;
  }
  
  const overallScore = Math.round((keyWordScore * 0.6) + (spellingScore * 0.2) + (grammarScore * 0.2));
  const correct = keyWordScore >= 70 && spellingScore >= 70 && grammarScore >= 70 && hasMinLength;
  
  return {
    correct,
    score: overallScore,
    keyWordScore: Math.round(keyWordScore),
    spellingScore: Math.round(spellingScore),
    grammarScore: Math.round(grammarScore),
    feedback: correct ? 
      '✓ Excellent! You included the key concepts with good spelling and grammar.' :
      '✗ Your answer needs improvement. ' + question.explanation + detailedFeedback,
    suggestions
  };
}

function assessLongAnswer(userAnswer, question) {
  const wc = userAnswer.split(/\s+/).length;
  const assessment = {
    clarity: 0,
    accuracy: 0,
    grammar: 0,
    spelling: 0,
    overall: 0,
    suggestions: [],
    detailedFeedback: ''
  };
  
  // Word count check
  if (question.wordLimit) {
    if (wc > question.wordLimit * 1.1) {
      assessment.suggestions.push(`Exceeds word limit (${wc}/${question.wordLimit})`);
      assessment.detailedFeedback += `\n📏 WORD COUNT: You wrote ${wc} words but the limit is ${question.wordLimit}. Practice being more concise.`;
    } else if (wc < question.wordLimit * 0.7) {
      assessment.suggestions.push(`Too short (${wc}/${question.wordLimit})`);
      assessment.detailedFeedback += `\n📏 WORD COUNT: You only wrote ${wc} words but need at least ${Math.round(question.wordLimit * 0.7)}. Develop your ideas more fully.`;
    }
  }
  
  // Spelling and grammar
  const spellingErrors = checkSpelling(userAnswer);
  const grammarIssues = checkGrammar(userAnswer);
  
  assessment.spelling = Math.max(0, 100 - (spellingErrors.length * 10));
  assessment.grammar = Math.max(0, 100 - (grammarIssues.length * 10));
  
  if (spellingErrors.length > 0) {
    assessment.suggestions.push('Spelling errors found');
    assessment.detailedFeedback += `\n✏️ SPELLING ERRORS: ${spellingErrors.join(', ')}`;
  }
  
  if (grammarIssues.length > 0) {
    assessment.suggestions.push('Grammar issues found');
    assessment.detailedFeedback += `\n📖 GRAMMAR ISSUES: ${grammarIssues.join('; ')}`;
  }
  
  // Content assessment
  const contentScore = assessContent(userAnswer, question);
  assessment.accuracy = contentScore.score;
  
  if (contentScore.score < 70) {
    assessment.detailedFeedback += `\n\n📝 CONTENT ISSUES:\n${contentScore.detailedFeedback}`;
  }
  
  assessment.suggestions.push(...contentScore.suggestions);
  
  // Clarity
  assessment.clarity = assessClarity(userAnswer);
  
  if (assessment.clarity < 70) {
    assessment.detailedFeedback += `\n\n💡 CLARITY: ${
      assessment.clarity < 50 ?
      'Your writing is difficult to follow. Use shorter sentences and link ideas clearly.' :
      'Try to improve sentence variety and use transition words like "however," "therefore," "moreover."'
    }`;
  }
  
  // Overall score
  assessment.overall = Math.round(
    (assessment.clarity + assessment.accuracy + assessment.grammar + assessment.spelling) / 4
  );
  
  return {
    correct: assessment.overall >= 70,
    score: assessment.overall,
    assessment,
    feedback: (assessment.overall >= 80 ? '✓ Excellent work!' :
               assessment.overall >= 70 ? '✓ Good effort with room for improvement.' :
               assessment.overall >= 60 ? '⚠ Satisfactory but needs more development.' :
               '✗ Your answer needs significant improvement.') + assessment.detailedFeedback,
    suggestions: assessment.suggestions
  };
}

function checkSpelling(text) {
  const commonMisspellings = {
    'recieve': 'receive', 'occured': 'occurred', 'seperate': 'separate',
    'definately': 'definitely', 'arguement': 'argument', 'untill': 'until',
    'writting': 'writing', 'begining': 'beginning', 'beleive': 'believe',
    'thier': 'their', 'acheive': 'achieve', 'wierd': 'weird',
    'occassion': 'occasion', 'embarass': 'embarrass', 'accomodate': 'accommodate',
    'enviroment': 'environment', 'goverment': 'government', 'wich': 'which',
    'alot': 'a lot', 'tommorow': 'tomorrow', 'existance': 'existence'
  };
  
  const errors = [];
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  
  words.forEach(word => {
    if (commonMisspellings[word]) {
      errors.push(`"${word}" should be "${commonMisspellings[word]}"`);
    }
  });
  
  return [...new Set(errors)];
}

function checkGrammar(text) {
  const issues = [];
  
  if (/\bi\s/gi.test(text) && !/\bI\s/.test(text)) {
    issues.push('The pronoun "I" must always be capitalized');
  }
  
  if (/\s{2,}/.test(text)) {
    issues.push('Use single spaces only between words');
  }
  
  if (/[a-z]\.[A-Z]/.test(text)) {
    issues.push('Add space after periods');
  }
  
  if (text.trim().length > 0 && !/[.!?]$/.test(text.trim())) {
    issues.push('Add ending punctuation (. ! or ?)');
  }
  
  if (/\s,|\s\.|\s!|\s\?/.test(text)) {
    issues.push('No space before punctuation marks');
  }
  
  return [...new Set(issues)];
}

function assessContent(userAnswer, question) {
  const result = {
    score: 50,
    suggestions: [],
    detailedFeedback: ''
  };
  
  if (question.assessmentCriteria && question.assessmentCriteria.relevance) {
    const lowerAnswer = userAnswer.toLowerCase();
    const keyPoints = question.assessmentCriteria.relevance.toLowerCase()
      .split(/,|;|\band\b/)
      .map(p => p.trim())
      .filter(p => p);
    
    const addressed = keyPoints.filter(p =>
      p.split(/\s+/).some(w => w.length > 3 && lowerAnswer.includes(w))
    );
    
    const missing = keyPoints.filter(p => !addressed.includes(p));
    const coverage = (addressed.length / keyPoints.length) * 100;
    result.score = Math.round(coverage);
    
    if (coverage < 70) {
      result.suggestions.push('Address all required points');
      result.detailedFeedback += `You need to cover these points: ${missing.join(', ')}. `;
      
      if (addressed.length > 0) {
        result.detailedFeedback += `You mentioned ${addressed.join(', ')} which is good. `;
      }
      
      result.detailedFeedback += 'Make sure every bullet point is fully addressed with examples and explanation.';
    }
  }
  
  // Check for 6 examples requirement (Q2d)
  if (question.requireSixExamples) {
    const para1Mentions = (userAnswer.match(/paragraph 1|para 1|first paragraph/gi) || []).length;
    const para2Mentions = (userAnswer.match(/paragraph 2|para 2|second paragraph/gi) || []).length;
    
    if (para1Mentions < 2 || para2Mentions < 2) {
      result.score = Math.min(result.score, 60);
      result.detailedFeedback += '\n\nYou must select 3 examples from EACH paragraph (6 total). Make it clear which paragraph each example comes from.';
    }
  }
  
  if (question.assessmentCriteria.structure && userAnswer.split('\n\n').length < 2) {
    result.suggestions.push('Use clear paragraphs');
    result.detailedFeedback += '\n\nOrganize your writing into paragraphs for clarity.';
  }
  
  return result;
}

function assessClarity(text) {
  let score = 100;
  
  const sentences = text.split(/[.!?]+/).filter(x => x.trim().length > 0);
  if (sentences.length === 0) return 0;
  
  const avgSentenceLength = text.split(/\s+/).length / sentences.length;
  
  if (avgSentenceLength > 30) score -= 20;
  if (avgSentenceLength < 8) score -= 10;
  
  const transitions = /however|therefore|furthermore|moreover|consequently|additionally|nevertheless|firstly|secondly|finally/gi;
  if (!transitions.test(text) && text.split(/\s+/).length > 100) {
    score -= 10;
  }
  
  return Math.max(0, score);
}

// ============================================
// FEEDBACK DISPLAY
// ============================================

function displayFeedback(feedback) {
  const container = document.getElementById('feedbackContainer');
  const question = currentTopic.questions[currentQuestionIndex];
  const qKey = currentTopic.id + '_' + currentQuestionIndex;
  const failures = userData.questionFailures[qKey] || 0;
  
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = `feedback ${feedback.correct ? 'correct' : 'incorrect'}`;
  
  let html = `<div class="feedback-title">${feedback.correct ? '✓ Correct!' : '✗ Needs Improvement'}</div>`;
  html += `<div class="feedback-content">${feedback.feedback}</div>`;
  
  // Short answer assessment
  if (question.type === 'short' && feedback.keyWordScore !== undefined) {
    html += '<div class="assessment-grid">';
    html += `
      <div class="assessment-item ${feedback.keyWordScore >= 70 ? 'good' : 'needs-improvement'}">
        <div class="assessment-label">Key Concepts</div>
        <div class="assessment-score">${feedback.keyWordScore}/100</div>
      </div>
      <div class="assessment-item ${feedback.spellingScore >= 70 ? 'good' : 'needs-improvement'}">
        <div class="assessment-label">Spelling</div>
        <div class="assessment-score">${feedback.spellingScore}/100</div>
      </div>
      <div class="assessment-item ${feedback.grammarScore >= 70 ? 'good' : 'needs-improvement'}">
        <div class="assessment-label">Grammar</div>
        <div class="assessment-score">${feedback.grammarScore}/100</div>
      </div>
    `;
    html += '</div>';
  }
  
  // Long answer assessment
  if (feedback.assessment) {
    html += '<div class="assessment-grid">';
    html += `
      <div class="assessment-item ${feedback.assessment.clarity >= 70 ? 'good' : 'needs-improvement'}">
        <div class="assessment-label">Clarity</div>
        <div class="assessment-score">${feedback.assessment.clarity}/100</div>
      </div>
      <div class="assessment-item ${feedback.assessment.accuracy >= 70 ? 'good' : 'needs-improvement'}">
        <div class="assessment-label">Accuracy</div>
        <div class="assessment-score">${feedback.assessment.accuracy}/100</div>
      </div>
      <div class="assessment-item ${feedback.assessment.grammar >= 70 ? 'good' : 'needs-improvement'}">
        <div class="assessment-label">Grammar</div>
        <div class="assessment-score">${feedback.assessment.grammar}/100</div>
      </div>
      <div class="assessment-item ${feedback.assessment.spelling >= 70 ? 'good' : 'needs-improvement'}">
        <div class="assessment-label">Spelling</div>
        <div class="assessment-score">${feedback.assessment.spelling}/100</div>
      </div>
    `;
    html += '</div>';
  }
  
  // Suggestions
  if (feedback.suggestions && feedback.suggestions.length > 0) {
    html += '<div style="margin-top:15px"><strong>💡 Suggestions for improvement:</strong><ul style="margin-left:20px;margin-top:8px">';
    feedback.suggestions.forEach(s => {
      html += `<li style="margin-bottom:5px">${s}</li>`;
    });
    html += '</ul></div>';
  }
  
  // Worked example after 2 failures
  if (!feedback.correct && failures >= 2 && question.workedExample) {
    html += `
      <div class="worked-example">
        <div class="worked-example-title">📚 WORKED EXAMPLE (You've tried ${failures} times)</div>
        <div class="worked-example-content">${question.workedExample.replace(/\n/g, '<br>')}</div>
      </div>
    `;
  }
  
  // Explanation
  html += `<div style="margin-top:15px"><strong>📖 Explanation:</strong><br>${question.explanation}</div>`;
  
  // Action buttons
  html += '<div class="button-group" style="margin-top:20px">';
  if (feedback.correct) {
    if (currentQuestionIndex < currentTopic.questions.length - 1) {
      html += '<button class="btn btn-success" onclick="nextQuestion()">Next Question →</button>';
    } else {
      html += '<button class="btn btn-success" onclick="completeTopic()">Complete Topic ✓</button>';
    }
  } else {
    html += `<button class="btn btn-primary" onclick="retryQuestion()">Try Again${failures >= 1 ? ' (Attempt ' + (failures + 1) + ')' : ''}</button>`;
    if (currentQuestionIndex < currentTopic.questions.length - 1) {
      html += '<button class="btn btn-secondary" onclick="nextQuestion()">Skip to Next →</button>';
    }
  }
  html += '</div>';
  
  feedbackDiv.innerHTML = html;
  container.innerHTML = '';
  container.appendChild(feedbackDiv);
  
  hintIndex = 0;
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
  hintIndex = 0;
}

function retryQuestion() {
  document.getElementById('answerInput').value = '';
  document.getElementById('feedbackContainer').innerHTML = '';
  hintIndex = 0;
}

function showHint() {
  const question = currentTopic.questions[currentQuestionIndex];
  
  if (!question.hints || hintIndex >= question.hints.length) {
    alert('No more hints available!');
    return;
  }
  
  const feedbackContainer = document.getElementById('feedbackContainer');
  const hintDiv = document.createElement('div');
  hintDiv.className = 'feedback';
  hintDiv.style.background = '#e6fffa';
  hintDiv.style.borderLeftColor = '#319795';
  hintDiv.style.color = '#234e52';
  hintDiv.innerHTML = `
    <div class="feedback-title">💡 Hint ${hintIndex + 1}:</div>
    <div class="feedback-content">${question.hints[hintIndex]}</div>
  `;
  
  feedbackContainer.appendChild(hintDiv);
  hintIndex++;
}

// ============================================
// TEXT-TO-SPEECH
// ============================================

function readQuestionAloud() {
  const questionText = document.querySelector('.question-text');
  if (!questionText) return;
  
  const text = questionText.textContent;
  
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
    
    alert('🔊 Reading question aloud...');
  } else {
    alert('Text-to-speech not supported in your browser.');
  }
}

// ============================================
// PROGRESS TRACKING
// ============================================

function updateTopicProgress(correct) {
  if (!userData.topicProgress[currentTopic.id]) {
    userData.topicProgress[currentTopic.id] = {
      completed: 0,
      total: currentTopic.questions.length,
      correct: 0,
      mastery: 0
    };
  }
  
  const progress = userData.topicProgress[currentTopic.id];
  
  if (correct) {
    if (!userData.questionAttempts[currentTopic.id]) {
      userData.questionAttempts[currentTopic.id] = {};
    }
    
    if (!userData.questionAttempts[currentTopic.id][currentQuestionIndex]) {
      progress.completed++;
      progress.correct++;
    }
    
    userData.questionAttempts[currentTopic.id][currentQuestionIndex] = true;
  }
  
  progress.mastery = Math.round((progress.correct / progress.total) * 100);
  
  checkBadges();
  saveProgress();
}

function completeTopic() {
  const progress = userData.topicProgress[currentTopic.id];
  
  if (progress.mastery >= 80) {
    document.getElementById('practiceContent').innerHTML = `
      <div class="mastery-check">
        <h3>🎉 Topic Completed!</h3>
        <div class="mastery-score">${progress.mastery}%</div>
        <div class="mastery-message">Congratulations! You have mastered this topic!</div>
        <button class="btn btn-success" onclick="returnToTopics()" style="background:#fff;color:#5a67d8">Return to Topics</button>
      </div>
    `;
    launchConfetti();
    checkBadges();
  } else {
    alert(`Your mastery is ${progress.mastery}%. Need 80% to complete. Keep practicing!`);
    currentQuestionIndex = 0;
    showQuestion();
  }
}

function trackTimeSpent(topicId, timeMs) {
  if (!userData.timeSpent[topicId]) {
    userData.timeSpent[topicId] = 0;
  }
  userData.timeSpent[topicId] += timeMs;
  saveProgress();
}

// ============================================
// GAMIFICATION
// ============================================

function awardXP(amount) {
  userData.xp += amount;
  
  const newLevel = Math.floor(userData.xp / 100) + 1;
  if (newLevel > userData.level) {
    userData.level = newLevel;
    showXPPopup(`🌟 Level ${userData.level}!`);
    launchConfetti();
  }
  
  updateStats();
}

function checkBadges() {
  const newBadges = [];
  
  // First Steps
  if (!userData.badges.includes('first_steps') && Object.keys(userData.questionAttempts).length > 0) {
    userData.badges.push('first_steps');
    newBadges.push('First Steps');
  }
  
  // Paper Masters
  if (!userData.badges.includes('paper1_master') && window.topics) {
    const allMastered = window.topics.paper1.every(t => {
      const p = userData.topicProgress[t.id];
      return p && p.mastery >= 80;
    });
    if (allMastered) {
      userData.badges.push('paper1_master');
      newBadges.push('Paper 1 Master');
    }
  }
  
  if (!userData.badges.includes('paper2_master') && window.topics) {
    const allMastered = window.topics.paper2.every(t => {
      const p = userData.topicProgress[t.id];
      return p && p.mastery >= 80;
    });
    if (allMastered) {
      userData.badges.push('paper2_master');
      newBadges.push('Paper 2 Master');
    }
  }
  
  // Level badges
  if (!userData.badges.includes('level_5') && userData.level >= 5) {
    userData.badges.push('level_5');
    newBadges.push('Level 5');
  }
  
  if (!userData.badges.includes('level_10') && userData.level >= 10) {
    userData.badges.push('level_10');
    newBadges.push('Level 10');
  }
  
  if (!userData.badges.includes('level_20') && userData.level >= 20) {
    userData.badges.push('level_20');
    newBadges.push('Level 20');
  }
  
  // Perfectionist
  if (!userData.badges.includes('perfectionist')) {
    const hasPerfect = Object.values(userData.topicProgress).some(p => p.mastery === 100);
    if (hasPerfect) {
      userData.badges.push('perfectionist');
      newBadges.push('Perfectionist');
    }
  }
  
  // Scholar
  if (!userData.badges.includes('scholar') && calculateOverallMastery() >= 80) {
    userData.badges.push('scholar');
    newBadges.push('Scholar');
  }
  
  // Streak badges
  if (!userData.badges.includes('streak_7') && userData.streak >= 7) {
    userData.badges.push('streak_7');
    newBadges.push('Week Warrior');
  }
  
  if (!userData.badges.includes('streak_30') && userData.streak >= 30) {
    userData.badges.push('streak_30');
    newBadges.push('Month Master');
  }
  
  // Speed Demon
  if (!userData.badges.includes('speed_demon') && questionsToday >= 10) {
    userData.badges.push('speed_demon');
    newBadges.push('Speed Demon');
  }
  
  // Time-based badges
  const hour = new Date().getHours();
  if (!userData.badges.includes('night_owl') && hour >= 22) {
    userData.badges.push('night_owl');
    newBadges.push('Night Owl');
  }
  
  if (!userData.badges.includes('early_bird') && hour < 6) {
    userData.badges.push('early_bird');
    newBadges.push('Early Bird');
  }
  
  // Show new badges
  if (newBadges.length > 0) {
    setTimeout(() => {
      alert(`🎉 New Badge${newBadges.length > 1 ? 's' : ''} Earned: ${newBadges.join(', ')}!`);
      launchConfetti();
    }, 500);
  }
  
  updateStats();
  renderBadges();
}

function renderBadges() {
  const container = document.getElementById('badgesContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  badges.forEach(badge => {
    const earned = userData.badges.includes(badge.id);
    const div = document.createElement('div');
    div.className = `badge-item ${earned ? 'earned' : 'locked'}`;
    div.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-name">${badge.name}</div>
      <div style="font-size:10px;color:#718096;margin-top:4px">${badge.req}</div>
    `;
    container.appendChild(div);
  });
}

// ============================================
// VISUAL EFFECTS
// ============================================

function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const pieces = [];
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe'];
  
  for (let i = 0; i < 100; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 10 + 5,
      d: Math.random() * 10 + 5,
      c: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0,
      tiltAngleIncremental: (Math.random() * 0.07) + 0.05
    });
  }
  
  let animId;
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    pieces.forEach((p, i) => {
      ctx.beginPath();
      ctx.lineWidth = p.d / 2;
      ctx.strokeStyle = p.c;
      ctx.moveTo(p.x + p.tilt + (p.w / 4), p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.h / 4));
      ctx.stroke();
      
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += Math.cos(p.d) + 1 + p.d / 2;
      p.x += Math.sin(p.d);
      p.tilt = Math.sin(p.tiltAngle - (i / 3)) * 15;
      
      if (p.y > canvas.height) pieces.splice(i, 1);
    });
    
    if (pieces.length > 0) {
      animId = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(animId);
    }
  }
  
  draw();
  
  setTimeout(() => {
    cancelAnimationFrame(animId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 3000);
}

function showXPPopup(text) {
  const popup = document.createElement('div');
  popup.className = 'xp-popup';
  popup.textContent = text;
  document.body.appendChild(popup);
  
  setTimeout(() => {
    document.body.removeChild(popup);
  }, 1500);
}

// ============================================
// ANALYTICS
// ============================================

function renderAnalytics() {
  // Time spent
  const timeStats = document.getElementById('timeStats');
  if (timeStats && userData.timeSpent) {
    let html = '<div>';
    let totalTime = 0;
    
    Object.keys(userData.timeSpent).forEach(topicId => {
      const timeMs = userData.timeSpent[topicId];
      totalTime += timeMs;
      const minutes = Math.round(timeMs / 60000);
      html += `<p><strong>${topicId}:</strong> ${minutes} minutes</p>`;
    });
    
    const totalMinutes = Math.round(totalTime / 60000);
    html += `<p><strong>Total:</strong> ${totalMinutes} minutes</p></div>`;
    timeStats.innerHTML = html;
  }
  
  // Strengths & Weaknesses
  const strengthsWeaknesses = document.getElementById('strengthsWeaknesses');
  if (strengthsWeaknesses && window.topics) {
    let html = '<h4>Strengths:</h4><ul>';
    let weaknesses = '<h4>Weaknesses:</h4><ul>';
    
    ['paper1', 'paper2'].forEach(paper => {
      window.topics[paper].forEach(topic => {
        const progress = userData.topicProgress[topic.id];
        if (progress) {
          if (progress.mastery >= 80) {
            html += `<li>${topic.title} (${progress.mastery}%)</li>`;
          } else if (progress.mastery < 50) {
            weaknesses += `<li>${topic.title} (${progress.mastery}%)</li>`;
          }
        }
      });
    });
    
    html += '</ul>' + weaknesses + '</ul>';
    strengthsWeaknesses.innerHTML = html;
  }
}

// ============================================
// HOME SCREEN
// ============================================

function updateHomeScreen() {
  if (!window.topics) return;
  
  // Paper 1 Progress
  const paper1Topics = window.topics.paper1;
  let paper1Completed = 0;
  paper1Topics.forEach(topic => {
    const progress = userData.topicProgress[topic.id];
    if (progress && progress.mastery >= 80) paper1Completed++;
  });
  const paper1Percent = Math.round((paper1Completed / paper1Topics.length) * 100);
  
  const paper1Progress = document.getElementById('paper1Progress');
  const paper1Badge = document.getElementById('paper1Badge');
  
  if (paper1Progress) paper1Progress.textContent = `${paper1Percent}% Complete`;
  if (paper1Badge) {
    if (paper1Percent === 100) {
      paper1Badge.textContent = 'Mastered';
      paper1Badge.className = 'topic-badge badge-mastered';
    } else if (paper1Percent > 0) {
      paper1Badge.textContent = 'In Progress';
      paper1Badge.className = 'topic-badge badge-progress';
    }
  }
  
  // Paper 2 Progress
  const paper2Topics = window.topics.paper2;
  let paper2Completed = 0;
  paper2Topics.forEach(topic => {
    const progress = userData.topicProgress[topic.id];
    if (progress && progress.mastery >= 80) paper2Completed++;
  });
  const paper2Percent = Math.round((paper2Completed / paper2Topics.length) * 100);
  
  const paper2Progress = document.getElementById('paper2Progress');
  const paper2Badge = document.getElementById('paper2Badge');
  
  if (paper2Progress) paper2Progress.textContent = `${paper2Percent}% Complete`;
  if (paper2Badge) {
    if (paper2Percent === 100) {
      paper2Badge.textContent = 'Mastered';
      paper2Badge.className = 'topic-badge badge-mastered';
    } else if (paper2Percent > 0) {
      paper2Badge.textContent = 'In Progress';
      paper2Badge.className = 'topic-badge badge-progress';
    }
  }
}

// ============================================
// PROGRESS REPORTING
// ============================================

function renderProgressDetails() {
  const container = document.getElementById('progressDetails');
  if (!container || !window.topics) return;
  
  let html = '<h3 style="margin-top:25px;color:#2d3748">Paper 1: Reading</h3><div class="topic-list">';
  
  window.topics.paper1.forEach(topic => {
    const progress = userData.topicProgress[topic.id] || {
      completed: 0,
      total: topic.questions.length,
      mastery: 0
    };
    
    html += `
      <div class="topic-card ${progress.mastery >= 80 ? 'completed' : progress.completed > 0 ? 'in-progress' : ''}">
        <div class="topic-header">
          <div class="topic-title">${topic.title}</div>
          <div class="topic-badge ${progress.mastery >= 80 ? 'badge-mastered' : progress.completed > 0 ? 'badge-progress' : 'badge-new'}">
            ${progress.mastery >= 80 ? 'Mastered' : progress.completed > 0 ? 'In Progress' : 'Not Started'}
          </div>
        </div>
        <div class="topic-progress">${progress.mastery}% (${progress.completed}/${progress.total})</div>
      </div>
    `;
  });
  
  html += '</div><h3 style="margin-top:25px;color:#2d3748">Paper 2: Writing</h3><div class="topic-list">';
  
  window.topics.paper2.forEach(topic => {
    const progress = userData.topicProgress[topic.id] || {
      completed: 0,
      total: topic.questions.length,
      mastery: 0
    };
    
    html += `
      <div class="topic-card ${progress.mastery >= 80 ? 'completed' : progress.completed > 0 ? 'in-progress' : ''}">
        <div class="topic-header">
          <div class="topic-title">${topic.title}</div>
          <div class="topic-badge ${progress.mastery >= 80 ? 'badge-mastered' : progress.completed > 0 ? 'badge-progress' : 'badge-new'}">
            ${progress.mastery >= 80 ? 'Mastered' : progress.completed > 0 ? 'In Progress' : 'Not Started'}
          </div>
        </div>
        <div class="topic-progress">${progress.mastery}% (${progress.completed}/${progress.total})</div>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

function generateReport() {
  let report = 'CAMBRIDGE IGCSE FIRST LANGUAGE ENGLISH 0500\n';
  report += 'PROGRESS REPORT\n';
  report += '='.repeat(60) + '\n\n';
  report += `Generated: ${new Date().toLocaleString()}\n\n`;
  report += `Student Level: ${userData.level}\n`;
  report += `Total XP: ${userData.xp}\n`;
  report += `Current Streak: ${userData.streak} days\n`;
  report += `Badges Earned: ${userData.badges.length}/${badges.length}\n`;
  report += `Overall Mastery: ${calculateOverallMastery()}%\n\n`;
  
  if (window.topics) {
    report += '='.repeat(60) + '\nPAPER 1: READING\n' + '='.repeat(60) + '\n\n';
    
    window.topics.paper1.forEach(topic => {
      const progress = userData.topicProgress[topic.id] || {
        completed: 0,
        total: topic.questions.length,
        mastery: 0
      };
      report += `${topic.title}\n`;
      report += `  Mastery: ${progress.mastery}%\n`;
      report += `  Questions Completed: ${progress.completed}/${progress.total}\n`;
      report += `  Status: ${progress.mastery >= 80 ? 'MASTERED' : progress.completed > 0 ? 'IN PROGRESS' : 'NOT STARTED'}\n\n`;
    });
    
    report += '='.repeat(60) + '\nPAPER 2: WRITING\n' + '='.repeat(60) + '\n\n';
    
    window.topics.paper2.forEach(topic => {
      const progress = userData.topicProgress[topic.id] || {
        completed: 0,
        total: topic.questions.length,
        mastery: 0
      };
      report += `${topic.title}\n`;
      report += `  Mastery: ${progress.mastery}%\n`;
      report += `  Questions Completed: ${progress.completed}/${progress.total}\n`;
      report += `  Status: ${progress.mastery >= 80 ? 'MASTERED' : progress.completed > 0 ? 'IN PROGRESS' : 'NOT STARTED'}\n\n`;
    });
  }
  
  report += '='.repeat(60) + '\nBADGES EARNED\n' + '='.repeat(60) + '\n\n';
  
  badges.forEach(badge => {
    if (userData.badges.includes(badge.id)) {
      report += `${badge.icon} ${badge.name} - ${badge.req}\n`;
    }
  });
  
  report += '\n' + '='.repeat(60) + '\nEND OF REPORT\n' + '='.repeat(60);
  
  // Download
  const blob = new Blob([report], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `IGCSE_Progress_Report_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportProgress() {
  const dataStr = JSON.stringify(userData, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `IGCSE_Progress_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (confirm('This will replace your current progress. Continue?')) {
        Object.assign(userData, imported);
        saveProgress();
        updateStats();
        renderPaper1Topics();
        renderPaper2Topics();
        renderBadges();
        updateHomeScreen();
        alert('Progress imported successfully!');
      }
    } catch (error) {
      alert('Error importing progress. Please check the file.');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function resetProgress() {
  if (confirm('Reset ALL progress? This cannot be undone!')) {
    if (confirm('Really? All XP, levels, and badges will be lost!')) {
      localStorage.removeItem('igcseProgress');
      userData.xp = 0;
      userData.level = 1;
      userData.badges = [];
      userData.topicProgress = {};
      userData.questionAttempts = {};
      userData.questionFailures = {};
      userData.streak = 0;
      userData.lastPracticeDate = null;
      userData.timeSpent = {};
      questionsToday = 0;
      updateStats();
      renderPaper1Topics();
      renderPaper2Topics();
      renderBadges();
      updateHomeScreen();
      alert('Progress has been reset.');
    }
  }
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

window.addEventListener('DOMContentLoaded', init);