let addTask = document.querySelector('.btn-plus');
addTask.addEventListener('click', async () => {
  let description = document.querySelector('.input-text').value;
  await postTask(description);
});

let clearFields = document.querySelector('.btn-clear');
clearFields.addEventListener('click', () => {
  document.querySelector('.input-text').value = '';
});

renderTasks();
