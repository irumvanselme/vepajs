import mongoose from "mongoose";
import Validator from "validatorjs";


export class Model<Type> {
    protected schema: mongoose.Schema = new mongoose.Schema();
    protected validations: any

    private readonly _model: mongoose.Model<any>;

    private valid: Validator.Validator<any>;

    get query (): mongoose.Model<any> {
        return this._model;
    }

    constructor (name: string) {
        this._model = mongoose.model(name, this.schema)
        this.valid = new Validator({}, this.validations)
    }

    public validate (data: Type): Validator.Validator<any> {
        return new Validator(data, this.validations);
    }

    public all () {
        try {
            return this.query.find();
        } catch ( e ) {
            console.log(e)
            process.exit(0)
        }
    }

    public async create(data: Type){
        try {
            return await (new this.query(data)).save()
        } catch ( e ) {
            console.log(e)
            process.exit(0)
        }
    }
}