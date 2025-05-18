import { Router } from "express";
import gamesController from "./app/controllers/gamesController.js";

const router = Router();

//Rotas do CRUD

router.get('/games', gamesController.index);

router.get('/games/:id', gamesController.show);

router.post('/games', gamesController.store);

router.put('/games/:id', gamesController.update);

router.delete('/games/:id', gamesController.delete);

export default router;
