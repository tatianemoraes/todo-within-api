function enableEdition(idTask) {

  let input = document.querySelector(`.description_${idTask}`);
  input.outerHTML = `
  <input type="text" class="description description_${idTask}" value="${input.innerText}">
  `

  let btnEdit = document.querySelector(`.btns_${idTask}`);
  btnEdit.outerHTML = `
    <div class="btns_${idTask} btns">
      <a type="button" onclick="confirmChanges(${idTask})">
        <i class="fas fa-check"></i>
      </a>
      <a type="button" onclick="resetButtons(${idTask})">
        <i class="fas fa-times"></i>
      </a>
    </div>
    `
  };
