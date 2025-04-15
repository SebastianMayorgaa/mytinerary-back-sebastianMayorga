import City from "../../models/City.js";

let update = async (req,res,next) => {
    try {
        let cityInfo = req.body
        console.log(cityInfo);
        
        let updateInfo = await City.updateOne(
            {name : cityInfo.name},
            {photo : cityInfo.photo}
        )
        return res.status(200).json({
            response: updateInfo
        })
    } catch (error) {
        next(error)
    }
}

export default update