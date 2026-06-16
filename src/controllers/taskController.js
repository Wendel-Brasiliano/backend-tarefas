const taskModel = require('../models/taskModel');

const getTasks = (req, res) => {
  const tasks = taskModel.getAllTasks();
  res.status(200).json(tasks);
};

const createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'O título é obrigatório.' });
  }

  const newTask = taskModel.createTask(title, description || '');
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'O título é obrigatório.' });
  }

  const updatedTask = taskModel.updateTask(id, title, description || '');

  if (!updatedTask) {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }

  res.status(200).json(updatedTask);
};

const deleteTask = (req, res) => {
  const { id } = req.params;

  const removed = taskModel.deleteTask(id);

  if (!removed) {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }

  res.status(200).json({ message: 'Tarefa excluída com sucesso.' });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};
