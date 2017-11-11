var api = {};

api.teste = function (req, res) {
  
  res.status(200);

  res.json({
    mensagem: 'sucesso'
  });
  
}



module.exports = api;