const CNH_STS_RENOV = require('../models/cnhstsrenov.model')

exports.readByCpf = (req, res) => {
    CNH_STS_RENOV.readByCpf(req.params.cpf, (err, data)=>{
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

exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "content empty"
        })
    }
    
    var protocolo = Math.floor(Math.random() * 90000) + 10000;
    
    CNH_STS_RENOV.update(req.body, cpf, protocolo, (err, data) => {
        if(err){
            res.status(500).send({message: err.message})
        }
        else{
            res.status(200).send(data)
        }
    })
 
}