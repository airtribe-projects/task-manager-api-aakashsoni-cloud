const taskModel = require("../models/taskModel");

const getAllTasks = (req, res) => {
  const { completed = false, sort = "asc", priority = "" } = req.query;

  let tasks = taskModel;

  if (sort) {
    tasks.sort((a, b) => {
      if (sort === "desc") {
        return b.title.localeCompare(a.title);
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  }

  if (completed) {
    tasks = taskModel.filter((task) => task.completed.toString() === completed);
  }

  if (priority) {
    tasks = taskModel.filter((task) => task.priority === priority);
  }

  res.status(200).json({
    tasks,
    message: "Tasks found successfully",
  });
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = taskModel.find((task) => task.id == id);
  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }
  res.status(200).json({ task: task, message: "Task found successfully" });
};

const addNewTask = (req, res, next) => {
  const { title, description, priority, completed } = req.body;
  if (title === "" || description == "") {
    const error =
      title === ""
        ? new Error("Task title cannot be empty.")
        : new Error("Task description cannot be empty.");
    error.status = 400;
    return next(error);
  }

  if (!priority) {
    const error = new Error("Task priority cannot be empty.");
    error.status = 400;
    return next(error);
  }

  if (typeof completed !== "boolean") {
    const error = new Error("Completed status must be a boolean type");
    error.status = 400;
    return next(error);
  }

  const newTask = {
    id: taskModel[taskModel.length - 1].id + 1,
    title: title,
    description: description,
    priority: priority,
    completed: completed,
  };

  taskModel.push(newTask);
  res
    .status(201)
    .json({ tasks: taskModel, message: "Task added successfully" });
};

const updateExistingTask = (req, res, next) => {
  const { title, description, completed, priority } = req.body;
  const { id } = req.params;

  const task = taskModel.find((task) => task.id == id);

  if (!task) {
    res.status(404).json({ message: "Task not found." });
    return;
  } else {
    if (title === "" || description === "") {
      const error =
        title === ""
          ? new Error("Task title cannot be empty.")
          : new Error("Task description cannot be empty.");
      error.status = 400;
      return next(error);
    }

    if (!priority) {
      const error = new Error("Task priority cannot be empty.");
      error.status = 400;
      return next(error);
    }

    if (typeof completed !== "boolean") {
      const error = new Error("Completed status must be a boolean type");
      error.status = 400;
      return next(error);
    }

    task.completed = completed || task.completed;
    task.title = title || task.title;
    task.description = description || task.description;
    task.priority = priority || task.priority;

    res.status(200).json({ task: task, message: "Task updated successfully" });
  }
};

const deleteTask = (req, res, next) => {
  const { id } = req.params;
  const idx = taskModel.findIndex((task) => task.id === id);
  if (idx === -1) {
    const error = new Error("Task not found.");
    error.status = 404;
    return next(error);
  } else {
    taskModel.splice(idx, 1);
    res.status(200).json({ message: "Task deleted successfully" });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  addNewTask,
  updateExistingTask,
  deleteTask,
};
