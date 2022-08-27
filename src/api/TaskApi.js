import axios from "./axios";
export const getTasks = async () => await axios.get("/tasks");
export const getTask = async (id) => await axios.get("/tasks/" + id);
export const createTask = async (task) => await axios.post("/tasks", task);
export const updateTask = async (id, task) => await axios.put("/tasks/" + id, task);
export const deleteTask = async (id) => await axios.delete("/tasks/" + id);
//# sourceMappingURL=TaskApi.js.map