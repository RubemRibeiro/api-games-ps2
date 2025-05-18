import mysql from 'mysql';

const connection  = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWRD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

connection.connect();

/**
 * Executa um código de consulta SQL, com ou sem valores
 * @param {string} sql instrução sql
 * @param {string=id | [games, id]} values a serem passados ou não para o SQL
 * @param {string} rejectMessage mensagem a ser exibida em caso de erro
 * @returns 
 */

export const consulta = (sql, values='', rejectMessage) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, result) => {
            if(error) return reject(rejectMessage);
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        });
    });
}

export default connection;