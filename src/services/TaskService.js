import axios from "axios";

const BASE_URL = "http://localhost:8080/api/quotes";

const TaskService = {
  getAllTasks: () => axios.get(BASE_URL),
  createTask: (task) => axios.post(BASE_URL, task),
};

export default TaskService;
