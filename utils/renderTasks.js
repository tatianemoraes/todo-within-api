async function renderTasks() {

  // 1 etapa
  // consumir os dados da api e salvar numa constante
  const tasks = await getTasks();

  // 2 etapa pegar os dados que retornaram da constante
  // e fazer eles virem conteudo html dinamico no to-do


  // forEach - é somente looping, para funcionar, deve fazer assim:
  // semelhante ao for só que ele não precisa especifiar a posição de cada item
  // let renderLines = []
  //  tasks.forEach((task) => {
  //    renderLines.push(`<div>${task.description}</div>`)
  //})

  // map - faz o looping, mas retorna alguma coisa (retorna a logica que vc precisar)
  // tasks é um array de objetos que tem varias tasks que são objetos
  // tasks = [{ "descriptions": "nenhuma tarefa"}]
  // task = { "descriptions": "nenhuma tarefa"}
  const checkValidate = (status) => status ? 'text-decoration:line-through':'text-decoration:none';

  const renderLines = tasks.map((task) => { // array.map((objeto))
    return `
      <div class="task">
        <input class="checkbox checked_${task.id}" type="checkbox" onclick="changeChecked(${task.id})" ${task.checked ? 'checked' : ''}>
        <div style="${checkValidate(task.checked)}" class="description-task description_${task.id}" title="${task.description}">${task.description}</div>
        <div class="btns_${task.id}">
          <a class="btn-edit" onclick="updateTaskSelected(${task.id})">
            <i class="fas fa-pencil-alt"></i>
          </a>
          <a class="btn-trash" onclick="deleteTaskSelected(${task.id})">
            <i class="fas fa-trash-alt"></i>
          </a>
        </div>
      </div>
   `
  });


  // 3 etapa após renderLines receber o novo array estruturado para renderizar na tela
  // deverá jogar o conteudo na tela para ficar dinamico.
  // você precisará chamar a div que recebera a lista de tarefas e dentro dela jogar o conteudo
  // html novo

  const list = document.querySelector('.list-tasks');
  list.innerHTML = renderLines.join('');

}
