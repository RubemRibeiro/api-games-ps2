
# 🎮 API Games PS2

## 📄 Descrição

**api-games-ps2** é uma API RESTful desenvolvida em Node.js com Express, que fornece informações sobre jogos do PlayStation 2. Ela permite que os usuários consultem uma lista de jogos e detalhes específicos de cada um, facilitando a integração com outras aplicações ou serviços.

## 🚀 Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/RubemRibeiro/api-games-ps2.git
cd api-games-ps2
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor:**

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## 🧪 Exemplos de Uso

- **Listar todos os jogos:**

```bash
curl http://localhost:3000/games
```

- **Obter detalhes de um jogo específico:**

```bash
curl http://localhost:3000/games/1
```

## 📦 Dependências

- **express**: Framework web para Node.js, utilizado para criar as rotas da API.
- **nodemon**: Utilitário que monitora alterações nos arquivos e reinicia automaticamente o servidor durante o desenvolvimento.

## 📝 Comentários no Código

### `src/index.js`
```javascript
/**
 * @file index.js
 * @description Ponto de entrada da aplicação. Configura e inicia o servidor Express.
 */

const express = require('express');
const app = express();
const gamesRoutes = require('./routes/games');

app.use(express.json());
app.use('/games', gamesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

### `src/routes/games.js`
```javascript
/**
 * @file games.js
 * @description Define as rotas relacionadas aos jogos.
 */

const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

/**
 * @route GET /games
 * @description Retorna a lista de todos os jogos.
 */
router.get('/', gamesController.getAllGames);

/**
 * @route GET /games/:id
 * @description Retorna os detalhes de um jogo específico pelo ID.
 */
router.get('/:id', gamesController.getGameById);

module.exports = router;
```

### `src/controllers/gamesController.js`
```javascript
/**
 * @file gamesController.js
 * @description Contém a lógica para manipular os dados dos jogos.
 */

const games = require('../data/games');

/**
 * @function getAllGames
 * @description Retorna a lista de todos os jogos.
 * @param {Object} req - Objeto de requisição.
 * @param {Object} res - Objeto de resposta.
 */
exports.getAllGames = (req, res) => {
  res.json(games);
};

/**
 * @function getGameById
 * @description Retorna os detalhes de um jogo específico pelo ID.
 * @param {Object} req - Objeto de requisição.
 * @param {Object} res - Objeto de resposta.
 */
exports.getGameById = (req, res) => {
  const id = parseInt(req.params.id);
  const game = games.find(g => g.id === id);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ message: 'Jogo não encontrado' });
  }
};
```

### `src/data/games.js`
```javascript
/**
 * @file games.js
 * @description Contém os dados dos jogos em formato de array de objetos.
 */

module.exports = [
  {
    id: 1,
    title: 'God of War',
    genre: 'Ação',
    releaseYear: 2005
  },
  {
    id: 2,
    title: 'Shadow of the Colossus',
    genre: 'Aventura',
    releaseYear: 2005
  }
];
```

## 📂 Estrutura do Projeto

```
api-games-ps2/
├── src/
│   ├── controllers/
│   │   └── gamesController.js
│   ├── data/
│   │   └── games.js
│   ├── routes/
│   │   └── games.js
│   └── index.js
├── package.json
├── package-lock.json
├── swagger.yaml
└── swagger.json
```


