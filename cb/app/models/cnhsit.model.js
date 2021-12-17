const { pool} = require('../../config/database')

exports.read = (resultado) => {
    pool.query(`SELECT * FROM CNH_SIT`, (err, res) => {
        if (err){
            console.log("error: ", err);
            resultado(err, null);
            return;
        };
        resultado(err, res);
        return;
})
}


exports.readByCpfandCnhNro = (cpf, cnh_nro, resultado) => {
    pool.query(`SELECT CNH_Status as Situacao FROM CNH_SIT WHERE CPF = '${cpf}' AND CNH_NRO = '${cnh_nro}' `, (err, res) => {
        if (err){
            console.log("error: ", err);
            resultado(err, null);
            return;
        };
        resultado(err, res);
        return;
})
}