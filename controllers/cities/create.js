import City from "../../models/City.js";

let create = async (req,res,next) => {
    try {
        let cityInfo = req.body
        console.log(cityInfo)

        let createCity = await City.create(cityInfo)
        return res.status(201).json({
            response: createCity
        })
        
    } catch (error) {
        next(error)
    }
}

let createMany = async (req,res,next) => {
    try {
        let cityInfo = req.body
        console.log(cityInfo)

        let manyCity = await City.insertMany(cityInfo)
        return res.status(201).json({
            response: manyCity
        })
        
    } catch (error) {
        next(error)
    }
}

export {create, createMany}