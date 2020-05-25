const Router       = require('router')
 
const router = Router()
const WeatherController = require('../controller/weatherController');



router.get('/weather', WeatherController.getWeathers);




/** Export Routes */
module.exports = router ;
