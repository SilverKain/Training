// ===== Training Plan Data =====
const trainingPlan = {
    1: {
        name: "Неделя 1 — Адаптация",
        trainings: [
            {
                day: "Понедельник",
                exercises: [
                    { name: "Отжимания от пола", sets: 3, reps: "8-10", rest: 90, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Приседания", sets: 3, reps: "10-12", rest: 90, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Планка", sets: 3, reps: "20-30 сек", rest: 90, tempo: "статика" },
                    { name: "Ягодичный мост", sets: 3, reps: "10-12", rest: 90, tempo: "2 вверх, 1 пауза, 2 вниз" }
                ]
            },
            {
                day: "Среда",
                exercises: [
                    { name: "Отжимания от пола", sets: 3, reps: "8-10", rest: 90, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Приседания", sets: 3, reps: "10-12", rest: 90, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Планка", sets: 3, reps: "20-30 сек", rest: 90, tempo: "статика" },
                    { name: "Ягодичный мост", sets: 3, reps: "10-12", rest: 90, tempo: "2 вверх, 1 пауза, 2 вниз" }
                ]
            },
            {
                day: "Пятница",
                exercises: [
                    { name: "Отжимания от пола", sets: 3, reps: "8-10", rest: 90, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Приседания", sets: 3, reps: "10-12", rest: 90, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Планка", sets: 3, reps: "20-30 сек", rest: 90, tempo: "статика" },
                    { name: "Ягодичный мост", sets: 3, reps: "10-12", rest: 90, tempo: "2 вверх, 1 пауза, 2 вниз" }
                ]
            }
        ]
    },
    2: {
        name: "Неделя 2 — Укрепление",
        trainings: [
            {
                day: "Понедельник",
                exercises: [
                    { name: "Отжимания от пола", sets: 3, reps: "10-12", rest: 80, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Приседания", sets: 3, reps: "12-15", rest: 80, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Планка", sets: 4, reps: "25-35 сек", rest: 80, tempo: "статика" },
                    { name: "Ягодичный мост", sets: 3, reps: "12-15", rest: 80, tempo: "2 вверх, 1 пауза, 2 вниз" },
                    { name: "Обратные отжимания от стула", sets: 3, reps: "8-10", rest: 80, tempo: "средний" }
                ]
            },
            {
                day: "Среда",
                exercises: [
                    { name: "Отжимания от пола", sets: 3, reps: "10-12", rest: 80, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Приседания", sets: 3, reps: "12-15", rest: 80, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Планка", sets: 4, reps: "25-35 сек", rest: 80, tempo: "статика" },
                    { name: "Ягодичный мост", sets: 3, reps: "12-15", rest: 80, tempo: "2 вверх, 1 пауза, 2 вниз" },
                    { name: "Обратные отжимания от стула", sets: 3, reps: "8-10", rest: 80, tempo: "средний" }
                ]
            },
            {
                day: "Пятница",
                exercises: [
                    { name: "Отжимания от пола", sets: 3, reps: "10-12", rest: 80, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Приседания", sets: 3, reps: "12-15", rest: 80, tempo: "2 сек вниз, 1 вверх" },
                    { name: "Планка", sets: 4, reps: "25-35 сек", rest: 80, tempo: "статика" },
                    { name: "Ягодичный мост", sets: 3, reps: "12-15", rest: 80, tempo: "2 вверх, 1 пауза, 2 вниз" },
                    { name: "Обратные отжимания от стула", sets: 3, reps: "8-10", rest: 80, tempo: "средний" }
                ]
            }
        ]
    },
    3: {
        name: "Неделя 3 — Рост объёма",
        trainings: [
            {
                day: "Понедельник (Тренировка А)",
                exercises: [
                    { name: "Отжимания", sets: 4, reps: "12-15", rest: 70, tempo: "3 сек вниз, 1 вверх" },
                    { name: "Приседания", sets: 4, reps: "15-18", rest: 70, tempo: "3 сек вниз, 1 вверх" },
                    { name: "Планка", sets: 4, reps: "35-45 сек", rest: 70, tempo: "статика" },
                    { name: "Выпады на месте", sets: 3, reps: "10 на ногу", rest: 70, tempo: "медленный" },
                    { name: "Обратные отжимания", sets: 4, reps: "10-12", rest: 70, tempo: "медленный" }
                ]
            },
            {
                day: "Среда (Тренировка Б)",
                exercises: [
                    { name: "Отжимания узким хватом", sets: 3, reps: "10-12", rest: 70, tempo: "3 сек вниз, 1 вверх" },
                    { name: "Приседания с паузой (3 сек)", sets: 4, reps: "12-15", rest: 70, tempo: "с паузой" },
                    { name: "Боковая планка", sets: 3, reps: "20-30 сек/сторону", rest: 70, tempo: "статика" },
                    { name: "Ягодичный мост на одной ноге", sets: 3, reps: "8-10 на ногу", rest: 70, tempo: "медленный" },
                    { name: "Супермен (на животе)", sets: 3, reps: "12-15", rest: 70, tempo: "средний" }
                ]
            },
            {
                day: "Пятница (Тренировка А)",
                exercises: [
                    { name: "Отжимания", sets: 4, reps: "12-15", rest: 70, tempo: "3 сек вниз, 1 вверх" },
                    { name: "Приседания", sets: 4, reps: "15-18", rest: 70, tempo: "3 сек вниз, 1 вверх" },
                    { name: "Планка", sets: 4, reps: "35-45 сек", rest: 70, tempo: "статика" },
                    { name: "Выпады на месте", sets: 3, reps: "10 на ногу", rest: 70, tempo: "медленный" },
                    { name: "Обратные отжимания", sets: 4, reps: "10-12", rest: 70, tempo: "медленный" }
                ]
            },
            {
                day: "Воскресенье (Тренировка Б)",
                exercises: [
                    { name: "Отжимания узким хватом", sets: 3, reps: "10-12", rest: 70, tempo: "3 сек вниз, 1 вверх" },
                    { name: "Приседания с паузой (3 сек)", sets: 4, reps: "12-15", rest: 70, tempo: "с паузой" },
                    { name: "Боковая планка", sets: 3, reps: "20-30 сек/сторону", rest: 70, tempo: "статика" },
                    { name: "Ягодичный мост на одной ноге", sets: 3, reps: "8-10 на ногу", rest: 70, tempo: "медленный" },
                    { name: "Супермен (на животе)", sets: 3, reps: "12-15", rest: 70, tempo: "средний" }
                ]
            }
        ]
    },
    4: {
        name: "Неделя 4 — Уплотнение",
        trainings: [
            {
                day: "Понедельник (Тренировка А)",
                exercises: [
                    { name: "Суперсет: Отжимания", sets: 4, reps: "15", rest: 90, tempo: "медленный", supersetWith: "Планка" },
                    { name: "Суперсет: Планка", sets: 4, reps: "40-50 сек", rest: 90, tempo: "статика" },
                    { name: "Приседания с паузой", sets: 4, reps: "15-18", rest: 60, tempo: "медленный" },
                    { name: "Выпады", sets: 4, reps: "12 на ногу", rest: 60, tempo: "медленный" },
                    { name: "Обратные отжимания", sets: 4, reps: "12-15", rest: 60, tempo: "медленный" }
                ]
            },
            {
                day: "Среда (Тренировка Б)",
                exercises: [
                    { name: "Отжимания с широкой постановкой", sets: 4, reps: "12-15", rest: 60, tempo: "медленный" },
                    { name: "Суперсет: Приседания", sets: 4, reps: "15-18", rest: 90, tempo: "медленный", supersetWith: "Ягодичный мост" },
                    { name: "Суперсет: Ягодичный мост", sets: 4, reps: "15", rest: 90, tempo: "медленный" },
                    { name: "Боковая планка", sets: 4, reps: "30-40 сек/сторону", rest: 60, tempo: "статика" },
                    { name: "Супермен", sets: 4, reps: "15-18", rest: 60, tempo: "средний" }
                ]
            },
            {
                day: "Пятница (Тренировка А)",
                exercises: [
                    { name: "Суперсет: Отжимания", sets: 4, reps: "15", rest: 90, tempo: "медленный", supersetWith: "Планка" },
                    { name: "Суперсет: Планка", sets: 4, reps: "40-50 сек", rest: 90, tempo: "статика" },
                    { name: "Приседания с паузой", sets: 4, reps: "15-18", rest: 60, tempo: "медленный" },
                    { name: "Выпады", sets: 4, reps: "12 на ногу", rest: 60, tempo: "медленный" },
                    { name: "Обратные отжимания", sets: 4, reps: "12-15", rest: 60, tempo: "медленный" }
                ]
            },
            {
                day: "Воскресенье (Тренировка Б)",
                exercises: [
                    { name: "Отжимания с широкой постановкой", sets: 4, reps: "12-15", rest: 60, tempo: "медленный" },
                    { name: "Суперсет: Приседания", sets: 4, reps: "15-18", rest: 90, tempo: "медленный", supersetWith: "Ягодичный мост" },
                    { name: "Суперсет: Ягодичный мост", sets: 4, reps: "15", rest: 90, tempo: "медленный" },
                    { name: "Боковая планка", sets: 4, reps: "30-40 сек/сторону", rest: 60, tempo: "статика" },
                    { name: "Супермен", sets: 4, reps: "15-18", rest: 60, tempo: "средний" }
                ]
            }
        ]
    }
};

// ===== State =====
let currentWeek = 1;
let currentTraining = null;
let currentTrainingWeek = null;
let currentTrainingIndex = null;
let currentExerciseIndex = 0;
let currentSet = 0;
let timerInterval = null;
let timerSeconds = 0;
let timerType = null; // 'set-rest' | 'exercise-rest' | null

// ===== DOM Helpers =====
const $ = (id) => document.getElementById(id);

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    setupWeekButtons();
    displayTrainings(currentWeek);
    updateProgressStats();
});

// ===== LocalStorage =====
function getCompletedTrainings() {
    const saved = localStorage.getItem('completedTrainings');
    return saved ? JSON.parse(saved) : [];
}

function saveCompletedTraining(week, trainingIndex) {
    const completed = getCompletedTrainings();
    const key = `w${week}-t${trainingIndex}`;
    if (!completed.includes(key)) {
        completed.push(key);
        localStorage.setItem('completedTrainings', JSON.stringify(completed));
    }
}

function isTrainingCompleted(week, trainingIndex) {
    return getCompletedTrainings().includes(`w${week}-t${trainingIndex}`);
}

// ===== Exercise-Level LocalStorage =====
function getCompletedExercises() {
    const saved = localStorage.getItem('completedExercises');
    return saved ? JSON.parse(saved) : [];
}

function saveCompletedExercise(week, trainingIndex, exerciseIndex) {
    const completed = getCompletedExercises();
    const key = `w${week}-t${trainingIndex}-e${exerciseIndex}`;
    if (!completed.includes(key)) {
        completed.push(key);
        localStorage.setItem('completedExercises', JSON.stringify(completed));
    }
}

function isExerciseCompleted(week, trainingIndex, exerciseIndex) {
    return getCompletedExercises().includes(`w${week}-t${trainingIndex}-e${exerciseIndex}`);
}

// ===== Progress Stats =====
function updateProgressStats() {
    const completedT = getCompletedTrainings();
    const completedEx = getCompletedExercises();
    let totalTrainings = 0;
    let totalExercises = 0;

    Object.keys(trainingPlan).forEach(week => {
        totalTrainings += trainingPlan[week].trainings.length;
        trainingPlan[week].trainings.forEach(t => {
            totalExercises += t.exercises.length;
        });
    });

    const percent = totalExercises > 0 ? Math.round((completedEx.length / totalExercises) * 100) : 0;

    $('completedCount').textContent = completedT.length;
    $('completedExCount').textContent = completedEx.length;
    $('progressPercent').textContent = percent + '%';
    $('progressBar').style.width = percent + '%';
}

// ===== Week Buttons =====
function setupWeekButtons() {
    document.querySelectorAll('.week-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentWeek = parseInt(btn.dataset.week);
            displayTrainings(currentWeek);
        });
    });
}

// ===== Training List =====
function displayTrainings(week) {
    const list = $('trainingList');
    const weekData = trainingPlan[week];

    let html = '';
    weekData.trainings.forEach((training, index) => {
        const done = isTrainingCompleted(week, index);
        const completedExCount = training.exercises.filter((_, ei) => isExerciseCompleted(week, index, ei)).length;
        const totalExCount = training.exercises.length;
        const hasProgress = completedExCount > 0;
        const isPartial = hasProgress && !done;
        html += `
            <div class="training-card ${done ? 'completed' : ''}">
                <div class="training-header">
                    <h3 class="training-title">${training.day}
                        ${done ? '<span class="training-badge">✓ Выполнено</span>' : 
                         (completedExCount > 0 ? `<span class="training-badge">${completedExCount}/${totalExCount}</span>` : '')}
                    </h3>
                    <div class="training-actions">
                        ${isPartial ? `<button class="start-btn continue-btn" onclick="continueWorkout(${week}, ${index})">Продолжить</button>` : ''}
                        <button class="start-btn" onclick="startWorkout(${week}, ${index})">
                            ${done ? 'Повторить' : (isPartial ? 'Сначала' : 'Начать тренировку')}
                        </button>
                        ${hasProgress ? `<button class="start-btn reset-btn" onclick="resetTraining(${week}, ${index})">Сбросить</button>` : ''}
                    </div>
                </div>
                <ul class="exercise-list">
                    ${training.exercises.map((ex, ei) => {
                        const exDone = isExerciseCompleted(week, index, ei);
                        return `
                        <li class="exercise-item ${exDone ? 'done' : ''}">
                            <div class="exercise-check">${exDone ? '✓' : ''}</div>
                            <div class="exercise-info">
                                <div class="exercise-name">${ex.name}</div>
                                <div class="exercise-params">
                                    ${ex.sets} подхода × ${ex.reps} | Отдых: ${ex.rest}с | Темп: ${ex.tempo}
                                </div>
                            </div>
                        </li>
                    `;
                    }).join('')}
                </ul>
            </div>
        `;
    });

    list.innerHTML = html;
}

// ===== Start Workout =====
function startWorkout(week, trainingIndex) {
    // Сбрасываем прогресс этой тренировки перед новым запуском
    clearTrainingExercises(week, trainingIndex);
    removeCompletedTraining(week, trainingIndex);
    updateProgressStats();

    currentTraining = trainingPlan[week].trainings[trainingIndex];
    currentTrainingWeek = week;
    currentTrainingIndex = trainingIndex;
    currentExerciseIndex = 0;
    currentSet = 0;
    timerType = null;

    $('planView').style.display = 'none';
    $('workoutMode').classList.add('active');
    $('workoutTitle').textContent = currentTraining.day;

    showExerciseUI();
}

// ===== Continue Workout =====
function continueWorkout(week, trainingIndex) {
    currentTraining = trainingPlan[week].trainings[trainingIndex];
    currentTrainingWeek = week;
    currentTrainingIndex = trainingIndex;
    currentSet = 0;
    timerType = null;

    // Найти первое невыполненное упражнение
    let resumeIndex = 0;
    for (let i = 0; i < currentTraining.exercises.length; i++) {
        if (!isExerciseCompleted(week, trainingIndex, i)) {
            resumeIndex = i;
            break;
        }
    }
    currentExerciseIndex = resumeIndex;

    $('planView').style.display = 'none';
    $('workoutMode').classList.add('active');
    $('workoutTitle').textContent = currentTraining.day;

    showExerciseUI();
}

// ===== Reset Training =====
function resetTraining(week, trainingIndex) {
    if (!confirm('Сбросить весь прогресс этой тренировки?')) return;
    clearTrainingExercises(week, trainingIndex);
    removeCompletedTraining(week, trainingIndex);
    updateProgressStats();
    displayTrainings(currentWeek);
}

function clearTrainingExercises(week, trainingIndex) {
    const completed = getCompletedExercises();
    const prefix = `w${week}-t${trainingIndex}-e`;
    const filtered = completed.filter(key => !key.startsWith(prefix));
    localStorage.setItem('completedExercises', JSON.stringify(filtered));
}

function removeCompletedTraining(week, trainingIndex) {
    const completed = getCompletedTrainings();
    const key = `w${week}-t${trainingIndex}`;
    const filtered = completed.filter(k => k !== key);
    localStorage.setItem('completedTrainings', JSON.stringify(filtered));
}

// ===== Show Exercise UI =====
function showExerciseUI() {
    const exercise = currentTraining.exercises[currentExerciseIndex];

    // Show exercise info
    $('exerciseProgress').textContent =
        `Упражнение ${currentExerciseIndex + 1} из ${currentTraining.exercises.length}`;
    $('currentExerciseName').textContent = exercise.name;
    $('currentExerciseParams').textContent =
        `${exercise.sets} подхода × ${exercise.reps} | Отдых: ${exercise.rest}с | Темп: ${exercise.tempo}`;

    // Build set indicators
    updateSetIndicators();

    // Show correct buttons
    $('completeSetBtn').style.display = 'block';
    $('completeSetBtn').disabled = false;
    $('nextExerciseBtn').style.display = 'none';
    $('timerSection').classList.add('hidden');
    $('completionMessage').classList.add('hidden');

    // Make sure exercise section visible (could be hidden after previous completion)
    document.querySelector('.current-exercise').style.display = 'block';
    document.querySelector('.set-tracker').style.display = 'flex';
}

function updateSetIndicators() {
    const exercise = currentTraining.exercises[currentExerciseIndex];
    const tracker = $('setTracker');
    tracker.innerHTML = '';

    for (let i = 0; i < exercise.sets; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'set-indicator';
        if (i < currentSet) {
            indicator.classList.add('completed');
        } else if (i === currentSet) {
            indicator.classList.add('current');
        }
        indicator.textContent = i + 1;
        tracker.appendChild(indicator);
    }
}

// ===== Complete Set =====
function completeSet() {
    const exercise = currentTraining.exercises[currentExerciseIndex];

    currentSet++;
    updateSetIndicators();

    if (currentSet < exercise.sets) {
        // Ещё есть подходы — запускаем таймер отдыха между подходами
        $('completeSetBtn').style.display = 'none';
        showRestTimer(exercise.rest, 'set-rest');
    } else {
        // Все подходы выполнены — сохраняем упражнение
        saveCompletedExercise(currentTrainingWeek, currentTrainingIndex, currentExerciseIndex);
        updateProgressStats();
        $('completeSetBtn').style.display = 'none';

        if (currentExerciseIndex < currentTraining.exercises.length - 1) {
            // Есть ещё упражнения — показываем кнопку "Следующее"
            $('nextExerciseBtn').style.display = 'block';
        } else {
            // Последнее упражнение — завершаем тренировку
            completeWorkout();
        }
    }
}

// ===== Next Exercise =====
function nextExercise() {
    currentExerciseIndex++;
    currentSet = 0;

    if (currentExerciseIndex < currentTraining.exercises.length) {
        // Таймер отдыха между упражнениями (60 сек)
        $('completeSetBtn').style.display = 'none';
        $('nextExerciseBtn').style.display = 'none';
        showRestTimer(60, 'exercise-rest');
    } else {
        completeWorkout();
    }
}

// ===== Rest Timer (unified) =====
function showRestTimer(seconds, type) {
    timerType = type;
    timerSeconds = seconds;

    const section = $('timerSection');
    section.classList.remove('hidden');
    section.classList.add('resting');

    // Set label
    const label = $('timerLabel');
    if (type === 'set-rest') {
        label.textContent = 'Отдых между подходами';
    } else {
        label.textContent = 'Отдых перед следующим упражнением';
    }

    updateTimerDisplay();

    // Auto-start
    $('startTimerBtn').classList.add('hidden');
    $('pauseTimerBtn').classList.remove('hidden');

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        if (timerSeconds <= 0) {
            onTimerEnd();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    $('timerDisplay').textContent =
        `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function startTimer() {
    if (!timerInterval && timerSeconds > 0) {
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            if (timerSeconds <= 0) {
                onTimerEnd();
            }
        }, 1000);
        $('startTimerBtn').classList.add('hidden');
        $('pauseTimerBtn').classList.remove('hidden');
    }
}

function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        $('startTimerBtn').classList.remove('hidden');
        $('pauseTimerBtn').classList.add('hidden');
    }
}

function hideTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    const section = $('timerSection');
    section.classList.add('hidden');
    section.classList.remove('resting');

    $('startTimerBtn').classList.remove('hidden');
    $('pauseTimerBtn').classList.add('hidden');
}

function onTimerEnd() {
    const prevType = timerType;
    timerType = null;
    hideTimer();

    if (prevType === 'set-rest') {
        // Показать кнопку следующего подхода
        $('completeSetBtn').style.display = 'block';
        $('completeSetBtn').disabled = false;
    } else if (prevType === 'exercise-rest') {
        // Перейти к следующему упражнению
        showExerciseUI();
    }
}

function skipRest() {
    onTimerEnd();
}

// ===== Complete Workout =====
function completeWorkout() {
    saveCompletedTraining(currentTrainingWeek, currentTrainingIndex);
    updateProgressStats();

    const div = $('completionMessage');
    div.innerHTML = `
        <div class="completion-message">
            <h2>🎉 Тренировка завершена!</h2>
            <p>Отличная работа! Вы выполнили все упражнения.</p>
            <button class="start-btn" onclick="exitWorkout()" style="margin-top: 20px;">
                Вернуться к плану
            </button>
        </div>
    `;
    div.classList.remove('hidden');

    $('completeSetBtn').style.display = 'none';
    $('nextExerciseBtn').style.display = 'none';
    document.querySelector('.current-exercise').style.display = 'none';
    document.querySelector('.set-tracker').style.display = 'none';
    $('timerSection').classList.add('hidden');
}

// ===== Exit Workout =====
function exitWorkout() {
    hideTimer();
    timerType = null;

    $('planView').style.display = 'block';
    $('workoutMode').classList.remove('active');
    document.querySelector('.current-exercise').style.display = 'block';
    document.querySelector('.set-tracker').style.display = 'flex';

    displayTrainings(currentWeek);
}
