let currentExerciseType = null;

function startExercise(type) {
  exClick=true;
  let gameName=type+'-game';
  console.log("Starting exercise:", type);
  document.getElementById('exercisesSection').style.display = 'none';
  currentExerciseType = type;

  document.getElementById(gameName).style.display='block'
  

}
