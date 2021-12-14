const CNH_BOLETO = require('../models/cnhboleto.model')

// exports.getBoleto = async(req, res) => {
//     const cnh_boleto = await CNH_BOLETO.getBoleto(req.params.cpf)

//     if(cnh_boleto.length){
//         res.status(200).send(cnh_boleto)
//     } else {
//         res.status(500).send({message: 'Not found.'})
//     }
// }


exports.getBoleto = (req, res) => {
    CNH_BOLETO.getBoleto(req.params.cpf, (err, data)=>{
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