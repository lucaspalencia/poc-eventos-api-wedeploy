import WeDeploy from 'wedeploy'

let db = WeDeploy.data('db-eventosfrontendbr.wedeploy.io')

exports.find = (req, res) => {
    let getEvents = 'events'

    if (req.params.id) {
        getEvents = `events/${req.params.id}`
    }

    db.orderBy('id', 'desc')
        .get(getEvents)
        .then(function(events) {
            return res.status(200).json({
                status: true,
                data: events
            })
        })
        .catch(function(error) {
            return res.status(500).json({
                status: false,
                data: {}
            })
        })
}

exports.create = (req, res) => {
    db.create('events', req.body)
        .then(function(event) {
            return res.status(200).json({
                status: true,
                data: event
            })
        })
        .catch(function(error) {
            return res.status(500).json({
                status: false,
                data: {}
            })
        })
}

exports.update = (req, res) => {
    db.update(`events/${req.params.id}`, req.body)
        .then(function() {
            return res.status(200).json({
                status: true
            })
        })
        .catch(function(error) {
            return res.status(500).json({
                status: false
            })
        })
}

exports.remove = (req, res) => {
    db.delete(`events/${req.params.id}`)
        .then(function() {
            return res.status(200).json({
                status: true
            })
        })
        .catch(function(error) {
            return res.status(500).json({
                status: false
            })
        })
}