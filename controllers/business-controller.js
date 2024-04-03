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
  
    const detailDataPromises = response.data.data.map(async (element) => {
      const detailDataResponse = await apiAxios.get(`/businessInformation?TenantId=4&LocationId=${element.locationId}`, {
        headers: { 
          'Accept': 'application/json', 
          'Authorization': req.body.token
        }
      });
      return detailDataResponse.data;
    });
  
    const detailDataList = await Promise.all(detailDataPromises);
    
    res.json({
      status: 'success',
      data: detailDataList
    });
  } catch (e) {
    return next(new AppError(`Error while getting all businesses ${e}`, 500));
  }
  });