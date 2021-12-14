const CNH_SIT = require('../models/cnhsit.model')

// exports.read = async(req, res) => {
//     const cnh_sit = await CNH_SIT.read();
//     res.status(200).send(cnh_sit)
// }

// exports.readByCpfandCnhNro = async(req, res) => {
//     const cnh_sit = await CNH_SIT.readByCpfandCnhNro(req.params.cpf, req.params.cnh_nro)

//     if(cnh_sit.length){
//         res.status(200).send(cnh_sit)
//     } else {
//         res.status(500).send({message: 'Not found.'})
//     }
// }


exports.read = (req, res) => {
    CNH_SIT.read((err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured"
            })
        }
        else res.status(200).send(data)
    });
    
}

exports.readByCpfandCnhNro = (req, res) => {
    CNH_SIT.readByCpfandCnhNro(req.params.cpf, req.params.cnh_nro, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured"
            })
        }
        else if(!data.length){
            res.status(500).send({message: "Not Found"})
        }
        else res.status(200).send(data)
    });
    
}