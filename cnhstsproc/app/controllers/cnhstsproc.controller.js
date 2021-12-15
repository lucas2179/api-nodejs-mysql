const CNH_STS_PROC = require('../models/cnhstsproc.model')

exports.read = (req, res) => {
    CNH_STS_PROC.read((err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured"
            })
        }
        else res.status(200).send(data)
    });
    
}

exports.readByCpfandCnhNro = (req, res) => {
    CNH_STS_PROC.readByCpfandCnhNro(req.params.cpf, req.params.cnh_nro, (err, data)=>{
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