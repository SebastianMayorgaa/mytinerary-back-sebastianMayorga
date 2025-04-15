import City from "../../models/City.js";

let deleteById = async (req,res,next) => {
    try {
        let deleteCity = await City.findByIdAndDelete(req.params.id)
        if (deleteCity) {
            return res.status(200).json({
                response: deleteCity
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