const { pool } = require('../../config/database')

exports.create = (date, protocolo, resultado) => {
    pool.query(`INSERT INTO CNH_REN (cpf, cnh_nro, ren_protocolo)
                   VALUES ('${date.cpf}', '${date.cnh_nro}', '${protocolo}') `, (err, res) => {
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




// exports.readByCpf = async(cpf) =>{
//     const pool = await poolPromise;
//     const rs = await pool
//             .request()
//             .query(`SELECT ren_status as Status, nome as Nome, ren_situacao as Situacao, ren_data as Data, ren_protocolo as Procotolo
//                     FROM CNH_REN 
//                     WHERE CPF = '${cpf}' `);
    
//     return rs.recordset;
// }


// // const rs = await pool
// //         .request()
// //         .query(`INSERT INTO person (name)
// //                 VALUES ('${date.name}')`)