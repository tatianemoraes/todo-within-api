// create task
async function postTask(description) {
  try {
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      body: JSON.stringify({
        description,
        checked: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })

  } catch (error) {
    console.error(error);
  }
}

// getall tasks
async function getTasks() {
  try {
    const response = await fetch('http://localhost:3000/tasks');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


// delete task
async function deleteTask(idTask) {
  try {
    await fetch(`http://localhost:3000/tasks/${idTask}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error(error);
  }
}

// update task
async function updateTaskDescription(idTask, description) {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${idTask}`, {
      method: 'PATCH',
      body: JSON.stringify({
        description,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  } catch (error) {
    console.error(error);
  }
}

// update status of task
async function updateTaskCheckbox(idTask, checked) {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${idTask}`, {
      method: 'PATCH',
      body: JSON.stringify({
        checked,
      }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  } catch (error) {
    console.error(error);
  }
}
