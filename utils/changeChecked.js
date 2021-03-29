async function changeChecked(idTask) {
  let check = document.querySelector(`.checked_${idTask}`).checked;
  let description = document.querySelector(`.description_${idTask}`);
  description.style.textDecoration = check ? 'line-through' : 'none';
  await updateTaskCheckbox(idTask, check)
}
