import express from 'express';

import * as todosController from './../controllers/todo-controller.js';

const router = express.Router();

//routes the requests to respective API call methods
router.route('/todos')
    .post(todosController.post)
    .get(todosController.index);


router.route('/todos/:id')
    .get(todosController.get)
    .patch(todosController.update)
    .delete(todosController.remove);

export default router;

