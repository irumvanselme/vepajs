import Validator from "validatorjs";

export class Controller {
    validate (data: any, validations: any) {
        return new Validator(data, validations)
    }
}