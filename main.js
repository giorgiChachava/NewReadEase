////////////////////////////////////////////////////UPDATE THIS///////////////////////////////
// Added by giorgi chachava - just added function to handle section display and exercise filtering (below this line is all my code)
const ExerciseGames = [
'letter-mastery-game',
'emoji-word-finder-game',
'gaze-maze-game',
'find-words-game',
'odd-one-out-game',
'focus-timer-game',
'rapid-word-attack-game',
'syllable-builder-game',
'letter-order-game',
];

function showSection(sectionId) {
  const sections = ['toolsSection', 'exercisesSection',  'aboutSection'];
  sections.forEach(id => {
    document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
  });
}

function hideExercises(){
  ExerciseGames.forEach(id => {
    document.getElementById(id).style.display='none';
  });
}
  function filterExercises(level) {
    // Update button styles
    const buttons = document.querySelectorAll('#exercisesSection button');
    buttons.forEach(button => {
      if (button.textContent.toLowerCase().includes(level)) {
        button.style.background = '#4a6fa5';
        button.style.color = 'white';
      } else if (button.textContent.toLowerCase() !== 'all') {
        button.style.background = '#e2e8f0';
        button.style.color = '#2c3e50';
      }
    });
    
    // Special case for "All" button
    if (level === 'all') {
      //document.querySelector('#exercisesSection button:first-child').style.background = '#4a6fa5';
      //document.querySelector('#exercisesSection button:first-child').style.color = 'white';
    } else {
      //document.querySelector('#exercisesSection button:first-child').style.background = '#e2e8f0';
      //document.querySelector('#exercisesSection button:first-child').style.color = '#2c3e50';
    }
    
    // Filter exercises
    const exercises = document.querySelectorAll('.exercise-card');
    exercises.forEach(exercise => {
      if (level === 'all' || exercise.getAttribute('data-level') === level) {
        exercise.style.display = 'block';
      } else {
        exercise.style.display = 'none';
      }
    });
  }

  // Initialize to show all exercises
  filterExercises('all');