import express from 'express';
import * as TaskController from './src/Controllers/TasksController';
import * as RouteController from './src/Controllers/RouteController';

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/v1/tasks/get_all_tasks', TaskController.getAllTasks);
app.get('/api/v1/tasks/add_new_task/:title/:content', TaskController.addNewTask);
app.get('/api/v1/tasks/delete_task/:uuid', TaskController.removeExistingTask);
app.get('/api/v1/tasks/change_status/:uuid/:status', TaskController.changeTaskStatus);
app.get('/api/v1/tasks/update_title/:uuid/:title', TaskController.changeTaskTitle);
app.get('/api/v1/tasks/update_content/:uuid/:title', TaskController.changeTaskContent);
app.get('/api/v1/tasks/:param', RouteController.PageNotExists);

app.listen(port, () => {
    console.log('Listening on port ' + port)
});