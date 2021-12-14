const CDHU_STS = require('../models/cdhusts.model')

// exports.getStatus = async(req, res) => {
//     const cdhusts = await CDHU_STS.getStatus(req.params.cpf, req.params.conta)

//     if(cdhusts.length){
//         res.status(200).send(cdhusts)
//     } else {
//         res.status(500).send({message: 'Not found.'})
//     }
// }

exports.getStatus = (req, res) => {
    CDHU_STS.getStatus(req.params.cpf, req.params.conta, (err, data)=>{
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