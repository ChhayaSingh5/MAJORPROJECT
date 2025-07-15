const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country:Joi.string().required(),
        price: Joi.number().required().min(0),
    //  image:Joi.string().allow("", null),
    //  }).required(),

        // image: Joi.object({
        // url: Joi.string().allow("", null)
        // }).required(),

        // image: Joi.object({       // <== Yeh line error de rahi hai
        // url: Joi.string().required(),
        // filename: Joi.string().required()
        // }).required(),

        listing: Joi.object({
            // aur koi aur field
            image: Joi.any(),
        }),
       


    })
});


module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});