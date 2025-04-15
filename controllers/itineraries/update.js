import Itinerary from "../../models/Itinerary.js";

let update = async (req,res,next) => {
    try {
        let itineraryInfo = req.body
        console.log(itineraryInfo);
        
        let updateInfo = await Itinerary.updateOne(
            {userName : itineraryInfo.userName},
            {itineraryPhoto : itineraryInfo.itineraryPhoto}
        )
        return res.status(200).json({
            response: updateInfo
        })
    } catch (error) {
        next(error)
    }
}

export default update