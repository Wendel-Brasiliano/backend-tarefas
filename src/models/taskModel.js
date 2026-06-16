let tasks = [];
let currentId = 1;

const getAllTasks = () => {
  return tasks;
};

const createTask = (title, description) => {
  const newTask = {
    id: currentId++,
    title,
    description
  };

  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, title, description) => {
  const task = tasks.find((item) => item.id === Number(id));

  if (!task) {
    return null;
  }

  task.title = title;
  task.description = description;

  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);
  return true;
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};