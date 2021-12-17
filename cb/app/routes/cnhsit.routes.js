module.exports = app => {
    const cnhsitController = require('../controllers/cnhsit.controller')

    app.route('/cb')
        .get(cnhsitController.read)

    app.route('/cb/:cpf/:cnh_nro')
        .get(cnhsitController.readByCpfandCnhNro)
        
}