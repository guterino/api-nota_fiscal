const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const NotaFiscal = require('./model/nota_fiscal');
const db = require('./config/sequelize');
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

// POST nota_fiscal
app.post('/nota_fiscal', async (req, res) => {
  try {
    req.body.id = uuidv4();
    const notaFiscal = await NotaFiscal.create(req.body);
    res.status(201).send(notaFiscal);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      mensagem: 'Erro ao criar nota fiscal'
    });
  }
});

// GET ONE nota_fiscal por id_venda
app.get('/nota_fiscal/:id_venda', async (req, res) => {
  const id_venda = req.params.id_venda;

  try {
    const notaFiscal = await NotaFiscal.findOne({
      where: {
        id_venda
      }
    });

    if (!notaFiscal) {
      res.status(404).send({
        mensagem: 'Nota fiscal não encontrada'
      });
    } else {
      res.status(200).send(notaFiscal);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      mensagem: 'Erro ao buscar nota fiscal'
    });
  }
});

db.sync();

// Start the server
app.listen(port, () => {
  console.log(`Servidor conectado no port [${port}]`);
});