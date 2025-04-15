import Itinerary from "../../models/Itinerary.js";

let create = async (req,res,next) => {
    try {
        let itineraryInfo = req.body
        console.log(itineraryInfo);

        let createItinerary = await Itinerary.create(itineraryInfo)
        return res.status(201).json({
            response: createItinerary
        })
        
    } catch (error) {
        next(error)
    }
}

export default create