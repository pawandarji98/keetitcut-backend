const customRapper = require("../utils/catch-error");
const {apiAxios} = require("../axios/base-api");
const AppError = require("../utils/app-error");
require('dotenv').config();

exports.getListOfScanned = customRapper(async (req, res, next) => {
    try {
      const response = await apiAxios.post("/scan/openings?TenantId=4&LocationId=3", req.body.data , {
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
      return next(new AppError(`Error while getting all Scanned ${e}`, 500));
    }
});