const pollService = require('../services/poll');

const create = async (req, res) => {
    try {
        const response = await pollService.create(req.body);
        return res.status(200).json({
            message: 'Created new poll',
            success: true,
            data: response
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await pollService.destroy(req.params.id);
        return res.status(200).json({
            message: 'Deleted the poll',
            success: true,
            data: response
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}


const update = async (req, res) => {
    try {
        const response = await pollService.update(req.body);
        return res.status(200).json({
            message: 'updated all the corresponding poll',
            success: true,
            data: response
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}


const getPoll = async (req, res) => {
    try {
        const response = await pollService.getPoll(req.params.id);
        return res.status(200).json({
            message: 'Fetched all the corresponding poll',
            success: true,
            data: response
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

const getAllPolls = async (req, res) => {
    try {
        const response = await pollService.getAllPolls();
        return res.status(200).json({
            message: 'Fetched all the polls',
            success: true,
            data: response
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

module.exports = {
    getAllPolls,
    getPoll,
    update,
    destroy,
    create
}