
const router = require('express').Router()

router.get('/health', (req, res) => {
    res.status(200).json('OK')
  } 
)

module.exports = router
