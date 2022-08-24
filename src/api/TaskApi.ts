import axios from "./axios";
import {Task} from "@/interfaces/Task";
import { AxiosResponse } from "axios";

export const createTask = async (task:Task) => await axios.post("/tasks",task)

export const getTask = async (): Promise<AxiosResponse<Task[]>> => await axios.get("/tasks")