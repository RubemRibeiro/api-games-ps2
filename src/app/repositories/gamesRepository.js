import connection, { consulta } from "../database/dbConnect.js"; 
class gamesRepository {
    create(game) {
        const sql = "INSERT INTO games SET ?;"
        return consulta(sql, game, 'Não foi possível realizar o cadastro.')
    };

    findAll() {
        const sql = "SELECT * FROM games;"
        return consulta(sql, "Sem dados para retornar.")
    };

    findById(id) {
        const sql = "SELECT * FROM games WHERE id=?;"
        return consulta(sql, id, 'Não encontrado.')
    };

    update(game, id) {
        const sql = "UPDATE games SET ? WHERE id=?;"
        return consulta(sql, [game, id], 'Não foi possível atualizar.')
    };

    delete(id) {
        const sql = "DELETE FROM games WHERE id=?;"
        return consulta(sql, id, 'Não foi possível realizar a exclusão.')
    };

}

export default new gamesRepository();
