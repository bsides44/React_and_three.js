const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res)=> {
    request
      .get(`http://api.wunderground.com/api/38b4b1221db21c51/conditions/q/New_Zealand/Wellington.json`)
      .end((err, result)=> {if(err){
          res.status(500).send(err.message)
          } else {
            res.json(result.body.current_observation)
          }
        })
    })

module.exports = router
