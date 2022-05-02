const Response = require('../models/response');
const Poll = require('../models/poll');

const create = async (data) => {
    try {
        const response = await new Poll(data).save();
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

const getAllResponsesForAPoll = async (pollId) => {
    try {
         const poll = await Poll.findById(pollId);
         const responses = await Response.find({poll: poll._id});
         return responses;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    create,
    getAllResponsesForAPoll
}