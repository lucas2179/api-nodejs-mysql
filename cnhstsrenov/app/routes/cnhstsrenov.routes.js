module.exports = app => {
    const cnhstsrenovController = require('../controllers/cnhstsrenov.controller')

    app.route('/cnhstsrenov/:cpf')
        .get(cnhstsrenovController.readByCpf)
    
    app.route('/cnhstsrenov/:cpf/:protocolo')
        .put(cnhstsrenovController.update)
}