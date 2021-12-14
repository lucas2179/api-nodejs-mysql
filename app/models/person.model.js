const { pool } = require('../../config/database')

// exports.create = async (date) => {

//     const rs = await pool
//         .query(`INSERT INTO person (name)
//                 VALUES ('${date.name}')`)
//     console.log(rs)
//     return rs.rowsAffected;
// }

// exports.read = pool.query('SELECT * FROM person', (err, res) => {
//     if (err) {
//         console.log("error: ", err)
        
//         return;
//     }
//     console.log("resposta: ", res)
//     return res

// })
// exports.read = async (title, result) => {
//     var resposta2 = []
//     return await pool.query('SELECT * FROM person', (err, res) => {
//         if (err) {
//             console.log("error: ", err)
            
//             return;
//         }
//         console.log("resposta: ", res)
//         resposta2 = res
//         return res
    
//     })
//     // const resposta = await pool.query('SELECT * FROM person')
    
// } 

exports.read = (resultado) => {
    pool.query('SELECT * FROM person', (err, result) => {
        if (err){
            console.log("error: ", err);
            resultado(null, err);
            return;
        };
        resultado(err, result);
        return;
})
}

exports.update = (id, date, resultado) => {
    pool.query(`UPDATE person SET
                   name = '${date.name}'                    
                    WHERE id = ${id}`, (err, result) => {
                        if(err){
                            console.log("error: ", err);
                            resultado(err, null);
                            return;
                        }
                        resultado(err, result)
                    })
}

// exports.update = async (id, date) => {
//     const pool = await poolPromise;
//     const rs = await pool
//         .request()
//         .query(`UPDATE person SET
//                 name = '${date.name}'                    
//                 WHERE id = ${id}`);

//     return rs.rowsAffected;
// }

// exports.delete = async (id) => {
//     const pool = await poolPromise;
//     const rs = await pool
//         .request()
//         .query(`DELETE FROM person
//                 WHERE id = ${id}`)

//     return rs.rowsAffected;
// }

// exports.readById = async(id) =>{
//     const pool = await poolPromise;
//     const rs = await pool
//             .request()
//             .query(`SELECT *
//                     FROM person 
//                     WHERE id = ${id} `);
    
//             return rs.recordset;
// }
