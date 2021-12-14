const { pool } = require('../../config/database')

// exports.readByCpf = async(cpf) =>{
//     const pool = await poolPromise;
//     const rs = await pool
//             .request()
//             .query(`SELECT ren_status as Status, nome as Nome, ren_situacao as Situacao, ren_data as Data, ren_protocolo as Procotolo
//                     FROM CNH_REN 
//                     WHERE CPF = '${cpf}'`);
    
//     return rs.recordset;
// }


exports.readByCpf = (cpf, resultado) => {
    pool.query(`SELECT ren_status as Status, nome as Nome, ren_situacao as Situacao, ren_data as Data, ren_protocolo as Procotolo FROM CNH_REN WHERE CPF = '${cpf}'`, (err, res) => {
        if (err){
            console.log("error: ", err);
            resultado(err, null);
            return;
        };
        resultado(err, res);
        return;
})
}