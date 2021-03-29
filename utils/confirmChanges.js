async function confirmChanges(idTask) {
  // após vc clicar no botao confirmar
  // você deve salvar os dados mandado para o db
  // e quando ele for feito vc reseta os botoes para o que era antes
  // pode criar uma função para isso porque voce pode cancelar a ação de alteração
  let description = document.querySelector(`.description_${idTask}`).value;
  await updateTaskDescription(idTask, description);

  resetButtons(idTask);

}
