const { pool } = require('../../config/database')
exports.getStatus = async(cpf,conta) =>{
    const rs = await pool
            .query(`SELECT cdhu_status as Status
                    FROM CDHU_DOCSTATUS 
                    WHERE CPF = '${cpf}' and cdhu_nroconta = '${conta}'`, function (error, results){
                        if (error) throw error
                        return results
                    })
    
    console.log(rs);
}