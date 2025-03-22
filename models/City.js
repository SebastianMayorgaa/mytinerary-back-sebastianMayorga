import { Schema, model } from "mongoose";

let collection = 'cities'
let schema = Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    country: { type: String, required: true },
    population: { type: Number, required: true },
    officialLanguage: { type: String, required: true },
    currency: { type: String, required: true },
    mainAttractions: { type: [String], required: true },
    localCuisine: { type: [String], required: true },
    averageCostPerDay: { type: Number, required: true },
    publicTransportOptions: { type: [String], required: true },
    nightlifeOptions: { type: [String], required: true },
},
{
    timestamps:true
})

let City = model(collection, schema)

export default City