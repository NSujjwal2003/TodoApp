function homePingController(req, res) {
    //collect the request
    //send it to the service
    //and then prepare the response and send it back
    return res.json({ message: 'pong' });
}

module.exports = homePingController;