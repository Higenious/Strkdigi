const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = "debug";
logger.debug("weather controller");
const axios = require('axios');
const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3e6c7ddee38038b8e8cb7eada9f7cbd6';





/** get Weather  */
function getWeathers(req, res){
  const todayDate = new Date();
  const day = todayDate.getDate();  
  if (day % 2 == 0) { 
    res.send("Date is not prime so no date");   
} else{
  axios.get(url)
  .then(response => {
      res.send(response.data);
  })
  .catch(error => {
      logger.info(error);
  });  
}
}








/** Exporting Modules */
module.exports.getWeathers = getWeathers;
