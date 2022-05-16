# Criando APIs com NodeJs

- Utilizando o padrão **M V C**

  - M o d e l
  - V i e w
  - C o n t r o l l e r

|  C R U D      |   R E S T                  |
|---------------|----------------------------|
| C r e a t e   |  &rarr; P O S T            |
|  R e a d      |  &rarr; G E T              |   
|  U p d a t e  |  &rarr; P U T / P A T C H  |   
|  D e l e t e  |  &rarr; D E L E T E        |   


---

## O que é padrão MVC?

- O MVC é uma sigla do termo em inglês Model (modelo), View (visão) e Controller (Controle) que facilita a troca de informações entre a interface do usuário aos dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas.

- O MVC é um padrão de arquitetura de software responsável por contribuir na otimização da velocidade entre as requisições feitas pelo comando dos usuários. 

- A arquitetura MVC é dividida em três componentes essenciais: **Model, View e Controller**.


### Model ou Modelo 

- Essa classe também é conhecida como Business Object Model (Objeto Modelo de Negócio). 
- Sua responsabilidade é gerenciar e controlar a forma como os dados se comportam por meio das funções, lógica e regras de negócios estabelecidas. 

- Ele é o detentor dos dados que recebe as informações do Controller, válida se ela está correta ou não e envia a resposta mais adequada. 

### Controller ou Controlador

- A camada de controle é responsável por intermediar as requisições enviadas pelo View com as respostas fornecidas pelo Model, processando os dados que o usuário informou e repassando para outras camadas. 

- Numa analogia, o controller  operaria como o ‘’maestro de uma orquestra’’  que permite a comunicação entre o detentor dos dados e a pessoa com vários questionamentos no MVC. 

### View ou Visão

- Essa camada é responsável por apresentar as informações de forma visual ao usuário. Em seu desenvolvimento devem ser aplicados apenas recursos ligados a aparência como mensagens, botões ou telas. 

- Seguindo nosso processo de comparação o View está na linha de frente da comunicação com usuário e é responsável transmitir questionamentos ao controller e entregar as respostas obtidas ao usuário. É a parte da interface que se comunica, disponibilizando e capturando todas as informação do usuário.

### Como os componentes interagem?

- Tudo começa com a interação do usuário na camada **View**. A partir daí o **controlador** pega essa informações e envia para o **Model** que fica responsável por avaliar aqueles dados e transmitir uma resposta. 

- O **controlador** recebe essas respostas e envia uma notificação de validação daquela informação para a camada visão, fazendo com a mesma apresente o resultado de maneira gráfica e visual.

- Todo esse processo leva em consideração as regras de negócio aplicadas na construção de todo projeto.

### Por que usar MVC?

- **Segurança**: O controller funciona como uma espécie de filtro capaz de impedir que qualquer dado incorreto chegue até a camada modelo. 

- **Organização**: Esse método de programação permite que um novo desenvolvedor tenha muito mais facilidade em entender o que foi construído, assim como os erros se tornam mais fácil de serem encontrados e corrigidos.

- **Eficiência**: Como a arquitetura de software é dividida em 3 componentes , sua aplicação fica muito mais leve, permitindo que vários desenvolvedores trabalhem no projeto de forma independente.

- **Tempo**: Com a dinâmica facilitada pela colaboração entre os profissionais de desenvolvimento, o projeto pode ser concluído com muito mais rapidez, tornando o projeto escalável.  

- **Transformação**: As mudanças que forem necessárias também são mais fluidas, já que não será essencial trabalhar nas regras de negócio e correção de bugs.

- Além disso, um software precisa ter estabilidade no processo de comunicação entre seus elementos de maneira dinâmica para que a experiência do usuário não seja prejudicada. 

### Como implementar um projeto MVC?

- Essa arquitetura de software pode ser utilizada no programação web, mobile ou desktop.

### Conclusão 

- O MVC (Model, View e Controller) funciona como um padrão de arquitetura de software que melhora a conexão entre as camadas de dados, lógica de negócio e interação com usuário. Através da sua divisão em três componentes, o processo de programação se torna algo mais simples e dinâmico.

- Por padrão existem a camada **Model, Controller e View** que deram origem a sigla dessa arquitetura de software mais utilizado entre os desenvolvedores.  

---

## Link do Curso

http://player.balta.io/#/courses/1972

## Sumário

Neste curso vamos unir a popularidade das APIs com a popularidade do JavaScript criando uma API completa com NodeJs, passando pelos principais pontos que você precisa conhecer para colocar seu projeto em produção.

## Módulos 

### 1. Instalação Node, NPM e VS Code
<a href="#1">1.1. Introdução e Configuração
1.2. Instalação Node, NPM e VS Code
1.3. npm init e instalação dos pacotes
1.4. Criando um servidor Web
1.5. Normalizando a porta
1.6. Gerenciando Erros do Servidor
1.7. Iniciando o Debug
1.8. Separando o Servidor
1.9. Configurando o NPM Start
1.10. Nodemon
</a>

### 2. CRUD REST
<a href="#2">2.1. Rotas
2.2. Controllers
2.3. MongoDb Setup
2.4. Mongooose
2.5. Models
2.6. Criando um Produto
2.7. Listando os Produtos
2.8. Listando um Produto pelo slug
2.9. Listando um Produto pelo Id
2.10. Listando os Produtos de uma tag
2.11. Atualizando um produto
2.12. Excluindo um produto
2.13. Validações
2.14. Repositórios
2.15. Async/Await
2.16. Revisitando os Models: Customer
2.17. Revisitando os Models: Order
2.18. Revisitando os Controllers: Customer
2.20. Revisitando os Controllers: Order
</a>

### 3. Melhorando a API
<a href="#3">3.1. Arquivo de Configurações
3.2. Encriptando a senha
</a>

### 4. Segurança
<a href="#4">4.1. Autenticação
4.2. Recuperando dados do usuário logado
4.3. Refresh Token
4.4. Autorização
</a>

#### 5. Outros
<a href="#5">5.1. Outros
5.2. Publicando a API
5.3. Conclusão
</a>

---

# Conteúdo Programático

<span id="1">

## 1. Instalação Node, NPM e VS 

- Selecionar o diretorio para criar o projeto de instalação dos pacotes, por exemplo, uma pasta chamada Dev

- Criar a pasta do projeto

```node
mkdir node-str
```

- Abri a pasta do projeto
```node
cd node-str
```

## 1.1. npm init e instalação dos pacotes

### npm init -y

- Gerar o arquivo package.json -y

```json
{
  "name": "node-str",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "debug": "^4.3.4",
    "express": "^4.18.1",
    "http": "^0.0.1-security"
  }
}
```

- Instalar os pacotes: http, express e debug

### npm install http express debug -save

```node
npm install http express debug -save
```

### Será Criado as dependencias do projeto (dependencies)

```js
"dependencies": {
    "debug": "^4.3.4",
    "express": "^4.18.1",
    "http": "^0.0.1-security"
}
```

### remover a pasta node_modeles

```js
rm -rf node_modules
```

### instalar as dependencias (npm install) ou (npm i)

```js
npm install

// ou

npm i
```

## 1.2. Criando um servidor Web

<code> server.js</code>

```js
'use strict';

// require (importar modulos no node.js)
// busca na pasta node_modules

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

// const arquivoLocal = require('./arquivoLocal/teste'); // importar arquivo local

const app = express();
const port = 3000;
app.set('port', port);

const server = http.createServer(app);  // criar o servidor
const router = express.Router();        // criar a rota

var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

// o servidor ficar ouvindo a rota que está rodando na porta 3000
server.listen(port);
console.log('API rodando na porta ' + port);
```

<code> &rarr; Run 🖥️ &lt;server.js&gt; </code>

```node
eduardo@MacBook node-str % node server.js
API rodando na porta 3000
```

- Instalar o Postman.
- No Workspace, digitar o endereço (GET), fazer um GET na PORTA 3000:

```node
localhost:3000
```

- Em seguida clicar em Send

```js
  {
      "title": "Node Store API",
      "version": "0.0.1"
  }
```

## 1.3. Normalizando a porta

- O server.js não é interessante fixar uma porta específica, porta 3000.

- Vamos criar uma função normalizePort()

<code> server.js</code>

```js
'use strict';

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();

// const port = 3000;
// app.set('port', port);

// 1.3. Normalizando a porta
const port = normalizePort(process.env.PORT || '3000'); 
app.set('port', port);

const server = http.createServer(app);  // criar o servidor
const router = express.Router();        // criar a rota

var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

// o servidor ficar ouvindo a rota que está rodando na porta 3000
server.listen(port);
console.log('API rodando na porta ' + port);

// 1.3. Normalizando a porta
function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}
```

<code> &rarr; Run 🖥️ &lt;server.js&gt; </code>

```node
eduardo@MacBook node-str % node server.js
API rodando na porta 3000
```

## 1.4. Gerenciando Erros do Servidor

<code> server.js</code>

```js
'use strict';

// require (importar modulos no node.js)
// busca na pasta node_modules

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();

// const port = 3000;
// app.set('port', port);

// 1.3. Normalizando a porta
const port = normalizePort(process.env.PORT || '3000'); 
app.set('port', port);

const server = http.createServer(app);  // criar o servidor
const router = express.Router();        // criar a rota

var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
}); 
app.use('/', route);

// server
server.listen(port);

server.on('error', onError); // 1.4. Gerenciando Erros do Servidor

console.log('API rodando na porta ' + port);

// console.log(`API is alive on ${port}!`);

// 1.3. Normalizando a porta
function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// 1.4. Gerenciando Erros do Servidor
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
```


## 1.5. Iniciando o Debug

<code> server.js</code>

```js
'use strict';

// require (importar modulos no node.js)
// busca na pasta node_modules

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

// const arquivoLocal = require('./arquivoLocal/teste'); // importar arquivo local

const app = express();

// const port = 3000;
// app.set('port', port);

const port = normalizePort(process.env.PORT || '3000'); 
app.set('port', port);

const server = http.createServer(app);  // criar o servidor
const router = express.Router();        // criar a rota

var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
}); 
app.use('/', route);

// server
server.listen(port);

server.on('error', onError); // Gerenciando Erros do Servidor

server.on('listening', onListening); // Iniciando o Debug, para escutar o servidor

console.log('API rodando na porta ' + port);

// console.log(`API is alive on ${port}!`);

// função que Normalizando a porta
function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// Gerenciando Erros do Servidor
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

// 1.5. Iniciando o Debug
// Iniciando o Debug, function onListening(), para escutar o servidor
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr 
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

```

## 1.6. Separando o Servidor

- Criar uma pasta **bin**, com o arquivo <code> server.js </code>

- Ciar outra pasta **src**, com o arquivo <code> app.js </code>

<code> bin/server.js</code>

```js
const app = require('../src/app'); // importando o modulo src/app.js
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// server, criar o servidor
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

// Normalizando a porta
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// Gerenciando Erros do Servidor
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Iniciando o Debug, para escutar o servidor
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
```

<code> src/app.js</code>

```js
'use strict';

const express = require('express');

const app = express();

// router, criar a rota
const router = express.Router();

var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
}); 
app.use('/', route);

module.exports = app; //  express()
```

## 1.7. Configurando o NPM Start

<code> package.json </code>

- No arquivo, package.json

- Atualizar o script "start"

```json
  "scripts": {
    "start": "node ./bin/server.js"
```

- No terminal, executar o comando:

<code> npm start </code>

- OBS: Dessa forma, na pasta raiz do projeto, agora é executado automaticamente o script de inicialização.

## 1.8. Nodemon

- O que é o Nodemon?

- O **nodemon** é uma ferramenta (biblioteca) que ajuda no desenvolvimento de sistemas/aplicativos baseados em Node.js, verificando automaticamente o servidor quando são detectadas alterações de arquivos no diretório.

- Imagine a seguinte situação, você está desenvolvendo uma aplicação com o Node, e criou uma rota, para acessá-la, é preciso reiniciar o servidor.

- Você também pode instalar o nodemon como uma dependência de desenvolvimento (DevDependencies):

```node
npm install nodemon --save-dev  

// ou usando yarn: 

yarn add nodemon -D
```

- Dependência de desenvolvimento (devDependencies)

<code> package.json</code>

```json
"devDependencies": {
    "nodemon": "^2.0.16"
  }
```

- Para executar o nodemon:

<code> npx nodemon bin/server.js </code> 

```js
npx nodemon bin/server.js
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node bin/server.js`
API rodando na porta 3000
```

<br>

---
<span id="2">

## 2. REST e CRUD

## 2.0 CRUD REST


- Os verbos HTTP, CRUD REST:

 * C r e a t e  &rarr; POST
 * R e a d    &rarr; GET
 * U p d a t e  &rarr; PUT / PATCH
 * D e l e t e  &rarr; DELETE


```js
'use strict';

const express = require('express');

const app = express();

const router = express.Router(); // router, criar a rota

/**
 * Os verbos HTTP, CRUD REST:
 * Create   -> POST
 * Read     -> GET
 * Update   -> PUT / PATCH
 * Delete   -> DELETE
 */

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
}); 

// POST - Create (Criar) - Criar um recurso (req)
const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
}); 


app.use('/', route);
app.use('/products', create);

module.exports = app; //  express()
```

<br>

### POSTMAN &rarr; POST

- POST, http://localhost:3000/products, no Body, selecionamos:

  - raw
  - JSON

```json
{
    "title": "Teste"
}
```

- Verificar que o POSTMAN, POST http://localhost:3000/products, 
  - Repare com retornou o Status: 201 Created, 
  - Porém não apresenta nenhuma informação no Body!

<img src="./img/2/2-1.png" widf="600px">

<br>

### Será necessário instalar o body-parser. 

- [body-parser] &rarr; Converter o corpo da requisição para JSON.

- **Middleware** de análise do corpo do Node.js.

- Para mais informações consultar: 
https://www.npmjs.com/package/body-parser

<br>

- Instalar o pacote: <code>body-parser</code>

```node
npm install body-parser --save
```

- Parar o serviço do nodemon
- Depois será necessário importar o pacote <code>body-parser</code> no arquivo <code> app.js </code>

```js
'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const router = express.Router(); // router, criar a rota

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ...
```

- Executar no terminal, o nodemon

```js
npx nodemon bin/server.js
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node bin/server.js`
API rodando na porta 3000
```

<br>

### Postman &rarr; POST

- Após instalar e importar o pacote do <code> body-parser </code>
- POST http://localhost:3000/products,  
repare o que recebeu no <code>req</code> (request), foi retornado no <code>resp</code> (response)
- Status: 201 Created

<img src="./img/2/2-2.png" widf="600px">

<br>

### POSTMAN &rarr; PUT

- PUT http://localhost:3000/123,  
repare o que recebeu no <code>req</code> (request), foi retornado no <code>resp</code> (response)
- Status: 201 Created

<img src="./img/2/2-3.png" widf="600px">

<br>

### Criamos todos os métodos HTTP do CRUD REST

 * Create   -> POST
 * Read     -> GET
 * Update   -> PUT / PATCH
 * Delete   -> DELETE

<code> src/app.js</code>

```js
'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const router = express.Router(); // router, criar a rota

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Os verbos HTTP, CRUD REST:
 * Create -> POST
 * Read -> GET
 * Update -> PUT / PATCH
 * Delete -> DELETE
 */

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
}); 

// POST - Create (Criar) - Criar um recurso (req)
const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
}); 

// PUT - Update (Atualizar) - Atualizar um recurso (req)
const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id,
        item: req.body
    });
}); 

// DELETE - Delete - Excluir um recurso (req)
const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
}); 

app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app; //  express()
```

<br>

### POSTMAN &rarr; DELETE

- DELETE http://localhost:3000/,  
repare o que recebeu no <code>req</code> (request), foi retornado no <code>resp</code> (response)
- Status: 200 OK

<img src="./img/2/2-4.png" widf="600px">

---

## 2.1. Rotas

- Para separar as rotas (routes) da nossa aplicação (app), vamos criar dentro da pasta  <code> src </code>

  - Criar um diretório <code> routes </code>

  - Criar os seguintes arquivos dentro do diretório <code> routes </code> :
  
    - <code> index-route.js </code>
    - <code> products-route.js </code>

<br>

- Copiar as rotas do <code> src/app.js </code> para os arquivos:
    - <code> index-route.js </code> (rota principal)
    - <code> products-route.js </code>


<br>

### Código Fonte do Projeto

### app.js 

<code> src / app.js </code>

```js
'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const app = express(); // Criar um servidor Web

const router = express.Router(); // Criar as Rotas

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; //  exportar o modulo app
```

<br>

### index-route.js

<code> src / routes / index-route.js </code>

```js
'use strict';

const express = require('express'); 

const router = express.Router();  

// Rota Principal

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
}); 

module.exports = router; //  exportar o modulo router

```

<br>

### product-route.js

<code> src / routes / product-route.js </code>

```js
'use strict';

const express = require('express'); 
const router = express.Router();  

// POST - Create (Criar) - Criar um recurso (req)

router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
}); 

// PUT - Update (Atualizar) - Atualizar um recurso (req)

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id,
        item: req.body
    });
}); 

// DELETE - Delete - Excluir um recurso (req)

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
}); 


module.exports = router; //  exportar o modulo router
```

<br>

### Postman - C R U D :

 * C r e a t e  &rarr; POST
 * R e a d    &rarr; GET
 * U p d a t e  &rarr; PUT / PATCH
 * D e l e t e  &rarr; DELETE

<br>

### Postman - Testes:

#### GET
<img src="./img/2/2-5.png" width="800px">

#### POST
<img src="./img/2/2-6.png" width="800px">

#### PUT
<img src="./img/2/2-7.png" width="800px">

#### DELETE
<img src="./img/2/2-8.png" width="800px">

---

## 2.2. Controllers

- Delegando a responsabilidade das Rotas para os **Controllers**, ele responde pelas requisições dos usuários.

- Para utilizar os Controllers, vamos criar dentro da pasta  <code> src </code>

  - Criar um diretório <code> controllers </code>

  - Criar um arquivo <code> product-controller.js </code> :
  
<br>

### products-route.js

- Copiar e colar os métodos, ajustando os métodos POST, PUT e DELETE, conforme o exemplo abaixo.

<code> src / controllers / products-route.js </code>

```js
'use strict';

// POST - Create -> Criar um recurso (req)

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
}

// PUT - Update -> Atualizar um recurso (req)

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id,
        item: req.body
    });
}; 

// DELETE - Delete -> Excluir um recurso (req)

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}; 
```

<br>

### product-route.js

- Delegamos a responsabilidade das rotas para o Controller, ou seja, o Controller responde pelas requisições dos usuários.

- Atualizar o arquivo:

<code> src / routes / product-route.js </code>

```js
'use strict';

const express = require('express'); 
const router = express.Router();  
const controller = require('../controllers/product-controller');

router.post('/', controller.post);      // POST - Create -> Criar um recurso (req)
router.put('/:id', controller.put);     // PUT -  Update -> Atualizar um recurso (req)
router.delete('/', controller.delete);  // DELETE - Delete -> Excluir um recurso (req)


module.exports = router;                //  exportar o modulo router
```

<br>

### Postman

- Realizar os testes dos métodos CRUD com o Postman.

 * C reate  &rarr; POST
 * R ead    &rarr; GET
 * U pdate  &rarr; PUT / PATCH
 * D elete  &rarr; DELETE

---


## 2.3. MongoDB Setup

- Conectar o nosso CRUD ao nosso Banco de Dados, MongoDB

- Recado enviadao pelo Balta:

  "O curso que você começou utiliza o MongoDB para persistência de dados. 
  Eu costumava sugerir um serviço chamado MLabs para o MongoDB, mas infelizmente este serviço não está mais disponível.

  Então é o seguinte, para dar continuidade nas aulas, siga os passos do tutorial abaixo:

  https://balta.io/blog/mongodb-docker

  Ele vai te ensinar a instalar o Docker e rodar o MongoDB localmente."


---

## MongoDB

- O MongoDB é Not only SQL (NoSQL) é definido como Nova gereção de banco de dados comumente: não relacionais, distribuídos, de código aberto e escaláveis horizontalmente.

- NoSQL pode ser mais eficiente em armazenar objetos e dados que não precisam ser normalizados.

### Quando usar MongoDB?

#### Quando os dados não se encaixam no modelo relacional

- Dados que são muito complexos para modelar, **onde os campos de uma entrada podem variar dependendo dos attributos da mesma, ou a necessidade de desnormaliza-los gravando dados serializados ou no formato JSON** dentro de uma coluna, são fortes indícios de que seu projeto esta sofrendo com a escolha errada de utilizar um banco de dados relacional. Tais problemas indicam explicitamente que MongoDB seria mais adequado para o problema em questão.

#### Quando seus dados são na verdade objetos

- **Se sua aplicação lida exclusivamente com objetos**, através de um ORM por exemplo. Quase todas as queries precisam acessar muitas tabelas para construir um objeto de domínio. Por fim, várias das tabelas que existem para compor esse objeto nunca vão ser acessadas diretamente e só existem por convenção (Aquela velha convenção dos anos 70 de normalizar tudo!). Com MongoDB, esses dados ficam todos no mesmo registro, podendo ser aninhados e agrupados em arrays.

#### Quando sua aplicação valida a consistência dos dados, não o banco

- Antigamente as regras de negócio ficavam no banco de dados na forma de constraints porém, hoje em dia é mais comum e conveniente a implementação dessas regras de negócio no código da aplicação. O benefício é poder contar com testes automatizados, versionamento, manutenabilidade e critérios de validação complexos sobre os dados.

- Se a **sua aplicação tem a responsabilidade de validar os dados e a consistência antes de gravar um registro no banco**, então MongoDB (onde não existem constraints) pode fazer sentido.

#### Quando o projeto da aplicação é orientado ao domínio

- Para quem conhece Domain Driven Design (DDD). O próprio autor do DDD, Eric Evans, reforça que os banco de dados relacionais não são apropriados para armazenar objetos que mapeiam entidades de domínio. Muitas implementações de DDD acabam com value objects desnormalizados e serializados no banco de dados.

#### Quando seu projeto precisa se adaptar a mudanças

- MongoDB pode impactar positivamente a produtividade em projetos **onde o formato dos dados evolui ou muda facilmente**. Pois o schema flexível do MongoDB permite que o formato dos documentos evoluam de uma forma progressiva. Não sendo necessário alterar tabelas ou executar migrações para adições nas entidades. O que torna **o MongoDB uma opção muito interessante para startups e projetos com metodologias ágeis**.

- Ainda que hoje existam as *migrações* para ajudar modificar o schema de um banco de dados de forma mais rápida e evolutiva. É redundante fazer as modificações de campos na sua aplicação e depois na base de dados. **Com MongoDB a declaração dos campos fica exclusivamente na sua aplicação, junto com as regras de negócio**.

- Por exemplo, na empresa Leroy Merlin, o schema de determinadas entidades pode ser alterado pelos próprios usuários do sistema. Temos várias mudanças nos schema das mais de 1000 categorias de produtos diariamente. Isso não seria possível (pelo menos não em real-time) com ALTER TABLE em um banco relacional.

#### Quando a escalabilidade é importante

- O MongoDB já fornece as ferramentas necessárias para fazer escritas com performance *in-memory* e para trabalhar com replicas e shards distribuídos.

- Ainda que seja possível escalar com bancos de dados relacionais, fazer isso é mais custoso, complexo e instável. Sem falar que as estratégias para escalar banco de dados relacionais de forma distribuída comprometem a atomicidade, consistência e o isolamento.

#### Quando a sua equipe conhece MongoDB

- Se a equipe tem alguma noção de MongoDB e de como modelar os dados de forma não relacional, então você tem o “sinal verde”. Talvez esse seja o ponto definitivo (depois de se identificar com os itens anteriores da lista).

- Se a equipe, que é proficiente em bases de dados relacionais, não tem nenhum conhecimento em MongoDB (nem disponibilidade para estudar), utilizar uma base de dados convencional (Ex: MySQL) ainda é uma melhor opção. Ainda que você abra mão dos benefícios de produtividade, manutenção, escalabilidade e performance de usar NoSQL como primary-storage, **usar o MongoDB de forma inadequada pode gerar mais problemas do que benefícios. Muitos dos relatos ruins sobre MongoDB são por causa de uso incorreto**.

#### Quando inovação não é um problema

- Usar banco de dados relacional “tradicional” para tentar resolver tudo é um dos conceitos mais difundidos do mundo do software. Não é da noite para o dia que vamos mudar o mindset dos arquitetos de software, analistas, desenvolvedores e stakeholders. Portanto é necessário ter certa abertura e “pensar fora da caixa” para usar MongoDB.

- Ainda que existam benefícios e estabilidade comprovada, sempre haverá aqueles que preferem manter a forma antiga de se fazer as coisas.

#### Quando não usar MongoDB?

- No final das contas, a principal coisa a entender sobre MongoDB é que ele não é uma silver bullet e, como todas as tecnologias, tem vantagens e desvantagens significativas. Existem diversos casos onde MongoDB não é adequado, vou tentar quebrar em simples tópicos para facilitar o entendimento.

#### Conclusão

- **NoSQL** é adequado a qualquer projeto de aplicação para a internet, trazendo benefícios de performance em cache, sessões de usuário, background-jobs, busca e outros. Mesmo um blog vai se beneficiar de um cache com Memcached ou Redis.

- **MongoDB** pode trazer vários benefícios a longo prazo caso seja adequado ao projeto. Porém não se precipite ao optar por essa tecnologia. Certifique-se que a equipe de desenvolvedores conhece bem esse banco de dados e que o reconhecem como uma boa opção para o trabalho.

---

## 2.4. Mongooose


- O Mongoose é uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre MongoDB e a estrutura de aplicativo da web Express.

- Mongoose é uma ferramenta de modelagem de objetos JavaScript que cria uma conexão com o MongoDB, projetada para funcionar em um ambiente assíncrono. O Mongoose suporta *promisses* e *callbacks*.

* Links:

  - https://www.npmjs.com/package/mongoose
  - https://mongoosejs.com/
  - https://mongoosejs.com/docs/guide.html

<br>

- Vamos instalar um pacote chamado Mongoose

```js
npm i mongoose --save

// ou

npm install mongoose --save
```

- Verificar o pacote <code> package.json </code>

- Reparar que foi instalado como dependencia o <code> mongoose </code>


```json
{
  "name": "node-str",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node ./bin/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.0",
    "debug": "^4.3.4",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "http": "^0.0.1-security",
    "mongoose": "^6.3.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.16"
  }
}
```

<br>

- Em seguinda, configurar o MongoDB.

- Dúvida consultar um tutorial na Internet.

- Atualizar o arquivo da nossa aplicação:

### app.js 

<code> src / app.js </code>

```js
'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
// require('dotenv').config();

const app = express(); // Criar um servidor Web

const router = express.Router(); // Criar as Rotas

// Conecta ao banco
mongoose.connect('mongodb+srv://<user>:<password>@<conf_mongodb>');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; //  exportar o modu

```

<br>

- Após realizar todas as configurações, executar o nodemon, conforme o comando abaixo:

```js
npx nodemon bin/server.js
```

---

## 2.5. Models

- Conceito MVC.

- Vamos configurar o **Models** ao nosso projeto, vamos criar dentro da pasta  <code> src </code>

  - Criar um diretório <code> models </code>

  - Criar um arquivo <code> product-model.js </code> :

<br>

### product-model.js 

<code> src / models / **product-model.js** </code>


```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'O slug é obrigatório!'],
        trim: true // remover os espaços antes e depois da String
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }],
    image: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Product', schema);
```

---

## 2.6. Criando um Produto

Vamos atualizar o arquivo <code> products-controller.js </code> para podemos cadastrar um produto. 
Verifica se o produto foi cadastrado com sucesso ou algum erro.

<code> src / controllers / **products-route.js** </code>

```js
'use strict';

const mongoose = require('mongoose'); // importar o mongoose

const Product = mongoose.model('Product'); // importar o Product, mongoose.model

// POST - Create -> Criar um recurso (req)

exports.post = (req, res, next) => {
    /**
     * var product = new Product();
     * product.title = req.body.title;
     */
    var product = new Product(req.body); // criar instancia do product
    product
        .save()
        .then(x => {
            res.status(201).send({ 
                message: 'Produto cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar ao produto!',
                data: e
            });
    });
}
```

<br>

### Atualizar o **app.js** para Carregar os Models

```js
// Carrega os Models
const Product = require('./models/product-model');
```

<br>

- Na pasta **src**, atualizar o arquivo <code> app.js </code>

<code> src / **app.js**</code> 

```js
'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Criar um servidor Web

const router = express.Router(); // Criar as Rotas

// Conecta ao banco
// Seu login de acesso ao mongoDB
mongoose.connect('mongodb+srv://<user>:<password>...<banco>...');

// Carrega os Models
const Product = require('./models/product-model');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; //  exportar o modulo app
```

<br>

### Executar o nodemon

<code>
npx nodemon bin/server.js
</code>

### Postman 

POST http://localhost:3000/products/

  - raw
  - JSON

<br>

- req (requisição) (REQUEST)

```js
{
    "title": "Mouse Gamer",
    "slug":  "mouse-gamer",
    "description": "Mouse Game",
    "price": "299",
    "active": true,
    "tags": ["informatica", "mouse", "game"],
    "image": "image"
}
```

- RES (responder) (RESPONSE)

```json
{
    "message": "Produto cadastrado com sucesso!"
}
```

<br>

### MongoDB - Databases

- banco
  - produto

```mongodb
{
  "_id":{"$oid":"627da2cd5346e6176f36fd41"},
  "title":"Mouse Gamer",
  "slug":"mouse-gamer",
  "description":"Mouse Game",
  "price":{"$numberInt":"299"},
  "active":true,
  "tags":["informatica","mouse","game"],
  "image":"image",
  "__v":{"$numberInt":"0"}}
```

---

## 2.7. Listando os Produtos

Vamos atualizar o arquivo <code> products-controller.js </code> para listar os produtos.

<code> src / controllers / **products-controller.js** </code>

```js
'use strict';

const mongoose = require('mongoose'); // importar o mongoose

const Product = mongoose.model('Product'); // importar o Product, mongoose.model

// POST - Create -> Criar um recurso (req)

exports.get = (req, res, next) => {
  
    // buscar todos os produtos
    Product.find({ })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(400).send(err);
    });
}
exports.post = (req, res, next) => {
    /**
     * var product = new Product();
     * product.title = req.body.title;
     **/
    var product = new Product(req.body); // criar instancia do product
    product.save()
        .then(x => {
            res.status(201).send({ 
                message: 'Produto cadastrado com sucesso!'
            });
        })
        .catch(err => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar ao produto!',
                data: err
            });
    });
}

// PUT - Update -> Atualizar um recurso (req)

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id,
        item: req.body
    });
}; 

// DELETE - Delete -> Excluir um recurso (req)

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}; 

```

Atualizar a Rota para o GET (**product-routes.js**)

<code> routes / **product-routes.js** </code>

```js
'use strict';

const express = require('express'); 
const router = express.Router();  
const controller = require('../controllers/product-controller');

router.get('/', controller.get);        // GET - Real -> Ler um recurso (req)
router.post('/', controller.post);      // POST - Create -> Criar um recurso (req)
router.put('/:id', controller.put);     // PUT -  Update -> Atualizar um recurso (req)
router.delete('/', controller.delete);  // DELETE - Delete -> Excluir um recurso (req)

module.exports = router;                //  exportar o modulo router
```


### Postman - Apresentar o nosso produto (todas as informações)

GET &rarr; http://localhost:3000/products/ &rarr; Send
 
- Vai apresentar o nosso produto:

```js
[
    {
        "_id": "627da2cd5346e6176f36fd41",
        "title": "Mouse Gamer",
        "slug": "mouse-gamer",
        "description": "Mouse Game",
        "price": 299,
        "active": true,
        "tags": [
            "informatica",
            "mouse",
            "game"
        ],
        "image": "image",
        "__v": 0
    }
]
```

- Vamos atualizar o nosso código para apresenta somente os dados selecionados, ou seja, vamos filtar pelos produtos selecionados.

- Portanto, vamos atualizar o arquivo <code> products-controller.js </code> para selecionados os seguintes produtos:
  - "title"
  - "price" 
  - "slug"


<code> src / controllers / **products-controller.js** </code>

```js

exports.get = (req, res, next) => {
  
    // buscar todos os produtos
    Product.find({ active: true }, 'title price slug') // atualizar essa linha de código aqui!
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(400).send(err);
    });
}
```

### Postman - Filtro dos produtos selecionados

- Executamos o Filtro e o GET mostra os campos selecionados:
  - "title"
  - "price" 
  - "slug"

GET &rarr; http://localhost:3000/products/ &rarr; Send
 
- Vai apresentar o nosso produto:

```js
[
    {
        "_id": "627da2cd5346e6176f36fd41",
        "title": "Mouse Gamer",
        "slug": "mouse-gamer",
        "price": 299
    }
]
```

---

## 2.8. Listando um Produto pelo slug

- Atualizar o arquivo **products-controller.js**

<code> src / controllers / **products-controller.js** </code>

```js

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos
exports.get = (req, res, next) => {
    
    // buscar todos os produtos
    Product.find({ active: true }, 'title price slug')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.8. Listando um Produto pelo slug
exports.getBySlug = (req, res, next) => {
    
    Product.find({ slug: req.params.slug, active: true }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}
```

Atualizar o arquivo a rota ( **product-routes.js** ) para listar o produto pelo slug

<code> routes / **product-routes.js** </code>

```js
// GET -> 2.8. Listando um Produto pelo slug

router.get('/:slug', controller.getBySlug); 
```

### Postman - Filtro / Listar os produtos pelo slug


GET &rarr; http://localhost:3000/products/mouse-gamer &rarr; Send
 
- Vai apresentar/responder os dados do produto, repare que está dentro de um Array:

<br>

- OBS 1: Como temos um único índice no nosso BD para o slug do produto, não é interessante trazer um Array!

```js
[
    {
        "_id": "627da2cd5346e6176f36fd41",
        "title": "Mouse Gamer",
        "slug": "mouse-gamer",
        "description": "Mouse Game",
        "price": 299,
        "tags": [
            "informatica",
            "mouse",
            "game"
        ]
    }
]
```


- OBS 2: Vamos alterar o método de **find( )** para **findOne( )** no arquivo:

<code> src / controllers / **products-controller.js** </code>


```js

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos
exports.get = (req, res, next) => {
    
    // buscar todos os produtos selecionandos
    Product.find({ active: true }, 'title price slug')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.8. Listando um Produto pelo slug
exports.getBySlug = (req, res, next) => {
    
    Product.findOne({ slug: req.params.slug, active: true }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}
```

### Postman - Listar os produtos pelo slug (Product.findOne)

- Product.findOne( ... )

- Lista dos produtos (sem o Array), conforme explicado na OBS 2.


GET &rarr; http://localhost:3000/products/mouse-gamer &rarr; Send
 
- Vai apresentar/responder JSON com os dados do slug produto, repare que não está dentro de um Array:


```js
{
    "_id": "627da2cd5346e6176f36fd41",
    "title": "Mouse Gamer",
    "slug": "mouse-gamer",
    "description": "Mouse Game",
    "price": 299,
    "tags": [
        "informatica",
        "mouse",
        "game"
    ]
}
```

---

## 2.9. Listando um Produto pelo Id

- Vamos criar um método para listar um produto pelo ID.

- Vamos atualizar o arquivo **products-controller.js**

<code> src / controllers / **products-controller.js** </code>


```js

// 2.9. Listando um Produto pelo Id
exports.getById = (req, res, next) => {
    
    Product.findById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}
```

Atualizar o arquivo a rota ( **product-routes.js** ) para listar o produto pelo id.

Criarmos a rota ('admin/:id') para evitar conflitos de rotas com ('/:id')

```js
router.get('admin/:id', controller.getBySlug);
```

<code> routes / **product-routes.js** </code>

```js
'use strict';

const express = require('express'); 
const router = express.Router();  
const controller = require('../controllers/product-controller');

router.get('/', controller.get);            // GET - Read -> Ler um recurso (req)

router.get('/:slug', controller.getBySlug);    // 2.8. Listando um Produto pelo slug

router.get('/admin/:id', controller.getById);   // 2.9. Listando um Produto pelo Id

router.post('/', controller.post);          // POST - Create -> Criar um recurso (req)

router.put('/:id', controller.put);         // PUT -  Update -> Atualizar um recurso (req)

router.delete('/', controller.delete);      // DELETE - Delete -> Excluir um recurso (req)

module.exports = router;                    //  exportar o modulo router
```

### Postman - Listar os produtos pelo id

```js
  "_id": "627da2cd5346e6176f36fd41",
```

GET &rarr; http://localhost:3000/products/admin/627da2cd5346e6176f36fd41 &rarr; Send
 
- Vai apresentar/responder JSON com os dados do id produto:

```js
{
    "_id": "627da2cd5346e6176f36fd41",
    "title": "Mouse Gamer",
    "slug": "mouse-gamer",
    "description": "Mouse Game",
    "price": 299,
    "tags": [
        "informatica",
        "mouse",
        "game"
    ]
}
```

---

## 2.10. Listando os Produtos de uma tag

- Vamos criar um método para listar um produto pela tag

- Vamos atualizar o arquivo **products-controller.js**

<code> src / controllers / **products-controller.js** </code>


```js

// 2.10. Listando os Produtos de uma tag
exports.getByTag = (req, res, next) => {
    
    Product.find({ tags: req.params.tag, active: true }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

```

Atualizar o arquivo a rota ( **product-routes.js** ) para listar os Produtos pela tag


```js
'use strict';

const express = require('express'); 
const router = express.Router();  
const controller = require('../controllers/product-controller');

router.get('/', controller.get);                // GET - Read -> Ler um recurso (req)

router.get('/:slug', controller.getBySlug);     // 2.8. Listando um Produto pelo slug

router.get('/admin/:id', controller.getById);   // 2.9. Listando um Produto pelo Id

router.get('/tags/:tag', controller.getByTag);  // 2.10. Listando os Produtos de uma tag
```

### Postman - Listando os produtos pela tag

```js
  "tags": 
    [
      "informatica",
      "mouse",
      "game"
    ]
```

- GET &rarr; http://localhost:3000/products/tags/informatica &rarr; Send

- GET &rarr; http://localhost:3000/products/tags/mouse &rarr; Send

- GET &rarr; http://localhost:3000/products/tags/game &rarr; Send
 
<br>

- Vai responder (req) | (request) , listandos o produto pela tag  :

```js
{
    "_id": "627da2cd5346e6176f36fd41",
    "title": "Mouse Gamer",
    "slug": "mouse-gamer",
    "description": "Mouse Game",
    "price": 299,
    "tags": [
        "informatica",
        "mouse",
        "game"
    ]
}
```

---

## 2.11. Atualizando um produto

- Vamos atualizar o método PUT, 
  - _findByIdAndUpdate( )_ para atualizar um produto.

- Vamos atualizar o arquivo **products-controller.js**

<code> src / controllers / **products-controller.js** </code>


```js

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto

exports.put = (req, res, next) => {

    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x => {
            res.status(200).send({ 
                message: 'Produto atualizado com sucesso!' 
            });
        }).catch(err => {
            res.status(400).send({ 
                message: 'Falha ao atualizar produto!', 
                data: err 
            });
        });
}
```

O arquivo a rota ( **product-routes.js** ) do PUT já está atualizado.

```js
router.put('/:id', controller.put); 
```

### Postman &rarr; PUT - Atualizando um produto 

PUT &rarr; http://localhost:3000/products/627da2cd5346e6176f36fd41 &rarr; Send

  - raw
  - JSON
 

<br>

- req (requisição) (REQUEST)

```js
{
    "title": "Cadeira Gamer",
    "description": "Cadeira Gamer",
    "slug":  "cadeira-gamer",
    "price": "1299"
}
```

- res (resposta) (RESPONSE)

```json
{
    "message": "Produto atualizado com sucesso!"
}
```


### Postman &rarr; GET - Verificando se o produto foi atualizado 

GET &rarr; http://localhost:3000/products/ &rarr; Send

- res (resposta) (RESPONSE)
- Status 200 OK

```json
[
    {
        "_id": "627da2cd5346e6176f36fd41",
        "title": "Cadeira Gamer",
        "slug": "cadeira-gamer",
        "price": 1299
    }
]
```

<br>

### MongoDB - Databases

- banco
  - produto

O produto no MongoDB foi atualizado de "mouse gamer" para "cadeira gamer"

- Caso não apareça no BD, usar "Refresh" (atualizar) !

```mongodb
{
  "_id":{"$oid":"627da2cd5346e6176f36fd41"},
  "title":"Cadeira Gamer",
  "slug":"cadeira-gamer",
  "description":"Cadeira Gamer",
  "price":{"$numberInt":"1299"},
  // ...
}
```

---

## 2.12. Excluindo um produto

- Vamos copiar o método anterior do PUT e atualizar o nosso método DELETE.

- Nosso DELETE, usamos o método _findOneAndRemove()_

- Vamos atualizar o arquivo **products-controller.js**

<code> src / controllers / **products-controller.js** </code>

```js
'use strict';

const mongoose = require('mongoose'); // importar o mongoose

const Product = mongoose.model('Product'); // importar o Product, mongoose.model

// POST - Create -> Criar um recurso (req)

// 2.6. Criando um Produto
exports.post = (req, res, next) => {
    /**
     * var product = new Product();
     * product.title = req.body.title;
     **/
    var product = new Product(req.body); // criar instancia do product
    product.save()
        .then(x => {
            res.status(201).send({ 
                message: 'Produto cadastrado com sucesso!'
            });
        })
        .catch(err => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar ao produto!',
                data: err
            });
    });
}

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos
exports.get = (req, res, next) => {
    
    // buscar todos os produtos
    Product.find({ active: true }, 'title price slug')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.8. Listando um Produto pelo slug
exports.getBySlug = (req, res, next) => {
    
    Product.findOne({ slug: req.params.slug, active: true }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.9. Listando um Produto pelo Id
exports.getById = (req, res, next) => {
    
    Product.findById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.10. Listando os Produtos de uma tag
exports.getByTag = (req, res, next) => {
    
    Product.find({ tags: req.params.tag, active: true }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

// PUT - Update -> Atualizar um recurso (req)

/*
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id,
        item: req.body
    });
}; 
*/

// 2.11. Atualizando um produto
exports.put = (req, res, next) => {

    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x => {
            res.status(200).send({ 
                message: 'Produto atualizado com sucesso!' 
            });
        }).catch(err => {
            res.status(400).send({ 
                message: 'Falha ao atualizar produto!', 
                data: err 
            });
        });
}

// DELETE - Delete -> Excluir um recurso (req)

// 2.12. Excluindo um produto
exports.delete = (req, res, next) => {
    
    Product
        .findOneAndRemove(req.body.id)
        .then(x => {
            res.status(200).send({ 
                message: 'Produto removido com sucesso!' 
            });
        }).catch(err => {
            res.status(400).send({ 
                message: 'Falha ao remover produto!', 
                data: err 
            });
        });
}
```

O arquivo a rota ( **product-routes.js** ) do PUT já está atualizado.

Como utilizamos _.findOneAndRemove(req.body.id)_ não precisamos ajudar a rota.

Por exemplo:

_.findByIdAndUpdate(req.params.id)_ &rarr; _router.delete('/:id', controller.delete)_;         

_.findOneAndRemove(req.body.id)_ &rarr; _router.delete('/', controller.delete)_; 


```js
'use strict';

const express = require('express'); 
const router = express.Router();  
const controller = require('../controllers/product-controller');

router.get('/', controller.get);                // GET - Read -> Ler um recurso (req)
router.get('/:slug', controller.getBySlug);     // 2.8. Listando um Produto pelo slug
router.get('/admin/:id', controller.getById);   // 2.9. Listando um Produto pelo Id
router.get('/tags/:tag', controller.getByTag);  // 2.10. Listando os Produtos de uma tag
router.post('/', controller.post);              // POST - Create -> Criar um recurso (req)
router.put('/:id', controller.put);             // PUT -  Update -> Atualizar um recurso (req)
router.delete('/', controller.delete);          // DELETE - Delete -> Excluir um recurso (req)

module.exports = router;                        //  exportar o modulo router
```

<br>

### Postman &rarr; DELETE

DELETE &rarr; http://localhost:3000/products/ &rarr; Send

  - raw
  - JSON

<br>

- req (requisição) (REQUEST)

```js
{
    "id": "627da2cd5346e6176f36fd41"
}
```

- RES (resposta) (RESPONSE)

```json
{
    "message": "Produto removido com sucesso!"
}
```

### MongoDB

- Será deletado o nosso produto no MongoDB, da tabela (banco.products)
- Assim, não será apresentado nenhum produto nosso banco de dados, MongoDB.

<br>

- Portanto, realizamos todos verbos HTTP API, nosso banco de dados NoSQL, MongoDB.

<br>

|  C R U D      |   R E S T                  |
|---------------|----------------------------|
| C r e a t e   |  &rarr; P O S T            |
|  R e a d      |  &rarr; G E T              |   
|  U p d a t e  |  &rarr; P U T / P A T C H  |   
|  D e l e t e  |  &rarr; D E L E T E        |   


---

## 2.13. Validações

- Vamos configurar algumas validações fora do mongose, _mongoose.Schema_.
- Temos alguns cenários que precisamos validar os input, onde os dados podem utilizam outros serviços.
- Assim, vamos criamos algumas validações separada do mongoose.

<br>

- O Objetivo das validações é mostrar uma lista de erros, pois temos alguns métodos que realizam algumas validações. Temos um retorno com uma lista de erros.

<br>

- No diretorio do projeto, source <code> src </code>. 
- Vamos criar um diretorio chamado <code> validators </code>
- Criar um arquivo <code> fluent-validator.js </code>

### fluent-validator.js

<code> src / validators / **fluent-validator.js** </code>

```js
'use strict';

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => { 
    return errors; 
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;
```

<br>

### products-controller


<code> src / controllers / **products-controller.js** </code>

```js
'use strict';

const mongoose = require('mongoose'); // importar o mongoose

const Product = mongoose.model('Product'); // importar o Product, mongoose.model

const ValidationContract = require('../validators/fluent-validator'); // importar o  fluent-validator.js

// POST - Create -> Criar um recurso (req)

// 2.6. Criando um Produto
exports.post = (req, res, next) => {

    // Validações
    let constract = new ValidationContract();
    constract.hasMinLen(req.body.title, 3, 'O "title" deve conter pelo menos 3 caracteres');
    constract.hasMinLen(req.body.slug, 3, 'O "slug" deve conter pelo menos 3 caracteres');
    constract.hasMinLen(req.body.description, 3, 'O "description" deve conter pelo menos 3 caracteres');

    // Se os dados forem inváligos
    if (!constract.isValid()) {
        res.status(400).send(constract.errors()).end();
        return;
    }

    /**
     * var product = new Product();
     * product.title = req.body.title;
     **/
    var product = new Product(req.body); // criar instancia do product
    product.save()
        .then(x => {
            res.status(201).send({ 
                message: 'Produto cadastrado com sucesso!'
            });
        })
        .catch(err => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar ao produto!',
                data: err
            });
    });
}

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos
exports.get = (req, res, next) => {
    
    // buscar todos os produtos
    Product.find({ active: true }, 'title price slug')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.8. Listando um Produto pelo slug
exports.getBySlug = (req, res, next) => {
    
    Product.findOne({ slug: req.params.slug, active: true }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.9. Listando um Produto pelo Id
exports.getById = (req, res, next) => {
    
    Product.findById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.10. Listando os Produtos de uma tag
exports.getByTag = (req, res, next) => {
    
    Product.find({ tags: req.params.tag, active: true }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto
exports.put = (req, res, next) => {

    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x => {
            res.status(200).send({ 
                message: 'Produto atualizado com sucesso!' 
            });
        }).catch(err => {
            res.status(400).send({ 
                message: 'Falha ao atualizar produto!', 
                data: err 
            });
        });
}

// DELETE - Delete -> Excluir um recurso (req)

// 2.12. Excluindo um produto
exports.delete = (req, res, next) => {
    
    Product
        .findOneAndRemove(req.body.id)
        .then(x => {
            res.status(200).send({ 
                message: 'Produto removido com sucesso!' 
            });
        }).catch(err => {
            res.status(400).send({ 
                message: 'Falha ao remover produto!', 
                data: err 
            });
        });
}
```


### Postman &rarr; POST (Validação)

POST &rarr; http://localhost:3000/products/

  - raw
  - JSON

<br>

- **req** (requisição) (REQUEST) - Exemplo:
  - O "title" colocamos vazio;
  - O "slug" colocamos com dois digitos;
  - O "description" colocamos com dois digitos;

```js
{
    "title": "",
    "slug":  "mo",
    "description": "Mo",
    "price": "299",
    "active": true,
    "tags": ["informatica", "mouse", "game"],
    "image": "image"
}
```

- **res** (resposta) (RESPONSE)

  - Apresenta os erros das Validações, da function _ValidationContract()_

```json
[
    {
        "message": "O \"title\" deve conter pelo menos 3 caracteres"
    },
    {
        "message": "O \"slug\" deve conter pelo menos 3 caracteres"
    },
    {
        "message": "O \"description\" deve conter pelo menos 3 caracteres"
    }
]
```


---

## 2.14. Repositórios (Repository Pattern)

Vamos utilizar o padrão **Repository Pattern**.

O **Repository Pattern** é um dos padrões de projeto mais utilizado e conhecidos no desenvolvimento de sistemas. 
Sua utilização contribui no **isolamento da camada de acesso a dados** (DAL) com a **camada de negócio**, mais conhecida como **camada de domínio**.

O Repository Pattern permite um encapsulamento da lógica de acesso a dados, impulsionando o uso da injeção de dependencia (DI) e proporcionando uma visão mais orientada a objetos das interações com a DAL.

Com o uso desse pattern, aplicamos em nossa camada de domínio o princípio da persistência ignorante (PI), ou seja, **nossas entidades da camada de negócio, não devem sofrer impactos pela forma em que são persistidas no banco de dados**.

**Os grandes benefícos ao utilizar Repository Pattern são**:

- Permitir a troca do banco de dados utilizado sem afetar o sistema como um todo.
- Código centralizado em um único ponto, evitando duplicidade.
- Facilita a implementação de testes unitários.
- Diminui o acoplamento entre classes.
- Padronização de códigos e serviços.

<br>

Será implementado ao nosso projeto esse padrão, vamos delegar a responsabilidade de acesso a dados ao **repositories**. 
Sua utilização faz isolamento da Camada de Acesso a Dados (DAL) dos Controlllers.
O Repository Pattern permite um encapsulamento da lógica de acesso a dados.

Por exemplo, preciso a lista de produtos. O Repository Pattern fica responsável por obter a lista de produtos. Não importa onde está a sua lista de produtos, não importa onde os produtos estão armazenados. O Repository Pattern armazena o produto no BD, somente peço a lista de produtos e a lista de produtos é retornada.

Vamos configurar o **Repository Pattern** ao nosso projeto.

Na pasta  <code> src </code>:

  - Criar um diretório <code> repositories </code>

  - Criar um arquivo <code> **product-repository.js** </code>

<br>

Vamos mover os métodos do _product-controller.js_ para _product-repository.js_

Porém, os métodos de tratamentos de dados e erros, ou seja, 
os métodos .then() e o .catch() precisam ficar no _product-repository.js_
Depois de utilizamos o Async/Await vamos melhorar o nosso código, será nosso próximo tópico.

Em seguida, vamos atualizar o **product-controller.js**

<br>

<code> src / repositories / **product-repository.js** </code>

**product-repository.js**

```js
'use strict';
const mongoose = require('mongoose');

const Product = mongoose.model('Product'); // importar o Model, ele faz o acesso aos dados

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos (√)
exports.get = () => {
    return Product.find({ active: true }, 'title price slug');
}

// 2.8. Listando um Produto pelo slug (√)
exports.getBySlug = (slug) => {
    return Product.findOne({ slug: slug, active: true }, 'title description price slug tags');
}

// 2.9. Listando um Produto pelo (√)
exports.getById = (id) => {
    return Product.findById(id);
}

// 2.10. Listando os Produtos de uma tag (√)
exports.getByTag = (tag) => {
    return Product.find({ tags: tag, active: true }, 'title description price slug tags')
}

// POST - Create -> Criar um recurso (req)

// 2.6. Criando um Produto (√)
exports.create = (data) => {
    var product = new Product(data); // criar instancia do product
    return product.save();
}

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto (√)
exports.update = (id, data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

// 2.12. Excluindo um produto (√)
exports.delete = (id) => {
    return Product
        .findOneAndRemove(req.body.id);
}
```

<br>

<code> src / controllers / **product-controller.js** </code>

**product-controller.js**

```js
'use strict';

const mongoose = require('mongoose'); // importar o mongoose

const Product = mongoose.model('Product'); // importar o Product, mongoose.model

const ValidationContract = require('../validators/fluent-validator'); // importar o  fluent-validator.js

const repository = require('../repositories/product-repository'); // importar o product-repository

// POST - Create -> Criar um recurso (req)

// 2.6. Criando um Produto (√)
exports.post = (req, res, next) => {

    let constract = new ValidationContract();
    constract.hasMinLen(req.body.title, 3, 'O "title" deve conter pelo menos 3 caracteres');
    constract.hasMinLen(req.body.slug, 3, 'O "slug" deve conter pelo menos 3 caracteres');
    constract.hasMinLen(req.body.description, 3, 'O "description" deve conter pelo menos 3 caracteres');

    // Se os dados forem inváligos
    if (!constract.isValid()) {
        res.status(400).send(constract.errors()).end();
        return;
    }

    repository.create(req.body)
        .then(x => {
            res.status(201).send({ 
                message: 'Produto cadastrado com sucesso!'
            });
        })
        .catch(err => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar ao produto!',
                data: err
            });
    });
}

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos (√)
exports.get = (req, res, next) => {
    repository.get()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.8. Listando um Produto pelo (√)
exports.getBySlug = (req, res, next) => {
    repository.getBySlug(req.params.slug)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.9. Listando um Produto pelo Id (√)
exports.getById = (req, res, next) => {
    repository.getById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.10. Listando os Produtos de uma tag (√)
exports.getByTag = (req, res, next) => {
    repository.getByTag(req.params.tag)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto (√)
exports.put = (req, res, next) => {
    repository.update(req.params.id, req.body)
        .then(x => {
            res.status(200).send({ message: 'Produto atualizado com sucesso!' });
        })
        .catch(err => {
            res.status(400).send({ message: 'Falha ao atualizar produto!', data: err });
        });
}

// DELETE - Delete -> Excluir um recurso (req)

// 2.12. Excluindo um produto (√)
exports.delete = (req, res, next) => {
    repository.delete(req.body.id)
        .then(x => {
            res.status(200).send({ 
                message: 'Produto removido com sucesso!' 
            });
        }).catch(err => {
            res.status(400).send({ 
                message: 'Falha ao remover produto!', 
                data: err 
            });
        });
}
```

### Postman &rarr; POST

- Realizar os testes no Postman.


POST &rarr; http://localhost:3000/products/ &rarr; Send

- **req** (requisição) (**REQUEST**)
  - raw
  - JSON

<br>

```js
{
    "title": "Cadeira Gamer",
    "slug":  "cadeira-gamer",
    "description": "Cadeira Game",
    "price": "1299",
    "active": true,
    "tags": ["informatica", "cadeira", "game"],
    "image": "image"
}
```

- **res** (resposta) (**RESPONSE**)

```json
{
    "message": "Produto cadastrado com sucesso!"
}
```

<br>

GET &rarr; http://localhost:3000/products/ &rarr; Send

- **res** (resposta) (**RESPONSE**)

```json
[
    {
        "_id": "627eb3a2426a2dce74990c55",
        "title": "Mouse Gamer",
        "slug": "mouse-gamer",
        "price": 299
    },
    {
        "_id": "627ebbe2f69a15eb94750e30",
        "title": "Cadeira Gamer",
        "slug": "cadeira-gamer",
        "price": 1299
    }
]
```

### MongoDB

- Collections
  - Banco
    - Products ( banco.products )

<br>

- Apresenta os 2 produtos "Mouse Game" e a "Cadeira Game".

```js
{"_id":{"$oid":"627eb3a2426a2dce74990c55"},"title":"Mouse Gamer","slug":"mouse-gamer","description":"Mouse Game","price":{"$numberInt":"299"},"active":true,"tags":["informatica","mouse","game"],"image":"image","__v":{"$numberInt":"0"}}
```

```js
{"_id":{"$oid":"627ebbe2f69a15eb94750e30"},"title":"Cadeira Gamer","slug":"cadeira-gamer","description":"Cadeira Game","price":{"$numberInt":"1299"},"active":true,"tags":["informatica","cadeira","game"],"image":"image","__v":{"$numberInt":"0"}}
```

### Postman &rarr; PUT

- Fazer um PUT, ou seja, Atualizar/Alterar a "Cadeira Gamer" que acabamos de criar.
- Vamos utilizar o PUT &rarr; Update &rarr; Atualizar um recurso (req), a nossa "Cadeira Gamer" passando o seu "id".

PUT &rarr; http://localhost:3000/products/ &rarr; Send

- **req** (requisição) (**REQUEST**)
  - raw
  - JSON

<br>

```js
{
    "title": "Cadeira Gamer",
    "slug":  "cadeira-gamer",
    "description": "Cadeira Game",
    "price": "1299",
    "active": true,
    "tags": ["informatica", "cadeira", "game"],
    "image": "image"
}
```

- **res** (resposta) (**RESPONSE**)

```json
{
    "message": "Produto cadastrado com sucesso!"
}
```

### Postman &rarr; PUT

- Fazer um PUT, ou seja, Atualizar/Alterar a "Cadeira Gamer" que acabamos de criar para "Cadeira Gamer 2".
- Vamos passar o "id", { "id": "627ebbe2f69a15eb94750e30" }

PUT &rarr; http://localhost:3000/products/627ebbe2f69a15eb94750e30 &rarr; Send

- **req** (requisição) (**REQUEST**)
  - raw
  - JSON

<br>

```js
{
    "title": "Cadeira Gamer 2",
    "description": "Cadeira Game 2",
    "slug":  "cadeira-gamer-2",
    "price": "2299"
}
```

- **res** (resposta) (**RESPONSE**)

```json
{
    "message": "Produto atualizado com sucesso!"
}
```

### Postman &rarr; GET

GET &rarr; http://localhost:3000/products/ &rarr; Send

- Repare que foi atualizado a "Cadeira Gamer" para "Cadeira Gamer 2".

- **res** (resposta) (**RESPONSE**)

```json
[
    {
        "_id": "627eb3a2426a2dce74990c55",
        "title": "Mouse Gamer",
        "slug": "mouse-gamer",
        "price": 299
    },
    {
        "_id": "627ebbe2f69a15eb94750e30",
        "title": "Cadeira Gamer 2",
        "slug": "cadeira-gamer-2",
        "price": 2299
    }
]
```

---

## Async/await no JavaScript

No dia-a-dia do desenvolvimento web, utilizamos muito (e cada vez mais) dados externos - por exemplo, recebidos através de um *endpoint* de uma API REST (um microserviço) ou resultados de algum outro processamento. Ou seja, quando isso ocorre o sistema tem que esperar os dados "chegarem" antes de utilizar esse resultado.

Costumamos chamar de **programação assíncrona** o ato de executar uma tarefa em "**segundo plano**", sem nosso controle direto disso. Sem explicitamente trabalhar com threads e coordená-las. Escrevendo basicamente da forma tradicional que temos. Porém, é importante frisar o **comportamento do JavaScript (padrão)** de "**executar uma coisa por vez**". Com isso em mente o assíncrono no JavaScript vai separar seu código em duas partes: 
- coisas que rodam agora, 
- coisas que vão rodar depois de algo acontecer.

Trabalhando com front-end, vemos que uma boa parte do que ocorre no âmbito do navegador é event-driven. Ou seja, o código aguarda algum evento acontecer (por exemplo, o usuário clicar em um botão) antes de executar qualquer código. Outros exemplos de eventos, além de clique do mouse, são toque na tela, determinada tecla ser pressionada, o cursor do mouse passar em cima de algum elemento, etc). Mas, para além destas interações do usuário com a interface, há muitas outras situações que podem ser síncronas ou assíncronas.

Para exemplificar, podemos pensar em comunicação. Uma **ligação telefônica é um exemplo de comunicação síncrona**: quando falamos ao telefone, as informações chegam e saem em sequência, uma após a outra; fazemos uma pergunta, recebemos logo em seguida a resposta, com os dados dessa resposta fazemos outro comentário, etc.

Por outro lado, uma **conversa online via algum mensageiro, como o WhatsApp ou ou Telegram, é um exemplo de comunicação assíncrona**: enviamos uma mensagem e não ficamos olhando para a tela, esperando, até a outra pessoa responder (ou pelo menos não deveríamos!). Afinal de contas, não temos como saber quando, e se, essa resposta vai chegar. Mandamos a mensagem e vamos fazer outras coisas enquanto a resposta não chega, ao contrário do telefone.

Com o código, o processo é parecido: 
- um **código síncrono** é aquele de ocorre em sequência, uma instrução após a outra.

```js
function soma(num1, num2) {
 return num1 + num2;
}

console.log(soma(2, 2)) // 4
```
 
No exemplo, o JavaScript executou uma linha após a outra.

Mas o que acontece quando, por exemplo, nosso código precisa receber alguns dados de uma API? 

Ao mesmo tempo que é preciso aguardar a requisição e resposta da API, não podemos bloquear o funcionamento de todo o nosso programa; seria a mesma coisa que enviar uma mensagem pelo WhatsApp e ficar esperando a resposta sem fazer mais nada nesse meio tempo.

É para esse tipo de situação, que requer **processamento assíncrono** que existem as **Promises**, ou, literalmente, **promessas**. O sentido de Promise em JavaScript é similar ao literal: Uma pessoa te passa o contato do Telegram e pede para que você mande uma mensagem pra ela, prometendo que vai responder... O que não temos como saber se vai acontecer.

Quando enviamos uma requisição de dados a uma API, temos uma promessa de que estes dados irão chegar, mas enquanto isso não acontece, o sistema deve continuar rodando. Se, por exemplo, o servidor estiver caído, essa promessa de dados pode não se cumprir, e temos que lidar com isso. As Promises trabalham neste contexto.

Existem duas formas de se trabalhar com **processamento assíncrono **(ou seja, **Promises**) em JavaScript: 
1. utilizando o método *.then()* ou 
2. as palavras-chave *async* e *await*.

**Utilizando Promises com _.then()_**
Já que estávamos falando sobre APIs REST, vamos ver um exemplo usando a Fetch API do JavaScript para buscar dados e convertê-los para o formato JSON. Esta API (que funciona nativamente nos navegadores atuais) tem alguns métodos internos e já retorna por padrão uma Promise que vai resolver a requisição, tendo ou não sucesso.

```js
function getUser(userId) {
 const userData = fetch(`https://api.com/api/user/${userId}`)
   .then(response => response.json())
   .then(data => console.log(data.name))
}

getUser(1); // "Nome Sobrenome"
```

Destrinchando o código acima: a função *getUser()* recebe um *id* de usuário como parâmetro, para que seja passado para o endpoint REST fictício. O método *fetch()* recebe como parâmetro o *endpoint* e retorna uma *Promise*.

**E como funcionam as Promises?**

**Promises** têm um método chamado .then(), que recebe uma função callback e retorna um "objeto-promessa". **Não é um retorno dos dados, é a promessa do retorno destes dados.**

Assim, podemos escrever o código do que irá acontecer em seguida, com os dados recebidos pela Promise, e o JavaScript vai aguardar a resolução da Promise sem pausar o fluxo do programa.

O resultado pode ou não estar pronto ainda, e não há forma de pegar o valor de uma Promise de modo síncrono; Só é possível requisitar à Promise que execute uma função callback quando o resultado estiver disponível - seja ele o que foi solicitado (os dados da API, por exemplo), ou uma mensagem de erro caso algo tenha dado errado com a requisição (o servidor pode estar fora do ar, por exemplo).

No exemplo acima: ao iniciarmos uma cadeia de promessas, por exemplo para fazer uma requisição HTTP, enquanto a resposta está pendente, ela retorna um Promise object. O objeto, por sua vez, define uma instância do método .then(). Ao invés de passar o retorno da função callback diretamente para a função inicial, ela é passada para .then(). Quando o resultado da requisição HTTP chega, o corpo da requisição é convertido para JSON e este valor convertido é passado para o próximo método .then().

A cadeia de funções fetch().then().then() não significa que há múltiplas funções callbacks sendo usadas com o mesmo objeto de resposta, e sim que cada instância de .then() retorna, por sua vez, um new Promise(). Toda a cadeia é lida de forma síncrona na primeira execução, e em seguida executada de forma assíncrona.

**Capturando erros com Promises**
O manejo de erros é importante em operações assíncronas. Quando o código é síncrono, ele pode lançar pelo menos uma exceção mesmo sem nenhum tipo de tratamento de erros. Porém, no assíncrono, exceções não tratadas muitas vezes passam sem aviso e fica muito mais difícil de debugar.

Não há como utilizar o try/catch quando usamos o .then(), pois a computação só será efetuada após o retorno do objeto-Promise. Então devemos passar funções que executem as alternativas, para o caso de sucesso ou falha da operação. Por exemplo:

```js
function getUser(userId) {
 const userData = fetch(`https://api.com/api/user/${userId}`)
   .then(response => response.json())
   .then(data => console.log(data.name))
   .catch(error => console.log(error))
   .finally(() => /*{ aviso de fim de carregamento }*/)
}

getUser(1); // "Nome Sobrenome"
```

Além do método .then() que recebe o objeto-Promise para ser resolvido, o método .catch() retorna no caso de rejeição da Promise. Além disso, o último método, .finally(), é chamado independente de sucesso ou falha da promessa e a função callback deste método é sempre executada por último e pode ser usada, por exemplo, para fechar uma conexão ou dar algum aviso de fim de carregamento.

**Resolvendo várias promessas**
No caso de várias promessas que podem ser feitas paralelamente (por exemplo, alguns dados em endpoints REST diferentes), pode-se utilizar <code> Promise.all </code> :

```js
const endpoints = [
 "https://api.com/api/user/1",
 "https://api.com/api/user/2",
 "https://api.com/api/user/3",
 "https://api.com/api/user/4"
]

const promises = endpoints.map(url => fetch(url).then(res => res.json()))

Promise.all(promises)
 .then(body => console.log(body.name))
```


- #### *Uma Promise podem estar "pendente" (pending) ou "resolvida" (settled)*.

- #### *Os estados possíveis, uma vez que uma Promise está settled, são "concluída" (fulfilled) ou "rejeitada" (rejected)*.

- #### *Após passar de pending para settled e se definir como fulfilled ou rejected, a Promise não muda mais de estado*.

<br>

**Utilizando o async/await**
As palavras-chave *async* e *await*, implementadas a partir do ES2017, são uma sintaxe que simplifica a programação assíncrona, facilitando o fluxo de escrita e leitura do código; assim é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona. O async/await trabalha com o código baseado em Promises, porém esconde as promessas para que a leitura seja mais fluída e simples de entender.

Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida.

A palavra-chave await recebe uma Promise e a transforma em um valor de retorno (ou lança uma exceção em caso de erro). Quando utilizamos await, o JavaScript vai aguardar até que a Promise finalize. Se for finalizada com sucesso (o termo utilizado é fulfilled), o valor obtido é retornado. Se a Promise for rejeitada (o termo utilizado é rejected), é retornado o erro lançado pela exceção.

Um exemplo:

```js
let response = await fetch(`https://api.com/api/user/${userId}`);
let userData = await response.json();

// Só é possível usar await em funções declaradas com a palavra-chave async, 
// então vamos adicioná-la:

async function getUser(userId) {
 let response = await fetch(`https://api.com/api/user/${userId}`);
 let userData = await response.json();
 return userData.name; // não é necessário o await no return
}
```

Uma função declarada como async significa que o valor de retorno da função será, "por baixo dos panos", uma Promise. Se a Promise se resolver normalmente, o objeto-Promise retornará o valor. Caso lance uma exceção, podemos usar o try/catch como estamos acostumados em programas síncronos.

Para executar a função getUser(), já que ela retorna uma Promise, pode-se usar await:

```js
exibeDadosUser(await getUser(1))
```

Lembrando que await só funciona se estiver dentro de outra função async. Caso não esteja, você ainda pode usar .then() normalmente:

```js
getUser(1).then(exibeDadosUser).catch(reject)
```

**Resolvendo várias promessas**

No caso de várias promessas que podem ser feitas paralelamente (por exemplo, alguns dados em endpoints REST diferentes), pode-se utilizar async/await em conjunto com Promise.all:

```js
async function getUser(userId) {
 let response = await fetch(`https://api.com/api/user/${userId}`);
 let userData = await response.json();
 return userData;
}

let [user1, user2] = await Promise.all([getUser(1), getUser(2)])
```

**Há diferenças entre .then() e async/await?**

Em termos de sintaxe, o método .then() traz uma sintaxe que faz mais sentido quando utilizamos o JavaScript de forma funcional, enquanto o fluxo das declarações com async/await fazem sentido ao serem utilizadas em métodos de classes.

O async/await surgiu como uma opção mais "legível" ao .then(), mas é importante notar que estes métodos não são logicamente equivalentes: enquanto async/await faz o processamento de forma sequencial, Promises com .then() são processadas em paralelo, o que faz com que este método seja mais rápido. O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez.

Como resolver esse tipo de caso, por exemplo, requisitando uma array de id de pedidos de determinado cliente de um comércio:

```js
async function getCustomerOrders(customerId) {
 const response = await fetch(`https://api.com/api/customer/${customerId}`)
 const customer = await response.json()

 return await Promise.all(customer.orders.map(async (orderId) => {
   const response = await fetch(`https://api.com/api/order/${orderId}`)
   const orderData = await response.json()
   return orderData.amount
 }))
}
```

No caso acima, usamos Promise.all para fazer as requisições em paralelo, sem aguardar a anterior retornar para fazer a próxima.

**Iterações com async/await**

Mas e se precisarmos manejar várias Promises, mas não quisermos fazer isso em paralelo? Um exemplo clássico desta situação é acessar um banco de dados com milhares de registros. Neste caso, não queremos que todas as requisições sejam feitas em paralelo, pois o excesso de requisições simultâneas pode causar problemas de performance e até derrubar o serviço.

Neste caso o async/await é mais indicado, pois vai resolver uma Promise por vez.

```js
async function printCustomer(customerId){
 //lógica fictícia da função
}

async function getAndPrintAllCustomers() {
 const sql = 'SELECT id FROM customers'
 const customers = await db.query(sql, [])
 for (const customer of customers) {
   await printCustomer(customer.id)
 }
}
```

---

## 2.15. Async/Await

Vamos utilizar o Asynce e Await será atualizado nosso projeto.

<br>

<code> src / repositories / **product-repository.js** </code>

**product-repository.js**

```js
'use strict';

const mongoose = require('mongoose');

const Product = mongoose.model('Product'); 

// POST - Create -> Criar um recurso (req)
  
// 2.6. Criando um Produto
exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos
exports.get = async() => {
    const res = await Product.find({ active: true }, 'title price slug');
    return res;
}

// 2.8. Listando um Produto pelo slug
exports.getBySlug = async(slug) => {
    const res = await Product.findOne({ slug: slug, active: true }, 'title description price slug tags');
    return res;
}

// 2.9. Listando um Produto pelo Id
exports.getById = async(id) => {
    const res = await Product.findById(id);
    return res;
}

// 2.10. Listando os Produtos de uma tag
exports.getByTag = async(tag) => {
    const res = await Product.find({ tags: tag, active: true }, 'title description price slug tags');
    return res;
}

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto
exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

// DELETE

// 2.12. Excluindo um produto
exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id);
}
```

<br>

<code> src / controllers / **product-controller.js** </code>

**product-controller.js** 

```js
'use strict';

// importar 
const mongoose = require('mongoose'); 

const Product = mongoose.model('Product'); 

const ValidationContract = require('../validators/fluent-validator'); 

const repository = require('../repositories/product-repository'); 

// POST - Create -> Criar um recurso (req)

// 2.6. Criando um Produto
exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O title deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'O description deve conter pelo menos 3 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body)
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
        
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos
exports.get = async(req, res, nex) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// 2.8. Listando um Produto pelo Slug
exports.getBySlug = async(req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// 2.9. Listando um Produto pelo Id
exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// 2.10. Listando os Produtos de uma Tag
exports.getByTag = async(req, res, next) => {
    try {
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto
exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({ message: 'Produto atualizado com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// DELETE - Delete -> Excluir um recurso (req)

// 2.12. Excluindo um produto
exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({ message: 'Produto removido com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}
```

### Postman &rarr; CRUD

- Realizar todos os testes de validação no Postman.

----

## 2.16. Revisitando os Models: Customer

- Vamos criar o customer-models.

  - No diretório <code> src /  models </code>

    - Criar um arquivo <code> **customer-models.js** </code>

<br>

### customer-models.js

```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Customer', schema);
```

### Importar o arquivo (customer-model) no App

- Atualizar o arquivo **app.js** <code> src / app.js </code> para realizar a importação do customer-model que foi criado anteriormente.

### src / app.js

- Adicionar para carregar os Models, conforme o exemplo abaixo:

```js
// Carrega os Models
const Product = require('./models/product-model');
const Customer = require('./models/customer-model');
```

---

## 2.17. Revisitando os Models: Order

- Vamos criar o order-models.

  - No diretório <code> src /  models </code>

    - Criar um arquivo <code> **order-models.js** </code>

<br>

### order-models.js

```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    number: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    items: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
});

module.exports = mongoose.model('Order', schema);
```

### Importar o arquivo (order-model) no App

- Atualizar o arquivo **app.js** <code> src / app.js </code> para realizar a importação do order-model que foi criado anteriormente.

### src / app.js

- Adicionar para carregar os Models, conforme o exemplo abaixo:

```js
// Carrega os Models
const Product = require('./models/product-model');
const Customer = require('./models/customer-model');
const Order = require('./models/order-model');
```

---

## 2.18. Revisitando os Controllers: Customer

### customer-repository.js

- Vamos criar o customer-repository.

  - No diretório <code> src / repositories </code>

    - Criar um arquivo <code> **customer-repository.js** </code>

<br>

```js
'use strict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.authenticate = async(data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}

exports.getById = async(id) => {
    const res = await Customer.findById(id);
    return res;
}
```

<br>

### customer-controller.js

- Vamos criar o customer-controller.

  - No diretório <code> src / controllers </code>

    - Criar um arquivo <code> **customer-controller.js** </code>


```js
'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({ message: 'Prduto cadastrado com sucesso!' })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
};

```

<br>

### customer-route.js

- Vamos criar o customer-router.

  - No diretório <code> src / routes </code>

    - Criar um arquivo <code> **customer-route.js** </code>


```js
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

router.post('/', controller.post);

module.exports = router;
```

<br>

### Atualizar o arquivo <code> App.js </code>

- Atualizar o arquivo **app.js** <code> src / app.js </code> para carregar as rotas criadas anteriormente pelo  **customerRoute**.

### src / app.js

```js
// Carrega os Models
const Product = require('./models/product-model');
const Customer = require('./models/customer-model');
const Order = require('./models/order-model');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route'); // customerRoute

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute); // customerRoute

module.exports = app; //  exportar o modulo app
```

### Postman &rarr; POST

- Realizar os testes no Postman.


POST &rarr; http://localhost:3000/customers &rarr; Send

- **req** (requisição) (**REQUEST**)
  - raw
  - JSON

<br>

```js
{
    "name": "Eduardo Rodrigues",
    "email": "teste@teste.com",
    "password": "teste123"
}
```

- **res** (resposta) (**RESPONSE**)

```json
{
    "message": "Cliente cadastrado com sucesso!"
}
```

### MongoDB

 - Foi cadastrado com sucesso a tabela <code> banco.customers </code> no MongoDB.

```json
 {
    "name":"Eduardo Rodrigues",
    "email":"teste@teste.com",
    "password":"teste123"
 }
```

---

## 2.20. Revisitando os Controllers: Order

Vamos criar o arquivo:

<code> src / repositories / **order-repository.js** </code>

### order-repository.js

```js
'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async(data) => {
    var res = await Order.find({ });
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}
```

### Instalar o pacote guid

Package Guid será utilizado para poder gerar um número para o pedido.

```js
eduardo@MacBook node-str % npm install guid --save 
```



Vamos criar o arquivo:


<code> src / controllers / **order-controller.js** </code>

### order-controller.js

```js
'use strict';

const repository = require('../repositories/order-repository');
const guid = require('guid'); 

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    try {

        await repository.create({
            // 0customer: data.id, 
            customer: req.body.customer;
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        // console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
```

Vamos criar o arquivo order-route.js

<code> src / routes / order-route.js </code>

### order-route

```js
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

router.get('/', authService.authorize, controller.get);
router.post('/', authService.authorize, controller.post);

module.exports = router;
```

<br>


### Atualizar o arquivo <code> App.js </code>

- Atualizar o arquivo **app.js** <code> src / app.js </code> para carregar as rotas criadas anteriormente pelo  **customerRoute**.

### src / app.js

```js
'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Criar um servidor Web

const router = express.Router(); // Criar as Rotas

// Conecta ao banco
mongoose.connect(); // acesso ao MongoDB, copiar e colar


// Carrega os Models
const Product = require('./models/product-model');
const Customer = require('./models/customer-model');
const Order = require('./models/order-model');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app; //  exportar o modulo app
```

<br>

### Postman &rarr; POST

- Realizar os testes no Postman.


POST &rarr; http://localhost:3000/orders &rarr; Send

- **req** (requisição) (**REQUEST**)
  - raw
  - JSON

<br>

```js
{
    "name": "Eduardo Rodrigues",
    "email": "teste@teste.com",
    "password": "teste123"
}
```

- **res** (resposta) (**RESPONSE**)

```json
{
    "message": "Cliente cadastrado com sucesso!"
}
```


### Postman &rarr; POST

- Realizar os testes no Postman.


POST &rarr; http://localhost:3000/orders &rarr; Send

- **req** (requisição) (**REQUEST**)
  - raw
  - JSON

<br>

```js
{
    "customer": "62810dbd9b7b6b566458e533",
    "items": [
        {
            "quantity": "1",
            "price": "299",
            "product": "627eb3a2426a2dce74990c55"
        }
    ]
}
```

- **res** (resposta) (**RESPONSE**)

```json
{
    "message": "Pedido cadastrado com sucesso!"
}
```

### MongoDB

 - Foi cadastrado com sucesso na tabela <code> banco.orders </code> no MongoDB.

```json
{
    "_id":{"$oid":"62811cc7ab62b9a8601af718"},
    "customer":{"$oid":"62810dbd9b7b6b566458e533"},
    "number":"a51220",
    "status":"created",
    "items":[
        {"quantity":{"$numberInt":"1"},
        "price":{"$numberInt":"299"},
        "product":{"$oid":"627eb3a2426a2dce74990c55"},
        "_id":{"$oid":"62811cc7ab62b9a8601af719"}
        }],
    "createDate":{"$date":{"$numberLong":"1652628679546"}},
    "__v":{"$numberInt":"0"}
    }
```

### Postman &rarr; GET

Repare que faltou apresentar as informações do produto e cliente. 

Vamos usar uma função populate('customer') para o GET apresentar os campos que será configurada no arquivo <code> order-repository.js </code>

GET &rarr; http://localhost:3000/orders &rarr; Send

- **res** (resposta) (**REQUEST**)


```js
[
    {
        "_id": "62811cc7ab62b9a8601af718",
        "customer": "62810dbd9b7b6b566458e533",
        "number": "a51220",
        "status": "created",
        "items": [
            {
                "quantity": 1,
                "price": 299,
                "product": "627eb3a2426a2dce74990c55",
                "_id": "62811cc7ab62b9a8601af719"
            }
        ],
        "createDate": "2022-05-15T15:31:19.546Z",
        "__v": 0
    }
]
```

### order-repository.js 

```js
'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async(data) => {
    var res = await Order.find({ }).populate('customer').populate('items.product');
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}
```

### Postman &rarr; GET


Após configurar a função populate(), mostra os campos preenchidos:

```js
exports.get = async(data) => {
    var res = await Order.find({ }).populate('customer').populate('items.product');
    return res;
}
```

GET &rarr; http://localhost:3000/orders &rarr; Send

- **res** (resposta) (**REQUEST**)


```js
[
    {
        "_id": "62811cc7ab62b9a8601af718",
        "customer": {
            "_id": "62810dbd9b7b6b566458e533",
            "name": "Eduardo Rodrigues",
            "email": "teste@teste.com",
            "password": "teste123",
            "__v": 0
        },
        "number": "a51220",
        "status": "created",
        "items": [
            {
                "quantity": 1,
                "price": 299,
                "product": {
                    "_id": "627eb3a2426a2dce74990c55",
                    "title": "Mouse Gamer",
                    "slug": "mouse-gamer",
                    "description": "Mouse Game",
                    "price": 299,
                    "active": true,
                    "tags": [
                        "informatica",
                        "mouse",
                        "game"
                    ],
                    "image": "image",
                    "__v": 0
                },
                "_id": "62811cc7ab62b9a8601af719"
            }
        ],
        "createDate": "2022-05-15T15:31:19.546Z",
        "__v": 0
    }
]
```

### Filtrar a nossa busca order-repository

Apresentar somente os produtos que forem selecionados no método find()

<code> src / repositories / **order-repository.js** </code>

### order-repository.js

```js
'use strict';
const { status } = require('express/lib/response');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async(data) => {
    var res = await Order.find({ }, 'number status customer items' )
    .populate('customer', 'name')
    .populate('items.product', 'title');
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}
```

### Postman &rarr; GET

GET &rarr; http://localhost:3000/orders &rarr; Send

- **res** (resposta) (**REQUEST**)

```js
[
    {
        "_id": "62811cc7ab62b9a8601af718",
        "customer": {
            "_id": "62810dbd9b7b6b566458e533",
            "name": "Eduardo Rodrigues"
        },
        "number": "a51220",
        "status": "created",
        "items": [
            {
                "quantity": 1,
                "price": 299,
                "product": {
                    "_id": "627eb3a2426a2dce74990c55",
                    "title": "Mouse Gamer"
                },
                "_id": "62811cc7ab62b9a8601af719"
            }
        ]
    }
]
```


---

<span id="3">

# 3. Melhorando a API

## 3.1. Arquivo de Configurações

- Vamos criar o config.js que vai armazenar as nossas configurações a API.

  - No diretório <code> src</code>

    - Criar um arquivo <code> **cconfig.js** </code>

```js
module.exports = {
    connectionString: 'mongodb+srv://<user>:<password>@<url_mongodb.net>/<name>',
}
```

<br>

- Vamos atualizar o nosso App.js para importar as nossas configurações a API.

  - No diretório <code> src</code>

    - Atualizar o arquivo <code> **App.js** </code>

```js
'use strict';

const config = require('./config'); // importar o arquivo config.js

// Connecta ao banco
mongoose.connect(config.connectionString);
```


## 3.2. Encriptando a senha

Instalar o pacote md5

```js
npm install md5 --save
```

- A nossa tabela de customer não estava Criptografando a senha do usuário.
- Vamos atualizar o customer-controller.js para importar o md5.

Segue o nosso <code> customer-controller.js </code> atualizado:

```js
const md5 = require('md5');

```

### Postman &rarr; POST

- Realizar os testes no Postman.


POST &rarr; http://localhost:3000/orders &rarr; Send

- **req** (requisição) (**REQUEST**)
  - raw
  - JSON

<br>

```js
{
    "name": "Eduardo Rodrigues",
    "email": "teste@teste.com",
    "password": "teste123"
}
```

- **res** (resposta) (**RESPONSE**)

```json
{
    "message": "Cliente cadastrado com sucesso!"
}
```

### MongoDB

Portanto, com a utilização do pacote md5, a senha foi Criptografada com sucesso.

```js
{"_id":{
    "name":"Eduardo Rodrigues",
    "email":"teste@teste.com",
    "password":"aa1bf4646de67fd9086cf6c79007026c",
    }
}
```

---
<span id="4">

# 4. Segurança

## 4.1. Autenticação

JWT (JSON Web Token - Autenticação e Segurança) 

### Já ouviu falar de JWT? 
Seja na autenticação ou na transmissão de informações com segurança esse tem sido uma das melhores tecnologias utilizadas pelos sistemas. 
Todo programador precisa conhecer a abordagem do JSON Web Token e é exatamente isso que vamos te mostrar nesse vídeo.

https://www.treinaweb.com.br/blog/o-que-e-jwt

https://medium.com/trainingcenter/jwt-usando-tokens-para-comunica%C3%A7%C3%A3o-eficiente-cf0551c0dd99

Links Citados
→  Token: https://youtu.be/LtVb9rhU41c
→  JSON: https://youtu.be/P81dE-tkaaA
→  OAuth2: https://youtu.be/z-RuvnMlw34
→  Site Oficial: https://jwt.io/
→  Validador JWT: ​​https://jwt.io/#debugger-io



### Instalar o JWT (JSON Web Token - Autenticação e Segurança) 

Instalar o pacote npm i jsonwebtoken

```js
npm i jsonwebtoken
```

- Vamos criar o arquivo <code> src / services / auth-services.js </code>

### auth-services.js

```js

'use strict';
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                next();
            }
        });
    }
};

```

---