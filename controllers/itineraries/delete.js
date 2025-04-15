import Itinerary from "../../models/Itinerary.js";

let deleteById = async (req,res,next) => {
    try {
        let deleteItinerary = await Itinerary.findByIdAndDelete(req.params.id)
        if (deleteItinerary) {
            return res.status(200).json({
                response: deleteItinerary
            })
        } else {
            return res.status(404).json({
                response: 'not found'
            })
        }
    } catch (error) {
        next(error)
    }
}

export default deleteById