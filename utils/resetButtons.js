function resetButtons(idTask) {

  let input = document.querySelector(`.description_${idTask}`);
  input.outerHTML = `
  <div class="description-task description_${idTask}" title="${input.value}">${input.value}</div>
  `;

  let btnRollBack = document.querySelector(`.btns_${idTask}`);
  btnRollBack.outerHTML = `
    <div class="btns_${idTask}">
      <a type="button" onclick="editTaskSelected(${idTask})">
        <i class="fas fa-pencil-alt"></i>
      </a>
      <a class="btn-trash" type="button">
        <i class="fas fa-trash-alt"></i>
      </a>
    </div>
  `
};
