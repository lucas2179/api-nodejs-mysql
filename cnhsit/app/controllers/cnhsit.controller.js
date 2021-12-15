const CNH_SIT = require('../models/cnhsit.model')

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
    console.log(`executing readByCpfandCnhNro()...`)
    CNH_SIT.readByCpfandCnhNro(req.params.cpf, req.params.cnh_nro, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured"
            })
        }
        else if(!data.length){
            res.status(500).send({message: "Not Found"})
        } else  {
            if(process.env.SLOW_PEFORMER){
                console.log(`environment variable SLOW_PEFORMER is defined.`)
                
                slow()
                
                async function slow() {
                    console.log(`taking a break.`);
                    await sleep(3000);
                }
                
                function sleep(ms) {
                    return new Promise((resolve) => {
                    setTimeout(resolve, ms);
                    });
                }
            } else {
                console.log(`environment variable SLOW_PEFORMER is NOT defined.`)
            }
            console.log(`returning OK.`)
            res.status(200).send(data)
        }
    });
    
}