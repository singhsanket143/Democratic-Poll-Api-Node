const { response } = require("express");
const responseService = require("../services/response")

const create = async (req, res) => {
    try {
        const response = await responseService.create(req.body);
        return res.status(200).json({
            data: response,
            success: false,
            message: 'Fetched responses'
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const getAllResponsesForAPoll = async (req, res) => {
    try {
        const responses = await responseService.getAllResponsesForAPoll(req.params.pollid);
        return res.status(200).json({
            data: responses,
            success: false,
            message: 'Fetched responses'
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

module.exports = {
    create,
    getAllResponsesForAPoll
}