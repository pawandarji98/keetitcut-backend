const customRapper = require("../utils/catch-error");
const {apiAxios} = require("../axios/base-api");
const AppError = require("../utils/app-error");
require('dotenv').config();

exports.getListOfBusinesses = customRapper(async (req, res, next) => {
    try {
      const response = await apiAxios.get("/locations?TenantId=4&LocationId=3", {
        headers: { 
          'Accept': 'application/json', 
          'Authorization': req.body.token
        }
      });
  
      res.json({
        status: 'success',
        data: response.data
      });
  
    } catch (e) {
      return next(new AppError(`Error while getting all businesses ${e}`, 500));
    }
  });