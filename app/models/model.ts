import mongoose from "mongoose";

export class Model<Type> {
    private readonly _model: mongoose.Model<any>;

    get query (): mongoose.Model<any> {
        return this._model;
    }

    constructor (name: string, schema: mongoose.Schema) {
        this._model = mongoose.model(name, schema)
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
            let element = new this._model(data)
            return await element.save()
        } catch ( e ) {
            console.log(e)
            process.exit(0)
        }
    }
}