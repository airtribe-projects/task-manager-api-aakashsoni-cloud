const express = require("express");
const { getAllTasks, getTaskById, addNewTask, updateExistingTask, deleteTask } = require("../controllers/taskController");
const { errorHandle } = require("../middleware/errorHandling");
const router = express.Router();

router.use(express.json());

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', addNewTask, errorHandle);
router.put('/:id', updateExistingTask, errorHandle);
router.delete("/:id", deleteTask, errorHandle);

module.exports = router;