const Doc = require('../models/Docs')

const api = {
  getAll: async (req, res, next) => {
    try {
      const docs = await Doc.find({})
      res.status(200).json({
        status: '✅ 200',
        success: true,
        response: docs,
      })
    } catch (err) {
      console.log(
        '🚀 ~ file: apiController.js:13 ~ getAll: ~ err:',
        err.message
      )
      res.status(500).json({
        status: ' 🟥 500',
        success: true,
        response: 'Something wrong in our backend! ',
      })
    }
  },
}

module.exports = api
