const { pool } = require('../../config/database')
const dateTime = require('node-datetime');

exports.create = (date, protocolo, resultado) => {
    var dt = dateTime.create();
    var dateFormatted = dt.format('Y-m-d');
    pool.query(`INSERT INTO CNH_REN (cpf, nome, ren_situacao, ren_data, cnh_nro, ren_protocolo, ren_statusservico, ren_status, ren_boletopagamento, ren_desc, ren_valor)
                   VALUES ('${date.cpf}', 'CNH_MARIA', 'AGENDADO', '${dateFormatted}', '${date.cnh_nro}', '${protocolo}', 'OK', 'EXAME MEDICO', 'https://i.ibb.co/GRJThnb/faturaboleto.png', 'Lorem ipsum', '150')`, (err, res) => {
                       if(err){
                           console.log("error: ", err);
                           resultado(err, null);
                           return;
                       }
                       else{
                           console.log("created: ", res)
                           resultado(null, {message: 'Ok!', Protocolo: protocolo})
                       }
                   })
}

exports.read = (resultado) => {
    pool.query(`SELECT cpf as CPF, nome as Nome, ren_desc as Descricao, cnh_nro as CNH, ren_situacao as Situacao, ren_data as Data, ren_protocolo as Procotolo, ren_statusservico as StatusServico, ren_status as Status, ren_boletopagamento as Boleto FROM CNH_REN`, (err, res) => {
        if (err){
            console.log("error: ", err);
            resultado(err, null);
            return;
        };
        resultado(err, res);
        return;
})
}


exports.readByCpf = (cpf, resultado) => {
    pool.query(`SELECT ren_status as Status, nome as Nome, ren_situacao as Situacao, ren_data as Data, ren_protocolo as Procotolo FROM CNH_REN WHERE CPF = '${cpf}' `, (err, res) => {
        if (err){
            console.log("error: ", err);
            resultado(err, null);
            return;
        };
        resultado(err, res);
        return;
})
}