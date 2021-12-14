const { pool } = require('../../config/database')

// exports.getBoleto = async(cpf) =>{
//     const pool = await poolPromise;
//     const rs = await pool
//             .request()
//             .query(`SELECT ren_boletopagamento as URLBOLETO
//                     FROM CNH_REN 
//                     WHERE CPF = '${cpf}'`);
    
//     return rs.recordset;
// }


exports.getBoleto = (cpf, resultado) => {
    pool.query(`SELECT ren_boletopagamento as URLBOLETO
    FROM CNH_REN 
    WHERE CPF = '${cpf}'`, (err, res) => {
        if (err){
            console.log("error: ", err);
            resultado(err, null);
            return;
        };
        resultado(err, res);
        return;
})
}