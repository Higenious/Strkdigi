const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 5000;
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = "debug";
logger.debug("server js ");
app.use('/', routes)










/** app listen  */
app.listen(port,()=>{
  logger.info(`server stated listening on ${port}`);
});