import WeDeploy from 'wedeploy'

const db = WeDeploy.data('db-eventosfrontendbr.wedeploy.io')

exports.find = (req, res) => {
  let getEvents = 'events'

  if (req.params.id) {
    getEvents = `events/${req.params.id}`
  }

  db.orderBy('id', 'desc')
    .get(getEvents)
    .then((events) => {
      res.status(200).json({
        status: true,
        data: events
      })
    })
    .catch((error) => {
      res.status(500).json({
        status: false,
        data: error
      })
    })
}

exports.create = (req, res) => {
  db.create('events', req.body)
    .then((events) => {
      res.status(200).json({
        status: true,
        data: events
      })
    })
    .catch((error) => {
      res.status(500).json({
        status: false,
        data: error
      })
    })
}

exports.update = (req, res) => {
  db.update(`events/${req.params.id}`, req.body)
    .then((events) => {
      res.status(200).json({
        status: true,
        data: events
      })
    })
    .catch((error) => {
      res.status(500).json({
        status: false,
        data: error
      })
    })
}

exports.remove = (req, res) => {
  db.delete(`events/${req.params.id}`)
    .then(() => {
      res.status(200).json({
        status: true
      })
    })
    .catch(() => {
      res.status(500).json({
        status: false
      })
    })
}
