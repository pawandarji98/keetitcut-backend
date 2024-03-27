const customRapper = require("../utils/catch-error");
const {apiAxios} = require("../axios/base-api");
require('dotenv').config();
const qs = require('qs');
const AppError = require('../utils/app-error');
const axios = require('axios');



exports.createClient = customRapper(async (req, res, next) => {
  try {
    const data = qs.stringify(req.body.data);
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://d18devpub.meevodev.com/publicapi/v1/client?TenantId=11&LocationId=9',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded', 
          'Accept': 'application/json', 
          'Authorization': req.body.token
        },
        data: data // send the URL encoded data
    };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.json({
            status: 'success',
            data: response
          });
      })
      .catch(function (error) {

        return next(new AppError(`Error while generating access token ${JSON.stringify(error.config)}`, 500));
      });

    

  } catch (e) {
    return next(new AppError(`Error while generating access token ${e}`, 500));
  }
});
