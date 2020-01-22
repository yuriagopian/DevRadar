const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();


mongoose.connect('mongodb+srv://YURI_AGOPIAN:vtnc1234@cluster0-rganu.mongodb.net/test?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

// Métodos http: get, post, put, delete

// Tipos de parametros:
// query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params(Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)


// MongoDB (Não Relacional)

app.use(cors ({ origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);

app.listen(3333);
