import { Router } from 'express';
import Task from '../models/Tasks';

const router = Router();

router.get('/tasks', async(req, res) => {
    const tasks = await Task.find()
    res.send(tasks);
});

router.get('/tasks/:id', async(req, res) => {
   try {
    const task = await Task.findById(req.params.id);
    res.send(task);

    if(!task) {
        res.status(404).send("Tarea no encontrada");
    }

   } catch (error) {
         res.status(500).send(error);
   }
});

router.post('/tasks', async (req, res) => {
    const {title , description} = req.body;

    const task = new Task({title, description})

    await task.save();

    res.json(task);
});

router.delete('/tasks/:id', async(req, res) => {

    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send('Tarea encontrada y eliminada: '+ task?.title);

    if(!task) {
        res.status(404).send("Tarea no encontrada");
    }
    } catch (error) {
        res.status(500).send(error);
        
    }
});

router.put('/tasks/:id', async(req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body , {
        new: true
    })

    res.json(updatedTask);
});

export default router;