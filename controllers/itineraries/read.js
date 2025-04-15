import Itinerary from "../../models/Itinerary.js";

let allItineraries = async (req,res,next) => {
    try {
        let all = await Itinerary.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let itineraryById = async (req,res,next) => {
    try {
        let idQuery = req.params.id
        console.log(idQuery);

        let all = await Itinerary.findById(idQuery)
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
       next(error) 
    }
}

let itineraryByCityId = async (req,res,next) => {
    try {
        let all = await Itinerary.find({cityId: req.params.cityId})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {allItineraries, itineraryById, itineraryByCityId}