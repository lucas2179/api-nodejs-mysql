const { pool } = require('../../config/database')

exports.read = (resultado) => {
    pool.query(`SELECT * FROM CNH_REN`, (err, res) => {
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
    pool.query(`SELECT nome as Nome, ren_desc as Descricao, ren_situacao as Situacao, ren_data as Data, ren_protocolo as Protocolo FROM CNH_REN WHERE CPF = '${cpf}' AND CNH_NRO = '${cnh_nro}' `, (err, res) => {
        if (err){
            console.log("error: ", err);
            resultado(err, null);
            return;
        };
        resultado(err, res);
        return;
})
}