const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports ={
    async index(request, response){
        const { latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);
        // Buscar todos os Devs em um raio de 10KM
        //Filtrar  por tecnologias
        const devs = await Dev.find({
            techs : {
                $in: techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                         coordinates: [longitude,latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json(devs);
    }
}