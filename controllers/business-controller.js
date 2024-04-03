const customRapper = require("../utils/catch-error");
const {apiAxios} = require("../axios/base-api");
const AppError = require("../utils/app-error");
require('dotenv').config();

exports.getListOfBusinesses = customRapper(async (req, res, next) => {
    try {
      let detailDataList = []
      const response = await apiAxios.get("/locations?TenantId=4&LocationId=3", {
        headers: { 
          'Accept': 'application/json', 
          'Authorization': req.body.token
        }
      });


      for(let element of response.data.data) {
        const detailDataResponse = await apiAxios.get(`/businessInformation?TenantId=4&LocationId=${element.locationId}`, {
          headers: { 
            'Accept': 'application/json', 
            'Authorization': req.body.token
          }
        });
        detailDataList.push(detailDataResponse.data);
      }
  
      res.json({
        status: 'success',
        data: detailDataList
      });
  
    } catch (e) {
      return next(new AppError(`Error while getting all businesses ${e}`, 500));
    }
  });

  exports.getListOfClients = customRapper(async (req, res, next) => {
    try {
      const response = await apiAxios.get(`/clients?TenantId=4&LocationId=3`, {
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
      return next(new AppError(`Error while getting all services ${e}`, 500));
    }
});