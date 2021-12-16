const CNH_SIT = require('../models/cnhsit.model')

exports.read = (req, res) => {
    if(process.env.ERROR){
        console.log(`environment variable ERROR is defined.`)
        console.log("Sending 504 error to client");
        res.writeHead(504, {'Content-Type': 'text/plain'});
        res.end();
    }
    CNH_SIT.read((err, data)=>{
        if(err){
            res.status(504).send({
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
            console.log(`returning OK.` +"\r\n")
            res.status(200).send(data)
        }
    });
    
}