import { Schema, model } from "mongoose";

let collection = 'itineraries'
let schema = Schema({
    userName: { type: String, required: true},
    userPhoto: { type: String, required: true},
    itineraryName: { type: String, required: true},
    itineraryPhoto: { type: String, required: true},
    price: { type: Number, required: true},
    duration: { type: Number, required: true},
    likes: { type: Number, required: false},
    hashtags: { type: [String], required: false},
    comments: { type: String, required: false},
    cityId: {type:Schema.Types.ObjectId, ref:'cities', required:true}
},
{
    timestamps: true
})

let Itinerary = model(collection, schema)

export default Itinerary