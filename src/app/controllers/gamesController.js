import gamesRepository from "../repositories/gamesRepository.js";

class gamesController {
    
    async index(req, res) {
        const row = await gamesRepository.findAll();
        res.json(row);
    };
    async show(req, res) {
        const id = req.params.id;
        const row = await gamesRepository.findById(id);
        res.json(row);
    };
    async store(req, res) {
        const game = req.body;
        const row = await gamesRepository.create(game);
        res.json(row);
    };
    async update(req, res) {
        const id = req.params.id;
        const game = req.body;
        const row = await gamesRepository.update(game, id);
        res.json(row);
    };
    async delete(req, res) {
        const id = req.params.id;
        const row = await gamesRepository.delete(id);
        res.json(row);
    }; 
};

export default new gamesController();