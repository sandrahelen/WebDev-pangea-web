import Joi from "joi";

export default Joi.object().keys({
    username: Joi.string().alphanum().min(4).max(30).required().label("Username"),
    name: Joi.string().max(256).required().label("Name")

    /*
    password: Joi.string().min(6).max(30).regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d).*$/).label("password")
        .options({
            language: {
                string: {
                    regex: {
                        base: "the password must have at least one uppercase and one lowercase letter and one digit"
                    }
                }
            }
        })

     */


})


