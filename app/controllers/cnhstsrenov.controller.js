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