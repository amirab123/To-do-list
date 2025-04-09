

function ajouterTache() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete" onclick="supprimerTache(this)">Supprimer</button>`;
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  }
}

document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      ajouterTache();
    }
  });
function supprimerTache(button) {
  button.parentElement.remove();
}
