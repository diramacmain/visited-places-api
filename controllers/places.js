const Place = require('../models/Place');

exports.addPlace = async (req, res, next) => {
    try {
        const place = await Place.create(req.body);

        return res.status(200).json({
            success: true,
            data: place
        });
    } catch (err) {
        console.log(err);
        res.status(500);
    }
};

exports.getPlaces = async (req, res, next) => {
    try {
        const places = await Place.find();

        return res.status(200).json({
            succes: true,
            count: places.length,
            data: places
        })
    } catch (err) {
        console.log(err);
        res.status(500);
    }
};